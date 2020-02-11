import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiLibreriaService {

  constructor() { }

  getMensaje() {
    return 'Hola mundo desde webservices de una libreria';
  }
}
