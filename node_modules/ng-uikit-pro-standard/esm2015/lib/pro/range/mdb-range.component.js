/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ViewChild, ElementRef, Renderer2, Input, HostListener, forwardRef, Output, EventEmitter, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
/** @type {?} */
export const RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MdbRangeInputComponent)),
    multi: true,
};
export class MdbRangeInputComponent {
    /**
     * @param {?} renderer
     * @param {?} cdRef
     */
    constructor(renderer, cdRef) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.range = 0;
        this.cloudRange = 0;
        this.visibility = false;
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onchange(event) {
        this.onChange(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    oninput(event) {
        /** @type {?} */
        const value = +event.target.value;
        this.rangeValueChange.emit({ value: value });
        if (this.checkIfSafari()) {
            this.focusRangeInput();
        }
    }
    /**
     * @return {?}
     */
    onclick() {
        this.focusRangeInput();
    }
    /**
     * @return {?}
     */
    onTouchStart() {
        this.focusRangeInput();
    }
    /**
     * @return {?}
     */
    onmouseleave() {
        if (this.checkIfSafari()) {
            this.blurRangeInput();
        }
    }
    /**
     * @return {?}
     */
    focusRangeInput() {
        this.input.nativeElement.focus();
        this.visibility = true;
    }
    /**
     * @return {?}
     */
    blurRangeInput() {
        this.input.nativeElement.blur();
        this.visibility = false;
    }
    /**
     * @param {?} event
     * @param {?=} value
     * @return {?}
     */
    coverage(event, value) {
        if (typeof this.range === 'string' && this.range.length !== 0) {
            return this.range;
        }
        if (!this.default) {
            // if `coverage()` is called by (input) event take value as event.target.value. If it's called manually, take value from parameter.
            // This is needed in situation, when slider value is set by default or ReactiveForms, and value clound is not moved to proper position
            /** @type {?} */
            const newValue = event.target ? event.target.value : value;
            /** @type {?} */
            const newRelativeGain = newValue - this.min;
            /** @type {?} */
            const inputWidth = this.input.nativeElement.offsetWidth;
            /** @type {?} */
            let thumbOffset;
            /** @type {?} */
            const offsetAmmount = 15;
            /** @type {?} */
            const distanceFromMiddle = newRelativeGain - this.steps / 2;
            this.stepLength = inputWidth / this.steps;
            thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
            this.cloudRange = this.stepLength * newRelativeGain - thumbOffset;
            this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', this.cloudRange + 'px');
        }
    }
    /**
     * @return {?}
     */
    checkIfSafari() {
        /** @type {?} */
        const isSafari = navigator.userAgent.indexOf('Safari') > -1;
        /** @type {?} */
        const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
        /** @type {?} */
        const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        /** @type {?} */
        const isOpera = navigator.userAgent.indexOf('Opera') > -1;
        if (isSafari && !isChrome && !isFirefox && !isOpera) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.steps = this.max - this.min;
        if (this.value) {
            this.range = Number(this.value);
            // fix(slider): resolve problem with not moving slider cloud when setting value with [value] or reactive forms
            // Manual call the coverage method to move range value cloud to proper position based on the `value` variable
            this.coverage(new Event('input'), this.value);
            this.cdRef.detectChanges();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        // fix(slider): resolve problem with not moving slider cloud when setting value with [value] or reactive forms
        // Manual call the coverage method to move range value cloud to proper position based on the `value` variable
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.coverage(new Event('input'), value);
        }), 0);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MdbRangeInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-range-input',
                template: "<div *ngIf=\"!default\" class=\"range-field\" #rangeField>\n  <div class=\"track\">\n    <div\n      #rangeCloud\n      class=\"range-cloud\"\n      title=\"range\"\n      [ngClass]=\"{ visible: this.visibility, hidden: !this.visibility }\"\n    >\n      <span class=\"text-transform\">{{ range }}</span>\n    </div>\n  </div>\n  <input\n    #input\n    [name]=\"name\"\n    type=\"range\"\n    [disabled]=\"disabled\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\"\n  />\n</div>\n\n<div *ngIf=\"default\">\n  <input\n    #input\n    class=\"custom-range\"\n    [name]=\"name\"\n    type=\"range\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [attr.value]=\"value\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\"\n    (touchend)=\"blurRangeInput()\"\n  />\n  <span class=\"{{ defaultRangeCounterClass }}\">{{ range }}</span>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [RANGE_VALUE_ACCESOR],
                styles: [".range-field input[type=range]{cursor:pointer;position:relative;background-color:transparent;border:1px solid #fff;outline:0;width:100%;margin:15px 0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.range-field input[type=range]:focus{outline:0}.range-field input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#4285f4;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.range-field input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#4285f4;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.range-field input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}.range-field input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}.range-field input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}.range-field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#4285f4;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0;transition:.3s}.range-field input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}.range-field input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}.range-field input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4;margin-top:-5px}.range-field input[type=range]:-moz-focusring{outline:#fff solid 1px;outline-offset:-1px}.range-field input[type=range]:focus::-moz-range-track{background:#c2c0c2}.range-field input[type=range]::-ms-track{height:3px;background:0 0;border-color:transparent;border-width:6px 0;color:transparent}.range-field input[type=range]::-ms-fill-lower{background:#c2c0c2}.range-field input[type=range]::-ms-fill-upper{background:#c2c0c2}.range-field input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4}.range-field input[type=range]:focus::-ms-fill-lower{background:#c2c0c2}.range-field input[type=range]:focus::-ms-fill-upper{background:#c2c0c2}@supports (--css:variables){input[type=range].mdbMultiRange{padding:0;margin:0;display:inline-block;vertical-align:top}input[type=range].mdbMultiRange.original{position:absolute}input[type=range].mdbMultiRange.original::-webkit-slider-thumb{position:relative;z-index:2}input[type=range].mdbMultiRange.original::-moz-range-thumb{transform:scale(1);z-index:1}input[type=range].mdbMultiRange::-moz-range-track{border-color:transparent}input[type=range].mdbMultiRange.ghost{position:relative}input[type=range].mdbMultiRange.ghost:nth-of-type(n+1){position:absolute}}.multi-range-field{position:relative}.multi-range-field input[type=range]{cursor:pointer;position:relative;background-color:transparent;border:1px solid #fff;outline:0;width:100%;margin:15px 0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.multi-range-field input[type=range]:focus{outline:0}.multi-range-field input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#4285f4;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.multi-range-field input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#4285f4;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.multi-range-field input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}.multi-range-field input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}.multi-range-field input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}.multi-range-field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#4285f4;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0;transition:.3s}.multi-range-field input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}.multi-range-field input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}.multi-range-field input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4;margin-top:-5px}.multi-range-field input[type=range]:-moz-focusring{outline:#fff solid 1px;outline-offset:-1px}.multi-range-field input[type=range]:focus::-moz-range-track{background:#c2c0c2}.multi-range-field input[type=range]::-ms-track{height:3px;background:0 0;border-color:transparent;border-width:6px 0;color:transparent}.multi-range-field input[type=range]::-ms-fill-lower{background:#c2c0c2}.multi-range-field input[type=range]::-ms-fill-upper{background:#c2c0c2}.multi-range-field input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4}.multi-range-field input[type=range]:focus::-ms-fill-lower{background:#c2c0c2}.multi-range-field input[type=range]:focus::-ms-fill-upper{background:#c2c0c2}.thumb-horizontal-wrapper{position:relative;-webkit-transform:rotate(-270deg);transform:rotate(-270deg);top:500px}.multi-range-field input[type=range]+.thumb-horizontal .value{-webkit-transform:rotate(315deg)!important;transform:rotate(315deg)!important}.range-field{position:relative}.range-field .track{position:absolute;right:8px;left:8px;margin-left:-7.5px}.range-field .track .range-cloud{height:30px;width:30px;top:-25px;background-color:#4285f4;position:absolute;color:#fff;border-radius:50%;font-size:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.range-field .track .range-cloud:after{content:'';position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%,70%);transform:translate(-50%,70%);width:0;height:0;border-style:solid;border-width:7px 7px 0;border-color:#4285f4 transparent transparent}.range-field .track .range-cloud.hidden{display:none}.range-field .track .range-cloud.visible{display:block}.range-field .track .range-cloud .text-transform{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
MdbRangeInputComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
MdbRangeInputComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: false },] }],
    rangeCloud: [{ type: ViewChild, args: ['rangeCloud', { static: false },] }],
    rangeField: [{ type: ViewChild, args: ['rangeField', { static: false },] }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    default: [{ type: Input }],
    defaultRangeCounterClass: [{ type: Input }],
    rangeValueChange: [{ type: Output }],
    onchange: [{ type: HostListener, args: ['change', ['$event'],] }],
    oninput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onclick: [{ type: HostListener, args: ['click',] }],
    onTouchStart: [{ type: HostListener, args: ['touchstart',] }],
    onmouseleave: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    MdbRangeInputComponent.prototype.input;
    /** @type {?} */
    MdbRangeInputComponent.prototype.rangeCloud;
    /** @type {?} */
    MdbRangeInputComponent.prototype.rangeField;
    /** @type {?} */
    MdbRangeInputComponent.prototype.id;
    /** @type {?} */
    MdbRangeInputComponent.prototype.required;
    /** @type {?} */
    MdbRangeInputComponent.prototype.name;
    /** @type {?} */
    MdbRangeInputComponent.prototype.value;
    /** @type {?} */
    MdbRangeInputComponent.prototype.disabled;
    /** @type {?} */
    MdbRangeInputComponent.prototype.min;
    /** @type {?} */
    MdbRangeInputComponent.prototype.max;
    /** @type {?} */
    MdbRangeInputComponent.prototype.step;
    /** @type {?} */
    MdbRangeInputComponent.prototype.default;
    /** @type {?} */
    MdbRangeInputComponent.prototype.defaultRangeCounterClass;
    /** @type {?} */
    MdbRangeInputComponent.prototype.rangeValueChange;
    /** @type {?} */
    MdbRangeInputComponent.prototype.range;
    /** @type {?} */
    MdbRangeInputComponent.prototype.stepLength;
    /** @type {?} */
    MdbRangeInputComponent.prototype.steps;
    /** @type {?} */
    MdbRangeInputComponent.prototype.cloudRange;
    /** @type {?} */
    MdbRangeInputComponent.prototype.visibility;
    /** @type {?} */
    MdbRangeInputComponent.prototype.onChange;
    /** @type {?} */
    MdbRangeInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MdbRangeInputComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbRangeInputComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcmFuZ2UvbWRiLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFBTSxPQUFPLG1CQUFtQixHQUFRO0lBQ3RDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBVUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFtRGpDLFlBQW9CLFFBQW1CLEVBQVUsS0FBd0I7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBekNoRSxRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUtULHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckQsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUdmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDOztRQThGbkIsYUFBUTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDMUIsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0lBbEV1RCxDQUFDOzs7OztJQTNCekMs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dUNBQWM7O0lBQ2QsNENBQWU7O0lBQ2YsNENBQW1COztJQThGbkIsMENBQTBCOztJQUMxQiwyQ0FBcUI7Ozs7O0lBbEVULDBDQUEyQjs7Ozs7SUFBRSx1Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBSQU5HRV9WQUxVRV9BQ0NFU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNZGJSYW5nZUlucHV0Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItcmFuZ2UtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLXJhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFuZ2UtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJSYW5nZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmFuZ2VDbG91ZCcsIHsgc3RhdGljOiBmYWxzZSB9KSByYW5nZUNsb3VkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyYW5nZUZpZWxkJywgeyBzdGF0aWM6IGZhbHNlIH0pIHJhbmdlRmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSBkZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSBkZWZhdWx0UmFuZ2VDb3VudGVyQ2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmFuZ2VWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHJhbmdlOiBhbnkgPSAwO1xuICBzdGVwTGVuZ3RoOiBudW1iZXI7XG4gIHN0ZXBzOiBudW1iZXI7XG4gIGNsb3VkUmFuZ2UgPSAwO1xuICB2aXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSkgb25jaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25pbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5yYW5nZVZhbHVlQ2hhbmdlLmVtaXQoeyB2YWx1ZTogdmFsdWUgfSk7XG5cbiAgICBpZiAodGhpcy5jaGVja0lmU2FmYXJpKCkpIHtcbiAgICAgIHRoaXMuZm9jdXNSYW5nZUlucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuZm9jdXNSYW5nZUlucHV0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0Jykgb25Ub3VjaFN0YXJ0KCkge1xuICAgIHRoaXMuZm9jdXNSYW5nZUlucHV0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25tb3VzZWxlYXZlKCkge1xuICAgIGlmICh0aGlzLmNoZWNrSWZTYWZhcmkoKSkge1xuICAgICAgdGhpcy5ibHVyUmFuZ2VJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgZm9jdXNSYW5nZUlucHV0KCkge1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XG4gIH1cblxuICBibHVyUmFuZ2VJbnB1dCgpIHtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xuICB9XG5cbiAgY292ZXJhZ2UoZXZlbnQ6IGFueSwgdmFsdWU/OiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMucmFuZ2UgPT09ICdzdHJpbmcnICYmIHRoaXMucmFuZ2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGVmYXVsdCkge1xuICAgICAgLy8gaWYgYGNvdmVyYWdlKClgIGlzIGNhbGxlZCBieSAoaW5wdXQpIGV2ZW50IHRha2UgdmFsdWUgYXMgZXZlbnQudGFyZ2V0LnZhbHVlLiBJZiBpdCdzIGNhbGxlZCBtYW51YWxseSwgdGFrZSB2YWx1ZSBmcm9tIHBhcmFtZXRlci5cbiAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIGluIHNpdHVhdGlvbiwgd2hlbiBzbGlkZXIgdmFsdWUgaXMgc2V0IGJ5IGRlZmF1bHQgb3IgUmVhY3RpdmVGb3JtcywgYW5kIHZhbHVlIGNsb3VuZCBpcyBub3QgbW92ZWQgdG8gcHJvcGVyIHBvc2l0aW9uXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IHZhbHVlO1xuICAgICAgY29uc3QgbmV3UmVsYXRpdmVHYWluID0gbmV3VmFsdWUgLSB0aGlzLm1pbjtcbiAgICAgIGNvbnN0IGlucHV0V2lkdGggPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGxldCB0aHVtYk9mZnNldDogbnVtYmVyO1xuICAgICAgY29uc3Qgb2Zmc2V0QW1tb3VudCA9IDE1O1xuICAgICAgY29uc3QgZGlzdGFuY2VGcm9tTWlkZGxlID0gbmV3UmVsYXRpdmVHYWluIC0gdGhpcy5zdGVwcyAvIDI7XG5cbiAgICAgIHRoaXMuc3RlcExlbmd0aCA9IGlucHV0V2lkdGggLyB0aGlzLnN0ZXBzO1xuXG4gICAgICB0aHVtYk9mZnNldCA9IChkaXN0YW5jZUZyb21NaWRkbGUgLyB0aGlzLnN0ZXBzKSAqIG9mZnNldEFtbW91bnQ7XG4gICAgICB0aGlzLmNsb3VkUmFuZ2UgPSB0aGlzLnN0ZXBMZW5ndGggKiBuZXdSZWxhdGl2ZUdhaW4gLSB0aHVtYk9mZnNldDtcblxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJhbmdlQ2xvdWQubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLmNsb3VkUmFuZ2UgKyAncHgnKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0lmU2FmYXJpKCkge1xuICAgIGNvbnN0IGlzU2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xuICAgIGNvbnN0IGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuICAgIGNvbnN0IGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTE7XG4gICAgY29uc3QgaXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT3BlcmEnKSA+IC0xO1xuXG4gICAgaWYgKGlzU2FmYXJpICYmICFpc0Nocm9tZSAmJiAhaXNGaXJlZm94ICYmICFpc09wZXJhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0ZXBzID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcblxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJhbmdlID0gTnVtYmVyKHRoaXMudmFsdWUpO1xuXG4gICAgICAvLyBmaXgoc2xpZGVyKTogcmVzb2x2ZSBwcm9ibGVtIHdpdGggbm90IG1vdmluZyBzbGlkZXIgY2xvdWQgd2hlbiBzZXR0aW5nIHZhbHVlIHdpdGggW3ZhbHVlXSBvciByZWFjdGl2ZSBmb3Jtc1xuICAgICAgLy8gTWFudWFsIGNhbGwgdGhlIGNvdmVyYWdlIG1ldGhvZCB0byBtb3ZlIHJhbmdlIHZhbHVlIGNsb3VkIHRvIHByb3BlciBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgYHZhbHVlYCB2YXJpYWJsZVxuICAgICAgdGhpcy5jb3ZlcmFnZShuZXcgRXZlbnQoJ2lucHV0JyksIHRoaXMudmFsdWUpO1xuXG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb250cm9sIFZhbHVlIEFjY2Vzc29yIE1ldGhvZHNcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgLy8gZml4KHNsaWRlcik6IHJlc29sdmUgcHJvYmxlbSB3aXRoIG5vdCBtb3Zpbmcgc2xpZGVyIGNsb3VkIHdoZW4gc2V0dGluZyB2YWx1ZSB3aXRoIFt2YWx1ZV0gb3IgcmVhY3RpdmUgZm9ybXNcbiAgICAvLyBNYW51YWwgY2FsbCB0aGUgY292ZXJhZ2UgbWV0aG9kIHRvIG1vdmUgcmFuZ2UgdmFsdWUgY2xvdWQgdG8gcHJvcGVyIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBgdmFsdWVgIHZhcmlhYmxlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvdmVyYWdlKG5ldyBFdmVudCgnaW5wdXQnKSwgdmFsdWUpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=