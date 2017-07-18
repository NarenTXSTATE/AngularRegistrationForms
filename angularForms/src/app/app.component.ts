import { Component } from '@angular/core';
import {Card} from './card.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card = new Card("VISA","S JHONSON","JUN-2020");
  
  
  addCard(){
    alert("addCard: "+this.card.cardname);
  }
}
