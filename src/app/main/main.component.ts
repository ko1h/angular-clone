import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Card } from '../card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;

  goToDetailPage(clickedCard: Card) {
    // this.router.navigate(['albums', clickedAlbum.id]);
  };
  
  constructor() { }

  ngOnInit() {
  }

}
