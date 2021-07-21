import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeServices: PlacesService) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeid')){
        this.navCtrl.navigateBack('/places/offers');
        return;
      }else{
        this.place=this.placeServices.getplace(paramMap.get('placeid'));
      }
    });
  }

}
