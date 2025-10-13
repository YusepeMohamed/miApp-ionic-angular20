import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        this.error = '';
        this.success = 'Inicio de sesión exitoso';
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        setTimeout(() => this.router.navigate(['/home']), 1500);
      },
      error: () => {
        this.success = '';
        this.error = 'Credenciales inválidas o usuario no encontrado';
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
