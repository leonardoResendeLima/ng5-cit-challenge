import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeroesService } from '../heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let service: HeroesService


	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [HeroesService]
		})
		service = TestBed.get(HeroesService);
	});


	it("should load 10 elements from the API", () => {
		service.getHeroes().subscribe(a => {
			expect(a.data.results.length).toBe(10);
		})
	})
});
