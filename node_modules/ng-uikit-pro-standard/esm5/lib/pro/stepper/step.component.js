/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef, ChangeDetectionStrategy, } from '@angular/core';
import { FormGroup } from '@angular/forms';
var MdbStepComponent = /** @class */ (function () {
    function MdbStepComponent(el) {
        this.el = el;
        this.editable = true;
        this._isActive = false;
    }
    Object.defineProperty(MdbStepComponent.prototype, "isDone", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDone;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isWrong", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isWrong;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isWrong = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isActive = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbStepComponent.prototype._removeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    MdbStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-step',
                    exportAs: 'mdbStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbStepComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbStepComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        editable: [{ type: Input }],
        name: [{ type: Input }],
        label: [{ type: Input }],
        stepForm: [{ type: Input }]
    };
    return MdbStepComponent;
}());
export { MdbStepComponent };
if (false) {
    /** @type {?} */
    MdbStepComponent.prototype.content;
    /** @type {?} */
    MdbStepComponent.prototype.editable;
    /** @type {?} */
    MdbStepComponent.prototype.name;
    /** @type {?} */
    MdbStepComponent.prototype.label;
    /** @type {?} */
    MdbStepComponent.prototype.stepForm;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isDone;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isWrong;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isActive;
    /** @type {?} */
    MdbStepComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUVWLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFhRSwwQkFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFMeEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQTZCakIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQXhCVSxDQUFDO0lBRXJDLHNCQUFJLG9DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFXLEtBQWM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBQ0QsVUFBWSxLQUFjO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksc0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FIQTs7Ozs7SUFNTyx5Q0FBYzs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBcERkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxzREFBc0Q7b0JBQ2hFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFYQyxVQUFVOzs7MEJBYVQsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQ3ZDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBMENSLHVCQUFDO0NBQUEsQUFyREQsSUFxREM7U0EvQ1ksZ0JBQWdCOzs7SUFDM0IsbUNBQW9FOztJQUNwRSxvQ0FBeUI7O0lBQ3pCLGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2QixvQ0FBNkI7Ozs7O0lBVTdCLG1DQUF5Qjs7Ozs7SUFRekIsb0NBQTBCOzs7OztJQVExQixxQ0FBMEI7O0lBeEJkLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3RlcCcsXG4gIGV4cG9ydEFzOiAnbWRiU3RlcCcsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgZWRpdGFibGUgPSB0cnVlO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0ZXBGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIGdldCBpc0RvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRG9uZTtcbiAgfVxuICBzZXQgaXNEb25lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEb25lID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNEb25lOiBib29sZWFuO1xuXG4gIGdldCBpc1dyb25nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1dyb25nO1xuICB9XG4gIHNldCBpc1dyb25nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNXcm9uZyA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzV3Jvbmc6IGJvb2xlYW47XG5cbiAgZ2V0IGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfVxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ2xhc3NlcygpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLnN0ZXBGb3JtKSB7XG4gICAgICB0aGlzLnN0ZXBGb3JtLnJlc2V0KCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==