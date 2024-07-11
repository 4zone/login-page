import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent{
random: number = 0;
  constructor() { 
      // setInterval(() => { this.random = Math.random(); }, 10);
  }
  
  
}
