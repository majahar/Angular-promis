import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private designUtility : DesignUtilityService) { }
  exclusive:boolean =false;
  

  ngOnInit(): void {
    this.designUtility.exclusive.subscribe(res =>{
      this.exclusive =res;
    })
  }

}
