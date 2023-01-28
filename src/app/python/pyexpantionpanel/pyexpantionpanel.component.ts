import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pyexpantionpanel',
  templateUrl: 'pyexpantionpanel.component.html',
  styleUrls: ['pyexpantionpanel.component.scss'],
})
export class PyExpantionPanelComponent implements OnInit {
  @Input() ownStep: number = 0;
  @Input() currentStep: number = 0;
  @Input() showPrevious: boolean = false;
  @Input() nextBtnText: string = 'Next';
  @Input() prevBtnText: string = 'Prev';

  @Input() title: string = 'TITLE';
  @Input() description: string = 'Description';

  @Output() panleClicked: EventEmitter<any> = new EventEmitter();
  @Output() goToNext: EventEmitter<any> = new EventEmitter();
  @Output() goBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  nextStep() {
    console.log(`Next Clicked ${this.ownStep}`);
    this.goToNext.emit(true);
  }

  prevStep() {
    this.goBack.emit(true);
  }

  panelSelected() {
    this.panleClicked.emit(this.ownStep);
  }
}
