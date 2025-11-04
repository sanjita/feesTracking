import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../model/interface/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
   http = inject(HttpClient)
  private API_URL = "https://feestracking.freeprojectapi.com/api/User/login"


  login(credential: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(this.API_URL, credential);

  }

  
}
