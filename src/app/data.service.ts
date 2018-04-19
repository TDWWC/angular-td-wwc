import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Card } from './card';
import { CARDS } from './mock-data';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private dataUrl = "https://raw.githubusercontent.com/ybflame/hackondata/master/cards.json";

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<Card[]> {
    //return of(CARDS);
    //return (CARDS);
    return this.http.get<Card[]>(this.dataUrl);
  }

  getCardById(id: number): Card {
    return CARDS.find((card) => card.id === id);
  }
}
