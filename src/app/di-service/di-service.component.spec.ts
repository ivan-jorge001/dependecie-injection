import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiServiceComponent } from './di-service.component';

describe('DiServiceComponent', () => {
  let component: DiServiceComponent;
  let fixture: ComponentFixture<DiServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
