import { CardsService } from './../../../services/cards.service';
import { Cards } from './../../../model/cards.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Cards[];
  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCard()
    .subscribe(cards => this.cards = cards);
  }

}
