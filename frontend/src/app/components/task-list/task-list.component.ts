import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();

    this.taskService.onTaskAdded().subscribe((newTask) => {
      this.tasks.push(newTask);
    });
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  startUpdating(task: Task): void {
    task.updating = true;
  }

  saveTask(task: Task): void {
    task.updating = false;
    this.taskService.updateTask(task.id!, task).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleCompleted(task: Task): void {
    this.taskService.updateTask(task.id!, task).subscribe(() => {
      this.loadTasks;
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
