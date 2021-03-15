/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
export class ProgressDirective {
    constructor() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((/**
         * @param {?} bar
         * @return {?}
         */
        (bar) => {
            bar.recalculatePercentage();
        }));
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressDirective.decorators = [
    { type: Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] }
];
ProgressDirective.propDecorators = {
    animate: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
    addClass: [{ type: HostBinding, args: ['class.progress',] }]
};
if (false) {
    /**
     * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
     * @type {?}
     */
    ProgressDirective.prototype.animate;
    /** @type {?} */
    ProgressDirective.prototype.addClass;
    /** @type {?} */
    ProgressDirective.prototype.bars;
    /**
     * @type {?}
     * @protected
     */
    ProgressDirective.prototype._max;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQW1Cd0MsYUFBUSxHQUFHLElBQUksQ0FBQztRQUUvQyxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBRWQsU0FBSSxHQUFHLEdBQUcsQ0FBQztJQVl2QixDQUFDOzs7OztJQTdCQyxJQUVXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFXLEdBQUcsQ0FBQyxDQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUU7WUFDdEMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQVFNLE1BQU0sQ0FBQyxHQUFpQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLEdBQWlCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQWxDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUU7OztzQkFHbEQsS0FBSztrQkFHTCxXQUFXLFNBQUMsVUFBVSxjQUN0QixLQUFLO3VCQVlMLFdBQVcsU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFoQjdCLG9DQUFpQzs7SUFnQmpDLHFDQUFzRDs7SUFFdEQsaUNBQXdCOzs7OztJQUV4QixpQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtZGJQcm9ncmVzcywgW21kYlByb2dyZXNzXScgfSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0RpcmVjdGl2ZSB7XG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKG5vdGU6IG5vdCBzdXBwb3J0ZWQgYnkgQm9vdHN0cmFwIDQpICovXG4gIEBJbnB1dCgpIHB1YmxpYyBhbmltYXRlOiBib29sZWFuO1xuXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heCcpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgbWF4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHY7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGJhcjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByb2dyZXNzJykgcHVibGljIGFkZENsYXNzID0gdHJ1ZTtcblxuICBwdWJsaWMgYmFyczogYW55W10gPSBbXTtcblxuICBwcm90ZWN0ZWQgX21heCA9IDEwMDtcblxuICBwdWJsaWMgYWRkQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGUpIHtcbiAgICAgIGJhci50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH1cbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYmFyKSwgMSk7XG4gIH1cbn1cbiJdfQ==