import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpInputsComponent } from "./sign-up/sign-up-inputs/sign-up-inputs.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ImageListComponent } from "./main-page/image-list/image-list.component";

import { ImageService } from "./main-page/shared/image.service";
import { RouterModule, Routes } from "@angular/router";
import { SignUpService } from "./sign-up/sign-up.service";

const appRoutes: Routes = [
  { path: "", component: SignUpComponent },
  { path: "home", component: MainPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUpInputsComponent,
    MainPageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ImageService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
