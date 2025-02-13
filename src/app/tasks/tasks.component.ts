import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) user_name?: string
  tasks = [
    {
      id: "t1", 
      userId: "u1",
      title: "Master Angular", 
      summary: "Learn basic angular",
      dueDate: "2025-12-31"
    }, 
    {
      id: "t2", 
      userId: "u2",
      title: "Learning C#", 
      summary: "Learn basic C#",
      dueDate: "2025-12-31"
    },
    {
      id: "t3", 
      userId: "u3",
      title: "Learning AWS", 
      summary: "Learn AWS",
      dueDate: "2025-12-31"
    },
    {
      id: "t4", 
      userId: "u4",
      title: "Master Angular", 
      summary: "Learn basic angular",
      dueDate: "2025-12-31"
    }
  ]
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
