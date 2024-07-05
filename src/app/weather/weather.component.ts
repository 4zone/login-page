import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const API_KEY = '18ead78aa7747c67300eaf9fb214b428';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [WeatherComponent, FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent  {
weatherData: any;
city: string = ""

constructor(private weatherService: WeatherService) {
 }
wList: string[] = this.weatherService.tempList;
getWeather(){
  this.weatherService.getWeather(this.city).subscribe((data) => {
    this.weatherData = data;
  },
  error => {
    console.log(error);
  })
}

addWeather(){
  this.weatherService.onNewWeather(this.city);
}
getWeatherList(){
  return this.weatherService.tempList;  
}
trackByFn(index: number, item: string): number {
  return index; // o alguna propiedad única del item
}

}
