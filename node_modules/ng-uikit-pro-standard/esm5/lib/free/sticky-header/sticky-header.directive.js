/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime, takeUntil, } from 'rxjs/operators';
/** @enum {string} */
var Direction = {
    Up: 'Up',
    Down: 'Down',
};
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
        this._destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        function () { return window.pageYOffset; })), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), y1 = _b[0], y2 = _b[1];
            return (y2 < y1 ? Direction.Up : Direction.Down);
        })), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Up; })));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Down; })));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        this._renderer.setStyle(this._el.nativeElement, 'z-index', '1030');
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollUp$
                .pipe(skip(0), takeUntil(_this._destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(0%)');
                _this.transitionEnd.emit({ state: 'Visible' });
            }));
            _this.scrollDown$
                .pipe(skip(0), takeUntil(_this._destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(-100%)');
                _this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    };
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    StickyHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbStickyHeader]',
                    exportAs: 'mdbStickyHeader',
                },] }
    ];
    /** @nocollapse */
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    StickyHeaderDirective.propDecorators = {
        animationDuration: [{ type: Input }],
        transitionEnd: [{ type: Output }]
    };
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
if (false) {
    /** @type {?} */
    StickyHeaderDirective.prototype.animationDuration;
    /** @type {?} */
    StickyHeaderDirective.prototype.transitionEnd;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollDown$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollUp$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9zdGlja3ktaGVhZGVyL3N0aWNreS1oZWFkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLEtBQUssRUFDTCxJQUFJLEVBQ0osWUFBWSxFQUNaLFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDOzs7SUFHdEIsSUFBSyxJQUFJO0lBQ1QsTUFBTyxNQUFNOztBQUdmO0lBYUUsK0JBQW9CLFNBQW9CLEVBQVUsR0FBZTtRQUE3QyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQVJ4RCxzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDdkIsa0JBQWEsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFekYsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBS21CLENBQUM7Ozs7SUFFckUsK0NBQWU7OztJQUFmO1FBQUEsaUJBZ0RDOztZQS9DTyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzlDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFDaEIsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQWxCLENBQWtCLEVBQUMsRUFDN0Is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UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnQkFwRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQXhCQyxTQUFTO2dCQUpULFVBQVU7OztvQ0E4QlQsS0FBSztnQ0FDTCxNQUFNOztJQStEVCw0QkFBQztDQUFBLEFBckVELElBcUVDO1NBakVZLHFCQUFxQjs7O0lBQ2hDLGtEQUFpQzs7SUFDakMsOENBQWlHOzs7OztJQUVqRywwQ0FBaUQ7Ozs7O0lBRWpELDRDQUF5Qjs7Ozs7SUFDekIsMENBQXVCOzs7OztJQUVYLDBDQUE0Qjs7Ozs7SUFBRSxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLi91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHBhaXJ3aXNlLFxuICBzaGFyZSxcbiAgc2tpcCxcbiAgdGhyb3R0bGVUaW1lLFxuICB0YWtlVW50aWwsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZW51bSBEaXJlY3Rpb24ge1xuICBVcCA9ICdVcCcsXG4gIERvd24gPSAnRG93bicsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTdGlja3lIZWFkZXJdJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGlja3lIZWFkZXInLFxufSlcbmV4cG9ydCBjbGFzcyBTdGlja3lIZWFkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgQE91dHB1dCgpIHRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjx7IHN0YXRlOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhdGU6IHN0cmluZyB9PigpO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHNjcm9sbERvd24kOiBhbnk7XG4gIHByaXZhdGUgc2Nyb2xsVXAkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgIHRocm90dGxlVGltZSgxMCksXG4gICAgICBtYXAoKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcbiAgICAgIHBhaXJ3aXNlKCksXG4gICAgICBtYXAoKFt5MSwgeTJdKTogRGlyZWN0aW9uID0+ICh5MiA8IHkxID8gRGlyZWN0aW9uLlVwIDogRGlyZWN0aW9uLkRvd24pKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsVXAkID0gc2Nyb2xsJC5waXBlKGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVXApKTtcbiAgICB0aGlzLnNjcm9sbERvd24kID0gc2Nyb2xsJC5waXBlKGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRG93bikpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsICcxMDMwJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVXAkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNraXAoMCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgIGBhbGwgJHt0aGlzLmFuaW1hdGlvbkR1cmF0aW9ufW1zIGVhc2UtaW5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJyk7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kLmVtaXQoeyBzdGF0ZTogJ1Zpc2libGUnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMuc2Nyb2xsRG93biRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcCgwKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgICAgICAgYGFsbCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259bXMgZWFzZS1pbmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgtMTAwJSknKTtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmQuZW1pdCh7IHN0YXRlOiAnSGlkZGVuJyB9KTtcbiAgICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19