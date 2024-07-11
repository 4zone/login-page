import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { CursosInterfaz } from '../cursos-interfaz';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, CdkAccordionModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  items = ['La solución SENDAudit'];
  expandedIndex = 0;

  @Input() cursoId?: number | undefined; // Input para recibir el ID del curso desde el componente padre
  curso?: CursosInterfaz | undefined; // Objeto para almacenar los detalles del curso

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id'); // Obtener el ID del curso como string desde los parámetros de la ruta
      if (idString) {
        this.cursoId = +idString; // Convertir el string a número
        this.curso = this.cursosService.getCoursesById(this.cursoId); // Obtener el curso del servicio por ID
      }
    });
  }

}