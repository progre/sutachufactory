import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutachuComponent } from './sutachu.component';

describe('SutachuComponent', () => {
  let component: SutachuComponent;
  let fixture: ComponentFixture<SutachuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutachuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutachuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
