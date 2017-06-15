import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300) // wait 300 seconds after each keystroke before considering the term.
      .distinctUntilChanged() // ignore if next search term is same as previous.
      .switchMap(term => term // switch to new observable each time the term changes.
        // return http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there is no search term.
        : Observable.of<Hero[]>([])
      )
      .catch(err => {
        // TODO: add real error handling
        console.log(err);
        return Observable.of<Hero[]>([]);
      });
  }

  search(term: string): void {
    // push search term into observable stream.
    this.searchTerms.next(term);
  }

  gotoDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
