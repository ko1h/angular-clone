import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CardService {
   cards: FirebaseListObservable<any[]>;

   constructor(private database: AngularFireDatabase) {
     this.cards = database.list('cards');
   }
   getCards(){
   return this.cards;
 }
 addCard(newCard: Card) {
   this.cards.push(newCard);
 }
}
