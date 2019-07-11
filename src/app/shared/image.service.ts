import { environment } from "./../../environments/environment";
import { Injectable, EventEmitter } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject, BehaviorSubject, Subject } from "rxjs";

export interface Response {
  hits: Image[];
  totalHits: number;
}

export interface Image {
  likes?: number;
  comments?: number;
  webformatURL?: string;
  largeImageURL?: string;
}

@Injectable()
export class ImageService {
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + "&q=";

  page: number = 1;
  constructor(private _http: HttpClient) {}

  search(query: string) {
    return this._http
      .get<Response>(this.URL + query + `&page=${this.page}`)
      .pipe(
        map(data => {
          const res: Response = {
            hits: data.hits,
            totalHits: data.totalHits
          };

          return res.hits;
        })
      );
  }

  nextPage() {
    return this.page++;
  }
}
