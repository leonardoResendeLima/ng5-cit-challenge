import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroesService } from './heroes.service';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailsComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [HeroesService],
	bootstrap: [AppComponent]
})
export class AppModule { }
