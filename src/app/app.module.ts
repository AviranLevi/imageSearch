import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpInputsComponent } from "./sign-up/sign-up-inputs/sign-up-inputs.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ImageListComponent } from "./main-page/image-list/image-list.component";

import { ImageService } from "./shared/image.service";
import { UserService } from "./shared/user.service";

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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ImageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
