import { MustMatch } from "./../helpers/must-match.validator";
import { UserService } from "../../shared/user.service";
import { User } from "./../sign-up.interface";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up-inputs",
  templateUrl: "./sign-up-inputs.component.html",
  styleUrls: ["./sign-up-inputs.component.css"]
})
export class SignUpInputsComponent implements OnInit {
  signUpForm: FormGroup;
  signUp = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.signUpForm = this.formBuilder.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validator: MustMatch.passwordMatchValidator
      }
    );
  }

  get formValue() {
    return this.signUpForm.value as User;
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.signUp = true;

    if (this.signUpForm.invalid) {
      return;
    }
  }

  addUser() {
    this.userService.addNewUser(this.formValue);
  }
}
