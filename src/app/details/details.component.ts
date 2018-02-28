import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash"

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	characterId: number;
	character;

	constructor(private route: ActivatedRoute, private http : HttpClient) {
		this.route.params.subscribe(res => {
			console.log(res.id)
			this.characterId = res.id
		})

		this.http.get("http://gateway.marvel.com/v1/public/characters/" + this.characterId + "?ts=1000&apikey=8d4fb63f32f1e6c7e6ea1614c26c306d&hash=1c9c679cc29228a724e6be0fe57892e6").subscribe(x => {
			this.character = _.first(x.data.results);
		})
	}

	ngOnInit() {
	}

}
