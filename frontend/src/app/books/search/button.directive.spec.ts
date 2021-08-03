import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDirective } from './button.directive';
import { YearComponent } from './year/year.component';

describe('ButtonDirective', () => {
    let fixture: ComponentFixture<YearComponent>
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [YearComponent, ButtonDirective],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [HttpClientModule],
        })
            .createComponent(YearComponent);
        fixture.detectChanges(); // initial binding
    });

    it('should have grey', () => {
        const h2: HTMLElement = fixture.nativeElement.querySelector('button[type="submit"]');
        const bgColor = h2.style.color;
        expect(bgColor).toBe('white');
    });
});
