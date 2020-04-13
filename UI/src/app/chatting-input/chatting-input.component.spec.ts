import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingInputComponent } from './chatting-input.component';

describe('ChattingInputComponent', () => {
  let component: ChattingInputComponent;
  let fixture: ComponentFixture<ChattingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
