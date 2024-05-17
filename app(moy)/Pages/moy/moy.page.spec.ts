import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoyPage } from './moy.page';

describe('MoyPage', () => {
  let component: MoyPage;
  let fixture: ComponentFixture<MoyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
