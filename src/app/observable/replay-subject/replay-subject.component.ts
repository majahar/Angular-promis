import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  userList1;
  userList2;
  userList3;
  subscribeOrUnscubscribe2:boolean=true;
  subscribeOrUnscubscribe3:boolean=true;
  videoEmit;
  methodInterval: boolean=false;


  constructor( private _du :DesignUtilityService) { 
  

  }
  subscription2 :Subscription;
  subscription3 :Subscription;
  intSubscription : Subscription;

  ngOnInit(): void {
    this.userList1=['Angular1','Angular2'];
    this.userList2=[];
    this.userList3=[];
    this._du.videoEmit.subscribe(res =>{
      this.userList1.push(res);

    })

  }
  addvedio(vedio){
    this._du.videoEmit.next(vedio.value)
  }
  SubscribeOrUnSubscribeUser2(){
    if(!this.subscribeOrUnscubscribe2){
      this.subscription2.unsubscribe();
     
    }else{
      this.subscription2= this._du.videoEmit.subscribe(res =>{
        this.userList2.push(res);
  
      })
    }
    
    this.subscribeOrUnscubscribe2 = !this.subscribeOrUnscubscribe2;


  }
  SubscribeOrUnSubscribeUser3(){
    if(!this.subscribeOrUnscubscribe3){
      this.subscription3.unsubscribe();
     
    }else{
      this.subscription3= this._du.videoEmit.subscribe(res =>{
        this.userList3.push(res);
  
      })
    }
    
    this.subscribeOrUnscubscribe3 = !this.subscribeOrUnscubscribe3;


  }

  toggleMethod(){


    const videoBroadcast = interval(1000);
    if(!this.methodInterval){
      this.intSubscription=videoBroadcast.subscribe(res =>{
        this._du.videoEmit.next('Video '+res)
       
      })

    }else{
      this.intSubscription.unsubscribe();

    }
    

    this.methodInterval =!this.methodInterval;

  }

}
