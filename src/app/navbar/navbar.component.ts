import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from '../cursos/cursos.component';
import { PaginaprincipalComponent } from '../paginaprincipal/paginaprincipal.component';
import { MisCursos } from '../miscursos/MisCursos';
import { AreapersonalComponent } from '../areapersonal/areapersonal.component';
import { DetailsComponent } from '../details/details.component';

import { RouterModule } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, RouterModule, CursosComponent, PaginaprincipalComponent, MisCursos, AreapersonalComponent, DetailsComponent, NavbarComponent, WeatherComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
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

  logOut() {
    sessionStorage.removeItem('username');
    this.isAuth = false;
    window.location.reload();
  }
}
