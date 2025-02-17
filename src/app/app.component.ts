import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUser?: User;
  newTaskIsClicked?:boolean;

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find(user => user.id === id)
  }

  onClickNewTask(isClicked:boolean) {
    this.newTaskIsClicked = isClicked
  }
}
