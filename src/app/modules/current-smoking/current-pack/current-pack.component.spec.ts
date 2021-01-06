import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPackComponent } from './current-pack.component';

describe('CurrentPackComponent', () => {
  let component: CurrentPackComponent;
  let fixture: ComponentFixture<CurrentPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
