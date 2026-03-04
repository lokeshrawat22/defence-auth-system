import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<any>(`${environment.apiUrl}/profile`)
      .pipe(
        tap(res => this.userSubject.next(res.user))
      );
  }

  get user() {
    return this.userSubject.value;
  }

  logout() {
    this.userSubject.next(null);
    window.location.href = "http://localhost:5173";
  }
}
