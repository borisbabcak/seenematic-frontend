import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = ''; 

  constructor(private http: HttpClient, private router: Router) {} // Inject HttpClient, Router

  onSignup() {
    const url = 'https://seenematic-backend-production.up.railway.app/api/auth/register'; 
    const body = { name: this.username, email: this.email, password: this.password };

    this.http.post(url, body).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.errorMessage = '';
        alert('Registration successful! Please select your favorite genres.'); 
        this.router.navigate(['/genre-selection']);
      },
      error: (error) => {
        console.error('Error during registration', error);
        this.errorMessage = error.error.message || 'Registration failed. Please try again.'; 
      },
    });
  }
}
