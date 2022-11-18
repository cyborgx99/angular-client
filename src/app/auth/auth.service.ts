import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthSuccessResponse, SuccessResponse } from './dto/auth.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthSuccessResponse> {
    return this.http.post<AuthSuccessResponse>(
      `${environment.baseUrl}/auth/sign-in`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
  }

  logout(): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(
      `${environment.baseUrl}/auth/logout`,
      {},
      { withCredentials: true }
    );
  }
}
