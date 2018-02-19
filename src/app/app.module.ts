import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';



import { MainComponent } from './main/main.component';
import { RouteModule } from './route';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonService } from './services/person.service';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [MainComponent]
})
export class AppModule { }
