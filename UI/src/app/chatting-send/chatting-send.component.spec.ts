import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingSendComponent } from './chatting-send.component';

describe('ChattingSendComponent', () => {
  let component: ChattingSendComponent;
  let fixture: ComponentFixture<ChattingSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattingSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
