import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http:HttpClient) { }

  /*public generateToken(request: string){
    let response = this.http.post("http://localhost:8080/api/v1/auth/login",request)
    console.log(response.subscribe(response => {
      if (response.status === 200) {
        // Handle successful response
        console.log('Data fetched successfully!');
      } else {
        // Handle error based on status code
        console.error('Request failed with status:', response.status);
      }
    }))
    return response
  }*/

  public generateToken(request: string): Observable<any> {
    const url = "http://localhost:8080/api/v1/auth/login";
    return this.http.post<any>(url, request)
      .pipe(
        tap(response => {  // Handle successful response (optional)
          if (response.status === 200) {
            console.log('Token generated successfully!');
            // You can store the token in local storage or a service here
          }
        }),
        catchError(error => {  // Handle errors gracefully
          console.error('Error generating token:', error);
          return throwError(error); // Re-throw the error for further handling
        })
      );
  }

  public sendSignUpRequest(request: string){
    console.log('signup works till now')
    return this.http.post("http://localhost:8080/api/v1/auth/signup",request,{responseType: "text" as "json"})
  }
}
