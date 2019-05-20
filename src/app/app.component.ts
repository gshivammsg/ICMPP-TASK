import {Component} from '@angular/core';
import {FindImageService} from './find-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private images: any;
  constructor(private find_image_service: FindImageService) {
  }

  onSearch(query: any) {
    console.log(query.value);
    this.find_image_service.getImage(query.value).subscribe(
      (data) => {
        console.log(data);
        this.images = data.hits;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Request Completed!!!');
      }
    );
  }
}
