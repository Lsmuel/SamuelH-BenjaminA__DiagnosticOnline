import { Component, OnInit } from '@angular/core';
import { MedicinaService } from 'src/app/services/medicina.service';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.page.html',
  styleUrls: ['./medicina.page.scss'],
})
export class MedicinaPage implements OnInit {

  constructor(private medicinaServices: MedicinaService) { }

  ngOnInit() {
    this.medicinaServices.getMetodoGod().subscribe(resp =>{
      console.log('medicina', resp)
    })
  }

}
