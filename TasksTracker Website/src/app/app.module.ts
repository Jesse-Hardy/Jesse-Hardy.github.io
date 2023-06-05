import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component";
import { HomeComponent } from "./pages/home.component";
import { AboutComponent } from "./pages/about.component";
import { ServicesComponent } from "./pages/services.component";
import { FaqComponent } from "./pages/faq.component";
import { ContactComponent } from "./pages/contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
