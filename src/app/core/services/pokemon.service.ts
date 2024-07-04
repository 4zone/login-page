import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { PokemonResults } from '../../pokemon';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(API_URL).pipe(catchError((error: HttpErrorResponse) => {
      let errorMessage = "";
      if(error.error instanceof ErrorEvent){
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
        console.log(errorMessage);
      }
  return throwError (() => errorMessage);
  }))
}
  }
