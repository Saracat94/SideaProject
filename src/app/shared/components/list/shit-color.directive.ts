import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShitColor]',
})
export class ShitColorDirective {
  @Input() set appShitColor(rating: number | undefined) {
    if ((rating || 0) <= 0.4) {
      this._el.nativeElement.style.color = 'brown';
    }
  }
  constructor(private _el: ElementRef) {}
}
