import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarvelHeroes } from "../../assets/interfaces/marvelHeroes";
import { environment } from '../../environments/environment';
import { Md5 } from 'ts-md5';
import { HeroesService } from '../heroes.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	// Getting private keys from enviroment
	private _timestamp: string = environment.apiAuthentication.timestamp;
	private _publicKey: string = environment.apiAuthentication.publicKey;
	private _privateKey: string = environment.apiAuthentication.privateKey;

	characters;

	constructor(private http: HttpClient, private service: HeroesService) { }

	ngOnInit() {
		this.service.getHeroes().subscribe(data => {
			// Setting returned data to class
			var classHeroes: MarvelHeroes = data;
			this.characters = classHeroes.data.results
		})
	}
}