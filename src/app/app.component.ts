import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find(user => user.id === id)
  }
}
