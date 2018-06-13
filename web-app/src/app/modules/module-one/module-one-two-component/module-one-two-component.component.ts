import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GetBlobService } from '../../share/services/get-blob.service';

@Component({
  selector: 'app-module-one-two-component',
  templateUrl: './module-one-two-component.component.html',
  styleUrls: ['./module-one-two-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleOneTwoComponentComponent implements OnInit {

  @Input() testObj: any;
  count: number = 0;

  constructor(
    public getBlob: GetBlobService,
  ) { }

  ngOnInit() {
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
