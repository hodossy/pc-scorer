import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.scss']
})
export class YellowComponent implements OnInit {
  boxes = [
    { value: 3, selected: false },
    { value: 6, selected: false },
    { value: 5, selected: false },
    { value: null, selected: false },
    { value: 2, selected: false },
    { value: 1, selected: false },
    { value: null, selected: false },
    { value: 5, selected: false },
    { value: 1, selected: false },
    { value: null, selected: false },
    { value: 2, selected: false },
    { value: 4, selected: false },
    { value: null, selected: false },
    { value: 3, selected: false },
    { value: 4, selected: false },
    { value: 6, selected: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
