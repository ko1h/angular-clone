import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [CardService]
})
export class AdminComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }
    submitForm(image: string, title: string) {
      var newCard: Card = new Card(image, title);

    }

}
