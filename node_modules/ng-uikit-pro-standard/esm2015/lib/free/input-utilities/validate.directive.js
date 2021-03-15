/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class MdbValidateDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    /**
     * @return {?}
     */
    get validate() {
        return this._validate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validate(value) {
        this._validate = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateSuccess() {
        return this._validateSuccess;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateSuccess(value) {
        this._validateSuccess = value;
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateError() {
        return this._validateError;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateError(value) {
        this._validateError = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    updateSuccessClass() {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    }
    /**
     * @return {?}
     */
    updateErrorClass() {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSuccessClass();
        this.updateErrorClass();
    }
}
MdbValidateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbValidate]',
            },] }
];
/** @nocollapse */
MdbValidateDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
MdbValidateDirective.propDecorators = {
    mdbValidate: [{ type: Input }],
    validate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateSuccess;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateError;
    /** @type {?} */
    MdbValidateDirective.prototype.mdbValidate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXQtdXRpbGl0aWVzL3ZhbGlkYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtoRixNQUFNLE9BQU8sb0JBQW9COzs7OztJQW1DL0IsWUFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBbEN2RCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztJQWdDb0MsQ0FBQzs7OztJQTdCbkUsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBSjhDLFNBQVM7WUFBcEMsVUFBVTs7OzBCQVUzQixLQUFLO3VCQUNMLEtBQUs7OEJBVUwsS0FBSzs0QkFTTCxLQUFLOzs7Ozs7O0lBeEJOLHlDQUF5Qjs7Ozs7SUFDekIsZ0RBQWdDOzs7OztJQUNoQyw4Q0FBOEI7O0lBRTlCLDJDQUE4Qjs7Ozs7SUE4QmxCLHdDQUEyQjs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVmFsaWRhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVmFsaWRhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF92YWxpZGF0ZSA9IHRydWU7XG4gIHByaXZhdGUgX3ZhbGlkYXRlU3VjY2VzcyA9IHRydWU7XG4gIHByaXZhdGUgX3ZhbGlkYXRlRXJyb3IgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG1kYlZhbGlkYXRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlO1xuICB9XG4gIHNldCB2YWxpZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbGlkYXRlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVFcnJvckNsYXNzKCk7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWxpZGF0ZVN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlU3VjY2VzcztcbiAgfVxuICBzZXQgdmFsaWRhdGVTdWNjZXNzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVTdWNjZXNzID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWxpZGF0ZUVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUVycm9yO1xuICB9XG4gIHNldCB2YWxpZGF0ZUVycm9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVFcnJvciA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlRXJyb3JDbGFzcygpO1xuICAgIHRoaXMudXBkYXRlU3VjY2Vzc0NsYXNzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgdXBkYXRlU3VjY2Vzc0NsYXNzKCkge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlICYmIHRoaXMudmFsaWRhdGVTdWNjZXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLXN1Y2Nlc3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWxpZGF0ZS1zdWNjZXNzJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JDbGFzcygpIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZSAmJiB0aGlzLnZhbGlkYXRlRXJyb3IpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsaWRhdGUtZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWxpZGF0ZS1lcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU3VjY2Vzc0NsYXNzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvckNsYXNzKCk7XG4gIH1cbn1cbiJdfQ==