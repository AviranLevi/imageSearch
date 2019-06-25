import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpInputsComponent } from "./sign-up/sign-up-inputs/sign-up-inputs.component";
import { SignUpBtnsComponent } from "./sign-up/sign-up-btns/sign-up-btns.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ImageListComponent } from "./main-page/image-list/image-list.component";

import { ImageService } from "./main-page/shared/image.service";
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUpInputsComponent,
    SignUpBtnsComponent,
    MainPageComponent,
    ImageListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
