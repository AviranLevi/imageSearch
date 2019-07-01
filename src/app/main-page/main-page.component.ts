import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { User } from "../sign-up/sign-up.interface";
import { UserService } from "../shared/user.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUsers();
  }
}