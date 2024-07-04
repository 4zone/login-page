import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MisCursos } from './miscursos/MisCursos';
import { AreapersonalComponent } from './areapersonal/areapersonal.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule, RouterModule, CursosComponent, PaginaprincipalComponent, MisCursos, AreapersonalComponent, DetailsComponent, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent{
   
  }