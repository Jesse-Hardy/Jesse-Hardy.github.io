import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home.component";
import { AboutComponent } from "./pages/about.component";
import { ServicesComponent } from "./pages/services.component";
import { FaqComponent } from "./pages/faq.component";
import { ContactComponent } from "./pages/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "faq", component: FaqComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
