import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DogProvider } from '../../providers/dog/dog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public dogs:any;
  
  constructor(public navCtrl: NavController,public DogProvider:DogProvider ,public modalCtrl:ModalController) {
  this.DogProvider.getAllDogs().then(()=>{
    //this.dogs=this.DogProvider.results;

    this.dogs = Object.keys(this.DogProvider.results);//pour lire un objet avec ngfor
    console.log(this.dogs);
    });
  }

  ModalSubDog(race){
    console.log(race);
    let modal=this.modalCtrl.create('RacePage',{name:race});
    modal.present();
  
    
  }

}
