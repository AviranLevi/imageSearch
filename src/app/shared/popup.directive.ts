import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appPopupToggle]"
})
export class PopupDirective {
  @HostBinding("class.open") isOpen = false;
  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
