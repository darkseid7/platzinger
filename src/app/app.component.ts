import { Component } from '@angular/core';

@Component({
  //con esto lo llamos así <app-root> en cualquier vista que lo quiera mostrar
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzinger';
}
