import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Soldier 76' },
      { id: 1, name: 'Winston' },
      { id: 11, name: 'Widowmaker' },
      { id: 12, name: 'Tracer' },
      { id: 13, name: 'McCree' },
      { id: 14, name: 'Genji' },
      { id: 15, name: 'Hanzo' },
      { id: 16, name: 'Mei' },
      { id: 17, name: 'Torbjorn' },
      { id: 18, name: 'Widowmaker' },
      { id: 19, name: 'Roadhog' },
      { id: 20, name: 'Mercy' },
    ];
    return { heroes };
  }
}
