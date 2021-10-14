import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DctacademyComponent } from './content/dctacademy/dctacademy.component';
import { HomeComponent } from './content/home/home.component';
import { NewsComponent } from './content/news/news.component';
import { RegisnonplayerComponent } from './content/register/regisnonplayer/regisnonplayer.component';
import { RegisplayerComponent } from './content/register/regisplayer/regisplayer.component';
import { RegisteamComponent } from './content/register/registeam/registeam.component';
import { TournamentComponent } from './content/tournament/tournament.component';
import { WonderfulindonesiaComponent } from './content/wonderfulindonesia/wonderfulindonesia.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'dctacademy',component:DctacademyComponent},
  {path:'wonderfulindonesia',component:WonderfulindonesiaComponent},
  {path:'news',component:NewsComponent},
  {path:'registeam',component:RegisteamComponent},
  {path:'regisplayer',component:RegisplayerComponent},
  {path:'regisnonplayer',component:RegisnonplayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
