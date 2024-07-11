import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkedinServiceService {

  private apiUrl = 'https://linkedin-data-api.p.rapidapi.com/';
  private apiKey = 'f555d2c407msh344187999cfa29dp1302d9jsnb6744604f6ec';
  private apiHost = 'linkedin-data-api.p.rapidapi.com';

  constructor() { }

  getLinkedinProfileUrl(username: string) {
    return `${this.apiUrl}?username=${username}`;
  }

  getHeaders() {
    return {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost
    };
  }
}
