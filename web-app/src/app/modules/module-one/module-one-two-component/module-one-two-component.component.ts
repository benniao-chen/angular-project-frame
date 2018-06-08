import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-module-one-two-component',
  templateUrl: './module-one-two-component.component.html',
  styleUrls: ['./module-one-two-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleOneTwoComponentComponent implements OnInit {

  @Input() testObj: any;
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  countChange() {
    setTimeout(() => {
      this.count ++;
    }, 0);
  }

}
