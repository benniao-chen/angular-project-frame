import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-module-one-component',
  templateUrl: './module-one-component.component.html',
  styleUrls: ['./module-one-component.component.css'],
})
export class ModuleOneComponentComponent implements OnInit {
  @ViewChild('inputOne') inputOne: ElementRef;
  @ViewChild('inputTwo', {read: ViewContainerRef}) inputTwo: ViewContainerRef;

  jouneryy: string = "test";
  inputOneModel: string = "one";
  inputTwoModel: string = "two";
  test: any = {
    a: 1,
    b: 2
  }

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.inputOne, this.inputTwo);
  }

  changeTesta(value) {
    //when module-one-two-component changeDetection: ChangeDetectionStrategy.OnPush
    this.test = this.returnNewValue(value); //module-one-two-component will update auto
    // this.test.a = value; //module-one-two-component will not update auto
  }

  returnNewValue(value) {
    return {a: value, b: 'test'};
  }

}
