import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfazNoticia';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // constructor() { }

  // ngOnInit() { }

  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(
      respuesta => {
        console.log('noticias', respuesta);
        this.noticias.push(...respuesta.articles);
      }
    );
  }

}
