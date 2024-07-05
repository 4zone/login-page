import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://http.cat/';



  getCatImage(statusCode: number): Observable<Blob> {
    const url = `${this.baseUrl}${statusCode}`;
    return this.http.get(url, { responseType: 'blob' });
  }
  }
