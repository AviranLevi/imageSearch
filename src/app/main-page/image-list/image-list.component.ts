import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ImageService, Image } from "../../shared/image.service";
import { Observable, BehaviorSubject, Subject, of } from "rxjs";
import { switchMap, tap, scan } from "rxjs/operators";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {
  images$: Observable<Image[]> = new BehaviorSubject<Image[]>([]);
  imagesReset$: Observable<Image[]> = new BehaviorSubject<Image[]>(new Array());
  // page$ = new BehaviorSubject<void>(undefined);

  query$ = new Subject<string>();
  hasMoreToLoad: boolean;
  clearSearch = new BehaviorSubject<any>([]);

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  searchQuery: any;

  @Output() imageSelected = new EventEmitter<Image>();

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    // const count$ = this.page$.pipe(count());

    // this.images$ = combineLatest(this.query$, count$).pipe(
    //   switchMap(([query, page]) => this.imageService.search(query)),
    //   tap(images => {
    //     this.hasMoreToLoad = !!images.length;
    //   }),
    //   scan((imgs, imgsList) => [...imgs, ...imgsList])
    // );

    this.images$ = this.query$.pipe(
      switchMap(query => this.imageService.search(query)),
      tap(images => {
        this.hasMoreToLoad = !!images.length;
        console.log(this.hasMoreToLoad);
      }),

      scan((imgs, imgsList) => [...imgs, ...imgsList])
    );
  }

  searchImages(query) {
    // this.page$ = new BehaviorSubject<void>(undefined);

    this.query$ !== query ? this.images$ : null;

    this.query$.next(query);
  }

  loadMoreOnScroll(query) {
    this.imageService.nextPage();
    this.query$.next(query);
  }

  onSelect(image: Image) {
    this.imageSelected.emit(image);
  }
}
