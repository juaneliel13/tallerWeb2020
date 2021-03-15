/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef, ChangeDetectionStrategy, } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class MdbStepComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.editable = true;
        this._isActive = false;
    }
    /**
     * @return {?}
     */
    get isDone() {
        return this._isDone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDone(value) {
        this._isDone = value;
    }
    /**
     * @return {?}
     */
    get isWrong() {
        return this._isWrong;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isWrong(value) {
        this._isWrong = value;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._isActive;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._isActive = value;
    }
    /**
     * @private
     * @return {?}
     */
    _removeClasses() {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    }
    /**
     * @return {?}
     */
    reset() {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
MdbStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-step',
                exportAs: 'mdbStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MdbStepComponent.ctorParameters = () => [
    { type: ElementRef }
];
MdbStepComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    editable: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    stepForm: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUVWLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLGdCQUFnQjs7OztJQU8zQixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUx4QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBNkJqQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBeEJVLENBQUM7Ozs7SUFFckMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBR0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBR0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUdPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsUUFBUSxLQUFJLENBQUM7OztZQXBEZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsc0RBQXNEO2dCQUNoRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVhDLFVBQVU7OztzQkFhVCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFDdkMsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUpOLG1DQUFvRTs7SUFDcEUsb0NBQXlCOztJQUN6QixnQ0FBc0I7O0lBQ3RCLGlDQUF1Qjs7SUFDdkIsb0NBQTZCOzs7OztJQVU3QixtQ0FBeUI7Ozs7O0lBUXpCLG9DQUEwQjs7Ozs7SUFRMUIscUNBQTBCOztJQXhCZCw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXN0ZXAnLFxuICBleHBvcnRBczogJ21kYlN0ZXAnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGVkaXRhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdGVwRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cblxuICBnZXQgaXNEb25lKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0RvbmU7XG4gIH1cbiAgc2V0IGlzRG9uZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRG9uZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzRG9uZTogYm9vbGVhbjtcblxuICBnZXQgaXNXcm9uZygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNXcm9uZztcbiAgfVxuICBzZXQgaXNXcm9uZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzV3JvbmcgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc1dyb25nOiBib29sZWFuO1xuXG4gIGdldCBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3JlbW92ZUNsYXNzZXMoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5zdGVwRm9ybSkge1xuICAgICAgdGhpcy5zdGVwRm9ybS5yZXNldCgpO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdmVDbGFzc2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=