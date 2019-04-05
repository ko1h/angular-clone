import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [CardService]
})
export class WelcomeComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;


  goToDetailPage(clickedCard: Card) {
    // this.router.navigate(['cards', clickedCard.id]);
  };

  constructor() { }

  ngOnInit() {
  }

}
