import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './My_Component/navbar/navbar.component';
import { HomeComponent } from './My_Component/home/home.component';
import { AboutComponent } from './My_Component/about/about.component';
import { WorkExperienceComponent } from './My_Component/work-experience/work-experience.component';
import { ProjectComponent } from './My_Component/project/project.component';
import { SkillComponent } from './My_Component/skill/skill.component';
import { ContactComponent } from './My_Component/contact/contact.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    WorkExperienceComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
