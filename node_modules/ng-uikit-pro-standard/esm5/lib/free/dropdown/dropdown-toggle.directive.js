/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (_this.isOpen = value); })));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (_this.isDisabled = value || null); })));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: ElementRef }
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        ariaHaspopup: [{ type: HostBinding, args: ['attr.aria-haspopup',] }],
        isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
        isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }],
        onEsc: [{ type: HostListener, args: ['keyup.esc',] }]
    };
    return BsDropdownToggleDirective;
}());
export { BsDropdownToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._subscriptions;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.ariaHaspopup;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isDisabled;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._state;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRDtJQXFDRSxtQ0FBb0IsTUFBdUIsRUFBVSxRQUFvQjtRQUF6RSxpQkFXQztRQVhtQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFoQ2pFLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUVULGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBOEI3RCxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWMsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUM5RSxDQUFDO1FBQ0YsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFDcEMsVUFBQyxLQUFvQixJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBakMsQ0FBaUMsRUFDNUQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQXBDRCwyQ0FBTzs7O0lBRFA7UUFFRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFHRCxtREFBZTs7OztJQURmLFVBQ2dCLEtBQVU7UUFDeEIsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDckIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDbkQ7WUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBR0QseUNBQUs7OztJQURMO1FBRUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBZUQsK0NBQVc7OztJQUFYOzs7WUFDRSxLQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBTSxHQUFHLFdBQUE7Z0JBQ1osR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25COzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQUxRLGVBQWU7Z0JBSEosVUFBVTs7OytCQVkzQixXQUFXLFNBQUMsb0JBQW9COzZCQUNoQyxXQUFXLFNBQUMsZUFBZTt5QkFDM0IsV0FBVyxTQUFDLG9CQUFvQjswQkFFaEMsWUFBWSxTQUFDLE9BQU87a0NBUXBCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFXekMsWUFBWSxTQUFDLFdBQVc7O0lBeUIzQixnQ0FBQztDQUFBLEFBdkRELElBdURDO1NBbkRZLHlCQUF5Qjs7Ozs7O0lBQ3BDLG1EQUE0Qzs7SUFFNUMsaURBQXVEOztJQUN2RCwrQ0FBK0Q7O0lBQy9ELDJDQUFtRDs7Ozs7SUE0QnZDLDJDQUErQjs7Ozs7SUFBRSw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vZHJvcGRvd24uc3RhdGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiRHJvcGRvd25Ub2dnbGVdLFtkcm9wZG93blRvZ2dsZV0nLFxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLXRvZ2dsZScsXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhhc3BvcHVwJykgYXJpYUhhc3BvcHVwID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJykgaXNEaXNhYmxlZDogYm9vbGVhbiB8IGFueSA9IG51bGw7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiZcbiAgICAgIGV2ZW50LmJ1dHRvbiAhPT0gMiAmJlxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgKSB7XG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cC5lc2MnKVxuICBvbkVzYygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3RhdGUuYXV0b0Nsb3NlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgLy8gc3luYyBpcyBvcGVuIHZhbHVlIHdpdGggc3RhdGVcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNPcGVuID0gdmFsdWUpKVxuICAgICk7XG4gICAgLy8gcG9wdWxhdGUgZGlzYWJsZWQgc3RhdGVcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKHZhbHVlOiBib29sZWFuIHwgYW55KSA9PiAodGhpcy5pc0Rpc2FibGVkID0gdmFsdWUgfHwgbnVsbClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=