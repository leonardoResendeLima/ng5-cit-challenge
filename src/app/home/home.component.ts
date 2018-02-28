import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarvelHeroes } from "../../assets/interfaces/marvelHeroes";
import { environment } from '../../environments/environment';
import { Md5 } from 'ts-md5';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	// Getting private keys from enviroment
	_timestamp: string = environment.apiAuthentication.timestamp;
	_publicKey: string = environment.apiAuthentication.publicKey;
	_privateKey: string = environment.apiAuthentication.privateKey;

	characters;

	constructor(private http: HttpClient) {

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
			.set("limit", "10")

		// API Call
		this.http.get<MarvelHeroes>(environment.apiUrl.concat(environment.methods.getHeroes), { params })
			.subscribe(data => {
				// Setting returned data to class
				var a: MarvelHeroes = data;
				this.characters = a.data.results
			})
	}
}