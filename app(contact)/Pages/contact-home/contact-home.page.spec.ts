import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactHomePage } from './contact-home.page';

describe('ContactHomePage', () => {
  let component: ContactHomePage;
  let fixture: ComponentFixture<ContactHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
