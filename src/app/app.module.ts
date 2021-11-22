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
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AuthInterceptor } from './auth.interceptor';
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
import { LoginComponent } from './content/login/login.component';
import { DoneregisComponent } from './content/register/doneregis/doneregis.component';
import { DatateamComponent } from './content/register/data/datateam/datateam.component';
import { DataplayerComponent } from './content/register/data/dataplayer/dataplayer.component';
import { DatanonplayerComponent } from './content/register/data/datanonplayer/datanonplayer.component';
import { RegisterComponent } from './content/login/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




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
  MatTableModule,
  MatSortModule,
  MatTableExporterModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatListModule,
  MatCarouselModule.forRoot()
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
    RegisnonplayerComponent,
    LoginComponent,
    DoneregisComponent,
    DatateamComponent,
    DataplayerComponent,
    DatanonplayerComponent,
    RegisterComponent
  ],
  imports: [
    material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports:[material],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
