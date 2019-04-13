import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  photo:string = '../../assets/img/hotdog.jpeg'
  description: string = 'Best food description'

  constructor() { }

  ngOnInit() {
  }

}
