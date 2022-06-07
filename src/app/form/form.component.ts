import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  userData = {
    email: "",
    password: "",
  };

  createUser(): void {
    console.log("Email:" + this.userData.email);
    console.log("Password:" + this.userData.password);
  }

}
