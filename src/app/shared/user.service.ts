import { Injectable } from "@angular/core";
import { User } from "../sign-up/sign-up.interface";
import { ReplaySubject, Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable()
export class UserService {
  private _user$ = new ReplaySubject<User>();

  get user$(): Observable<User> {
    return this._user$.pipe(take(1));
  }

  addNewUser(user: User) {
    this._user$.next(user);
  }
}
