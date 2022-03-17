import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './task-2/header/header.component';
import { CaroselComponent } from './task-2/carosel/carosel.component';
import { MainComponent } from './task-2/main/main.component';
import { FooterComponent } from './task-2/footer/footer.component';
import { AboutMeComponent } from './task1/about-me/about-me.component';
import { Task1HeaderComponent } from './task1/task1-header/task1-header.component';
import { MySkillsComponent } from './task1/my-skills/my-skills.component';
import { PortfolioComponent } from './task1/portfolio/portfolio.component';
import { Footer2Component } from './task1/footer2/footer2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaroselComponent,
    MainComponent,
    FooterComponent,
    AboutMeComponent,
    Task1HeaderComponent,
    MySkillsComponent,
    PortfolioComponent,
    Footer2Component,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
