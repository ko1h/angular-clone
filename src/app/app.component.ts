import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { City } from './card.model';
import { CardService } from './card.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CardService]
})
export class AppComponent  implements OnInit{
  childCityList: City[];
  cityName: string = null;
  cityToDisplay: City;

  constructor(private route: ActivatedRoute, private location: Location, private cardService: CardService, private router: Router) { }

 ngOnInit() {
   this.childCityList = this.cardService.getCities();


   this.route.params.forEach((urlParameters) => {
     this.cityName = urlParameters['city'];
     if (this.cityToDisplay) {
       this.cityToDisplay = this.cardService.getCityByName(this.cityName)
     } else {
       this.cityToDisplay = this.cardService.getCityByName('Portland')
     }
   });
 }
 goToCityPage(clickedCity: City) {
   this.router.navigate([clickedCity.name]);

 }

}
