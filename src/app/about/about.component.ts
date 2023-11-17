import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(function () {
      // Tu código jQuery aquí
      // Por ejemplo, puedes poner todo tu código dentro de este bloque
      // $(window).on('scroll', function () { ... });
      // $(window).on('resize', function () { ... });
      // ...

    });
  }
}
