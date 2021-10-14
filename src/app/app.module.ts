import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AuthInterceptor } from './auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { TournamentComponent } from './content/tournament/tournament.component';
import { DctacademyComponent } from './content/dctacademy/dctacademy.component';
import { WonderfulindonesiaComponent } from './content/wonderfulindonesia/wonderfulindonesia.component';
import { NewsComponent } from './content/news/news.component';
import { RegisteamComponent } from './content/register/registeam/registeam.component';
import { RegisplayerComponent } from './content/register/regisplayer/regisplayer.component';
import { RegisnonplayerComponent } from './content/register/regisnonplayer/regisnonplayer.component';

const material=[
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TournamentComponent,
    DctacademyComponent,
    WonderfulindonesiaComponent,
    NewsComponent,
    RegisteamComponent,
    RegisplayerComponent,
    RegisnonplayerComponent
  ],
  imports: [
    material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports:[material],
  providers: [
    //{
    // provide: HTTP_INTERCEPTORS,
    // useClass: AuthInterceptor,
    // multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
