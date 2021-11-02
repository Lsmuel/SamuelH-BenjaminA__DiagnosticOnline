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
        icon: 'document-attach-outline', 
        name: 'Formulario Medico',
        redirecTo: 'formulario-medico'
      },

<<<<<<< HEAD

=======
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231

  ]



  constructor() {}
}
