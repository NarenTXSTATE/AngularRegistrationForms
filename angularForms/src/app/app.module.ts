import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    ReactiveComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ReactiveComponentComponent]
})
export class AppModule { }
