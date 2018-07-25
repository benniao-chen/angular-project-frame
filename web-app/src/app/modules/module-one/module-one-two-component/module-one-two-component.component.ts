import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { GetBlobService } from '../../share/services/get-blob.service';
import { GlobalService } from '../../share/services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-module-one-two-component',
  templateUrl: './module-one-two-component.component.html',
  styleUrls: ['./module-one-two-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleOneTwoComponentComponent implements OnInit {

  @Input() testObj: any;
  count: number = 0;
  getOne: Subscription;
  getTwo: Subscription;
  getThree: Subscription;

  constructor(
    public getBlob: GetBlobService,
    public globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.getOne = this.globalService.globalOne.subscribe(res => {
      console.log("ModuleOneTwo globalOne", res);
    });
    this.getTwo = this.globalService.globalTwo.subscribe(res => {
      console.log("ModuleOneTwo globalTwo", res);
    });
    this.getThree = this.globalService.globalThree.subscribe(res => {
      console.log("ModuleOneTwo globalThree", res);
    });
  }

  ngOnDestroy() {
    this.getOne && this.getOne.unsubscribe();
    this.getTwo && this.getTwo.unsubscribe();
    this.getThree && this.getThree.unsubscribe();
  }

  countChange() {
    setTimeout(() => {
      this.count ++;
    }, 0);
  }

  downLoadXLSX() {
    this.getBlob.getBlobData().subscribe(res => {
      this.getBlob.showFile(res, 'test', 'xlsx');
    })
  }

}
