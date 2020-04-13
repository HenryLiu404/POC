import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingViewComponent } from './chatting-view.component';

describe('ChattingViewComponent', () => {
  let component: ChattingViewComponent;
  let fixture: ComponentFixture<ChattingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
