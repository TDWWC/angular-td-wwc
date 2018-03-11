import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import { DataService } from '../data.service'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];
  constructor(private dataService: DataService) { }

  getCards(): void {
    this.cards = this.dataService.getCards();
  }

  ngOnInit() {
    this.getCards();
  }

}
