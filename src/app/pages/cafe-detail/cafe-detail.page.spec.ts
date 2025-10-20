import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeDetailPage } from './cafe-detail.page';

describe('CafeDetailPage', () => {
  let component: CafeDetailPage;
  let fixture: ComponentFixture<CafeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
