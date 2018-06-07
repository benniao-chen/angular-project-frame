import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-module-one-component',
  templateUrl: './module-one-component.component.html',
  styleUrls: ['./module-one-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleOneComponentComponent implements OnInit {
  @ViewChild('inputOne') inputOne: ElementRef;
  @ViewChild('inputTwo', {read: ViewContainerRef}) inputTwo: ViewContainerRef;

  jouneryy: string = "test";
  inputOneModel: string = "one";
  inputTwoModel: string = "two";
  test: number = 0;


  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.inputOne, this.inputTwo);
    setInterval(() => {
      this.test ++;
      this.ref.markForCheck();
    }, 1000);
  }

}
