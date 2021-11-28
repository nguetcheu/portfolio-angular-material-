import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from "./header/header.component";
import {EducationComponent} from "./education/education.component";
import {CompetencesComponent} from "./competences/competences.component";
import {FooterComponent} from "./footer/footer.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {IntroComponent} from "./intro/intro.component";
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EducationComponent,
        CompetencesComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent,
        IntroComponent,
        ExperienceComponent
    ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
