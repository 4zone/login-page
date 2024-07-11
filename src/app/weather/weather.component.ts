import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
tempCity: string = ""
wList: string[] = this.weatherService.tempList;
wListDeletedItems: string[] = [];
listWords: string[] = [];
cityTemp: string = "";
eliminated: boolean = true;
itemLi: string = "";
constructor(private weatherService: WeatherService) {}



getWeather(){
  this.weatherService.getWeather(this.city).subscribe((data) => {
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

clickItem(item: string){
    this.city = item;
}

deleteSearch(){
  this.tempCity = this.city;
  this.wListDeletedItems.push(this.tempCity);
  const index = this.wList.indexOf(this.tempCity);
  if(index !== -1){
    this.wList.splice(index, 1);
    this.city = "";
  }
  this.city = "";
}

returnDeleted(){
 
  const index = this.wListDeletedItems.indexOf(this.cityTemp);
    if(index !== -1){
      this.wListDeletedItems.splice(index, 1);
      this.city = this.cityTemp;
      this.cityTemp = "";
      this.eliminated = true;
    
  } else {
    console.log("No se encuentra en la lista de eliminados");
    this.eliminated = false;
  }
}
  getPossibleWords(){
    var letra = this.cityTemp.charAt(0)
    for(let i = 0; i < this.wListDeletedItems.length; i++){
      if(this.wListDeletedItems[i].charAt(0) == letra){
        this.listWords.push(this.wListDeletedItems[i]);
      }
    }
  }
  autoComplete(itemLi: string){
    this.cityTemp = itemLi;
  }
}
