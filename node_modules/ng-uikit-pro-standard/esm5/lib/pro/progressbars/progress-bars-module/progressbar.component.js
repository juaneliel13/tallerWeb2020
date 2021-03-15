/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
/**
 * <md-progress-bar> component.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
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
    Object.defineProperty(ProgressBarComponent.prototype, "value", {
        /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
        get: /**
         * Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow.
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._value = clamp(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */
        function () {
            return this._bufferValue;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._bufferValue = clamp(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    ProgressBarComponent.prototype._primaryTransform = /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    ProgressBarComponent.prototype._bufferTransform = /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    function () {
        if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
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
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
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
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MtYmFycy1tb2R1bGUvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLdkY7SUFBQTs7OztRQVFXLFVBQUssR0FBa0MsU0FBUyxDQUFDO1FBRWxELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFhWCxpQkFBWSxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7UUFxQnpCLFNBQUksR0FBeUQsYUFBYSxDQUFDO0lBa0I3RSxDQUFDO0lBakRDLHNCQUVJLHVDQUFLO1FBSFQsNkVBQTZFOzs7OztRQUM3RTtZQUdFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQVUsQ0FBUztZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFTRCxzQkFDSSw2Q0FBVztRQUZmLDBEQUEwRDs7Ozs7UUFDMUQ7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFFRCxVQUFnQixDQUFTO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FKQTtJQWlCRCxpRkFBaUY7Ozs7O0lBQ2pGLGdEQUFpQjs7OztJQUFqQjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHO1FBQzlCLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBVSxLQUFLLE1BQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtDQUFnQjs7Ozs7SUFBaEI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOztnQkFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRztZQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVUsS0FBSyxNQUFHLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsMmhCQUEyQztvQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O3dCQUdFLEtBQUs7d0JBS0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxvQkFBb0I7OEJBWWhDLEtBQUs7dUJBZ0JMLEtBQUssWUFDTCxXQUFXLFNBQUMsV0FBVzs7SUFtQjFCLDJCQUFDO0NBQUEsQUE5REQsSUE4REM7U0F4RFksb0JBQW9COzs7Ozs7SUFFL0IscUNBQTBEOzs7OztJQUUxRCxzQ0FBbUI7Ozs7O0lBYW5CLDRDQUF5Qjs7Ozs7Ozs7O0lBbUJ6QixvQ0FFMkU7Ozs7Ozs7OztBQXFCN0UsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLEdBQU8sRUFBRSxHQUFTO0lBQWxCLG9CQUFBLEVBQUEsT0FBTztJQUFFLG9CQUFBLEVBQUEsU0FBUztJQUMxQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIDxtZC1wcm9ncmVzcy1iYXI+IGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXByb2dyZXNzLWJhciwgbWF0LXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XG4gIC8qKiBDb2xvciBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiAqL1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3NiYXIuIERlZmF1bHRzIHRvIHplcm8uIE1pcnJvcmVkIHRvIGFyaWEtdmFsdWVub3cuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbm93JylcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNsYW1wKHYgfHwgMCk7XG4gIH1cblxuICBwcml2YXRlIF9idWZmZXJWYWx1ZSA9IDA7XG5cbiAgLyoqIEJ1ZmZlciB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiBEZWZhdWx0cyB0byB6ZXJvLiAqL1xuICBASW5wdXQoKVxuICBnZXQgYnVmZmVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlclZhbHVlO1xuICB9XG5cbiAgc2V0IGJ1ZmZlclZhbHVlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlclZhbHVlID0gY2xhbXAodiB8fCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RlIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIElucHV0IG11c3QgYmUgb25lIG9mIHRoZXNlIHZhbHVlczogZGV0ZXJtaW5hdGUsIGluZGV0ZXJtaW5hdGUsIGJ1ZmZlciwgcXVlcnksIGRlZmF1bHRzIHRvXG4gICAqICdkZXRlcm1pbmF0ZScuXG4gICAqIE1pcnJvcmVkIHRvIG1vZGUgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKVxuICBtb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnIHwgJ2J1ZmZlcicgfCAncXVlcnknID0gJ2RldGVybWluYXRlJztcblxuICAvKiogR2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIncyBwcmltYXJ5IGluZGljYXRvci4gKi9cbiAgX3ByaW1hcnlUcmFuc2Zvcm0oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnZhbHVlIC8gMTAwO1xuICAgIHJldHVybiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke3NjYWxlfSlgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIncyBidWZmZXIgaW5kaWNhdG9yLiAgT25seSB1c2VkIGlmIHRoZVxuICAgKiBwcm9ncmVzcyBtb2RlIGlzIHNldCB0byBidWZmZXIsIG90aGVyd2lzZSByZXR1cm5zIGFuIHVuZGVmaW5lZCwgY2F1c2luZyBubyB0cmFuc2Zvcm1hdGlvbi5cbiAgICovXG4gIF9idWZmZXJUcmFuc2Zvcm0oKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2J1ZmZlcicpIHtcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5idWZmZXJWYWx1ZSAvIDEwMDtcbiAgICAgIHJldHVybiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke3NjYWxlfSlgIH07XG4gICAgfVxuICB9XG59XG5cbi8qKiBDbGFtcHMgYSB2YWx1ZSB0byBiZSBiZXR3ZWVuIHR3byBudW1iZXJzLCBieSBkZWZhdWx0IDAgYW5kIDEwMC4gKi9cbmZ1bmN0aW9uIGNsYW1wKHY6IG51bWJlciwgbWluID0gMCwgbWF4ID0gMTAwKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdikpO1xufVxuIl19