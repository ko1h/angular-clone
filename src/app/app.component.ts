import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CardService } from './card.service';
import { Task } from './card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CardService]
})

export class AppComponent  implements OnInit{
  constructor() { }

 ngOnInit() {

    }
    selectedTask = null;
    masterTaskList: Task[] = [
      new Task('Finish weekend Angular homework for Epicodus course', 3),
      new Task('Begin brainstorming possible JavaScript group projects', 2),
      new Task('Add README file to last few Angular repos on GitHub', 2)
    ];

    editTask(clickedTask) {
      this.selectedTask = clickedTask;
    }

    finishedEditing() {
      this.selectedTask = null;
    }

  }
