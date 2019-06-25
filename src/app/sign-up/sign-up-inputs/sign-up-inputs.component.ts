import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sign-up-inputs",
  templateUrl: "./sign-up-inputs.component.html",
  styleUrls: ["./sign-up-inputs.component.css"]
})
export class SignUpInputsComponent implements OnInit {
  @Output() userCreted = new EventEmitter<{
    userName: string;
    userEmail: string;
    userPassword: string;
  }>();

  constructor() {}

  ngOnInit() {}

  createUser(userNameInput, userEmailInput, userPswdInput) {
    this.userCreted.emit({
      userName: userNameInput.value,
      userEmail: userEmailInput.value,
      userPassword: userPswdInput
    });
  }
}
