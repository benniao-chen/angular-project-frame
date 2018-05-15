import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-module-one-component',
  templateUrl: './module-one-component.component.html',
  styleUrls: ['./module-one-component.component.css']
})
export class ModuleOneComponentComponent implements OnInit {
  @ViewChild('inputOne') inputOne: ElementRef;
  @ViewChild('inputTwo', {read: ViewContainerRef}) inputTwo: ViewContainerRef;

  jouneryy: string = "test";
  inputOneModel: string = "one";
  inputTwoModel: string = "two";


  constructor() { }

  ngOnInit() {
    console.log(this.inputOne, this.inputTwo);
  }

}
