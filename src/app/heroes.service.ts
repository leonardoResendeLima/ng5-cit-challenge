import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarvelHeroes } from '../assets/interfaces/marvelHeroes';
import { Md5 } from 'ts-md5';

@Injectable()
export class HeroesService {

	// Getting private keys from enviroment
	private _publicKey: string = environment.apiAuthentication.publicKey;
	private _privateKey: string = environment.apiAuthentication.privateKey;
	private _timestamp: string = new Date().getTime().toString();
	private _md5 = this.getHashKey();
	
	constructor(private http: HttpClient) { }

	// API - Get Heroes
	public getHeroes() {
		// Setting Get Parameters
		const params = new HttpParams()
			.set("ts", this._timestamp)
			.set("apikey", this._publicKey)
			.set("hash", this._md5)
			.set("limit", "10")

		return this.http.get<MarvelHeroes>(environment.apiUrl.concat(environment.methods.getHeroes), { params });
	}

	// API - Get Hero
	public getHero(characterId) {
		// Setting Get Parameters
		const params = new HttpParams()
			.set("ts", this._timestamp)
			.set("apikey", this._publicKey)
			.set("hash", this._md5)

		return this.http.get<MarvelHeroes>(environment.apiUrl.concat(environment.methods.getHero, characterId), { params })
		
	}

	// Function to provide the Hash Key for the Marvel API
	private getHashKey() {
		// Concat timestamps and keys for md5 hash
		var concatKey = this._timestamp.concat(this._privateKey, this._publicKey)
		// Hashing concat string to md5
		return Md5.hashStr(concatKey).toString();
	}

}
