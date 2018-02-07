import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[selfModelValue]',
    host: {
        '(blur)': 'changeValue($event)'
    }
})
export class SelfModelValueDirective implements OnInit {


    constructor(

    ) {

    }

    ngOnInit() {

    }

    changeValue(e) {
        console.log(e);
    }

}
