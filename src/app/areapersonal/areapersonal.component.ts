import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { Evento } from '../evento';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { CursosInterfaz } from '../cursos-interfaz';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-areapersonal',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, CalendarModule, FormsModule, CommonModule],
  templateUrl: './areapersonal.component.html',
  styleUrl: './areapersonal.component.css'
})
export class AreapersonalComponent {
  selectedDate?: Date;
  eventos: Evento[] = [];

  constructor(private _snackBar: MatSnackBar, private cursosService: CursosService) {}

  dateSelected(event: any): void {
    this.selectedDate = event;
  }

  agregarEvento(): void {
    if (this.selectedDate) {
      // Aquí puedes implementar un formulario o una modal para capturar detalles del evento
      const nuevoEvento: Evento = {
        fecha: this.selectedDate,
        titulo: 'Nuevo evento',
        descripcion: 'Descripción del evento'
      };

      this.eventos.push(nuevoEvento);

      // Puedes mostrar una notificación o mensaje de éxito
      this._snackBar.open('Evento agregado', 'Cerrar', {
        duration: 2000,
      });
    } else {
      // Manejar caso donde no se ha seleccionado una fecha
      this._snackBar.open('Por favor selecciona una fecha', 'Cerrar', {
        duration: 2000,
      });
    }
  }
  title = 'login-page';
  isAuth = false;
  username: string | null = null;
  filteredCourses: CursosInterfaz[] = [];
  selectedEstado = 'todos';
  state: number = 0;

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