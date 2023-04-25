import { Component, OnInit, NgZone } from '@angular/core';
import { Article } from '../../interfaces/interfazNoticia';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  noticias: Article[] = [];

  constructor(private localDataService: LocalDataService, private ngZone: NgZone) { }

  // ngOnInit() {
  //   this.localDataService.getNoticias().then(lista => {
  //     this.ngZone.run(() => {
  //       this.noticias = lista;
  //     });
  //   });
  // }

  ngOnInit() {
    this.localDataService.getNoticias().then(lista => {
      this.noticias = lista;
    });
  }

  // ionViewWillEnter() {
  //   this.noticias = [];
  //   this.localDataService.getNoticias().then(lista => {
  //     lista.forEach(element => {
  //       this.noticias.push(element);
  //     });
  //   });
  // }

}
