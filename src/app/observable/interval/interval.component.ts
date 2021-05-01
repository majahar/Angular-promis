import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private _designUtility :DesignUtilityService) { }
  vedioSubscription : Subscription;
  obsmsg;
  

  ngOnInit(): void {
    const broadCastVedio =timer(2000,2000);

    this.vedioSubscription=broadCastVedio.subscribe(res =>{
      console.log(res);
      this.obsmsg="Vedio "+res;
      this._designUtility.print(this.obsmsg,'elContainer')
      this._designUtility.print(this.obsmsg,'elContainer2')
      this._designUtility.print(this.obsmsg,'elContainer3')
      if(res >=10){

        this.vedioSubscription.unsubscribe();
      }
    });
    
  }

}
