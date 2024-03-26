import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http:HttpClient) { }

  public generateToken(request: string){
    return this.http.post("http://localhost:8080/api/v1/auth/login",request,{responseType: "text" as "json"})
  }

  public sendSignUpRequest(request: string){
    return this.http.post("http://localhost:8080/api/v1/auth/signup",request,{responseType: "text" as "json"})
  }
}
