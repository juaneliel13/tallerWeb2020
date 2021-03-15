/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, forwardRef, HostListener, Input, Renderer2, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ButtonRadioDirective; })),
    multi: true,
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.radioElementsArray.push(element);
            }));
            this.radioElementsArray.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.removeClass(element, 'active');
            }));
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) { }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ButtonRadioDirective.propDecorators = {
        mdbRadio: [{ type: Input }],
        uncheckable: [{ type: Input }],
        value: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ButtonRadioDirective;
}());
export { ButtonRadioDirective };
if (false) {
    /** @type {?} */
    ButtonRadioDirective.prototype.onChange;
    /** @type {?} */
    ButtonRadioDirective.prototype.onTouched;
    /** @type {?} */
    ButtonRadioDirective.prototype.radioElementsArray;
    /**
     * Radio button value, will be set to `ngModel`
     * @type {?}
     */
    ButtonRadioDirective.prototype.mdbRadio;
    /**
     * If `true` — radio button can be unchecked
     * @type {?}
     */
    ButtonRadioDirective.prototype.uncheckable;
    /**
     * Current value of radio component or group
     * @type {?}
     */
    ButtonRadioDirective.prototype.value;
    /**
     * @type {?}
     * @protected
     */
    ButtonRadioDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvYnV0dG9ucy9yYWRpby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLEtBQU8sNEJBQTRCLEdBQVE7SUFDL0MsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7OztBQU1EO0lBMkNFLDhCQUE2QixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Q2pFLGFBQVEsR0FBUSxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ25DLGNBQVMsR0FBUSxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRTNDLHVCQUFrQixHQUFlLEVBQUUsQ0FBQztJQXNDdUMsQ0FBQztJQTlCNUUsc0JBQ1csMENBQVE7Ozs7UUFEbkI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7Ozs7SUFHTSxzQ0FBTzs7OztJQURkLFVBQ2UsS0FBVztRQUQxQixpQkF1QkM7UUFyQkMsSUFBSTtZQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsT0FBWTtnQkFDbEUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxPQUFPO2dCQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJTSx1Q0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVNLHFDQUFNOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7Ozs7OztJQUNULHlDQUFVOzs7Ozs7O0lBQWpCLFVBQWtCLEtBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSwrQ0FBZ0I7Ozs7SUFBdkIsVUFBd0IsRUFBTztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGdEQUFpQjs7OztJQUF4QixVQUF5QixFQUFPO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWpFRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7Ozs7Z0JBckI5RSxVQUFVO2dCQU1WLFNBQVM7OzsyQkFzQlIsS0FBSzs4QkFFTCxLQUFLO3dCQUVMLEtBQUs7MkJBRUwsV0FBVyxTQUFDLGNBQWM7MEJBSzFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBZ0RuQywyQkFBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLG9CQUFvQjs7O0lBQy9CLHdDQUEwQzs7SUFDMUMseUNBQTJDOztJQUUzQyxrREFBb0M7Ozs7O0lBRXBDLHdDQUE4Qjs7Ozs7SUFFOUIsMkNBQXFDOzs7OztJQUVyQyxxQ0FBMkI7Ozs7O0lBZ0NSLGtDQUF3Qjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25SYWRpb0RpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuLyoqXG4gKiBDcmVhdGUgcmFkaW8gYnV0dG9ucyBvciBncm91cHMgb2YgYnV0dG9ucy5cbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1ttZGJSYWRpb10nLCBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSB9KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblJhZGlvRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIHB1YmxpYyBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwdWJsaWMgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgcmFkaW9FbGVtZW50c0FycmF5OiBBcnJheTxhbnk+ID0gW107XG4gIC8qKiBSYWRpbyBidXR0b24gdmFsdWUsIHdpbGwgYmUgc2V0IHRvIGBuZ01vZGVsYCAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWRiUmFkaW86IGFueTtcbiAgLyoqIElmIGB0cnVlYCDigJQgcmFkaW8gYnV0dG9uIGNhbiBiZSB1bmNoZWNrZWQgKi9cbiAgQElucHV0KCkgcHVibGljIHVuY2hlY2thYmxlOiBib29sZWFuO1xuICAvKiogQ3VycmVudCB2YWx1ZSBvZiByYWRpbyBjb21wb25lbnQgb3IgZ3JvdXAgKi9cbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1kYlJhZGlvID09PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudD86IGFueSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJhZGlvRWxlbWVudHNBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJhZGlvRWxlbWVudHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhldmVudC50YXJnZXQsICdhY3RpdmUnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLm1kYlJhZGlvID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tZGJSYWRpbztcbiAgICB9XG5cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudW5jaGVja2FibGUgPSB0eXBlb2YgdGhpcy51bmNoZWNrYWJsZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=