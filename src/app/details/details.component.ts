import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	character: number;

	constructor(private route: ActivatedRoute) {
		this.route.params.subscribe(res => {
			console.log(res.id)
			this.character = res.id
		})
	}

	ngOnInit() {
	}

}
