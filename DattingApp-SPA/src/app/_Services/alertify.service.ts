import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs' ;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() {
    
   }
   sucsess(message:string){
     alertify.notify(message,'success',5,);
   }
   error(message:string){
    alertify.notify(message,'error',5,);
  }
  warning(message:string){
    alertify.notify(message,'warning',5,);
  }
}
