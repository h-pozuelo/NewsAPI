import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfazNoticia';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {
    console.log("Creando BBDD...");
    this.storage.create();
  }

  public setNoticia(noticia: Article) {
    if (this.indexOfNoticia(noticia) == -1) {
      this.noticias.push(noticia);
      this.storage.set('favoritos', this.noticias);
    }
  }

  public async getNoticias() {
    this.noticias = await this.storage.get('favoritos');
    if (!this.noticias) {
      this.noticias = [];
    }
    return this.noticias;
  }

  public indexOfNoticia(noticia: Article) {
    return this.noticias.indexOf(noticia);
  }

  public removeNoticia(noticia: Article) {
    if (this.indexOfNoticia(noticia) != -1) {
      this.noticias.splice(this.indexOfNoticia(noticia), 1);
      this.storage.set('favoritos', this.noticias);
    }
  }

}
