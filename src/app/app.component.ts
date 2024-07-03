  import { Component, OnInit } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MisCursos } from './miscursos/MisCursos';
import { AreapersonalComponent } from './areapersonal/areapersonal.component';
import { DetailsComponent } from './details/details.component';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,  RouterModule, CommonModule, FormsModule, CursosComponent, PaginaprincipalComponent, MisCursos, AreapersonalComponent, DetailsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent implements OnInit {
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