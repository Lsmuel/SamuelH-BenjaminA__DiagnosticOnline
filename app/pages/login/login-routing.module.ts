import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { LoginPage } from './login.page';
=======
<<<<<<< HEAD:app/pages/cabeza/cabeza-routing.module.ts
import { CabezaPage } from './cabeza.page';
=======
import { LoginPage } from './login.page';
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231:app/pages/login/login-routing.module.ts
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: LoginPage
=======
<<<<<<< HEAD:app/pages/cabeza/cabeza-routing.module.ts
    component: CabezaPage
=======
    component: LoginPage
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231:app/pages/login/login-routing.module.ts
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class LoginPageRoutingModule {}
=======
<<<<<<< HEAD:app/pages/cabeza/cabeza-routing.module.ts
export class CabezaPageRoutingModule {}
=======
export class LoginPageRoutingModule {}
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231:app/pages/login/login-routing.module.ts
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231
