import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {
    let source=of('Majahar','Imran','Mahfooj');

    source.subscribe(res =>{
      this._designUtility.print(res,'elContainer')

     console.log(res);
    })
  }

}
