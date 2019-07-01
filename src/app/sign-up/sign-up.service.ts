import { User } from "./sign-up.interface";
import { EventEmitter } from "@angular/core";

export class SignUpService {
  userCreated = new EventEmitter<User[]>();
  users: User[] = [];

  getUsers() {
    return this.users.slice();
  }

  addNewUser(user: User) {
    this.users.push(user);
    this.userCreated.emit(this.users.slice());
    console.log(this.users);
  }
}
