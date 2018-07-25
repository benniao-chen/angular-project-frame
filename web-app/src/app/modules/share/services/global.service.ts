import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Injectable()
export class GlobalService {

    globalOne: EventEmitter<boolean> = new EventEmitter();
    globalTwo: BehaviorSubject<boolean> = new BehaviorSubject(false);
    globalThree: Subject<boolean> = new Subject();

    constructor(

    ) { }

    setGlobalValue(val) {
        this.globalOne.emit(val);
        this.globalTwo.next(val);
        this.globalThree.next(val);
    }




}
