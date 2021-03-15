/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input } from '@angular/core';
import { ProgressDirective } from './progress.directive';
export class BarComponent {
    /**
     * @param {?} progress
     */
    constructor(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +((100 * this.value) / this.progress.max).toFixed(2);
        /** @type {?} */
        const totalPercentage = this.progress.bars.reduce((/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */
        function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-bar',
                template: "<div class=\"progress-bar\"\nstyle=\"min-width: 0;\"\nrole=\"progressbar\"\n[ngClass]=\"type && 'progress-bar-' + type\"\n[ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\naria-valuemin=\"0\"\n[attr.aria-valuenow]=\"value\"\n[attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n[attr.aria-valuemax]=\"max\">\n  <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: ProgressDirective, decorators: [{ type: Host }] }
];
BarComponent.propDecorators = {
    type: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    BarComponent.prototype.type;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.transition;
    /** @type {?} */
    BarComponent.prototype.progress;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcHJvZ3Jlc3NiYXJzL2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNekQsTUFBTSxPQUFPLFlBQVk7Ozs7SUF5QnZCLFlBQTJCLFFBQTJCO1FBTi9DLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFPakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFyQkQsSUFDVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBVyxLQUFLLENBQUMsQ0FBUztRQUN4QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQVlNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFOUQsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFDaEQsS0FBYSxFQUNiLEdBQWlCO1lBRWpCLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDN0IsQ0FBQyxHQUNELENBQUMsQ0FBQztRQUVGLElBQUksZUFBZSxHQUFHLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix5WUFBbUM7YUFDcEM7Ozs7WUFMUSxpQkFBaUIsdUJBK0JKLElBQUk7OzttQkFyQnZCLEtBQUs7b0JBRUwsS0FBSzs7OztJQUxOLDJCQUFtQjs7Ozs7SUFHbkIsNEJBQTZCOztJQWU3QiwrQkFBbUI7O0lBQ25CLGtDQUEwQjs7SUFDMUIsZ0NBQW1DOzs7OztJQUVuQyw4QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc0RpcmVjdGl2ZSB9IGZyb20gJy4vcHJvZ3Jlc3MuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBtYXg6IG51bWJlcjtcblxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHZhbHVlKHY6IG51bWJlcikge1xuICAgIGlmICghdiAmJiB2ICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICB9XG5cbiAgcHVibGljIHBlcmNlbnQgPSAwO1xuICBwdWJsaWMgdHJhbnNpdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3Jlc3M6IFByb2dyZXNzRGlyZWN0aXZlO1xuXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQEhvc3QoKSBwcm9ncmVzczogUHJvZ3Jlc3NEaXJlY3RpdmUpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5hZGRCYXIodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5yZW1vdmVCYXIodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xuICAgIHRoaXMucGVyY2VudCA9ICsoKDEwMCAqIHRoaXMudmFsdWUpIC8gdGhpcy5wcm9ncmVzcy5tYXgpLnRvRml4ZWQoMik7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRhZ2UgPSB0aGlzLnByb2dyZXNzLmJhcnMucmVkdWNlKGZ1bmN0aW9uKFxuICAgICAgdG90YWw6IG51bWJlcixcbiAgICAgIGJhcjogQmFyQ29tcG9uZW50XG4gICAgKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0b3RhbCArIGJhci5wZXJjZW50O1xuICAgIH0sXG4gICAgMCk7XG5cbiAgICBpZiAodG90YWxQZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xuICAgIH1cbiAgfVxufVxuIl19