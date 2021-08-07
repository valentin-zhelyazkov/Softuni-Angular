import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  responseData: Array<any>;
  apiCall: string = "http://api.openweathermap.org/data/2.5/forecast?id=732770&appid=4c2e902eee26ec1c78cb836606122fe7&units=metric";

  constructor(private http: HttpClient) {
    this.responseData = []
  }

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
      return this.http.get<any>(this.apiCall).subscribe(response => {
        this.responseData = [{
          "temp": response.list[0].main.temp,
          "feelsLike": response.list[0].main.feels_like,
          "humidity": response.list[0].main.humidity,
        }]
        console.log(this.responseData)
      });
  }

}