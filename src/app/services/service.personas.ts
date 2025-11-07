import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import axios from 'axios';

@Injectable()
export class ServicePersonas {
  constructor(private _http: HttpClient) {}
  getPersonas(): Promise<any> {
    let urlApi = environment.urlApiPersonas;
    let request = 'api/personas';
    let promise = new Promise((resolve) => {
      this._http.get(urlApi + request).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }

  getPersonasAxios(): Promise<any> {
    let urlApi = environment.urlApiPersonas;
    let request = 'api/personas';
    let promise = new Promise((resolve) => {
      axios.get(urlApi + request).then((response) => {
        resolve(response.data);
      });
    });
    return promise;
  }

  getPersonasFetch(): Promise<any> {
    let urlApi = environment.urlApiPersonas;
    let request = 'api/personas';
    let promise = new Promise((resolve) => {
      this._http.get(urlApi + request).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }
}
