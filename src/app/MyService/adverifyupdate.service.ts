import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Traineeverification } from '../MyModel/traineeverification.model';

@Injectable({
  providedIn: 'root'
})
export class AdverifyupdateService {
  private apiURL = "http://localhost:8080/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  update(id:number, post:Traineeverification): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/posts')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(posts:Traineeverification): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/update/posts', JSON.stringify(posts), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  getById(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/trainee/get/'  + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
