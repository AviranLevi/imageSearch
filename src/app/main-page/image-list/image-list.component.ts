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

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  searchImages(query) {
    this.imageService.searchImages(query);
  }
}
