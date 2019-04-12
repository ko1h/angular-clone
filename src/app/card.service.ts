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
 getCardId(cardId: string){
  return this.database.object('/cards/' + cardId);
  }
    updateCard(localUpdatedCard){
    var cardEntryInFirebase = this.getCardId(localUpdatedCard.$key);
    console.log(cardEntryInFirebase);
    cardEntryInFirebase.update({title: localUpdatedCard.title,
                                artist: localUpdatedCard.artist,
                                description: localUpdatedCard.description});
  }
  deleteCard(localCardToDelete){
   var cardEntryInFirebase = this.getCardId(localCardToDelete.$key);
   cardEntryInFirebase.remove();
  }

}
