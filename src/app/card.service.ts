import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { CARDS } from './mock-card';
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
 getCardId(CardId: number){
    // for (var i = 0; i <= CARDS.length - 1; i++) {
    //   if (CARDS[i].id === cardId) {
    //     return CARDS[i];
    //   }
    // }
  }
}
