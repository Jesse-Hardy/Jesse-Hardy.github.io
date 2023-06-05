import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html"
})
export class ContactComponent {
  contactForm: FormGroup;
  messageSent = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log("Form Data: ", this.contactForm.value); // replace with your actual submission code
      this.contactForm.reset();
      this.messageSent = true;
    }
  }
}
