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
    this.fetchWeatherData();
    setInterval(() => {
      this.fetchWeatherData();
    }, 500000);
  }

  onUpdateData() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.dataService.getWeather().subscribe((data) => {
      console.log(data);
      this.openWeatherAPIResponse = data;
      this.editData();
    });
  }

  editData() {
    this.weatherData = {
      temperature: (() =>
        this.convertTemperature(this.openWeatherAPIResponse.main.temp))(),
      temperatureFeelsLike: (() =>
        this.convertTemperature(this.openWeatherAPIResponse.main.feels_like))(),
      temperatureMin: (() =>
        this.convertTemperature(this.openWeatherAPIResponse.main.temp_min))(),
      temperatureMax: (() =>
        this.convertTemperature(this.openWeatherAPIResponse.main.temp_max))(),
      pressure: this.openWeatherAPIResponse.main.pressure,
      humidity: this.openWeatherAPIResponse.main.humidity,
      clouds: this.openWeatherAPIResponse.clouds.all,
      description: (() => {
        return (
          this.openWeatherAPIResponse.weather[0].description
            .charAt(0)
            .toUpperCase() +
          this.openWeatherAPIResponse.weather[0].description.slice(1)
        );
      })(),
      iconUrl: `http://openweathermap.org/img/wn/${this.openWeatherAPIResponse.weather[0].icon}@2x.png`,
      unixUtc: (() =>
        this.convertDateFromUtc(this.openWeatherAPIResponse.dt))(),
    };
  }

  convertTemperature(temperature: number): string {
    return `${Math.floor(-273.15 + temperature)} ${String.fromCharCode(176)}C`;
  }

  convertDateFromUtc(unixTimestamp: number) {
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString();
  }
}
