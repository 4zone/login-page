import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursosComponent } from '../cursos/cursos.component';
import { CursosService } from '../cursos.service';
import { CursosInterfaz } from '../cursos-interfaz';

@Component({
  selector: 'app-miscursos',
  standalone: true,
  imports: [FormsModule, CommonModule, CursosComponent],
  templateUrl: './MisCursos.html',
  styleUrls: ['./MisCursos.css']
})
export class MisCursos implements OnInit {
  title = 'login-page';
  isAuth = false;
  username: string | null = null;
  filteredCourses: CursosInterfaz[] = [];
  selectedEstado = 'todos';

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.isLoggedIn();
    this.username = sessionStorage.getItem('username');
    this.loadCourses();
  }

  isLoggedIn() {
    this.isAuth = sessionStorage.getItem('username') !== null;
  }

  loadCourses() {
    this.filteredCourses = this.cursosService.getCourses();
  }

  filterResults(searchValue: string) {
    this.filteredCourses = this.cursosService.filterCourses(searchValue, this.selectedEstado);
  }
}
