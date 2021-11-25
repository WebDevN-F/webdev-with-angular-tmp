import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MyTask } from '../models/task';
import { Tasks } from './task.mock';

const LOCAL_MY_TASKS = 'WebDev.myTasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks$: BehaviorSubject<MyTask[]> = new BehaviorSubject(Tasks);

  constructor() { }

  getMyTasks(): Observable<MyTask[]> {
    const myTasks = localStorage.getItem(LOCAL_MY_TASKS);
    if (myTasks) {
      this.tasks$.next(JSON.parse(myTasks));
    }
    return this.tasks$.asObservable();
  }

  addTask(dataObj: MyTask) {
    const currentValue = this.tasks$.value;
    const updatedValue = [...currentValue, dataObj];
    this.tasks$.next(updatedValue);
    localStorage.setItem(LOCAL_MY_TASKS, JSON.stringify(updatedValue));
  }

  updateTask(i: number) {
    const currentValue = this.tasks$.value;
    currentValue[i].completed = !currentValue[i].completed;
    this.tasks$.next(currentValue);
    localStorage.setItem(LOCAL_MY_TASKS, JSON.stringify(currentValue));
  }
}
