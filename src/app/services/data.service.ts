import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=c062f7304896ece30c18d3fe850c39ad'
    );
  }
}
