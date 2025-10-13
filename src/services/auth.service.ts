import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // ✅ Debe terminar con /api/

  constructor(private http: HttpClient) {}

  // ✅ Registro de usuario
  register(userData: any): Observable<any> {
    // ❌ Antes: `${this.apiUrl}api/registro/`
    // ✅ Ahora: solo agregamos "registro/"
    return this.http.post(`${this.apiUrl}registro/`, userData);
  }

  // ✅ Login con SimpleJWT
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}token/`, credentials).pipe(
      tap((res: any) => {
        if (res.access) {
          localStorage.setItem('access_token', res.access);
          localStorage.setItem('refresh_token', res.refresh);
        }
      })
    );
  }

  // ✅ Refrescar token
  refreshToken(): Observable<any> {
    const refresh = localStorage.getItem('refresh_token');
    return this.http.post(`${this.apiUrl}token/refresh/`, { refresh });
  }

  // ✅ Logout
  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  // ✅ Verifica si hay sesión activa
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
