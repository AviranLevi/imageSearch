import { Component, OnInit } from "@angular/core";
import { ImageService } from "../shared/image.service";
import { Image } from "../image.interface";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {
  images: Image[];

  // imageData(data) {
  //   data.hits.map(i => {
  //     const imageModel = new Image(
  //       i.likes,
  //       i.comments,
  //       i.webformatURL,
  //       i.largeImageURL
  //     );
  //     this.images.push(imageModel);
  //   });
  // }

  handleError(error) {
    console.log(error);
  }

  constructor(private _imageService: ImageService) {}

  // searchImages(query: string) {
  //   return this._imageService
  //     .getImage(query)
  //     .subscribe(
  //       data => this.imageData(data),
  //       error => this.handleError(error),
  //       () => console.log("request complete")
  //     );
  // }

  ngOnInit() {}
}
