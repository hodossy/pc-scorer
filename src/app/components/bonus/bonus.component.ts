import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {
  @Input() available: number = 0;
  @Input() used: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
