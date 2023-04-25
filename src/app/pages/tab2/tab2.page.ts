import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfazNoticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categorias: string[] = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.cargarNoticias(this.categorias[0]);
  }

  cambiarCategoria(event: any) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(cat: string) {
    this.noticiasService.getTopHeadLinesCategory(cat).subscribe(
      respuesta => {
        console.log('noticias', respuesta);
        this.noticias.push(...respuesta.articles);
      }
    );
  }

}
