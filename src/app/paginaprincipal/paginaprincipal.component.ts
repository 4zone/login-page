import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router para navegar
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-paginaprincipal',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './paginaprincipal.component.html',
  styleUrl: './paginaprincipal.component.css'
})
export class PaginaprincipalComponent implements OnInit {
  title = 'login-page';
  isAuth = false;
  username: string | null = null;

  ngOnInit() {
    this.isLoggedIn();
    this.username = sessionStorage.getItem('username');
  }
  isLoggedIn() {
    this.isAuth = sessionStorage.getItem('username') !== null;
  }

  
 
}
