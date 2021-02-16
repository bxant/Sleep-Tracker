// MEDITATION PAGE


import { Component } from '@angular/core';


// toast notifications
import { ToastController } from '@ionic/angular';

//Ionic Storage
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(storage: Storage, toast:ToastController) 
  {

  }

  ngOnInit()
  {

  }

  

}
