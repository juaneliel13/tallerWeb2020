/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { BACKSPACE, DELETE } from '../../../free/utils/keyboard-navigation';
/** @enum {number} */
var KeyCode = {
    backspace: BACKSPACE,
    delete: DELETE,
};
KeyCode[KeyCode.backspace] = 'backspace';
KeyCode[KeyCode.delete] = 'delete';
var InputAutoFillDirective = /** @class */ (function () {
    function InputAutoFillDirective(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    InputAutoFillDirective.prototype.onKeyUp = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        // tslint:disable-next-line: deprecation
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        /** @type {?} */
        var val = this.getInputValue();
        /** @type {?} */
        var ews = this.endsWith(val, this.opts.separator);
        /** @type {?} */
        var parts = val.split(this.opts.separator);
        /** @type {?} */
        var idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1 || idx > 2) {
            return;
        }
        if (!ews &&
            (val.length === this.getPartLength(0) ||
                val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews &&
            parts[idx - 1].length < this.getPartLength(idx - 1) &&
            this.isNumber(parts[idx - 1]) &&
            (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, '0'));
        }
        else if (parts[idx].length < this.getPartLength(idx) &&
            this.isNumber(parts[idx]) &&
            ((Number(parts[idx]) > 3 && this.isDay(idx)) || (Number(parts[idx]) > 1 && this.isMonth(idx)))) {
            this.setInputValue(this.insertPos(val, val.length - 1, '0') + (idx < 2 ? this.opts.separator : ''));
        }
    };
    /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    InputAutoFillDirective.prototype.endsWith = /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    function (val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    };
    /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.insertPos = /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    function (str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.getPartLength = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].length;
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.isNumber = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val.match(/[1-9]/) !== null;
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isDay = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isMonth = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return (this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2);
    };
    /**
     * @private
     * @return {?}
     */
    InputAutoFillDirective.prototype.getInputValue = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.value;
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.setInputValue = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    };
    InputAutoFillDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbInputAutoFill]',
                },] }
    ];
    /** @nocollapse */
    InputAutoFillDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    InputAutoFillDirective.propDecorators = {
        opts: [{ type: Input }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return InputAutoFillDirective;
}());
export { InputAutoFillDirective };
if (false) {
    /** @type {?} */
    InputAutoFillDirective.prototype.opts;
    /**
     * @type {?}
     * @private
     */
    InputAutoFillDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    InputAutoFillDirective.prototype.rndr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckF1dG9maWxsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyQXV0b2ZpbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7SUFHMUUsV0FBWSxTQUFTO0lBQ3JCLFFBQVMsTUFBTTs7OztBQUdqQjtJQU1FLGdDQUFvQixFQUFjLEVBQVUsSUFBZTtRQUF2QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVztJQUFHLENBQUM7Ozs7O0lBRTVCLHdDQUFPOzs7O0lBQTFDLFVBQTJDLEdBQWtCO1FBQzNELHdDQUF3QztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUM3RixPQUFPO1NBQ1I7O1lBRUssR0FBRyxHQUFXLElBQUksQ0FBQyxhQUFhLEVBQUU7O1lBQ2xDLEdBQUcsR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFDdEQsS0FBSyxHQUFrQixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOztZQUNyRCxHQUFHLEdBQVcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBRXBDLElBQUksR0FBRyxDQUFD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SUFBRSxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTXlJbnB1dEF1dG9GaWxsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnB1dEF1dG9maWxsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEJBQ0tTUEFDRSwgREVMRVRFIH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcclxuXHJcbmVudW0gS2V5Q29kZSB7XHJcbiAgYmFja3NwYWNlID0gQkFDS1NQQUNFLFxyXG4gIGRlbGV0ZSA9IERFTEVURSxcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbWRiSW5wdXRBdXRvRmlsbF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRBdXRvRmlsbERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgb3B0czogSU15SW5wdXRBdXRvRmlsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBybmRyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSkgb25LZXlVcChldnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIGlmICghdGhpcy5vcHRzLmVuYWJsZWQgfHwgZXZ0LmtleUNvZGUgPT09IEtleUNvZGUuYmFja3NwYWNlIHx8IGV2dC5rZXlDb2RlID09PSBLZXlDb2RlLmRlbGV0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsOiBzdHJpbmcgPSB0aGlzLmdldElucHV0VmFsdWUoKTtcclxuICAgIGNvbnN0IGV3czogYm9vbGVhbiA9IHRoaXMuZW5kc1dpdGgodmFsLCB0aGlzLm9wdHMuc2VwYXJhdG9yKTtcclxuICAgIGNvbnN0IHBhcnRzOiBBcnJheTxzdHJpbmc+ID0gdmFsLnNwbGl0KHRoaXMub3B0cy5zZXBhcmF0b3IpO1xyXG4gICAgY29uc3QgaWR4OiBudW1iZXIgPSBwYXJ0cy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmICh2YWwuaW5kZXhPZih0aGlzLm9wdHMuc2VwYXJhdG9yICsgdGhpcy5vcHRzLnNlcGFyYXRvcikgIT09IC0xIHx8IGlkeCA+IDIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgIWV3cyAmJlxyXG4gICAgICAodmFsLmxlbmd0aCA9PT0gdGhpcy5nZXRQYXJ0TGVuZ3RoKDApIHx8XHJcbiAgICAgICAgdmFsLmxlbmd0aCA9PT0gdGhpcy5nZXRQYXJ0TGVuZ3RoKDApICsgdGhpcy5nZXRQYXJ0TGVuZ3RoKDEpICsgdGhpcy5vcHRzLnNlcGFyYXRvci5sZW5ndGgpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHZhbCArIHRoaXMub3B0cy5zZXBhcmF0b3IpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgZXdzICYmXHJcbiAgICAgIHBhcnRzW2lkeCAtIDFdLmxlbmd0aCA8IHRoaXMuZ2V0UGFydExlbmd0aChpZHggLSAxKSAmJlxyXG4gICAgICB0aGlzLmlzTnVtYmVyKHBhcnRzW2lkeCAtIDFdKSAmJlxyXG4gICAgICAodGhpcy5pc0RheShpZHggLSAxKSB8fCB0aGlzLmlzTW9udGgoaWR4IC0gMSkpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHRoaXMuaW5zZXJ0UG9zKHZhbCwgdmFsLmxlbmd0aCAtIDIsICcwJykpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgcGFydHNbaWR4XS5sZW5ndGggPCB0aGlzLmdldFBhcnRMZW5ndGgoaWR4KSAmJlxyXG4gICAgICB0aGlzLmlzTnVtYmVyKHBhcnRzW2lkeF0pICYmXHJcbiAgICAgICgoTnVtYmVyKHBhcnRzW2lkeF0pID4gMyAmJiB0aGlzLmlzRGF5KGlkeCkpIHx8IChOdW1iZXIocGFydHNbaWR4XSkgPiAxICYmIHRoaXMuaXNNb250aChpZHgpKSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUoXHJcbiAgICAgICAgdGhpcy5pbnNlcnRQb3ModmFsLCB2YWwubGVuZ3RoIC0gMSwgJzAnKSArIChpZHggPCAyID8gdGhpcy5vcHRzLnNlcGFyYXRvciA6ICcnKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmRzV2l0aCh2YWw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWwuaW5kZXhPZihzdWZmaXgsIHZhbC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydFBvcyhzdHI6IHN0cmluZywgaWR4OiBudW1iZXIsIHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGlkeCkgKyB2YWwgKyBzdHIuc3Vic3RyKGlkeCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcnRMZW5ndGgoaWR4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOdW1iZXIodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWwubWF0Y2goL1sxLTldLykgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGF5KGlkeDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0uaW5kZXhPZignZCcpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNb250aChpZHg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0uaW5kZXhPZignbScpICE9PSAtMSAmJiB0aGlzLm9wdHMuZm9ybWF0UGFydHNbaWR4XS5sZW5ndGggPT09IDJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldElucHV0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElucHV0VmFsdWUodmFsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucm5kci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==