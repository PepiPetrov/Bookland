import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'button'
})
export class ButtonDirective {
  @HostBinding('style.backgroundColor') col: string = '#bebbbb'
  @HostBinding('style.color') color: string = 'white'
  @HostBinding('style.padding') pad: string = '15px 25px'
  @HostBinding('style.margin-left') left: string = '350px'
  @HostBinding('style.margin-top') top: string = '50px'
  @HostBinding('style.position') pos: string = 'relative';
  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    this.col = '#5f02d8e1'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.col = ''
  }

}
