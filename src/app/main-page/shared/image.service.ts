import { Image } from "./../image.interface";
import { Http, Headers } from "@angular/http";
import { environment } from "./../../../environments/environment";
import { Injectable, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + "&q=";

  images: Image[] = [];
  imageCreated = new EventEmitter<Image[]>();

  constructor(private _http: Http) {}

  getImage(query) {
    return this._http.get(this.URL + query).pipe(map(res => res.json()));
  }

  getImages() {
    return this.images.slice();
  }

  searchImages(query: string) {
    return this.getImage(query).subscribe(
      data => this.imageData(data),
      error => this.handleError(error),
      () => console.log("request complete")
    );
  }

  handleError(error) {
    console.log(error);
  }

  imageData(data) {
    data.hits.map(i => {
      const imageModel: Image = {
        likes: i.likes,
        comments: i.comments,
        webFormatImageURL: i.webformatURL,
        largeImageUrl: i.largeImageURL
      };
      this.images.push(imageModel);
    });

    console.log(this.images);
  }
}
