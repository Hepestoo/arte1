import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl =environment.urlServidor
  private http=inject(HttpClient)

  constructor(){}
  loginConNest(credenciales:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales)
  }

  registroConNest(datos:any){
    return this.http.post<any>(`${this.baseUrl}/auth/register`,datos)
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/forgot-password`, { email });
  }  
}

