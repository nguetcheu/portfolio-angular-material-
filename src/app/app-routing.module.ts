import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {AboutComponent} from "./about/about.component";
import {CompetencesComponent} from "./competences/competences.component";
import {ContactComponent} from "./contact/contact.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {FooterComponent} from "./footer/footer.component";
import {IntroComponent} from "./intro/intro.component";

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'about', component: AboutComponent},
  { path: 'competence', component: CompetencesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'education', component: EducationComponent},
  { path: 'competence', component: ExperienceComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'intro', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
