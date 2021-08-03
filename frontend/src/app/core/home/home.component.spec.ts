import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debug: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement
    fixture.detectChanges();
  });

  it('Should have welcome message', () => {
    const p = debug.query(By.css('p.welcome'))
    expect(p.nativeElement.textContent).toBe('WELCOME TO BookLand!')
  })
  it('Should show login and register links if not logged in user', () => {
    component.isUser = null
    const links = debug.query(By.css('p.links'))
    expect(links.nativeElement.style.display).not.toBe('none')
  })
  it('Should not show login and register links if not logged in user', () => {
    component.isUser = 'sometoken'
    const links = debug.query(By.css('p.links'))

    expect(links.nativeElement.style.display).toBe('')
  })
});
