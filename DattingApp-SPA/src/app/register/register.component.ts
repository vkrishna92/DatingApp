import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() CanelRegistration= new EventEmitter();

  model:any={};
  constructor(private auth:AuthService ) { }

  ngOnInit() {
  }

  Createregister()
  {
    this.auth.register(this.model).subscribe(()=>{
      console.log("Registration successfull");
    },
    error=>{
      console.log("registration Failed");
    })
  }
  cancel()
  {
    this.CanelRegistration.emit(false);
    console.log("cancelled");
  }

}
