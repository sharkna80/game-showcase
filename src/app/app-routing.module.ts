import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path:'search/:id',
  component: HomeComponent
}, {
  path: 'details/:id',
  component: GameDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
