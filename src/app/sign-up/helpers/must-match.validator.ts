import { AbstractControl } from "@angular/forms";

export class MustMatch {
  static passwordMatchValidator(control: AbstractControl) {
    const password = control.get("password").value;
    const confirmPassword = control.get("confirmPassword").value;

    if (password !== confirmPassword) {
      control.get("confirmPassword").setErrors({ NoPassswordMatch: true });
    }
  }
}
