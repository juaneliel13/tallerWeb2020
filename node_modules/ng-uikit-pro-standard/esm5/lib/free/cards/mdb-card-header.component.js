/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
var MdbCardHeaderComponent = /** @class */ (function () {
    function MdbCardHeaderComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-header');
        if (this.class) {
            this.class.split(' ').forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            }));
        }
    };
    MdbCardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-header',
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbCardHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardHeaderComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return MdbCardHeaderComponent;
}());
export { MdbCardHeaderComponent };
if (false) {
    /** @type {?} */
    MdbCardHeaderComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MdbCardHeaderComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardHeaderComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2NhcmRzL21kYi1jYXJkLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekc7SUFRSSxnQ0FBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDOzs7O0lBRS9ELHlDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsT0FBWTtnQkFDdkMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7O2dCQWpCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscUNBQStDO29CQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBTmtDLFVBQVU7Z0JBQUUsU0FBUzs7O3dCQVNuRCxLQUFLOztJQVdWLDZCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FaWSxzQkFBc0I7OztJQUMvQix1Q0FBdUI7Ozs7O0lBQ1gscUNBQXVCOzs7OztJQUFFLG9DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1jYXJkLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21kYi1jYXJkLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJDYXJkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yOiBSZW5kZXJlcjIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtaGVhZGVyJyk7XG4gICAgICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19