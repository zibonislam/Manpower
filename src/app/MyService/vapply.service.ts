import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Vapply } from '../MyModel/vapply.model';

@Injectable({
  providedIn: 'root'
})
export class VapplyService {

  private apiURL = "http://localhost:8080/api/verify";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/posts')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(verify: Vapply): Observable<any> {
    console.log(verify , "-------------------------------------") 
  
    return this.httpClient.post("http://localhost:8080/api/verify/posts", JSON.stringify(verify),this.httpOptions)
  
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/posts' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, verify:Vapply): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/posts' + id, JSON.stringify(verify), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
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
