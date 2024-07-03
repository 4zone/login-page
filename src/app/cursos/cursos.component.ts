import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosInterfaz } from '../cursos-interfaz';
import { CursosService } from '../cursos.service';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule, CursosComponent, RouterModule, RouterOutlet, DetailsComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  cursos: CursosInterfaz[];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.cursos;
  }
  @Input() filteredCourses: CursosInterfaz[] = [];


}
