import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
  providers: [CardService]
})
export class EditCardComponent implements OnInit {
  @Input() selectedCard;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }
  beginUpdatingCard(cardToUpdate){
    this.cardService.updateCard(cardToUpdate);
  }
  beginDeletingCard(cardToDelete){
     if(confirm("Are you sure you want to delete this item from the inventory?")){
       this.cardService.deleteCard(cardToDelete);
     }
   }
}
