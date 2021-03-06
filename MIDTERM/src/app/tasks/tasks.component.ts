import { Component, OnInit } from '@angular/core';

import { Task } from "../task";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks():void {
    this.tasksService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

}
