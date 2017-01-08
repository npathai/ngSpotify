import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ImageUrlService {
    imageUrlSource = new Subject<string>();

    constructor() {
      console.log('Image URL service created');
    }


    // imageUrlFound$ = this.imageUrlSource.asObservable();
    imageFound(url: string) {
      console.log('Image Url Service: Url found: ');
      console.log(url);
      this.imageUrlSource.next(url);
    }
}
