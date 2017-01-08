import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {ImageUrlService} from '../../services/imageurl.service';
import {Artist} from '../../../models/artist';
import {Album} from '../../../models/album';
@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(
      private spotifyService: SpotifyService,
      private imageUrlService: ImageUrlService,
      private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.spotifyService.getArtist(id)
            .subscribe(artist => {
              this.artist = artist;
              if (artist.images.length > 0) {
                this.imageUrlService.imageFound(artist.images[0].url);
              }
            });

            this.spotifyService.getAlbums(id)
              .subscribe(albums => {
                this.albums = albums.items; 
              });
        });
    }
}
