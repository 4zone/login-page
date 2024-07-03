import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
@Component({
  selector: 'app-areapersonal',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, CalendarModule, FormsModule],
  templateUrl: './areapersonal.component.html',
  styleUrl: './areapersonal.component.css'
})
export class AreapersonalComponent {

}
