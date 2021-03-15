/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, HostBinding } from '@angular/core';
export class MdbCvvDirective {
    constructor() {
        this.maxLength = '4';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.formatInput(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    formatInput(event) {
        /** @type {?} */
        const input = event.target.value;
        /** @type {?} */
        const newValue = this.getFormattedValue(input);
        event.target.value = newValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedValue(value) {
        value = this.removeNonDigits(value);
        return value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeNonDigits(value) {
        return value.replace(/\D/g, '');
    }
}
MdbCvvDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCvv]',
            },] }
];
MdbCvvDirective.propDecorators = {
    maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MdbCvvDirective.prototype.maxLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWN2di5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tZm9ybWF0L21kYi1jdnYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLckUsTUFBTSxPQUFPLGVBQWU7SUFINUI7UUFLaUMsY0FBUyxHQUFHLEdBQUcsQ0FBQztJQXFCakQsQ0FBQzs7Ozs7SUFsQkMsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFVOztjQUNkLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7O2NBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFhO1FBQzNCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7O3dCQUdFLFdBQVcsU0FBQyxnQkFBZ0I7c0JBRTVCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFGakMsb0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJDdnZdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiQ3Z2RGlyZWN0aXZlIHtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4TGVuZ3RoJykgbWF4TGVuZ3RoID0gJzQnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgb25JbnB1dChldmVudDogYW55KSB7XG4gICAgdGhpcy5mb3JtYXRJbnB1dChldmVudCk7XG4gIH1cblxuICBmb3JtYXRJbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldEZvcm1hdHRlZFZhbHVlKGlucHV0KTtcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlTm9uRGlnaXRzKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZW1vdmVOb25EaWdpdHModmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICB9XG59XG4iXX0=