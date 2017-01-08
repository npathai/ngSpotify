import { Component, OnDestroy } from '@angular/core';
import {ImageUrlService} from './services/imageurl.service';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'app.component.html'
})
export class AppComponent  implements OnDestroy {
  imageUrl: string;
  self: AppComponent;

  constructor(private imageUrlService: ImageUrlService) {
    imageUrlService.imageUrlSource.subscribe(url => {
      console.log('App component: Image url found via subscription: ' + url);
      this.imageUrl = url;
    }, err => {
      console.log('App component: ' + err);
    }, () => {
      console.log('App component: Completed image source')
    });
  }

  ngOnDestroy() {
    console.log('on destroy of app component called');
  }

}
