import { Component, OnInit } from '@angular/core';
import { DisplayData } from 'src/app/interface/display-data';
import { getClima } from '../../../services/api';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  weatherData: any;
  loading = false;
  displayData: DisplayData[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getClima(position.coords.latitude, position.coords.longitude)
          .then((resp) => resp.json())
          .then((data) => {
            this.weatherData = data;
            this.loading = false;
            this.displayData = [
              {
                title: 'Temperatura',
                value: data.current.temp_c,
                icon: '',
                symbol: 'º',
              },
              {
                title: 'Sensación Termica',
                value: data.current.feelslike_c,
                icon: '',
                symbol: 'º',
              },
              {
                title: 'Humedad',
                value: data.current.humidity,
                icon: '',
                symbol: '%',
              },
              {
                title: 'Presipitaciones',
                value: data.current.precip_mm,
                icon: '',
                symbol: 'mm',
              },
              {
                title: 'Presión atmosférica',
                value: data.current.pressure_mb,
                icon: '',
                symbol: 'mb',
              },
              {
                title: 'Rayos UV',
                value: data.current.uv,
                icon: '',
                symbol: '',
              },
              {
                title: 'Visibilidad',
                value: data.current.vis_km,
                icon: '',
                symbol: 'km',
              },
            ];
          })
          .catch((err) => (this.loading = false));
      });
    } else {
      alert('Su navegador no soporta geolocalización. 😕');
    }
  }
}
