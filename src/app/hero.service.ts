import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 0) // 2 seconds
    );
  }
  getHero(id: number) {
    return this.getHeroesSlowly()
      .then (heroes => heroes.find(hero => hero.id === id));
  }
}
