/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.el = null;
        this.el = el;
    }
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-slide, mdb-carousel-item',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        animated: [{ type: HostBinding, args: ['class.animated',] }],
        directionNext: [{ type: HostBinding, args: ['class.carousel-item-next',] }],
        directionLeft: [{ type: HostBinding, args: ['class.carousel-item-left',] }],
        directionPrev: [{ type: HostBinding, args: ['class.carousel-item-prev',] }],
        directionRight: [{ type: HostBinding, args: ['class.carousel-item-right',] }],
        el: [{ type: HostBinding, args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());
export { SlideComponent };
if (false) {
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /** @type {?} */
    SlideComponent.prototype.animated;
    /** @type {?} */
    SlideComponent.prototype.directionNext;
    /** @type {?} */
    SlideComponent.prototype.directionLeft;
    /** @type {?} */
    SlideComponent.prototype.directionPrev;
    /** @type {?} */
    SlideComponent.prototype.directionRight;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvc2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFO0lBc0JFLHdCQUFtQixFQUFjO1FBWEYsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNQLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBSzFELE9BQUUsR0FBcUIsSUFBSSxDQUFDO1FBR2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7Ozs7Z0JBUHVDLFVBQVU7Ozt5QkFVL0MsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSzsyQkFFTCxXQUFXLFNBQUMsZ0JBQWdCO2dDQUM1QixXQUFXLFNBQUMsMEJBQTBCO2dDQUN0QyxXQUFXLFNBQUMsMEJBQTBCO2dDQUN0QyxXQUFXLFNBQUMsMEJBQTBCO2lDQUN0QyxXQUFXLFNBQUMsMkJBQTJCO3FCQUV2QyxXQUFXLFNBQUMscUJBQXFCOztJQVFwQyxxQkFBQztDQUFBLEFBekJELElBeUJDO1NBbkJZLGNBQWM7Ozs7OztJQUV6QixnQ0FFdUI7O0lBQ3ZCLGtDQUFnRDs7SUFDaEQsdUNBQStEOztJQUMvRCx1Q0FBK0Q7O0lBQy9ELHVDQUErRDs7SUFDL0Qsd0NBQWlFOzs7OztJQUVqRSw0QkFHbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2xpZGUsIG1kYi1jYXJvdXNlbC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlQ29tcG9uZW50IHtcbiAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQElucHV0KClcbiAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbmltYXRlZCcpIGFuaW1hdGVkID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1uZXh0JykgZGlyZWN0aW9uTmV4dCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0tbGVmdCcpIGRpcmVjdGlvbkxlZnQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLXByZXYnKSBkaXJlY3Rpb25QcmV2ID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1yaWdodCcpIGRpcmVjdGlvblJpZ2h0ID0gZmFsc2U7XG4gIC8qKiBXcmFwcyBlbGVtZW50IGJ5IGFwcHJvcHJpYXRlIENTUyBjbGFzc2VzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXG5cbiAgLyoqIExpbmsgdG8gUGFyZW50KGNvbnRhaW5lci1jb2xsZWN0aW9uKSBjb21wb25lbnQgKi9cbiAgcHVibGljIGVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cbn1cbiJdfQ==