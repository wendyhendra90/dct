import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DctacademyComponent } from './content/dctacademy/dctacademy.component';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/login/register/register.component';
import { NewsComponent } from './content/news/news.component';
import { DatanonplayerComponent } from './content/register/data/datanonplayer/datanonplayer.component';
import { DataplayerComponent } from './content/register/data/dataplayer/dataplayer.component';
import { DatateamComponent } from './content/register/data/datateam/datateam.component';
import { DoneregisComponent } from './content/register/doneregis/doneregis.component';
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
  {path:'registeam',component:RegisteamComponent,
  canActivate:[AuthGuard]},
  {path:'regisplayer',component:RegisplayerComponent,
  canActivate:[AuthGuard]},
  {path:'regisnonplayer',component:RegisnonplayerComponent,
  canActivate:[AuthGuard]},
  {path:'doneregis',component:DoneregisComponent},
  {path:'datateam',component:DatateamComponent,
  canActivate:[AuthGuard]},
  {path:'dataplayer',component:DataplayerComponent,
  canActivate:[AuthGuard]},
  {path:'datanonplayer',component:DatanonplayerComponent,
      canActivate:[AuthGuard],},
  {path:'login',component:LoginComponent},
  {path:'register_akun',component:RegisterComponent,
  canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
