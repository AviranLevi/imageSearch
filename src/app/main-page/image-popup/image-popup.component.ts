import { Image } from "../../shared/image.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-image-popup",
  templateUrl: "./image-popup.component.html",
  styleUrls: ["./image-popup.component.css"]
})
export class ImagePopupComponent {
  @Input() image: Image;

  close() {
    this.image = undefined;
  }
}
