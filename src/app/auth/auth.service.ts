import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthSuccessResponse } from './dto/auth.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthSuccessResponse> {
    return this.http.post<AuthSuccessResponse>('/auth/sign-in', {
      email,
      password,
    });
  }
}
