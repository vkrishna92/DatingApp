import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { AlertifyService } from '../_Services/alertify.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() CanelRegistration= new EventEmitter();

  model:any={};
  constructor(private auth:AuthService,private alertify:AlertifyService ) { }

  ngOnInit() {
  }

  Createregister()
  {
    this.auth.register(this.model).subscribe(()=>{
     this.alertify.sucsess("Successfull");
    },
    (error:HttpErrorResponse)=>{

        this.alertify.error(error.error);
    })
  }
  cancel()
  {
    this.CanelRegistration.emit(false);
    console.log("cancelled");
  }

}
