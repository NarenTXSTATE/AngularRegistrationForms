import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
@Component({
  selector: 'app-root',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
  }
   contact = new Contact("Hary","D","NYC","NY","adc@gmail.com",1234567890);
  
  public cities=["Hyd","Vizag","Mumbai","Pune"];
  
  registerProcess(){
    console.log("*****registerProcess()*******");
    console.log(this.contact.firstname);
    console.log(this.contact.lastname);
  }

}
