import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Card } from '../card.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;


  goToDetailPage(clickedCard: Card) {
    // this.router.navigate(['albums', clickedAlbum.id]);
  };

  constructor() { }

  ngOnInit() {
  }

}
