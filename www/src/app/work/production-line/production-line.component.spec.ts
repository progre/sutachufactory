import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineComponent } from './production-line.component';

describe('ProductionLineComponent', () => {
  let component: ProductionLineComponent;
  let fixture: ComponentFixture<ProductionLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
