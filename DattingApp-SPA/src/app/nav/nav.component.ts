import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={};
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  Submit(f)
  {
    console.log(f)
    
    this.auth.login(this.model).subscribe(next=>{
      console.log(localStorage.getItem('token'));      
    },
    error=>{
      console.log("Error");
    }
    )    
  }

  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !!token;
  }
  loggedOut()
  {
    localStorage.removeItem('token'); 
    console.log("logged out");
  }
}
