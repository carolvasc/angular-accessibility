import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.less']
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = '';
  @Input() public label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
