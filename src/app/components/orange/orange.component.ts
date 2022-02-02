import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {
  boxes = new Array(11).fill(0).map(() => ({ value: null }))

  constructor() { }

  ngOnInit(): void {
  }

}
