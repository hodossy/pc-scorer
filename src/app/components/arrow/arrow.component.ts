import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {
  height: number = 0;
  width: number = 0;

  @HostBinding('class') @Input() direction: 'down' | 'right' | 'downright' = 'right';

  constructor(private readonly host: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    const nativeHost = this.host.nativeElement as HTMLElement;
    queueMicrotask(() => {
      this.height = nativeHost.offsetHeight;
      this.width = nativeHost.offsetWidth;
    });
  }

}
