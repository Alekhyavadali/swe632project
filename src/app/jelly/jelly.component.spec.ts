import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyComponent } from './jelly.component';

describe('JellyComponent', () => {
  let component: JellyComponent;
  let fixture: ComponentFixture<JellyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JellyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
