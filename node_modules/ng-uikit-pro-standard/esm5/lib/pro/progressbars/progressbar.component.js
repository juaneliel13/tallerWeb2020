/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProgressbarConfigComponent } from './progressbar.config.component';
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-progressbar, mdb-progress',
                    template: "<div mdbProgress [animate]=\"animate\" [max]=\"max\">\n  <mdb-bar [type]=\"type\" [value]=\"value\">\n    <ng-content></ng-content>\n  </mdb-bar>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfigComponent }
    ]; };
    ProgressbarComponent.propDecorators = {
        animate: [{ type: Input }],
        max: [{ type: Input }],
        type: [{ type: Input }],
        value: [{ type: Input }]
    };
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
if (false) {
    /**
     * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
     * @type {?}
     */
    ProgressbarComponent.prototype.animate;
    /**
     * maximum total value of progress element
     * @type {?}
     */
    ProgressbarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    ProgressbarComponent.prototype.type;
    /**
     * current value of progress bar
     * @type {?}
     */
    ProgressbarComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RTtJQWlCRSw4QkFBbUIsTUFBa0M7UUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6Qyx1S0FBMkM7b0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVJRLDBCQUEwQjs7OzBCQVdoQyxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLOztJQUtSLDJCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FiWSxvQkFBb0I7Ozs7OztJQUUvQix1Q0FBaUM7Ozs7O0lBRWpDLG1DQUE0Qjs7Ozs7SUFFNUIsb0NBQTZCOzs7OztJQUU3QixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXByb2dyZXNzYmFyLCBtZGItcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzc2JhcnMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IHtcbiAgLyoqIGlmIGB0cnVlYCBjaGFuZ2luZyB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgd2lsbCBiZSBhbmltYXRlZCAobm90ZTogbm90IHN1cHBvcnRlZCBieSBCb290c3RyYXAgNCkgKi9cbiAgQElucHV0KCkgcHVibGljIGFuaW1hdGU6IGJvb2xlYW47XG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cbiAgQElucHV0KCkgcHVibGljIG1heDogbnVtYmVyO1xuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyICovXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IFByb2dyZXNzYmFyQ29uZmlnQ29tcG9uZW50KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG59XG4iXX0=