import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { APage } from '../a/a';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac') ac;
  @ViewChild(Slides) slides:Slides;
  /*icons:string="camera";
  items=[];*/

  constructor(public http:HttpClient,public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
  /*
  goSub(){
    this.navCtrl.push(APage,{id:1});
  }
  ionViewDidLoad(){
    this.ac.get();
  }
  doInfinite(infiniteScroll){
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    });
    */
   /* 
    console.log('Begin async operation');
    setTimeout(()=>{
      for(let i=0;i<30;i++){
        this.items.push(this.items.length);
      }

      infiniteScroll.complete();
      if(this.items.length>90)
      {
      infiniteScroll.enable();
      }
    },500);
   
  }
  */
  /*
  doRefresh(refresher){
    console.log('Begin async operation',refresher);
    setTimeout(()=>{
      console.log('Async operation has ended');
      refresher.complete();
    },2000);
  }
*/
}
