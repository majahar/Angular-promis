import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  promiseVal: any;
  prevoiusArr: any;
  currentArr: any;
  inputArr: any;


 
  constructor(){}
  isDellAvailable(){
    return false;
   
   }
   isHpAvailable(){
    return true;
   
   }
  ngOnInit(){
    this.fetchData();
    this.inputArr=[12,33,77,44,12,55,456,98,2];
    this.prevoiusArr=[12,33,77,44,12,55,456,98,2];
    let len =this.prevoiusArr.length;

    for(let i=0; i<len;i++){

      for(let j=0; j<len;j++){

         if(this.prevoiusArr[j] > this.prevoiusArr[j+1]){
           let temp = this.prevoiusArr[j];
           this.prevoiusArr[j]=this.prevoiusArr[j+1];
           this.prevoiusArr[j+1]=temp;


        } 

      }

    }
    this.currentArr=this.prevoiusArr;
  }
  private fetchData(){
    let promise = new Promise((resolve, reject) => {
      if(this.isDellAvailable()){
        resolve("Dell available")
       /*  return setTimeout(() => {
          resolve("Dell available")
        }, 3000); */
      }else if(this.isHpAvailable()){
        resolve("HP available")
    /*     return setTimeout(() => {
          resolve("Hp Available")
        }, 3000); */
      }else{
        resolve("Not Available in store")
       /*  return setTimeout(() => {
          reject("Not Available in store")
        }, 3000);*/
      } 
     
    });
    promise.then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
      this.promiseVal=data;
    }).catch((error)=>{
      this.promiseVal=error;
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}
