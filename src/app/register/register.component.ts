import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, RegisterComponent, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, public userService: UsersService) { }

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe((data) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    });

  }
  }
