import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { MyTask } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { v1 as uuidv1 } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  taskName: string = '';

  @Input() title: string = 'Default value if title empty';

  constructor(
    private tasksService: TasksService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    if (!this.taskName) { this.renderer.selectRootElement('#taskName').focus(); return; }
    const task: MyTask = {
      id: uuidv1(),
      name: this.taskName,
      completed: false,
      day: new Date().toLocaleDateString()
    }
    this.tasksService.addTask(task);
    this.taskName = '';
    this.renderer.selectRootElement('#taskName').focus()
  }

}
