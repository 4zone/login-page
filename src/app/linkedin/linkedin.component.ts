import { Component, OnInit } from '@angular/core';
import { LinkedinServiceService } from '../linkedin-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linkedin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {

  responseData: any;
  errorMessage!: string;
  username = ''; // Aquí deberías establecer el nombre de usuario de LinkedIn que deseas consultar

  constructor(private linkedinService: LinkedinServiceService) { }

  ngOnInit() {
    this.getLinkedinProfileData();
  }
  

  async getLinkedinProfileData() {
    const url = this.linkedinService.getLinkedinProfileUrl(this.username);
    const headers = this.linkedinService.getHeaders();

    const options = {
      method: 'GET',
      headers: headers
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.responseData = result;
      
      console.log(result);
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Error:', error);
    }
  }
  onSubmit() {
    // Llama a esta función cuando se envía el formulario o se activa un evento (por ejemplo, clic en un botón)
    this.getLinkedinProfileData();
  }
}
