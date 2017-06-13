import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroSerive: HeroService) { }

  ngOnInit(): void {
    this.setTopHero();
  }

  setTopHero(): void {
    this.heroSerive.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
