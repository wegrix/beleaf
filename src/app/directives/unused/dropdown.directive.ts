import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; // Add class depends on isOpen

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
