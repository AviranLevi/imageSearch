import { Http, Headers } from "@angular/http";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + "&q=";

  constructor(private _http: Http) {}

  getImage(query) {
    return this._http.get(this.URL + query).pipe(map(res => res.json()));
  }
}
