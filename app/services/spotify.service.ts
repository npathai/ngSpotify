import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  searchUrl: string;
  artistUrl: string;
  albumsUrl: string;

  constructor(private http: Http) {
    console.log('Spotify service initialized...');
  }

  searchMusic(query: string, type='artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+query+'&offset=0&limit=20&type='+type;
    return this.http.get(this.searchUrl).map(res => res.json());
  }

  getArtist(id: string, type='artist') {
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.artistUrl).map(res => res.json());
  }

  getAlbums(artistId: string, type='artist') {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this.http.get(this.albumsUrl).map(res => res.json());
  }
}
