/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
var FocusDirective = /** @class */ (function () {
    function FocusDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.focus();
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDpFocus]',
                },] }
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FocusDirective.propDecorators = {
        value: [{ type: Input }]
    };
    return FocusDirective;
}());
export { FocusDirective };
if (false) {
    /** @type {?} */
    FocusDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    FocusDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyRm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVFO0lBTUUsd0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7OztJQUV0Qyx3Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUptQixVQUFVOzs7d0JBTTNCLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSxjQUFjOzs7SUFDekIsK0JBQXVCOzs7OztJQUVYLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21kYkRwRm9jdXNdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==