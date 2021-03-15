/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, HostBinding } from '@angular/core';
var MdbCvvDirective = /** @class */ (function () {
    function MdbCvvDirective() {
        this.maxLength = '4';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCvvDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formatInput(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCvvDirective.prototype.formatInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.target.value;
        /** @type {?} */
        var newValue = this.getFormattedValue(input);
        event.target.value = newValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbCvvDirective.prototype.getFormattedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.removeNonDigits(value);
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbCvvDirective.prototype.removeNonDigits = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    MdbCvvDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCvv]',
                },] }
    ];
    MdbCvvDirective.propDecorators = {
        maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return MdbCvvDirective;
}());
export { MdbCvvDirective };
if (false) {
    /** @type {?} */
    MdbCvvDirective.prototype.maxLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWN2di5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tZm9ybWF0L21kYi1jdnYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckU7SUFBQTtRQUtpQyxjQUFTLEdBQUcsR0FBRyxDQUFDO0lBcUJqRCxDQUFDOzs7OztJQWxCQyxpQ0FBTzs7OztJQURQLFVBQ1EsS0FBVTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7O1lBQ2QsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDOUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQWE7UUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBYTtRQUMzQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7NEJBR0UsV0FBVyxTQUFDLGdCQUFnQjswQkFFNUIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFtQm5DLHNCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F2QlksZUFBZTs7O0lBRTFCLG9DQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQ3Z2XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkN2dkRpcmVjdGl2ZSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heExlbmd0aCcpIG1heExlbmd0aCA9ICc0JztcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZm9ybWF0SW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgZm9ybWF0SW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRGb3JtYXR0ZWRWYWx1ZShpbnB1dCk7XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB0aGlzLnJlbW92ZU5vbkRpZ2l0cyh2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVtb3ZlTm9uRGlnaXRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxufVxuIl19