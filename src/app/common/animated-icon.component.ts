import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'animated-icon',
  template: ` <mat-icon
    [ngStyle]="{ color: iconColor }"
    aria-hidden="false"
    class="material-symbols-outlined"
    [ngClass]="{ complete: icon === 1 }"
    (click)="iconClicked()"
    >{{ currentIcon }}</mat-icon
  >`,
})
export class AnimatedIconComponent implements OnInit {
  // The default icon we select is the first of the array
  @Input() icon: number = 0;

  // The icons property is an array of classes
  @Input() icons: string[] = [];

  // This setter toggles the animation and reset the icon
  @Input() set animate(animate) {
    this._animate = animate;
    if (!this._animate) {
      this.icon = 0;
    }
  }

  // The default interval for updates is set to 1 second
  @Input() delay: number = 1000;

  @Input() step: boolean = true;

  @Input() auto: boolean = false;

  @Input() iconColor = 'black';

  @Output() animationCompleted: EventEmitter<any> = new EventEmitter();

  // This boolean determines if the icon is animating or not
  _animate: boolean = true;

  // This getter is used in the template to get the selected icon
  get currentIcon() {
    return this.icons[this.icon];
  }

  // This is where the animation is started
  ngOnInit() {
    if (this.auto) {
      this.autoAnimation();
    }
  }

  // This is the getter for the animate property
  get animate() {
    return this._animate;
  }

  iconClicked() {
    console.log('Icon Clicked');
    this.stepAnimation();
  }

  // Update the icon if animation is enabled
  updateIcon() {
    if (this.animate) {
      // Increase the icon if we are still within the limit of the set
      if (this.icon < this.icons.length - 1) {
        return this.icon++;
      }
      // Set the icon to zero if we reached the limit
      return (this.icon = 0);
    }
  }

  // This startAnimation method runs updateIcon on each delay
  autoAnimation() {
    setInterval(() => this.updateIcon(), this.delay);
  }

  stepAnimation() {
    if (this.step) {
      if (this.icon < this.icons.length - 1) {
        this.icon++;
        if (this.icon == this.icons.length - 1) {
          this.animationCompleted.emit(true);
        }

        return this.icon;
      }
      this.animationCompleted.emit(false);
      return (this.icon = 0);
    }
  }
}
