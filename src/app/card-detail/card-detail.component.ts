import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../card";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../data.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: Card;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.card = this.dataService.getCardById(id);

  }

  applyCard(cardName: string): void{
    alert(`Congratulation:\n${cardName} is successfully applied!`);
  }

  goBack(): void{
    this.location.back();
  }

}
