/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
var ProgressDirective = /** @class */ (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /** maximum total value of progress element */
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach((/**
             * @param {?} bar
             * @return {?}
             */
            function (bar) {
                bar.recalculatePercentage();
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressDirective.decorators = [
        { type: Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] }
    ];
    ProgressDirective.propDecorators = {
        animate: [{ type: Input }],
        max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
        addClass: [{ type: HostBinding, args: ['class.progress',] }]
    };
    return ProgressDirective;
}());
export { ProgressDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJOUQ7SUFBQTtRQW1Cd0MsYUFBUSxHQUFHLElBQUksQ0FBQztRQUUvQyxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBRWQsU0FBSSxHQUFHLEdBQUcsQ0FBQztJQVl2QixDQUFDO0lBN0JDLHNCQUVXLGtDQUFHO1FBSGQsOENBQThDOzs7OztRQUM5QztZQUdFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQUVELFVBQWUsQ0FBUztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsR0FBaUI7Z0JBQ2xDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7Ozs7O0lBZU0sa0NBQU07Ozs7SUFBYixVQUFjLEdBQWlCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTSxxQ0FBUzs7OztJQUFoQixVQUFpQixHQUFpQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFOzs7MEJBR2xELEtBQUs7c0JBR0wsV0FBVyxTQUFDLFVBQVUsY0FDdEIsS0FBSzsyQkFZTCxXQUFXLFNBQUMsZ0JBQWdCOztJQWdCL0Isd0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSxpQkFBaUI7Ozs7OztJQUU1QixvQ0FBaUM7O0lBZ0JqQyxxQ0FBc0Q7O0lBRXRELGlDQUF3Qjs7Ozs7SUFFeEIsaUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbWRiUHJvZ3Jlc3MsIFttZGJQcm9ncmVzc10nIH0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NEaXJlY3RpdmUge1xuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkIChub3RlOiBub3Qgc3VwcG9ydGVkIGJ5IEJvb3RzdHJhcCA0KSAqL1xuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTogYm9vbGVhbjtcblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBwdWJsaWMgc2V0IG1heCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB2O1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiYXI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYmFyLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcm9ncmVzcycpIHB1YmxpYyBhZGRDbGFzcyA9IHRydWU7XG5cbiAgcHVibGljIGJhcnM6IGFueVtdID0gW107XG5cbiAgcHJvdGVjdGVkIF9tYXggPSAxMDA7XG5cbiAgcHVibGljIGFkZEJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbmltYXRlKSB7XG4gICAgICBiYXIudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG4gICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICB9XG59XG4iXX0=