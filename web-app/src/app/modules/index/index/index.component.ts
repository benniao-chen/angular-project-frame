import { Component, OnInit } from '@angular/core';
import { TranslateService} from 'ng2-translate';
import { Http } from '@angular/http';
import { Router} from '@angular/router';
import { GlobalService } from '../../share/services/global.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  currency: string = "1111";
  test: string = "1234";

  showSecond: boolean = false;

  constructor(
    private translateService: TranslateService,
    private http: Http,
    private router: Router,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
  }

  emitData() {
    this.globalService.setGlobalValue(true);
  }

  showValue(value) {
    console.log(value);
  }

  goToModule(tab) {
    if(tab == 1) {
      this.router.navigate(["ModuleOne"]);
    }else {
      this.router.navigate(["ModuleTwo"]);
    }
  }

}
