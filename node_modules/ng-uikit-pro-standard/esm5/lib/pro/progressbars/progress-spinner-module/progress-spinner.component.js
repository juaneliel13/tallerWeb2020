/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, ChangeDetectionStrategy, Input, ElementRef, NgZone, Renderer2, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
/**
 * A single degree in radians.
 * @type {?}
 */
var DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 * @type {?}
 */
var startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 * @type {?}
 */
var endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
/** @type {?} */
var MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MdProgressSpinnerCssMatStylerDirective = /** @class */ (function () {
    function MdProgressSpinnerCssMatStylerDirective() {
    }
    MdProgressSpinnerCssMatStylerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSpinners], mat-progress-spinner',
                },] }
    ];
    MdProgressSpinnerCssMatStylerDirective.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-progress-spinner',] }]
    };
    return MdProgressSpinnerCssMatStylerDirective;
}());
export { MdProgressSpinnerCssMatStylerDirective };
if (false) {
    /** @type {?} */
    MdProgressSpinnerCssMatStylerDirective.prototype.true;
}
/**
 * <md-progress-spinner> component.
 */
var MdProgressSpinnerComponent = /** @class */ (function () {
    function MdProgressSpinnerComponent(_ngZone, _elementRef, _renderer, platformId) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * The id of the last requested animation.
         */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMin", {
        /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         */
        get: /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMax", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "interdeterminateInterval", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._interdeterminateInterval;
        },
        /** @docs-private */
        set: /**
         * \@docs-private
         * @param {?} interval
         * @return {?}
         */
        function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clean up any animations that were running.
     */
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype.ngOnDestroy = /**
     * Clean up any animations that were running.
     * @return {?}
     */
    function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "color", {
        /** The color of the progress-spinner. Can be primary, accent, or warn. */
        get: /**
         * The color of the progress-spinner. Can be primary, accent, or warn.
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "value", {
        /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
        get: /**
         * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this._value;
            }
            return;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v != null && this.mode === 'determinate') {
                /** @type {?} */
                var newValue = clamp(v);
                this._animateCircle(this.value || 0, newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "mode", {
        /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         */
        get: /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode !== this._mode) {
                if (mode === 'indeterminate') {
                    this._startIndeterminateAnimation();
                }
                else {
                    this._cleanupIndeterminateAnimation();
                    this._animateCircle(0, this._value);
                }
                this._mode = mode;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param animateFrom The percentage of the circle filled starting the animation.
     * @param animateTo The percentage of the circle filled ending the animation.
     * @param ease The easing function to manage the pace of change in the animation.
     * @param duration The length of time to show the animation, in milliseconds.
     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     */
    /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._animateCircle = /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        if (ease === void 0) { ease = linearEase; }
        if (duration === void 0) { duration = DURATION_DETERMINATE; }
        if (rotation === void 0) { rotation = 0; }
        /** @type {?} */
        var id = ++this._lastAnimationId;
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            /** @type {?} */
            var animation_1 = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            });
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     */
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._startIndeterminateAnimation = /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rotationStartPoint = 0;
        /** @type {?} */
        var start = startIndeterminate;
        /** @type {?} */
        var end = endIndeterminate;
        /** @type {?} */
        var duration = DURATION_INDETERMINATE;
        /** @type {?} */
        var animate = (/**
         * @return {?}
         */
        function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            /** @type {?} */
            var temp = start;
            start = -end;
            end = -temp;
        });
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                    animate();
                }));
            }
        }
    };
    /**
     * Removes interval, ending the animation.
     */
    /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._cleanupIndeterminateAnimation = /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    function () {
        this.interdeterminateInterval = null;
    };
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     */
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._renderArc = /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    function (currentValue, rotation) {
        if (rotation === void 0) { rotation = 0; }
        // Caches the path reference so it doesn't have to be looked up every time.
        /** @type {?} */
        var path = (this._path = this._path || this._elementRef.nativeElement.querySelector('path'));
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     */
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._updateColor = /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    /** Sets the given palette class on the component element. */
    /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._setElementColor = /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    function (color, isAdd) {
        if (color != null && color !== '') {
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, "mat-" + color);
            }
        }
    };
    MdProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-Spinners, mat-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdProgressSpinnerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdProgressSpinnerComponent.propDecorators = {
        platformId: [{ type: Inject, args: [PLATFORM_ID,] }],
        color: [{ type: Input }],
        value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
        mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }]
    };
    return MdProgressSpinnerComponent;
}());
export { MdProgressSpinnerComponent };
if (false) {
    /**
     * The id of the last requested animation.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._lastAnimationId;
    /**
     * The id of the indeterminate interval.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._interdeterminateInterval;
    /**
     * The SVG <path> node that is used to draw the circle.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._path;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._color;
    /** @type {?} */
    MdProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    MdProgressSpinnerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._renderer;
}
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
var MdSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MdSpinnerComponent, _super);
    function MdSpinnerComponent(elementRef, ngZone, renderer) {
        var _this = _super.call(this, ngZone, elementRef, renderer) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    /**
     * @return {?}
     */
    MdSpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        _super.prototype.ngOnDestroy.call(this);
    };
    MdSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}"]
                }] }
    ];
    /** @nocollapse */
    MdSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    MdSpinnerComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-spinner',] }]
    };
    return MdSpinnerComponent;
}(MdProgressSpinnerComponent));
export { MdSpinnerComponent };
if (false) {
    /** @type {?} */
    MdSpinnerComponent.prototype.true;
}
/**
 * Module functions.
 */
/**
 * Clamps a value to be between 0 and 100.
 * @param {?} v
 * @return {?}
 */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 * @param {?} radius
 * @param {?} pathRadius
 * @param {?} angleInDegrees
 * @return {?}
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    /** @type {?} */
    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius +
        pathRadius * Math.cos(angleInRadians) +
        ',' +
        (radius + pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return (changeInValue * currentTime) / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    /** @type {?} */
    var time = currentTime / duration;
    /** @type {?} */
    var timeCubed = Math.pow(time, 3);
    /** @type {?} */
    var timeQuad = Math.pow(time, 4);
    /** @type {?} */
    var timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * (6 * timeQuint + -15 * timeQuad + 10 * timeCubed);
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param {?} currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param {?} rotation The starting point of the circle with 0 being the 0 degree point.
 * @return {?} A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    /** @type {?} */
    var startPoint = rotation || 0;
    /** @type {?} */
    var radius = 50;
    /** @type {?} */
    var pathRadius = 40;
    /** @type {?} */
    var startAngle = startPoint * MAX_ANGLE;
    /** @type {?} */
    var endAngle = currentValue * MAX_ANGLE;
    /** @type {?} */
    var start = polarToCartesian(radius, pathRadius, startAngle);
    /** @type {?} */
    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    /** @type {?} */
    var arcSweep = endAngle < 0 ? 0 : 1;
    /** @type {?} */
    var largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLHVCQUF1QixFQUV2QixLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQUc5QyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUc7Ozs7O0lBRWpDLHNCQUFzQixHQUFHLEdBQUc7Ozs7O0lBRTVCLG9CQUFvQixHQUFHLEdBQUc7Ozs7O0lBRTFCLGtCQUFrQixHQUFHLENBQUM7Ozs7O0lBRXRCLGdCQUFnQixHQUFHLEVBQUU7OztJQUVyQixTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUc7Ozs7O0FBZTlCO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztpQkFDaEQ7Ozt1QkFFRSxXQUFXLFNBQUMsNEJBQTRCOztJQUMzQyw2Q0FBQztDQUFBLEFBTEQsSUFLQztTQUZZLHNDQUFzQzs7O0lBQ2pELHNEQUFxRDs7Ozs7QUFNdkQ7SUFvR0Usb0NBQ1UsT0FBZSxFQUNmLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ1AsVUFBeUI7UUFIdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7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UUFBUSxHQUFHLFVBQVUsQ0FBQzs7UUFDakUsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDakMsWUFBb0I7SUFFeEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLFlBQVksR0FBRyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO1NBQU07UUFDTCxZQUFZLEdBQUcsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFFRCxPQUFPLE1BQUksS0FBSyxTQUFJLFVBQVUsU0FBSSxVQUFVLFdBQU0sWUFBWSxTQUFJLFFBQVEsU0FBSSxHQUFLLENBQUM7QUFDdEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIFJlbmRlcmVyMixcbiAgRGlyZWN0aXZlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEEgc2luZ2xlIGRlZ3JlZSBpbiByYWRpYW5zLiAqL1xuY29uc3QgREVHUkVFX0lOX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwO1xuLyoqIER1cmF0aW9uIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbi4gKi9cbmNvbnN0IERVUkFUSU9OX0lOREVURVJNSU5BVEUgPSA2Njc7XG4vKiogRHVyYXRpb24gb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLiAqL1xuY29uc3QgRFVSQVRJT05fREVURVJNSU5BVEUgPSAyMjU7XG4vKiogU3RhcnQgYW5pbWF0aW9uIHZhbHVlIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiAqL1xuY29uc3Qgc3RhcnRJbmRldGVybWluYXRlID0gMztcbi8qKiBFbmQgYW5pbWF0aW9uIHZhbHVlIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiAqL1xuY29uc3QgZW5kSW5kZXRlcm1pbmF0ZSA9IDgwO1xuLyogTWF4aW11bSBhbmdsZSBmb3IgdGhlIGFyYy4gVGhlIGFuZ2xlIGNhbid0IGJlIGV4YWN0bHkgMzYwLCBiZWNhdXNlIHRoZSBhcmMgYmVjb21lcyBoaWRkZW4uICovXG5jb25zdCBNQVhfQU5HTEUgPSAzNTkuOTkgLyAxMDA7XG5cbmV4cG9ydCB0eXBlIFByb2dyZXNzU3Bpbm5lck1vZGUgPSAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnO1xuXG50eXBlIEVhc2luZ0ZuID0gKFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBzdGFydFZhbHVlOiBudW1iZXIsXG4gIGNoYW5nZUluVmFsdWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlclxuKSA9PiBudW1iZXI7XG5cbi8qKlxuICogRGlyZWN0aXZlIHdob3NlIHB1cnBvc2UgaXMgdG8gYWRkIHRoZSBtYXQtIENTUyBzdHlsaW5nIHRvIHRoaXMgc2VsZWN0b3IuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTcGlubmVyc10sIG1hdC1wcm9ncmVzcy1zcGlubmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1wcm9ncmVzcy1zcGlubmVyJykgdHJ1ZTogYW55O1xufVxuXG4vKipcbiAqIDxtZC1wcm9ncmVzcy1zcGlubmVyPiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1TcGlubmVycywgbWF0LXByb2dyZXNzLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogVGhlIGlkIG9mIHRoZSBsYXN0IHJlcXVlc3RlZCBhbmltYXRpb24uICovXG4gIHByaXZhdGUgX2xhc3RBbmltYXRpb25JZCA9IDA7XG5cbiAgLyoqIFRoZSBpZCBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBpbnRlcnZhbC4gKi9cbiAgcHJpdmF0ZSBfaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsOiBhbnk7XG5cbiAgLyoqIFRoZSBTVkcgPHBhdGg+IG5vZGUgdGhhdCBpcyB1c2VkIHRvIGRyYXcgdGhlIGNpcmNsZS4gKi9cbiAgcHJpdmF0ZSBfcGF0aDogU1ZHUGF0aEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBfbW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbG9yID0gJ3ByaW1hcnknO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFZhbHVlcyBmb3IgYXJpYSBtYXggYW5kIG1pbiBhcmUgb25seSBkZWZpbmVkIGFzIG51bWJlcnMgd2hlbiBpbiBhIGRldGVybWluYXRlIG1vZGUuICBXZSBkbyB0aGlzXG4gICAqIGJlY2F1c2Ugdm9pY2VvdmVyIGRvZXMgbm90IHJlcG9ydCB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGFzIGluZGV0ZXJtaW5hdGUgaWYgdGhlIGFyaWEgbWluXG4gICAqIGFuZC9vciBtYXggdmFsdWUgYXJlIG51bWJlciB2YWx1ZXMuXG4gICAqL1xuICBnZXQgX2FyaWFWYWx1ZU1pbigpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gMCA6IG51bGw7XG4gIH1cblxuICBnZXQgX2FyaWFWYWx1ZU1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gMTAwIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBpbnRlcmRldGVybWluYXRlSW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbDtcbiAgfVxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzZXQgaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKGludGVydmFsKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwpO1xuICAgIHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuIHVwIGFueSBhbmltYXRpb25zIHRoYXQgd2VyZSBydW5uaW5nLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgdGhlIHByb2dyZXNzLXNwaW5uZXIuIENhbiBiZSBwcmltYXJ5LCBhY2NlbnQsIG9yIHdhcm4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZUNvbG9yKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlLiBJdCBpcyBib3VuZCB0byB0aGUgaG9zdCBhcyB0aGUgYXR0cmlidXRlIGFyaWEtdmFsdWVub3cuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbm93JylcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc2V0IHZhbHVlKHY6IG51bWJlciB8IGFueSkge1xuICAgIGlmICh2ICE9IG51bGwgJiYgdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGNsYW1wKHYpO1xuICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZSh0aGlzLnZhbHVlIHx8IDAsIG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vZGUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZVxuICAgKlxuICAgKiBJbnB1dCBtdXN0IGJlIG9uZSBvZiB0aGUgdmFsdWVzIGZyb20gUHJvZ3Jlc3NNb2RlLCBkZWZhdWx0cyB0byAnZGV0ZXJtaW5hdGUnLlxuICAgKiBtb2RlIGlzIGJvdW5kIHRvIHRoZSBob3N0IGFzIHRoZSBhdHRyaWJ1dGUgaG9zdC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tb2RlJylcbiAgQElucHV0KClcbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgc2V0IG1vZGUobW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSkge1xuICAgIGlmIChtb2RlICE9PSB0aGlzLl9tb2RlKSB7XG4gICAgICBpZiAobW9kZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0SW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZSgwLCB0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZD86IHN0cmluZyB8IGFueVxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSBjaXJjbGUgZnJvbSBvbmUgcGVyY2VudGFnZSB2YWx1ZSB0byBhbm90aGVyLlxuICAgKlxuICAgKiBAcGFyYW0gYW5pbWF0ZUZyb20gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNpcmNsZSBmaWxsZWQgc3RhcnRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICogQHBhcmFtIGFuaW1hdGVUbyBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2lyY2xlIGZpbGxlZCBlbmRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICogQHBhcmFtIGVhc2UgVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtYW5hZ2UgdGhlIHBhY2Ugb2YgY2hhbmdlIGluIHRoZSBhbmltYXRpb24uXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgbGVuZ3RoIG9mIHRpbWUgdG8gc2hvdyB0aGUgYW5pbWF0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSByb3RhdGlvbiBUaGUgc3RhcnRpbmcgYW5nbGUgb2YgdGhlIGNpcmNsZSBmaWxsLCB3aXRoIDDCsCByZXByZXNlbnRlZCBhdCB0aGUgdG9wIGNlbnRlclxuICAgKiAgICBvZiB0aGUgY2lyY2xlLlxuICAgKi9cbiAgcHJpdmF0ZSBfYW5pbWF0ZUNpcmNsZShcbiAgICBhbmltYXRlRnJvbTogbnVtYmVyLFxuICAgIGFuaW1hdGVUbzogbnVtYmVyLFxuICAgIGVhc2U6IEVhc2luZ0ZuID0gbGluZWFyRWFzZSxcbiAgICBkdXJhdGlvbiA9IERVUkFUSU9OX0RFVEVSTUlOQVRFLFxuICAgIHJvdGF0aW9uID0gMFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5fbGFzdEFuaW1hdGlvbklkO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgY2hhbmdlSW5WYWx1ZSA9IGFuaW1hdGVUbyAtIGFuaW1hdGVGcm9tO1xuXG4gICAgLy8gTm8gbmVlZCB0byBhbmltYXRlIGl0IGlmIHRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lXG4gICAgaWYgKGFuaW1hdGVUbyA9PT0gYW5pbWF0ZUZyb20pIHtcbiAgICAgIHRoaXMuX3JlbmRlckFyYyhhbmltYXRlVG8sIHJvdGF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKERhdGUubm93KCkgLSBzdGFydFRpbWUsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyQXJjKGVhc2UoZWxhcHNlZFRpbWUsIGFuaW1hdGVGcm9tLCBjaGFuZ2VJblZhbHVlLCBkdXJhdGlvbiksIHJvdGF0aW9uKTtcblxuICAgICAgICAvLyBQcmV2ZW50IG92ZXJsYXBwaW5nIGFuaW1hdGlvbnMgYnkgY2hlY2tpbmcgaWYgYSBuZXcgYW5pbWF0aW9uIGhhcyBiZWVuIGNhbGxlZCBmb3IgYW5kXG4gICAgICAgIC8vIGlmIHRoZSBhbmltYXRpb24gaGFzIGxhc3RlZCBsb25nZXIgdGhhbiB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uLlxuICAgICAgICBpZiAoaWQgPT09IHRoaXMuX2xhc3RBbmltYXRpb25JZCAmJiBlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIFJ1biB0aGUgYW5pbWF0aW9uIG91dHNpZGUgb2YgQW5ndWxhcidzIHpvbmUsIGluIG9yZGVyIHRvIGF2b2lkXG4gICAgICAvLyBoaXR0aW5nIFpvbmVKUyBhbmQgY2hhbmdlIGRldGVjdGlvbiBvbiBlYWNoIGZyYW1lLlxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFuaW1hdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24gaW50ZXJ2YWwsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHJ1bm5pbmcuXG4gICAqL1xuICBwcml2YXRlIF9zdGFydEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTogdm9pZCB7XG4gICAgbGV0IHJvdGF0aW9uU3RhcnRQb2ludCA9IDA7XG4gICAgbGV0IHN0YXJ0ID0gc3RhcnRJbmRldGVybWluYXRlO1xuICAgIGxldCBlbmQgPSBlbmRJbmRldGVybWluYXRlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gRFVSQVRJT05fSU5ERVRFUk1JTkFURTtcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZShzdGFydCwgZW5kLCBtYXRlcmlhbEVhc2UsIGR1cmF0aW9uLCByb3RhdGlvblN0YXJ0UG9pbnQpO1xuICAgICAgLy8gUHJldmVudCByb3RhdGlvbiBmcm9tIHJlYWNoaW5nIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLlxuICAgICAgcm90YXRpb25TdGFydFBvaW50ID0gKHJvdGF0aW9uU3RhcnRQb2ludCArIGVuZCkgJSAxMDA7XG4gICAgICBjb25zdCB0ZW1wID0gc3RhcnQ7XG4gICAgICBzdGFydCA9IC1lbmQ7XG4gICAgICBlbmQgPSAtdGVtcDtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAoIXRoaXMuaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhbmltYXRlLCBkdXJhdGlvbiArIDUwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBpbnRlcnZhbCwgZW5kaW5nIHRoZSBhbmltYXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYXJjIG9udG8gdGhlIFNWRyBlbGVtZW50LiBQcm94aWVzIGBnZXRBcmNgIHdoaWxlIHNldHRpbmcgdGhlIHByb3BlclxuICAgKiBET00gYXR0cmlidXRlIG9uIHRoZSBgPHBhdGg+YC5cbiAgICovXG4gIHByaXZhdGUgX3JlbmRlckFyYyhjdXJyZW50VmFsdWU6IG51bWJlciwgcm90YXRpb24gPSAwKTogdm9pZCB7XG4gICAgLy8gQ2FjaGVzIHRoZSBwYXRoIHJlZmVyZW5jZSBzbyBpdCBkb2Vzbid0IGhhdmUgdG8gYmUgbG9va2VkIHVwIGV2ZXJ5IHRpbWUuXG4gICAgY29uc3QgcGF0aCA9ICh0aGlzLl9wYXRoID0gdGhpcy5fcGF0aCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcigncGF0aCcpKTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBwYXRoIHdhcyBmb3VuZC4gVGhpcyBtYXkgbm90IGJlIHRoZSBjYXNlIGlmIHRoZVxuICAgIC8vIGFuaW1hdGlvbiBmdW5jdGlvbiBmaXJlcyB0b28gZWFybHkuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgZ2V0U3ZnQXJjKGN1cnJlbnRWYWx1ZSwgcm90YXRpb24pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY29sb3Igb2YgdGhlIHByb2dyZXNzLXNwaW5uZXIgYnkgYWRkaW5nIHRoZSBuZXcgcGFsZXR0ZSBjbGFzcyB0byB0aGUgZWxlbWVudFxuICAgKiBhbmQgcmVtb3ZpbmcgdGhlIG9sZCBvbmUuXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVDb2xvcihuZXdDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0RWxlbWVudENvbG9yKHRoaXMuX2NvbG9yLCBmYWxzZSk7XG4gICAgdGhpcy5fc2V0RWxlbWVudENvbG9yKG5ld0NvbG9yLCB0cnVlKTtcbiAgICB0aGlzLl9jb2xvciA9IG5ld0NvbG9yO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGdpdmVuIHBhbGV0dGUgY2xhc3Mgb24gdGhlIGNvbXBvbmVudCBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9zZXRFbGVtZW50Q29sb3IoY29sb3I6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoY29sb3IgIT0gbnVsbCAmJiBjb2xvciAhPT0gJycpIHtcbiAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXQtJHtjb2xvcn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiA8bWQtc3Bpbm5lcj4gY29tcG9uZW50LlxuICpcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGFzIGEgY29udmVuaWVuY2UgcmVmZXJlbmNlIHRvIGNyZWF0ZSBhblxuICogaW5kZXRlcm1pbmF0ZSA8bWQtcHJvZ3Jlc3Mtc3Bpbm5lcj4gaW5zdGFuY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zcGlubmVycywgbWF0LXNwaW5uZXIsIG1kYi1wcm9ncmVzcy1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zcGlubmVyJykgdHJ1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIobmdab25lLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gICAgdGhpcy5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gVGhlIGBuZ09uRGVzdHJveWAgZnJvbSBgTWRQcm9ncmVzc1NwaW5uZXJgIHNob3VsZCBiZSBjYWxsZWQgZXhwbGljaXRseSwgYmVjYXVzZVxuICAgIC8vIGluIGNlcnRhaW4gY2FzZXMgQW5ndWxhciB3b24ndCBjYWxsIGl0IChlLmcuIHdoZW4gdXNpbmcgQW9UIGFuZCBpbiB1bml0IHRlc3RzKS5cbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogTW9kdWxlIGZ1bmN0aW9ucy5cbiAqL1xuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdikpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIFBvbGFyIGNvb3JkaW5hdGVzIHRvIENhcnRlc2lhbi5cbiAqL1xuZnVuY3Rpb24gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXM6IG51bWJlciwgcGF0aFJhZGl1czogbnVtYmVyLCBhbmdsZUluRGVncmVlczogbnVtYmVyKSB7XG4gIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzIC0gOTApICogREVHUkVFX0lOX1JBRElBTlM7XG5cbiAgcmV0dXJuIChcbiAgICByYWRpdXMgK1xuICAgIHBhdGhSYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykgK1xuICAgICcsJyArXG4gICAgKHJhZGl1cyArIHBhdGhSYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXG4gICk7XG59XG5cbi8qKlxuICogRWFzaW5nIGZ1bmN0aW9uIGZvciBsaW5lYXIgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBsaW5lYXJFYXNlKFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBzdGFydFZhbHVlOiBudW1iZXIsXG4gIGNoYW5nZUluVmFsdWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlclxuKSB7XG4gIHJldHVybiAoY2hhbmdlSW5WYWx1ZSAqIGN1cnJlbnRUaW1lKSAvIGR1cmF0aW9uICsgc3RhcnRWYWx1ZTtcbn1cblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gbWF0Y2ggbWF0ZXJpYWwgZGVzaWduIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRlcmlhbEVhc2UoXG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyXG4pIHtcbiAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG4gIGNvbnN0IHRpbWVDdWJlZCA9IE1hdGgucG93KHRpbWUsIDMpO1xuICBjb25zdCB0aW1lUXVhZCA9IE1hdGgucG93KHRpbWUsIDQpO1xuICBjb25zdCB0aW1lUXVpbnQgPSBNYXRoLnBvdyh0aW1lLCA1KTtcbiAgcmV0dXJuIHN0YXJ0VmFsdWUgKyBjaGFuZ2VJblZhbHVlICogKDYgKiB0aW1lUXVpbnQgKyAtMTUgKiB0aW1lUXVhZCArIDEwICogdGltZUN1YmVkKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBwYXRoIHZhbHVlIHRvIGRlZmluZSB0aGUgYXJjLiAgQ29udmVydGluZyBwZXJjZW50YWdlIHZhbHVlcyB0byB0byBwb2xhclxuICogY29vcmRpbmF0ZXMgb24gdGhlIGNpcmNsZSwgYW5kIHRoZW4gdG8gY2FydGVzaWFuIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiBAcGFyYW0gY3VycmVudFZhbHVlIFRoZSBjdXJyZW50IHBlcmNlbnRhZ2UgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZSwgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlXG4gKiAgICBjaXJjbGUgdG8gZmlsbC5cbiAqIEBwYXJhbSByb3RhdGlvbiBUaGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGNpcmNsZSB3aXRoIDAgYmVpbmcgdGhlIDAgZGVncmVlIHBvaW50LlxuICogQHJldHVybiBBIHN0cmluZyBmb3IgYW4gU1ZHIHBhdGggcmVwcmVzZW50aW5nIGEgY2lyY2xlIGZpbGxlZCBmcm9tIHRoZSBzdGFydGluZyBwb2ludCB0byB0aGVcbiAqICAgIHBlcmNlbnRhZ2UgdmFsdWUgcHJvdmlkZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFN2Z0FyYyhjdXJyZW50VmFsdWU6IG51bWJlciwgcm90YXRpb246IG51bWJlcikge1xuICBjb25zdCBzdGFydFBvaW50ID0gcm90YXRpb24gfHwgMDtcbiAgY29uc3QgcmFkaXVzID0gNTA7XG4gIGNvbnN0IHBhdGhSYWRpdXMgPSA0MDtcblxuICBjb25zdCBzdGFydEFuZ2xlID0gc3RhcnRQb2ludCAqIE1BWF9BTkdMRTtcbiAgY29uc3QgZW5kQW5nbGUgPSBjdXJyZW50VmFsdWUgKiBNQVhfQU5HTEU7XG4gIGNvbnN0IHN0YXJ0ID0gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXMsIHBhdGhSYWRpdXMsIHN0YXJ0QW5nbGUpO1xuICBjb25zdCBlbmQgPSBwb2xhclRvQ2FydGVzaWFuKHJhZGl1cywgcGF0aFJhZGl1cywgZW5kQW5nbGUgKyBzdGFydEFuZ2xlKTtcbiAgY29uc3QgYXJjU3dlZXAgPSBlbmRBbmdsZSA8IDAgPyAwIDogMTtcbiAgbGV0IGxhcmdlQXJjRmxhZzogbnVtYmVyO1xuXG4gIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSA+PSAtMTgwID8gMCA6IDE7XG4gIH0gZWxzZSB7XG4gICAgbGFyZ2VBcmNGbGFnID0gZW5kQW5nbGUgPD0gMTgwID8gMCA6IDE7XG4gIH1cblxuICByZXR1cm4gYE0ke3N0YXJ0fUEke3BhdGhSYWRpdXN9LCR7cGF0aFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30sJHthcmNTd2VlcH0gJHtlbmR9YDtcbn1cbiJdfQ==