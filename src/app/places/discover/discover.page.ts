import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  lodedplaces: Place[];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.lodedplaces=this.placesService.getplaces();


  }

}
