import { Component, OnInit } from '@angular/core';
import { Bonus } from 'src/app/models/bonus';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  Bonus = Bonus;

  constructor() { }

  ngOnInit(): void {
  }

  addBonus(bonus: Bonus) {
  }

}
