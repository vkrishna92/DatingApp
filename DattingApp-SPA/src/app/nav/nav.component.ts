import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={};
  constructor(public auth:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
  }
  Submit(f)
  {
    console.log(f)
    
    this.auth.login(this.model).subscribe(next=>{
      console.log(localStorage.getItem('token'));     
      this.alertify.sucsess("Logged In"); 
    },
    error=>{
      console.log(f.errors)
    }
    )    
  }

  loggedIn()
  {
    return this.auth.isLoggedIn();
  }
  loggedOut()
  {
    localStorage.removeItem('token'); 
    this.alertify.warning("Logged Out");
    console.log("logged out");
  }
}
