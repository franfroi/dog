import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { DogProvider } from '../../providers/dog/dog';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-race',
  templateUrl: 'race.html',
})
export class RacePage {
  @ViewChild(Slides) slides: Slides;
  public name:string;
  public Subrace:any;
  public foto:any;
  public fotosubrace:any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController,public DogProvider:DogProvider ) {

    this.name=this.navParams.get('name');

    console.log(this.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RacePage');
  }

  closeModal(){
    
   
     this.viewCtrl.dismiss();
    
   }

   ionViewCanEnter() {
    this.DogProvider.getSubDogs(this.name).then(()=>{
      this.Subrace=this.DogProvider.resultsSubrace;
      if( this.Subrace.length == 0)
     
        this.DogProvider.getFoto(this.name).then(()=>{
          this.foto=this.DogProvider.resultfoto;
        
        });
      
      else{ this.DogProvider.getFotosubrace(this.name,this.Subrace[0]).then(()=>{
        this.fotosubrace=this.DogProvider.resultfotosubrace;
        
        }); }
     
      });

   }
   slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  goToSlide() {
    let currentIndex = this.slides.getActiveIndex();
     currentIndex+=1;
    
     console.log(currentIndex)
    this.slides.slideTo(currentIndex, 500);
  }
test(item){
  
 
  this.DogProvider.getFotosubrace(this.name,item).then(()=>{
  this.fotosubrace=this.DogProvider.resultfotosubrace;
  this.slides.slideTo(0);
  }); 
}
}


