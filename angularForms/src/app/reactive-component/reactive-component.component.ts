import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {

  registerForm:FormGroup;
  
  contact = new Contact("Hary","D","NYC","NY");
  
  constructor(private fb:FormBuilder){}
  
  ngOnInit():void{
    this.buildForm();
  }
  
  buildForm():void{
    
    this.registerForm = this.fb.group({
      'firstname':[this.contact.firstname,[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      'lastname':[this.contact.lastname],
      'city':[this.contact.city],
      'state':[this.contact.state]
    });
    
    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    
  }
  
  onValueChanged(data?:any){
    
    if(!this.registerForm){
      return;
    }
    
    const form = this.registerForm;
    
    for(const field in this.formErrors){
      this.formErrors[field]='';
      
      const control = form.get(field);
      
      if(control && control.dirty && !control.valid){
        const messages = this.validationMessages[field];
        
        for(const key in control.errors){
          this.formErrors[field]+=messages[key]+'';
        }
        
      }
    }
    
  }
  
  formErrors={
    'firstname' : ''
  }
  
  validationMessages = {
    'firstname':{
      'required': 'Name is required.',
      'minlength': 'Name must be atleast 4 characters',
      'maxlength': 'Name cannot be more than 25 characters'
    }
  }
}
