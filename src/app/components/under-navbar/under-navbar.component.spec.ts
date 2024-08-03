import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderNavbarComponent } from './under-navbar.component';

describe('UnderNavbarComponent', () => {
  let component: UnderNavbarComponent;
  let fixture: ComponentFixture<UnderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
