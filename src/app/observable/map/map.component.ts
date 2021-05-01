import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  sub : Subscription;

  ngOnInit(): void {
    const vedioBroadCasting = interval(1000);

    this.sub = vedioBroadCasting.pipe(
      )
      .subscribe(res =>{

      console.log(res)

       setTimeout(() => {
        this.sub.unsubscribe();
         
       }, 10000);

    })
  }

}
