import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelNewTask = new EventEmitter<void>()
  @Output() addNewTask = new EventEmitter<NewTaskData>()
  enteredTitle = ""
  enteredSummary = ""
  enteredDate = ""

  onCancelNewTask() {
    this.cancelNewTask.emit()
  }

  onSubmit() {
    this.addNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
