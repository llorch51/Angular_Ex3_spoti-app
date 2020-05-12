import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import {  SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
//import { Name3Component } from './';
//import { Name4Component } from './';
//import { PageNotFoundComponent } from './';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component:  SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    //{ path: 'path4', component: Name4Component },
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
