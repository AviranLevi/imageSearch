import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "./sign-up.service";
import { User } from "./sign-up.interface";
import { Component, OnInit } from "@angular/core";
import { MustMatch } from "./helpers/must-match.validator";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  users: User[];

  constructor(private signupService: SignUpService) {}

  ngOnInit() {
    this.users = this.signupService.getUsers();

    this.signupService.userCreated.subscribe((user: User[]) => {
      this.users = user;
    });
  }
}
