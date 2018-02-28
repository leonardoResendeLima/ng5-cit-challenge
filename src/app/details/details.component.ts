// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

// 3rd Party Libraries Dependencies
import * as _ from "lodash"

// Interfaces
import { MarvelHeroes } from "../../assets/interfaces/marvelHeroes";
// Config Files
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
	// Getting private keys from enviroment
	_timestamp: string = environment.apiAuthentication.timestamp;
	_publicKey: string = environment.apiAuthentication.publicKey;
	_privateKey: string = environment.apiAuthentication.privateKey;

	characterId: string;
	character;

	constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
		// Retrieving id parameter
		this.route.params.subscribe(res => {
			if (!res.id)
				this.router.navigate(['']);
			else
				this.characterId = res.id;
		})
	}

	ngOnInit() {
		// Concat timestamps and keys for md5 hash
		var concatKey = this._timestamp.concat(this._privateKey, this._publicKey)
		// Hashing concat string to md5
		var md5 = Md5.hashStr(concatKey).toString();

		// Setting Get Parameters
		const params = new HttpParams()
			.set("ts", this._timestamp)
			.set("apikey", this._publicKey)
			.set("hash", md5)

		// API Call
		this.http.get<MarvelHeroes>(environment.apiUrl.concat(environment.methods.getHero, this.characterId), { params })
			.subscribe(data => {
				// Setting returned data to class
				var a: MarvelHeroes = data;
				this.character = a.data.results;
			})
	}

}
