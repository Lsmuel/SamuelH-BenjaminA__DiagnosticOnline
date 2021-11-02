import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD
=======
<<<<<<< HEAD:app/pages/cabeza/cabeza.page.spec.ts
import { CabezaPage } from './cabeza.page';

describe('CabezaPage', () => {
  let component: CabezaPage;
  let fixture: ComponentFixture<CabezaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabezaPage);
=======
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
<<<<<<< HEAD
=======
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231:app/pages/login/login.page.spec.ts
>>>>>>> 9511ec5ca3fe6df42d78d00f10fc0cab09854231
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
