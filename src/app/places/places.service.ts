import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[]=[
    // eslint-disable-next-line max-len
    new Place(
      'p1',
      'Tajmahl',
      'beautyful',
      // eslint-disable-next-line max-len
      'https://image.shutterstock.com/shutterstock/photos/1910672659/display_1500/stock-photo-motivational-words-llc-on-a-keyboard-background-business-concept-llc-short-logical-link-1910672659.jpg',
      300)

     // eslint-disable-next-line max-len
     , new Place(
       'p2',
       'Charminar',
       'bueaty spot of hyd',
       'https://image.shutterstock.com/image-vector/smartphone-speech-bubble-social-media-600w-249041452.jpg',300)

  ];
  constructor() { }

  getplaces(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this.places];
  }

  getplace(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return {...this.places.find(p=>p.id=== id)};
  }


}
