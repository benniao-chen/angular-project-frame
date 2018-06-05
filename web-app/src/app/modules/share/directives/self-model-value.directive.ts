import { Directive, HostListener, ElementRef, OnInit, forwardRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

export const SELFNGMODEL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelfModelValueDirective),
    multi: true
};
@Directive({
    selector: '[selfModelValue]',
    providers: [SELFNGMODEL_VALUE_ACCESSOR]
})
export class SelfModelValueDirective implements OnInit, ControlValueAccessor {

    value: string = "";
    input: HTMLInputElement;
    
    // For ControlValueAccessor interface
    onModelChange: Function = () => { };
    onModelTouched: Function = () => { };

    constructor(
        private elementRef: ElementRef, 
        private _renderer: Renderer2
    ) {

    }

    ngOnInit() {
        this.input = this.elementRef.nativeElement;
        setTimeout(() => {
            this.value = this.input.value;
        }, 0);
    }

    @HostListener("keypress", ["$event"])
    handleKeypress(event: any) {
        let keyCode = event.which || event.charCode || event.keyCode;
        let keyChar = String.fromCharCode(keyCode);
        this.value = this.value + keyChar;
        this.onModelChange(this.value);
    }

    writeValue(value: any) {
        console.log(value, "value");
        this._renderer.setAttribute(this.input, 'value', value);
    }

    registerOnChange(fn: any) {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onModelTouched = fn;
    }

}
