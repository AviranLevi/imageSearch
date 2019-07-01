import { Injectable } from "@angular/core";
import { User } from "./sign-up.interface";
import { Subject } from "rxjs";
import { take } from "rxjs/operators";
@Injectable()
export class SignUpService {
  user$: Subject<User> = new Subject();

  getUsers() {
    return this.user$.pipe(take(1));
  }

  addNewUser(user: User) {
    this.user$.next(user);
  }
}
