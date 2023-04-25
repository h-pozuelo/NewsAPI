import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaToHeadLines } from '../interfaces/interfazNoticia';

const url = environment.apiurl + 'top-headlines?country=us';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get<RespuestaToHeadLines>(url + '&apiKey=' + environment.apikey);
  }

  getTopHeadLinesTitle(tit: string) {
    return this.http.get<RespuestaToHeadLines>(url + '&title=' + tit + '&apiKey=' + environment.apikey);
  }

  getTopHeadLinesCategory(cat: string) {
    return this.http.get<RespuestaToHeadLines>(url + '&category=' + cat + '&apiKey=' + environment.apikey);
  }

}
