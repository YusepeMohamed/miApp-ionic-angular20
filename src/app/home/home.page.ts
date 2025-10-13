import { Component, inject } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [IonContent, IonButton],
})
export class HomePage {
  private auth = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
