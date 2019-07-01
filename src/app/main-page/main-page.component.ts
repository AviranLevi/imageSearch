import { SignUpService } from "./../sign-up/sign-up.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../sign-up/sign-up.interface";
import { Image } from "./image.interface";
import { ImageService } from "./shared/image.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  users: User[];
  images: Image[];

  constructor(
    private signUpService: SignUpService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.users = this.signUpService.getUsers();
  }

  handleError(error) {
    console.log(error);
  }

  searchImages(query: string) {
    return this.imageService
      .getImage(query)
      .subscribe(
        data => this.imageData(data),
        error => this.handleError(error),
        () => console.log("request complete")
      );
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
  }
}
