import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitLazyComponent } from './quit-lazy.component';

describe('QuitLazyComponent', () => {
  let component: QuitLazyComponent;
  let fixture: ComponentFixture<QuitLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuitLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
