import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeAddressComponent } from './mange-address.component';

describe('MangeAddressComponent', () => {
  let component: MangeAddressComponent;
  let fixture: ComponentFixture<MangeAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
