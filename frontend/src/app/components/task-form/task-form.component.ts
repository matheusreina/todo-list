import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.taskService.createTask(this.task).subscribe((newTask) => {
      this.task = {
        title: '',
        description: '',
        completed: false,
      };
      this.taskService.notifyTeskAdded(newTask);
    });
  }
}
