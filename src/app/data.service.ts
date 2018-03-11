import { Injectable } from '@angular/core';

import { Card } from './card';
import { CARDS } from './mock-data'

@Injectable()
export class DataService {

  constructor() { }


  //TODO: add async retrieval later on

  getCards(): Card[] {
    return CARDS;
  }

  getCardById(id: number): Card {
    return CARDS.find((card) => card.id === id);
  }
}
