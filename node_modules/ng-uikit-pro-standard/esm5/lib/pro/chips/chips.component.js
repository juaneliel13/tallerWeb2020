/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BACKSPACE, DELETE } from '../../free/utils/keyboard-navigation';
/** @type {?} */
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return MaterialChipsComponent; })),
    multi: true,
};
var MaterialChipsComponent = /** @class */ (function () {
    function MaterialChipsComponent(_cdRef) {
        this._cdRef = _cdRef;
        this.placeholder = '';
        this.isTagsFocused = false;
        this.keyCodes = {
            backspace: BACKSPACE,
            delete: DELETE,
        };
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback =
            this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    Object.defineProperty(MaterialChipsComponent.prototype, "tagsfocused", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTagsFocused;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.removeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MaterialChipsComponent.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === this.keyCodes.backspace || event.keyCode === this.keyCodes.delete) {
            if (event.target.value === '') {
                this._removeLast();
                event.preventDefault();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MaterialChipsComponent.prototype._removeLast = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var lastChip = this.values[this.values.length];
        /** @type {?} */
        var index = this.values.indexOf(lastChip);
        this.values.splice(index, 1);
        this.labelsChange.emit(this.values);
        if (this.values.length === 0) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.initialInput.nativeElement.focus();
            }), 0);
        }
    };
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    MaterialChipsComponent.prototype.addValue = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        var _this = this;
        event.preventDefault();
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
        if (this.values.length === 1) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.chipsInput.nativeElement.focus();
            }), 0);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.values) {
            this.values = value;
        }
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.focusOutFunction = /**
     * @return {?}
     */
    function () {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    MaterialChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-material-chips',
                    template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\" [ngClass]=\"focused\" #chipComponent>\n  <span *ngFor=\"let value of values\" class=\"md-chip\" selected>\n    {{ value }} <i class=\"close fas fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\"></i>\n  </span>\n\n  <span>\n    <input\n      (blur)=\"addValue(box.value, $event)\"\n      [(ngModel)]=\"labelToAdd\"\n      (keyup.enter)=\"addValue(box.value, $event)\"\n      (focus)=\"onFocus()\"\n      (focusout)=\"focusOutFunction()\"\n      (keydown)=\"handleKeydown($event)\"\n      #box\n    />\n  </span>\n</div>\n<div *ngIf=\"!values || !values.length\">\n  <input\n    (blur)=\"addValue(tbox.value, $event)\"\n    class=\"md-chips-input\"\n    placeholder=\"{{ placeholder }}\"\n    #tbox\n    (keyup.enter)=\"addValue(tbox.value, $event)\"\n  />\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MaterialChipsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    MaterialChipsComponent.propDecorators = {
        chipsInput: [{ type: ViewChild, args: ['box', { static: false },] }],
        initialInput: [{ type: ViewChild, args: ['tbox', { static: false },] }],
        placeholder: [{ type: Input }],
        tagsfocusedChange: [{ type: Output }],
        labelsChange: [{ type: Output }],
        tagsfocused: [{ type: Input }]
    };
    return MaterialChipsComponent;
}());
export { MaterialChipsComponent };
if (false) {
    /** @type {?} */
    MaterialChipsComponent.prototype.chipsInput;
    /** @type {?} */
    MaterialChipsComponent.prototype.initialInput;
    /** @type {?} */
    MaterialChipsComponent.prototype.placeholder;
    /** @type {?} */
    MaterialChipsComponent.prototype.addAreaDisplayed;
    /** @type {?} */
    MaterialChipsComponent.prototype.isTagsFocused;
    /** @type {?} */
    MaterialChipsComponent.prototype.values;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelToAdd;
    /** @type {?} */
    MaterialChipsComponent.prototype.focused;
    /** @type {?} */
    MaterialChipsComponent.prototype.selected;
    /** @type {?} */
    MaterialChipsComponent.prototype.noop;
    /** @type {?} */
    MaterialChipsComponent.prototype.keyCodes;
    /** @type {?} */
    MaterialChipsComponent.prototype.tagsfocusedChange;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelsChange;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jaGlwcy9jaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFekUsTUFBTSxLQUFPLG1DQUFtQyxHQUFRO0lBQ3RELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBeUNFLGdDQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQS9CcEMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHMUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPdEIsYUFBUSxHQUFHO1lBQ1QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBRVEsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBT3RFLHNCQUFpQixHQUFlLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMscUJBQWdCLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFRckQsSUFBSSxDQUFDLGlCQUFpQjtZQUNwQixJQUFJLENBQUMs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QUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFDbkMsS0FBSztvQ0FlTCxNQUFNOytCQUNOLE1BQU07OEJBRU4sS0FBSzs7SUFvRlIsNkJBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQXpHWSxzQkFBc0I7OztJQUNqQyw0Q0FBNEQ7O0lBQzVELDhDQUErRDs7SUFDL0QsNkNBQTBCOztJQUUxQixrREFBMEI7O0lBQzFCLCtDQUFzQjs7SUFDdEIsd0NBQWlCOztJQUNqQiw0Q0FBbUI7O0lBQ25CLHlDQUFnQjs7SUFDaEIsMENBQWlCOztJQUNqQixzQ0FBVTs7SUFFViwwQ0FHRTs7SUFFRixtREFBaUQ7O0lBQ2pELDhDQUE4RTs7Ozs7SUFPOUUsbURBQWtEOzs7OztJQUNsRCxrREFBdUQ7Ozs7O0lBTzNDLHdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJBQ0tTUEFDRSwgREVMRVRFIH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRlcmlhbENoaXBzQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbWF0ZXJpYWwtY2hpcHMnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDaGlwc0NvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2JveCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjaGlwc0lucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0Ym94JywgeyBzdGF0aWM6IGZhbHNlIH0pIGluaXRpYWxJbnB1dDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICBhZGRBcmVhRGlzcGxheWVkOiBib29sZWFuO1xuICBpc1RhZ3NGb2N1c2VkID0gZmFsc2U7XG4gIHZhbHVlczogc3RyaW5nW107XG4gIGxhYmVsVG9BZGQ6IHN0cmluZztcbiAgZm9jdXNlZDogc3RyaW5nO1xuICBzZWxlY3RlZDogc3RyaW5nO1xuICBub29wOiBhbnk7XG5cbiAga2V5Q29kZXMgPSB7XG4gICAgYmFja3NwYWNlOiBCQUNLU1BBQ0UsXG4gICAgZGVsZXRlOiBERUxFVEUsXG4gIH07XG5cbiAgQE91dHB1dCgpIHRhZ3Nmb2N1c2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgdGFnc2ZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNUYWdzRm9jdXNlZDtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSB0aGlzLm5vb3A7XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IHRoaXMubm9vcDtcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID1cbiAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRoaXMubm9vcCA6IHRoaXMub25Ub3VjaGVkQ2FsbGJhY2s7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gdGhpcy5vbkNoYW5nZUNhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aGlzLm5vb3AgOiB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2s7XG4gIH1cblxuICByZW1vdmVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlLCAwKTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMubGFiZWxzQ2hhbmdlLmVtaXQodGhpcy52YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSB0aGlzLmtleUNvZGVzLmJhY2tzcGFjZSB8fCBldmVudC5rZXlDb2RlID09PSB0aGlzLmtleUNvZGVzLmRlbGV0ZSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGFzdCgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUxhc3QoKSB7XG4gICAgY29uc3QgbGFzdENoaXAgPSB0aGlzLnZhbHVlc1t0aGlzLnZhbHVlcy5sZW5ndGhdO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZihsYXN0Q2hpcCk7XG5cbiAgICB0aGlzLnZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMubGFiZWxzQ2hhbmdlLmVtaXQodGhpcy52YWx1ZXMpO1xuXG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFZhbHVlKHZhbHVlOiBzdHJpbmcsIGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLmxhYmVsc0NoYW5nZS5lbWl0KHRoaXMudmFsdWVzKTtcbiAgICB0aGlzLmxhYmVsVG9BZGQgPSAnJztcblxuICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoaXBzSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWVzKSB7XG4gICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSAnbWQtZm9jdXNlZCc7XG4gICAgdGhpcy5pc1RhZ3NGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnRhZ3Nmb2N1c2VkQ2hhbmdlLmVtaXQodGhpcy5pc1RhZ3NGb2N1c2VkKTtcbiAgfVxuICBmb2N1c091dEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9ICcnO1xuICAgIHRoaXMuaXNUYWdzRm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFnc2ZvY3VzZWRDaGFuZ2UuZW1pdCh0aGlzLmlzVGFnc0ZvY3VzZWQpO1xuICB9XG59XG4iXX0=