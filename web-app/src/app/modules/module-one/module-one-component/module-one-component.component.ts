import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '../../share/services/global.service';
import { Subscription } from 'rxjs';

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
  getOne: Subscription;
  getTwo: Subscription;
  getThree: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    public globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.getOne = this.globalService.globalOne.subscribe(res => {
      console.log("ModuleOne globalOne", res);
    });
    this.getTwo = this.globalService.globalTwo.subscribe(res => {
      console.log("ModuleOne globalTwo", res);
    });
    this.getThree = this.globalService.globalThree.subscribe(res => {
      console.log("ModuleOne globalThree", res);
    });
  }

  ngOnDestroy() {
    this.getOne && this.getOne.unsubscribe();
    this.getTwo && this.getTwo.unsubscribe();
    this.getThree && this.getThree.unsubscribe();
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
