// inquiry.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inquiries',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inquiries.html'
})
export class InquiryComponent {
  inquiry = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // For now, just log the form data
    console.log('Inquiry submitted:', this.inquiry);

    // To actually send an email, you need a backend service.
    // Example: call an API endpoint that uses Nodemailer, SendGrid, or SMTP.
  }
}
