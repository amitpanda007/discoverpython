import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fireworks',
  templateUrl: 'fireworks.component.html',
  styleUrls: ['fireworks.component.scss'],
})
export class FireworksComponent implements OnInit {
  @Input() fireworkColor: any = '#ffffff';
  //#db1f48, #004369

  constructor() {}

  ngOnInit(): void {}
}
