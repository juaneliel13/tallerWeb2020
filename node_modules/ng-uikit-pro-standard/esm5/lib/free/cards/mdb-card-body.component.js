/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
var MdbCardBodyComponent = /** @class */ (function () {
    function MdbCardBodyComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardBodyComponent.prototype, "cascade", {
        set: /**
         * @param {?} cascade
         * @return {?}
         */
        function (cascade) {
            if (cascade) {
                this._r.addClass(this._el.nativeElement, 'card-body-cascade');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-body');
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
    MdbCardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-body',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbCardBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardBodyComponent.propDecorators = {
        class: [{ type: Input }],
        cascade: [{ type: Input }]
    };
    return MdbCardBodyComponent;
}());
export { MdbCardBodyComponent };
if (false) {
    /** @type {?} */
    MdbCardBodyComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MdbCardBodyComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardBodyComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jYXJkcy9tZGItY2FyZC1ib2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBZUUsOEJBQW9CLEdBQWUsRUFBVSxFQUFhO1FBQXRDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUcsQ0FBQztJQU45RCxzQkFBYSx5Q0FBTzs7Ozs7UUFBcEIsVUFBcUIsT0FBZ0I7WUFDbkMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUM7OztPQUFBOzs7O0lBSUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxPQUFZO2dCQUN6QyxLQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsdUNBQTZDO29CQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVpDLFVBQVU7Z0JBQ1YsU0FBUzs7O3dCQWFSLEtBQUs7MEJBRUwsS0FBSzs7SUFnQlIsMkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQW5CWSxvQkFBb0I7OztJQUMvQixxQ0FBdUI7Ozs7O0lBUVgsbUNBQXVCOzs7OztJQUFFLGtDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2FyZC1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1jYXJkLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiQ2FyZEJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNldCBjYXNjYWRlKGNhc2NhZGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoY2FzY2FkZSkge1xuICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1ib2R5LWNhc2NhZGUnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtYm9keScpO1xuICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==