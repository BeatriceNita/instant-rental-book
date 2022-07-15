import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight(this.appHighlight); /*so that we can declare the specific color in the component
                                            where we want to use the directive*/
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight('');
  }

  private setHighlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
