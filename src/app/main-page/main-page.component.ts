import { Observable } from "rxjs";
import { SignUpService } from "./../sign-up/sign-up.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../sign-up/sign-up.interface";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private signUpService: SignUpService) {}

  ngOnInit() {
    this.user$ = this.signUpService.getUsers();
  }
}
