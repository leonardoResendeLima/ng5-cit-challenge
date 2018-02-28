// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

// 3rd Party Libraries Dependencies
import * as _ from "lodash"

// Interfaces
import { MarvelHeroes } from "../../assets/interfaces/marvelHeroes";

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	characterId: number;
	character;

	constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
		// Retrieving id parameter
		this.route.params.subscribe(res => {
			if (!res.id)
				this.router.navigate(['']);
			else
				this.characterId = res.id;
		})
		const params = new HttpParams()
			.set("ts", "1000")
			.set("apikey", "8d4fb63f32f1e6c7e6ea1614c26c306d")
			.set("hash", "1c9c679cc29228a724e6be0fe57892e6")

		this.http.get<MarvelHeroes>("http://gateway.marvel.com/v1/public/characters/" + this.characterId, { params })
			.subscribe(data => {
				var a: MarvelHeroes = data;
				this.character = a.data.results;
			})
	}

	ngOnInit() {

	}

}
