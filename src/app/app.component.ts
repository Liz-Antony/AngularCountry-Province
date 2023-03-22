import { Component } from '@angular/core';
import { Country } from './country';
import { Province } from './province';
import countryProvince from '../assets/data/country-province.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';
  nation:Country=countryProvince.country;
  provinceList:Province[]=countryProvince.provinces;
}
