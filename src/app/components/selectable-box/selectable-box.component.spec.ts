import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableBoxComponent } from './selectable-box.component';

describe('SelectableBoxComponent', () => {
  let component: SelectableBoxComponent;
  let fixture: ComponentFixture<SelectableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectableBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
