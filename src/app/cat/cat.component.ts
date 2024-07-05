import { Component } from '@angular/core';
import  { CatService } from '../cat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CatComponent, CommonModule, FormsModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {
  statusCode!: number;
  catImage: string | null = null;

  constructor(private httpCatService: CatService) {}

  fetchCatImage() {
    this.httpCatService.getCatImage(this.statusCode).subscribe(
      (blob) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.catImage = event.target.result;
        };
        reader.readAsDataURL(blob);
      },
      (error) => {
        console.error('Error fetching image', error);
        this.catImage = null;
      }
    );
  }

  fetchCatImageWithStatusCode(statusCode: number) {
    this.statusCode = statusCode;
    this.fetchCatImage();
  }
}