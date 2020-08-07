import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { WeatherData } from '../../models/WeatherData';
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  openWeatherAPIResponse: any;
  weatherData: WeatherData;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getWeather().subscribe((data) => {
      console.log(data);
      this.openWeatherAPIResponse = data;
      this.editData();
    });
  }

  editData() {
    this.weatherData = {
      temperature: this.openWeatherAPIResponse.main.temp,
      temperatureFeelsLike: this.openWeatherAPIResponse.main.feels_like,
      temperatureMin: this.openWeatherAPIResponse.main.temp_min,
      temperatureMax: this.openWeatherAPIResponse.main.temp_min,
      pressure: this.openWeatherAPIResponse.main.pressure,
      humidity: this.openWeatherAPIResponse.main.humidity,
      clouds: this.openWeatherAPIResponse.clouds.all,
      description: this.openWeatherAPIResponse.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${this.openWeatherAPIResponse.weather[0].icon}@2x.png`,
    };
  }
}
