import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FindImageService {

  private API_URL = 'https://pixabay.com/api/?key=';
  private API_KEY = '10240012-3f9ee1da9e685f448195632cd';
  constructor(private http: HttpClient) {
  }

  getImage(query: any) {
     return this.http.get(this.API_URL + this.API_KEY + '&q=' + query);
  }
}
// .pipe(map(res => res.json()))
