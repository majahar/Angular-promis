import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  profileForm : FormGroup;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('ee'),
      lastName: new FormControl('rrr'),
    });
  }

  onSubmit(form: FormGroup){
  console.log(form.value)
  console.log('Valid?', form.valid); // true or false
    console.log('firstName', form.value.firstName);
    console.log('lastName', form.value.lastName);
  }

}
