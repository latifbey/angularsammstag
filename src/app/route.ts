import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class RouteModule { }