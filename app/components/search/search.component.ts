import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../models/artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  query: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) {
    this.query = '';
    console.log('Search component initialized');
  }

  searchMusic() {
    if (this.query.length < 4) {
      return;
    }
    this.spotifyService.searchMusic(this.query).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
