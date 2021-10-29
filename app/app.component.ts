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
        name: 'Sintomas',
        redirecTo: 'manual-de-uso'
      },
      {
        icon: 'newspaper-outline', 
        name: 'Novedades',
        redirecTo: 'medicina'
      },
      {
        icon: 'document-text-outline', 
        name: 'Formulario',
        redirecTo: 'datos'
      },
      {
        icon: 'document-text-outline', 
        name: 'Login ',
        redirecTo: 'login'
      }

  ]



  constructor() {}
}
