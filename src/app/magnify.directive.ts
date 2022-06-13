import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {
  private readonly defaultFontSize: any;
  private counter;

  constructor(private element: ElementRef) {
    this.defaultFontSize = window.getComputedStyle(element.nativeElement).fontSize;
    this.defaultFontSize = parseFloat(this.defaultFontSize.substring(0, this.defaultFontSize.length - 2));
    this.counter = 0;
    this.element.nativeElement.style.cursor = "pointer";
  }

  private magnify() {
    let fontSizeArray = [this.defaultFontSize, this.defaultFontSize + 3, this.defaultFontSize + 6, this.defaultFontSize + 9];
    let fontSize = fontSizeArray[++ this.counter % fontSizeArray.length];
    this.element.nativeElement.style.fontSize = `${fontSize}px`;
  }

  @HostListener("click") onClick() { this.magnify(); }

}
