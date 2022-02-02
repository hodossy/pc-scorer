import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purple',
  templateUrl: './purple.component.html',
  styleUrls: ['./purple.component.scss']
})
export class PurpleComponent implements OnInit {
  boxes = new Array(11).fill(0).map(() => ({ value: null }))

  constructor() { }

  ngOnInit(): void {
  }

}
