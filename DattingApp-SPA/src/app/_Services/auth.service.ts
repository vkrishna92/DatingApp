import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import {map} from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  response:any;
  
  baseURL="http://localhost:5000/api/Auth/";
  jwtHelper = new JwtHelperService();
  decodedToken:any;
constructor(private http: HttpClient ) { 
  }

login(model:any)
{
 
  
  return this.http.post(this.baseURL+"login",model).pipe(
    map((response:any)=>{
      const user = response;
      if(user)
      localStorage.setItem('token',user.token);      
      console.log(this.decodedToken);
    })
  )       
}

register(model:any)
{
   return this.http.post(this.baseURL+"register",model);
}

isLoggedIn()
{
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

}
