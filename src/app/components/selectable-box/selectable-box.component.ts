import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectable-box',
  templateUrl: './selectable-box.component.html',
  styleUrls: ['./selectable-box.component.scss']
})
export class SelectableBoxComponent implements OnInit {
  @HostBinding('class.selected') @Input() selected: boolean = false;

  @HostListener('click')
  onClick() {
    this.selected = !this.selected;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
