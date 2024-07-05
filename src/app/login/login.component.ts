import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, LoginComponent, FormsModule, CommonModule, RouterModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private router: Router, private userService: UsersService) { }

  username: string = '';
  email: string = '';
  password: string = '';
  loginService: LoginServiceService = inject(LoginServiceService);

  onSubmit(){
    const isAuthenticated = this.loginService.authenticate(this.username, this.password);
    if(!isAuthenticated){
      return false;
    } else {
      this.router.navigate(['']);
      return true;
    }
}
isLoggedIn() {
  return sessionStorage.getItem('username') !== null;
}
reload(){
  window.location.reload();
}
//////////////////////////

  login(){
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe((data) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  
  }
}
