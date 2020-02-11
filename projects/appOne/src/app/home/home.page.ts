import { Component, OnInit } from '@angular/core';
import { MiLibreriaService } from 'mi-libreria';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mensaje = '';

  constructor(
    private miLibreriaService: MiLibreriaService
  ) { }

  ngOnInit() {
    console.log(this.miLibreriaService.getMensaje());
    this.mensaje = this.miLibreriaService.getMensaje();
  }
}
