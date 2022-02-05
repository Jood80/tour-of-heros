import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interface/hero';
import { HEROS } from '../mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROS);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
