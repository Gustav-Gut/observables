import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/detail/:id', component: CharacterDetailComponent },
  { path: 'locations', component: LocationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
