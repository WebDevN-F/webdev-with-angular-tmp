import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
