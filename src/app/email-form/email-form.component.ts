import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-900 py-12">
      <div class="max-w-2xl mx-auto px-4">
        <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
          <h2 class="text-2xl font-bold text-white mb-6">Contact Me</h2>
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input type="text" id="name" [(ngModel)]="formData.name" name="name" 
                     class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                     required>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input type="email" id="email" [(ngModel)]="formData.email" name="email"
                     class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                     required>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input type="text" id="subject" [(ngModel)]="formData.subject" name="subject"
                     class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                     required>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" [(ngModel)]="formData.message" name="message" rows="6"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        required></textarea>
            </div>
            
            <div class="flex justify-between items-center">
              <button type="button" routerLink="/" 
                      class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                Back to CV
              </button>
              <button type="submit" 
                      class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class EmailFormComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Here you can implement the email sending logic
    console.log('Form submitted:', this.formData);
    // You can add your email sending service here
  }
} 