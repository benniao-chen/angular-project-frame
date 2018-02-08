import { Component } from '@angular/core';
import { TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency: string = "1111";
  test: string = "1234";

  showSecond: boolean = false;

  constructor(
    private translateService: TranslateService
  ) {
    
  }

  showValue(value) {
    console.log(value);
  }
}
