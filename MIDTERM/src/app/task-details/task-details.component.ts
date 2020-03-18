import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from "../task";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  constructor(
    private route: ActivatedRoute,  
    private tasksService: TasksService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasksService.getTask(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

}
