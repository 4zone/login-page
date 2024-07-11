import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  users: string[] = ['admin', 'user', 'iñigo'];
  
  // This is a  method to check if the user is authenticated or not
  authenticate(username: string, password: string) {
    if (this.users.includes(username) && password === 'admin') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
  
}
