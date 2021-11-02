import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:app/pages/cabeza/cabeza.module.ts
import { CabezaPageRoutingModule } from './cabeza-routing.module';

import { CabezaPage } from './cabeza.page';
=======
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231:app/pages/login/login.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:app/pages/cabeza/cabeza.module.ts
    CabezaPageRoutingModule
  ],
  declarations: [CabezaPage]
})
export class CabezaPageModule {}
=======
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231:app/pages/login/login.module.ts
