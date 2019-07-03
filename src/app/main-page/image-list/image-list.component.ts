import { Component, OnInit } from "@angular/core";
import { ImageService, Image } from "../../shared/image.service";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {
  images$: Observable<Image[]> = new BehaviorSubject<Image[]>([]);
  query$ = new Subject<string>();

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images$ = this.query$.pipe(
      // debounceTime(500),
      switchMap(query => this.imageService.search(query)),
      tap(console.log)
    );
  }

  searchImages(query) {
    this.query$.next(query);
  }
}
