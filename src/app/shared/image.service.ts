import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

interface Response {
  hits: Image[];
}

export interface Image {
  likes?: number;
  comments?: number;
  webformatURL?: string;
  largeImageURL?: string;
}

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private pageNumber: number = 1;
  private URL: string =
    this.API_URL + this.API_KEY + "&q=" + `&page=${this.pageNumber}`;

  constructor(private _http: HttpClient) {}

  search(query: string) {
    console.log(this.URL);
    return this._http
      .get<Response>(this.URL + query)
      .pipe(map(({ hits }) => hits));
  }

  nextPage() {
    this.pageNumber++;
  }
}
