import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagedItemDirective } from "./keyboard-managed-item..directive";

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch(event.key) {
      case 'ArrowUp':
          this.moveFocus(ArrowDirection.Right).focus();
          break;
      case 'ArrowDown':
          this.moveFocus(ArrowDirection.Left).focus();
          break;
      case 'ArrowLeft':
          this.moveFocus(ArrowDirection.Left).focus();
          break;
      case 'ArrowRight':
          this.moveFocus(ArrowDirection.Right).focus();
          break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction == ArrowDirection.Left
      ? items[items.length - 1]
      : items[0]
  }
}

enum ArrowDirection {
  Left = -1,
  Right = 1,
}