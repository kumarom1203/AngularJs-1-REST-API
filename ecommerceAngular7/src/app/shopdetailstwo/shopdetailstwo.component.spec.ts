import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailstwoComponent } from './shopdetailstwo.component';

describe('ShopdetailstwoComponent', () => {
  let component: ShopdetailstwoComponent;
  let fixture: ComponentFixture<ShopdetailstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdetailstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
