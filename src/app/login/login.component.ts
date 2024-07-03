import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router para navegar
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, LoginComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private router: Router) { }

  username: string = '';
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

}
