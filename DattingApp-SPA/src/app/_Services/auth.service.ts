import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import {map} from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  response:any;
  
  baseURL="http://localhost:5000/api/Auth/";
constructor(private http: HttpClient) { 
  }

login(model:any)
{
 
  
  return this.http.post(this.baseURL+"login",model).pipe(
    map((response:any)=>{
      const user = response;
      if(user)
      localStorage.setItem('token',user.token);      
    })
  )       
}

register(model:any)
{
   return this.http.post(this.baseURL+"register",model);
}

}
