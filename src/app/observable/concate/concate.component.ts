import { Component, OnInit } from '@angular/core';
import { interval, Subscription, concat } from 'rxjs';

@Component({
  selector: 'app-concate',
  templateUrl: './concate.component.html',
  styleUrls: ['./concate.component.css']
})
export class ConcateComponent implements OnInit {

  constructor() { }
  subs1 : Subscription;
  subs2 : Subscription;
  subs3 : Subscription;

  ngOnInit(): void {

    const source1 =interval(2000);
    const source2 =interval(2000);
    const source3 =interval(2000);

    this.subs1=source1.subscribe(res => {
           //console.log(res)
           if(res > 4){
            this.subs1.unsubscribe()


           }

    })

    this.subs2=source2.subscribe(res => {
      //console.log(res)
      if(res > 4){
       this.subs2.unsubscribe()


      }

})
this.subs3=source3.subscribe(res => {
  if(res > 4){
   this.subs3.unsubscribe()


  }

})

 
    

  }

}
