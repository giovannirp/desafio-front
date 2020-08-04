import { CardsDetailsComponent } from './../../pages/cards-details/cards-details.component';
import { AboutComponent } from './../../pages/about/about.component';
import { HomeComponent } from './../../pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: CardsDetailsComponent},
  {path: 'sobre', component: AboutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
