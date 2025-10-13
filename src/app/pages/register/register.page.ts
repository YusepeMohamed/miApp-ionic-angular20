import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  username = '';
  email = '';
  first_name = '';
  last_name = '';
  password = '';
  password2 = '';
  error = '';
  success = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.password !== this.password2) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }

    const userData = {
      email: this.email,
      username: this.username,
      password: this.password,
      password2: this.password2,
      first_name: this.first_name,
      last_name: this.last_name
    };

    this.authService.register(userData).subscribe({
      next: () => {
        this.success = 'Usuario registrado correctamente';
        this.error = '';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Error al registrar usuario';
        this.success = '';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
