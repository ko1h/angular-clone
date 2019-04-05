import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
