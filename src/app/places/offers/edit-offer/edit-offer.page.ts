import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
     private placesService: PlacesService,
     private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeid')){
        this.navCtrl.navigateBack('/places/offers');
        return;
      }else{
        this.place=this.placesService.getplace(paramMap.get('placeid'));
      }
    });
  }

}
