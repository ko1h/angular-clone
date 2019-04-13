import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.model';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Task } from '../card.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [CardService]
})
export class WelcomeComponent implements OnInit {
  @Input() childTaskList: Task[];
  cards: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
     this.cards = this.cardService.getCards();
  }
  goToDetailPage(clickedCard: Card) {
    // this.router.navigate(['cards', clickedCard.id]);
  }

}
