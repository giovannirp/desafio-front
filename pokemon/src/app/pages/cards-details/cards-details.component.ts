import { CardsService } from './../../services/cards.service';
import { Cards } from './../../model/cards.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.css']
})
export class CardsDetailsComponent implements OnInit {

  card: Cards;

  constructor(private cardsService: CardsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    //    this.musicasService.musicaById(this.route.snapshot.params['id'])

    const id = String(this.route.snapshot.paramMap.get('id'));

    this.cardsService.getCardId(id)
    .subscribe(card => this.card = card);
  }

}
