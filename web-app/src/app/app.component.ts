import { Component, OnInit } from '@angular/core';
import { TranslateService} from 'ng2-translate';
import { Http } from '@angular/http';

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
}
