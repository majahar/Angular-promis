import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive =new Subject<boolean>();
  userName = new BehaviorSubject<string>('Majhar kahn');
  videoEmit = new ReplaySubject<any>(3);
  
  constructor() { }
  print(val: string,elcontainer: string){
    let e1 = document.createElement("li");
    e1.innerText=val;
    document.getElementById(elcontainer).appendChild(e1);

  }
}
