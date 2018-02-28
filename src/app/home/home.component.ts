import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { md5 } from "md5";
import { MarvelHeroes } from "../../assets/interfaces/marvelHeroes";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	_privateKey = "9155993b682a06759d001d624b9fb0b4e3084b1e"
	_publicKey = "8d4fb63f32f1e6c7e6ea1614c26c306d"
	timestamp = new Date().getTime().toString();
	// hash = md5(this.timestamp + this._privateKey + this._publicKey)

	characters;

	constructor(private http: HttpClient) {

		// this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").subscribe(x => {
		// 	this.posts = x;
		// 	console.log(this.posts.length);
		// })
	}
	ngOnInit() {
		this.http.get<MarvelHeroes>("http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=8d4fb63f32f1e6c7e6ea1614c26c306d&hash=1c9c679cc29228a724e6be0fe57892e6").subscribe(x => {
			var a : MarvelHeroes = x;
			this.characters = a.data.results;

		})
	}
}