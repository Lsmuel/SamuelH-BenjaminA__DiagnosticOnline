import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
 

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] = [
      {
      icon: 'accessibility-outline', 
      name: 'Cabeza',
      redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Ojos',
        redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Orejas',
        redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Nariz',
        redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Pecho',
        redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Espalda',
        redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Brazos',
        redirecTo: '/#'
      },
      {
        icon: 'accessibility-outline',
        name: 'Piernas',
        redirecTo: '/#'
      },

  ]



  constructor() {}
}
