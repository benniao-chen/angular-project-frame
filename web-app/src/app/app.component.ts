import { Component, OnInit } from '@angular/core';
import { TranslateService} from 'ng2-translate';
import { Http } from '@angular/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currency: string = "1111";
  test: string = "1234";

  showSecond: boolean = false;

  constructor(
    private translateService: TranslateService,
    private http: Http,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/test/atest').subscribe(res => {
      console.log(res);
    })
  }

  showValue(value) {
    console.log(value);
  }

  goToModule(tab) {
    if(tab == 1) {
      this.router.navigate(["moduleOne"]);
    }else {
      this.router.navigate(["moduleTwo"]);
    }
  }
}
