import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerToggle=false;
  constructor() { }

  ngOnInit() {
  }

  getRegistrationToggle()
  {
    this.registerToggle=!this.registerToggle;    
  }
  cancelRegistration(registrationMode:boolean)
  {
    this.registerToggle=registrationMode;
  }
}
