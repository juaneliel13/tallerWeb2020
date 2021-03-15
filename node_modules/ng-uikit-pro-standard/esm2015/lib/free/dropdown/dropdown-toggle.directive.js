/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
export class BsDropdownToggleDirective {
    /**
     * @param {?} _state
     * @param {?} _element
     */
    constructor(_state, _element) {
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
        (value) => (this.isOpen = value))));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => (this.isDisabled = value || null))));
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
            },] }
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ElementRef }
];
BsDropdownToggleDirective.propDecorators = {
    ariaHaspopup: [{ type: HostBinding, args: ['attr.aria-haspopup',] }],
    isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
    isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }],
    onEsc: [{ type: HostListener, args: ['keyup.esc',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5ELE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBaUNwQyxZQUFvQixNQUF1QixFQUFVLFFBQW9CO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQWhDakUsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBRVQsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsZUFBVSxHQUFrQixJQUFJLENBQUM7UUE4QjdELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FDOUUsQ0FBQztRQUNGLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQ3BDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFDNUQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQXBDRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBR0QsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDckIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDbkQ7WUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBR0QsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQWVELFdBQVc7UUFDVCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBTFEsZUFBZTtZQUhKLFVBQVU7OzsyQkFZM0IsV0FBVyxTQUFDLG9CQUFvQjt5QkFDaEMsV0FBVyxTQUFDLGVBQWU7cUJBQzNCLFdBQVcsU0FBQyxvQkFBb0I7c0JBRWhDLFlBQVksU0FBQyxPQUFPOzhCQVFwQixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBV3pDLFlBQVksU0FBQyxXQUFXOzs7Ozs7O0lBekJ6QixtREFBNEM7O0lBRTVDLGlEQUF1RDs7SUFDdkQsK0NBQStEOztJQUMvRCwyQ0FBbUQ7Ozs7O0lBNEJ2QywyQ0FBK0I7Ozs7O0lBQUUsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2Ryb3Bkb3duLnN0YXRlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkRyb3Bkb3duVG9nZ2xlXSxbZHJvcGRvd25Ub2dnbGVdJyxcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi10b2dnbGUnLFxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oYXNwb3B1cCcpIGFyaWFIYXNwb3B1cCA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gfCBhbnkgPSBudWxsO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpIGlzT3BlbjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlICYmXG4gICAgICBldmVudC5idXR0b24gIT09IDIgJiZcbiAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjJylcbiAgb25Fc2MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLmF1dG9DbG9zZSkge1xuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIC8vIHN5bmMgaXMgb3BlbiB2YWx1ZSB3aXRoIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+ICh0aGlzLmlzT3BlbiA9IHZhbHVlKSlcbiAgICApO1xuICAgIC8vIHBvcHVsYXRlIGRpc2FibGVkIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbiB8IGFueSkgPT4gKHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlIHx8IG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19