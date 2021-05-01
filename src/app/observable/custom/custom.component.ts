import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit,OnDestroy {

  constructor(private _desigUtility : DesignUtilityService) { }
  userStatus : any;
  userStatus2 : any;
  name : any;

  subs2 : Subscription;


  ngOnInit(): void {
    const custobs1 = Observable.create( observer =>{
      setTimeout(() => {
        observer.next("Emit data 1")
       
      }, 1000);
      setTimeout(() => {
        observer.next("Emit data 2")
       
      }, 2000);
      setTimeout(() => {
        observer.next("Emit data 3");
        //this.userStatus='error';

      //  observer.error(new Error('Excedd limit'))
       
      }, 3000);
      setTimeout(() => {
        observer.next("Emit data 4")
        observer.error('Error occured');
       
      }, 4000);

    });
    custobs1.subscribe(res => { 
      
      console.log(res)
      this._desigUtility.print(res,'elContainer')
    },
    (err) =>{
      this.userStatus='error';

    },
    ()=>{
      this.userStatus='success';


    });
    


    //Ex -2 
    const Arr =['Angular','Rxjs','Vuejs','jquery','Node','Mongo','Mysql']

    const coustobs2 = Observable.create(observer =>{
       let count =0;
      setInterval(() => {
        observer.next(Arr[count])
        count++;
       /*  if(count > 3){
          observer.error('EErr');

        } */

        if(count > 3){
          observer.complete();

        }
      }, 2000);
   
     

    })

    this.subs2=coustobs2.subscribe(res =>{
     // let name = 'Tech '+res;

      this._desigUtility.print(res,'elContainer2')
      if(res > 4){
        this.subs2.unsubscribe();

      }
       
    },
    (err)=>{
      this.userStatus2='error';

    },
    ()=>{
      this.userStatus2='success';

    });


    //Ex -3
    const Arr1 =['Majahar','Mahfooj','Imran','Zaid','Salman','Shahid','Sameer']
    const coustobs3 = Observable.create(observer =>{
       let count =0;
      setInterval(() => {
        observer.next(Arr1[count])
        count++;
        if(count > 6){
          observer.complete();

        }
      }, 2000);
   
     

    })
    this.subs2=coustobs3.subscribe(res =>{
      this.name=res;
       
        
     },
     (err)=>{
 
     },
     ()=>{
 
     });


  }

  ngOnDestroy(){
    this.subs2.unsubscribe();
  }

}
