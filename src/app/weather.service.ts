import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY: string = '18ead78aa7747c67300eaf9fb214b428';
  private forecastUrl: string = `https://api.openweathermap.org/data/2.5/forecast`;

  tempList: string[] = [];


  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`);
  }

  onNewWeather(name: string){
    if(this.tempList.includes(name) || name === '' || name === null || name === undefined || name === ' ' ){
      return;
    } else {
      this.tempList.push(name);

    }
  }
 

}
