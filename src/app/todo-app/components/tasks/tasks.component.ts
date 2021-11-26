import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tasks } from '../../services/task.mock';
import { MyTask } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';

export const LOCAL_MY_TASKS = 'WebDev.myTasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  myTasks: Observable<MyTask[]> = new Observable<MyTask[]>();

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.myTasks = this.taskService.getMyTasks();
  }

  onChange(i: number) {
    this.taskService.updateTask(i)
  }

}
