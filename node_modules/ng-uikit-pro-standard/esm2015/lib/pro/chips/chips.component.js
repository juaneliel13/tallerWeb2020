/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BACKSPACE, DELETE } from '../../free/utils/keyboard-navigation';
/** @type {?} */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MaterialChipsComponent)),
    multi: true,
};
export class MaterialChipsComponent {
    /**
     * @param {?} _cdRef
     */
    constructor(_cdRef) {
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
    /**
     * @return {?}
     */
    get tagsfocused() {
        return this.isTagsFocused;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeValue(value) {
        /** @type {?} */
        const index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        if (event.keyCode === this.keyCodes.backspace || event.keyCode === this.keyCodes.delete) {
            if (event.target.value === '') {
                this._removeLast();
                event.preventDefault();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _removeLast() {
        /** @type {?} */
        const lastChip = this.values[this.values.length];
        /** @type {?} */
        const index = this.values.indexOf(lastChip);
        this.values.splice(index, 1);
        this.labelsChange.emit(this.values);
        if (this.values.length === 0) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.initialInput.nativeElement.focus();
            }), 0);
        }
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    addValue(value, event) {
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
            () => {
                this.chipsInput.nativeElement.focus();
            }), 0);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.values) {
            this.values = value;
        }
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
    /**
     * @return {?}
     */
    focusOutFunction() {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
}
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
MaterialChipsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MaterialChipsComponent.propDecorators = {
    chipsInput: [{ type: ViewChild, args: ['box', { static: false },] }],
    initialInput: [{ type: ViewChild, args: ['tbox', { static: false },] }],
    placeholder: [{ type: Input }],
    tagsfocusedChange: [{ type: Output }],
    labelsChange: [{ type: Output }],
    tagsfocused: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jaGlwcy9jaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFekUsTUFBTSxPQUFPLG1DQUFtQyxHQUFRO0lBQ3RELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBU0QsTUFBTSxPQUFPLHNCQUFzQjs7OztJQWtDakMsWUFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUEvQnBDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRzFCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBT3RCLGFBQVEsR0FBRztZQUNULFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUVRLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQU90RSxzQkFBaUIsR0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFDLHFCQUFnQixHQUFxQixJQUFJLENBQUMsSUFBSSxDQUFDO1FBUXJELElBQUksQ0FBQyxpQkFBaUI7WUFD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NUQsOENBQStEOztJQUMvRCw2Q0FBMEI7O0lBRTFCLGtEQUEwQjs7SUFDMUIsK0NBQXNCOztJQUN0Qix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIseUNBQWdCOztJQUNoQiwwQ0FBaUI7O0lBQ2pCLHNDQUFVOztJQUVWLDBDQUdFOztJQUVGLG1EQUFpRDs7SUFDakQsOENBQThFOzs7OztJQU85RSxtREFBa0Q7Ozs7O0lBQ2xELGtEQUF1RDs7Ozs7SUFPM0Msd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQkFDS1NQQUNFLCBERUxFVEUgfSBmcm9tICcuLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdGVyaWFsQ2hpcHNDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1tYXRlcmlhbC1jaGlwcycsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENoaXBzQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnYm94JywgeyBzdGF0aWM6IGZhbHNlIH0pIGNoaXBzSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Rib3gnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5pdGlhbElucHV0OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIGFkZEFyZWFEaXNwbGF5ZWQ6IGJvb2xlYW47XG4gIGlzVGFnc0ZvY3VzZWQgPSBmYWxzZTtcbiAgdmFsdWVzOiBzdHJpbmdbXTtcbiAgbGFiZWxUb0FkZDogc3RyaW5nO1xuICBmb2N1c2VkOiBzdHJpbmc7XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG4gIG5vb3A6IGFueTtcblxuICBrZXlDb2RlcyA9IHtcbiAgICBiYWNrc3BhY2U6IEJBQ0tTUEFDRSxcbiAgICBkZWxldGU6IERFTEVURSxcbiAgfTtcblxuICBAT3V0cHV0KCkgdGFnc2ZvY3VzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWdzZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RhZ3NGb2N1c2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IHRoaXMubm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gdGhpcy5ub29wO1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPVxuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhpcy5ub29wIDogdGhpcy5vblRvdWNoZWRDYWxsYmFjaztcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRoaXMubm9vcCA6IHRoaXMub25DaGFuZ2VDYWxsYmFjaztcbiAgfVxuXG4gIHJlbW92ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUsIDApO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5sYWJlbHNDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRoaXMua2V5Q29kZXMuYmFja3NwYWNlIHx8IGV2ZW50LmtleUNvZGUgPT09IHRoaXMua2V5Q29kZXMuZGVsZXRlKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLl9yZW1vdmVMYXN0KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlTGFzdCgpIHtcbiAgICBjb25zdCBsYXN0Q2hpcCA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aF07XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKGxhc3RDaGlwKTtcblxuICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5sYWJlbHNDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlcyk7XG5cbiAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFsdWUodmFsdWU6IHN0cmluZywgZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIHRoaXMubGFiZWxzQ2hhbmdlLmVtaXQodGhpcy52YWx1ZXMpO1xuICAgIHRoaXMubGFiZWxUb0FkZCA9ICcnO1xuXG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hpcHNJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZXMpIHtcbiAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9ICdtZC1mb2N1c2VkJztcbiAgICB0aGlzLmlzVGFnc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMudGFnc2ZvY3VzZWRDaGFuZ2UuZW1pdCh0aGlzLmlzVGFnc0ZvY3VzZWQpO1xuICB9XG4gIGZvY3VzT3V0RnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gJyc7XG4gICAgdGhpcy5pc1RhZ3NGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy50YWdzZm9jdXNlZENoYW5nZS5lbWl0KHRoaXMuaXNUYWdzRm9jdXNlZCk7XG4gIH1cbn1cbiJdfQ==