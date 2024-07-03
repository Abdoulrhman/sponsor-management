import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private apiUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) {}

  login(credentials: { user_name: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap((response) => {
        this.setToken(response.access_token);
      })
    );
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }
}
