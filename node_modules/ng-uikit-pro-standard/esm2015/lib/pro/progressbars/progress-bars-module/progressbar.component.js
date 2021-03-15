/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
/**
 * <md-progress-bar> component.
 */
export class ProgressBarComponent {
    constructor() {
        /**
         * Color of the progress bar.
         */
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    /**
     * Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow.
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
        this._value = clamp(v || 0);
    }
    /**
     * Buffer value of the progress bar. Defaults to zero.
     * @return {?}
     */
    get bufferValue() {
        return this._bufferValue;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set bufferValue(v) {
        this._bufferValue = clamp(v || 0);
    }
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    _primaryTransform() {
        /** @type {?} */
        const scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            /** @type {?} */
            const scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-progress-bar, mat-progress-bar',
                template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. -->\n<div class=\"mat-progress-bar-background mat-progress-bar-element\"></div>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;height:5px;overflow:hidden;position:relative;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity 250ms linear;width:100%}:host .mat-progress-bar-element,:host .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}:host .mat-progress-bar-background{background-repeat:repeat-x;background-size:10px 4px;display:none}:host .mat-progress-bar-buffer{-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1),-webkit-transform 250ms}:host .mat-progress-bar-secondary{display:none}:host .mat-progress-bar-fill{-webkit-animation:none;animation:none;-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1),-webkit-transform 250ms}:host .mat-progress-bar-fill::after{-webkit-animation:none;animation:none;content:'';display:inline-block;left:0}:host[mode=query]{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}:host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill{transition:none}:host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;left:-145.166611%}:host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale}:host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;left:-54.888891%;display:block}:host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale}:host[mode=buffer] .mat-progress-bar-background{-webkit-animation:250ms linear infinite mat-progress-bar-background-scroll;animation:250ms linear infinite mat-progress-bar-background-scroll;display:block}:host-context([dir=rtl]){-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}@-webkit-keyframes mat-progress-bar-primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@-webkit-keyframes mat-progress-bar-primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}100%{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}100%{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-background-scroll{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes mat-progress-bar-background-scroll{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}"]
            }] }
];
ProgressBarComponent.propDecorators = {
    color: [{ type: Input }],
    value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
    bufferValue: [{ type: Input }],
    mode: [{ type: Input }, { type: HostBinding, args: ['attr.mode',] }]
};
if (false) {
    /**
     * Color of the progress bar.
     * @type {?}
     */
    ProgressBarComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    ProgressBarComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ProgressBarComponent.prototype._bufferValue;
    /**
     * Mode of the progress bar.
     *
     * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
     * 'determinate'.
     * Mirrored to mode attribute.
     * @type {?}
     */
    ProgressBarComponent.prototype.mode;
}
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MtYmFycy1tb2R1bGUvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFXdkYsTUFBTSxPQUFPLG9CQUFvQjtJQU5qQzs7OztRQVFXLFVBQUssR0FBa0MsU0FBUyxDQUFDO1FBRWxELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFhWCxpQkFBWSxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7UUFxQnpCLFNBQUksR0FBeUQsYUFBYSxDQUFDO0lBa0I3RSxDQUFDOzs7OztJQWpEQyxJQUVJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUtELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksV0FBVyxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBY0QsaUJBQWlCOztjQUNULEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUc7UUFDOUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7a0JBQ3BCLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUc7WUFDcEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLDJoQkFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O29CQUdFLEtBQUs7b0JBS0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxvQkFBb0I7MEJBWWhDLEtBQUs7bUJBZ0JMLEtBQUssWUFDTCxXQUFXLFNBQUMsV0FBVzs7Ozs7OztJQW5DeEIscUNBQTBEOzs7OztJQUUxRCxzQ0FBbUI7Ozs7O0lBYW5CLDRDQUF5Qjs7Ozs7Ozs7O0lBbUJ6QixvQ0FFMkU7Ozs7Ozs7OztBQXFCN0UsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUc7SUFDMUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiA8bWQtcHJvZ3Jlc3MtYmFyPiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1wcm9ncmVzcy1iYXIsIG1hdC1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuICAvKiogQ29sb3Igb2YgdGhlIHByb2dyZXNzIGJhci4gKi9cbiAgQElucHV0KCkgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcblxuICAvKiogVmFsdWUgb2YgdGhlIHByb2dyZXNzYmFyLiBEZWZhdWx0cyB0byB6ZXJvLiBNaXJyb3JlZCB0byBhcmlhLXZhbHVlbm93LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW5vdycpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBjbGFtcCh2IHx8IDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVmZmVyVmFsdWUgPSAwO1xuXG4gIC8qKiBCdWZmZXIgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGJhci4gRGVmYXVsdHMgdG8gemVyby4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGJ1ZmZlclZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXJWYWx1ZTtcbiAgfVxuXG4gIHNldCBidWZmZXJWYWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9idWZmZXJWYWx1ZSA9IGNsYW1wKHYgfHwgMCk7XG4gIH1cblxuICAvKipcbiAgICogTW9kZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKlxuICAgKiBJbnB1dCBtdXN0IGJlIG9uZSBvZiB0aGVzZSB2YWx1ZXM6IGRldGVybWluYXRlLCBpbmRldGVybWluYXRlLCBidWZmZXIsIHF1ZXJ5LCBkZWZhdWx0cyB0b1xuICAgKiAnZGV0ZXJtaW5hdGUnLlxuICAgKiBNaXJyb3JlZCB0byBtb2RlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5tb2RlJylcbiAgbW9kZTogJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJyB8ICdidWZmZXInIHwgJ3F1ZXJ5JyA9ICdkZXRlcm1pbmF0ZSc7XG5cbiAgLyoqIEdldHMgdGhlIGN1cnJlbnQgdHJhbnNmb3JtIHZhbHVlIGZvciB0aGUgcHJvZ3Jlc3MgYmFyJ3MgcHJpbWFyeSBpbmRpY2F0b3IuICovXG4gIF9wcmltYXJ5VHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy52YWx1ZSAvIDEwMDtcbiAgICByZXR1cm4geyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtzY2FsZX0pYCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgdHJhbnNmb3JtIHZhbHVlIGZvciB0aGUgcHJvZ3Jlc3MgYmFyJ3MgYnVmZmVyIGluZGljYXRvci4gIE9ubHkgdXNlZCBpZiB0aGVcbiAgICogcHJvZ3Jlc3MgbW9kZSBpcyBzZXQgdG8gYnVmZmVyLCBvdGhlcndpc2UgcmV0dXJucyBhbiB1bmRlZmluZWQsIGNhdXNpbmcgbm8gdHJhbnNmb3JtYXRpb24uXG4gICAqL1xuICBfYnVmZmVyVHJhbnNmb3JtKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdidWZmZXInKSB7XG4gICAgICBjb25zdCBzY2FsZSA9IHRoaXMuYnVmZmVyVmFsdWUgLyAxMDA7XG4gICAgICByZXR1cm4geyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtzY2FsZX0pYCB9O1xuICAgIH1cbiAgfVxufVxuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiB0d28gbnVtYmVycywgYnkgZGVmYXVsdCAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHYpKTtcbn1cbiJdfQ==