import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let debug: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement
    fixture.detectChanges();
  });

  it('Should show guest nav when user not logged', () => {
    component.isLogged = null
    const el = debug.query(By.css('.not-logged')).nativeElement
    expect(el.style.display).toBe('')
  });
  it('Should not show guest nav when user not logged', () => {
    component.isLogged = null
    const el = debug.query(By.css('.not-logged')).nativeElement
    expect(el.style.display).toBe('')
  });
});
