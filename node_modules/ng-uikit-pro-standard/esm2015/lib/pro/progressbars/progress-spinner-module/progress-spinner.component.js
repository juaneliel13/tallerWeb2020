/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ChangeDetectionStrategy, Input, ElementRef, NgZone, Renderer2, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
/**
 * A single degree in radians.
 * @type {?}
 */
const DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
const DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
const DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 * @type {?}
 */
const startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 * @type {?}
 */
const endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
/** @type {?} */
const MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
export class MdProgressSpinnerCssMatStylerDirective {
}
MdProgressSpinnerCssMatStylerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSpinners], mat-progress-spinner',
            },] }
];
MdProgressSpinnerCssMatStylerDirective.propDecorators = {
    true: [{ type: HostBinding, args: ['class.mat-progress-spinner',] }]
};
if (false) {
    /** @type {?} */
    MdProgressSpinnerCssMatStylerDirective.prototype.true;
}
/**
 * <md-progress-spinner> component.
 */
export class MdProgressSpinnerComponent {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?=} platformId
     */
    constructor(_ngZone, _elementRef, _renderer, platformId) {
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
    /**
     * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
     * because voiceover does not report the progress indicator as indeterminate if the aria min
     * and/or max value are number values.
     * @return {?}
     */
    get _ariaValueMin() {
        return this.mode === 'determinate' ? 0 : null;
    }
    /**
     * @return {?}
     */
    get _ariaValueMax() {
        return this.mode === 'determinate' ? 100 : null;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get interdeterminateInterval() {
        return this._interdeterminateInterval;
    }
    /**
     * \@docs-private
     * @param {?} interval
     * @return {?}
     */
    set interdeterminateInterval(interval) {
        clearInterval(this._interdeterminateInterval);
        this._interdeterminateInterval = interval;
    }
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    ngOnDestroy() {
        this._cleanupIndeterminateAnimation();
    }
    /**
     * The color of the progress-spinner. Can be primary, accent, or warn.
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._updateColor(value);
    }
    /**
     * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
     * @return {?}
     */
    get value() {
        if (this.mode === 'determinate') {
            return this._value;
        }
        return;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v != null && this.mode === 'determinate') {
            /** @type {?} */
            const newValue = clamp(v);
            this._animateCircle(this.value || 0, newValue);
            this._value = newValue;
        }
    }
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
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
    }
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
    _animateCircle(animateFrom, animateTo, ease = linearEase, duration = DURATION_DETERMINATE, rotation = 0) {
        /** @type {?} */
        const id = ++this._lastAnimationId;
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            /** @type {?} */
            const animation = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation);
                }
            });
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation);
        }
    }
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    _startIndeterminateAnimation() {
        /** @type {?} */
        let rotationStartPoint = 0;
        /** @type {?} */
        let start = startIndeterminate;
        /** @type {?} */
        let end = endIndeterminate;
        /** @type {?} */
        const duration = DURATION_INDETERMINATE;
        /** @type {?} */
        const animate = (/**
         * @return {?}
         */
        () => {
            this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            /** @type {?} */
            const temp = start;
            start = -end;
            end = -temp;
        });
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                    animate();
                }));
            }
        }
    }
    /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    _cleanupIndeterminateAnimation() {
        this.interdeterminateInterval = null;
    }
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    _renderArc(currentValue, rotation = 0) {
        // Caches the path reference so it doesn't have to be looked up every time.
        /** @type {?} */
        const path = (this._path = this._path || this._elementRef.nativeElement.querySelector('path'));
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    }
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    _setElementColor(color, isAdd) {
        if (color != null && color !== '') {
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, `mat-${color}`);
            }
        }
    }
}
MdProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-Spinners, mat-progress-spinner',
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MdProgressSpinnerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdProgressSpinnerComponent.propDecorators = {
    platformId: [{ type: Inject, args: [PLATFORM_ID,] }],
    color: [{ type: Input }],
    value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
    mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }]
};
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
export class MdSpinnerComponent extends MdProgressSpinnerComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     */
    constructor(elementRef, ngZone, renderer) {
        super(ngZone, elementRef, renderer);
        this.mode = 'indeterminate';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        super.ngOnDestroy();
    }
}
MdSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}"]
            }] }
];
/** @nocollapse */
MdSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
MdSpinnerComponent.propDecorators = {
    true: [{ type: HostBinding, args: ['class.mat-spinner',] }]
};
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
    const angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
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
    const time = currentTime / duration;
    /** @type {?} */
    const timeCubed = Math.pow(time, 3);
    /** @type {?} */
    const timeQuad = Math.pow(time, 4);
    /** @type {?} */
    const timeQuint = Math.pow(time, 5);
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
    const startPoint = rotation || 0;
    /** @type {?} */
    const radius = 50;
    /** @type {?} */
    const pathRadius = 40;
    /** @type {?} */
    const startAngle = startPoint * MAX_ANGLE;
    /** @type {?} */
    const endAngle = currentValue * MAX_ANGLE;
    /** @type {?} */
    const start = polarToCartesian(radius, pathRadius, startAngle);
    /** @type {?} */
    const end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    /** @type {?} */
    const arcSweep = endAngle < 0 ? 0 : 1;
    /** @type {?} */
    let largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return `M${start}A${pathRadius},${pathRadius} 0 ${largeArcFlag},${arcSweep} ${end}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O01BRzlDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRzs7Ozs7TUFFakMsc0JBQXNCLEdBQUcsR0FBRzs7Ozs7TUFFNUIsb0JBQW9CLEdBQUcsR0FBRzs7Ozs7TUFFMUIsa0JBQWtCLEdBQUcsQ0FBQzs7Ozs7TUFFdEIsZ0JBQWdCLEdBQUcsRUFBRTs7O01BRXJCLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRzs7Ozs7QUFrQjlCLE1BQU0sT0FBTyxzQ0FBc0M7OztZQUhsRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQzthQUNoRDs7O21CQUVFLFdBQVcsU0FBQyw0QkFBNEI7Ozs7SUFBekMsc0RBQXFEOzs7OztBQVd2RCxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7O0lBK0ZyQyxZQUNVLE9BQWUsRUFDZixXQUF1QixFQUN2QixTQUFvQixFQUNQLFVBQXlCO1FBSHRDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXOzs7O1FBaEd0QixxQkFB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bmRpbmcsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIFJlbmRlcmVyMixcbiAgRGlyZWN0aXZlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEEgc2luZ2xlIGRlZ3JlZSBpbiByYWRpYW5zLiAqL1xuY29uc3QgREVHUkVFX0lOX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwO1xuLyoqIER1cmF0aW9uIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbi4gKi9cbmNvbnN0IERVUkFUSU9OX0lOREVURVJNSU5BVEUgPSA2Njc7XG4vKiogRHVyYXRpb24gb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLiAqL1xuY29uc3QgRFVSQVRJT05fREVURVJNSU5BVEUgPSAyMjU7XG4vKiogU3RhcnQgYW5pbWF0aW9uIHZhbHVlIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiAqL1xuY29uc3Qgc3RhcnRJbmRldGVybWluYXRlID0gMztcbi8qKiBFbmQgYW5pbWF0aW9uIHZhbHVlIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiAqL1xuY29uc3QgZW5kSW5kZXRlcm1pbmF0ZSA9IDgwO1xuLyogTWF4aW11bSBhbmdsZSBmb3IgdGhlIGFyYy4gVGhlIGFuZ2xlIGNhbid0IGJlIGV4YWN0bHkgMzYwLCBiZWNhdXNlIHRoZSBhcmMgYmVjb21lcyBoaWRkZW4uICovXG5jb25zdCBNQVhfQU5HTEUgPSAzNTkuOTkgLyAxMDA7XG5cbmV4cG9ydCB0eXBlIFByb2dyZXNzU3Bpbm5lck1vZGUgPSAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnO1xuXG50eXBlIEVhc2luZ0ZuID0gKFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBzdGFydFZhbHVlOiBudW1iZXIsXG4gIGNoYW5nZUluVmFsdWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlclxuKSA9PiBudW1iZXI7XG5cbi8qKlxuICogRGlyZWN0aXZlIHdob3NlIHB1cnBvc2UgaXMgdG8gYWRkIHRoZSBtYXQtIENTUyBzdHlsaW5nIHRvIHRoaXMgc2VsZWN0b3IuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTcGlubmVyc10sIG1hdC1wcm9ncmVzcy1zcGlubmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1wcm9ncmVzcy1zcGlubmVyJykgdHJ1ZTogYW55O1xufVxuXG4vKipcbiAqIDxtZC1wcm9ncmVzcy1zcGlubmVyPiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1TcGlubmVycywgbWF0LXByb2dyZXNzLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogVGhlIGlkIG9mIHRoZSBsYXN0IHJlcXVlc3RlZCBhbmltYXRpb24uICovXG4gIHByaXZhdGUgX2xhc3RBbmltYXRpb25JZCA9IDA7XG5cbiAgLyoqIFRoZSBpZCBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBpbnRlcnZhbC4gKi9cbiAgcHJpdmF0ZSBfaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsOiBhbnk7XG5cbiAgLyoqIFRoZSBTVkcgPHBhdGg+IG5vZGUgdGhhdCBpcyB1c2VkIHRvIGRyYXcgdGhlIGNpcmNsZS4gKi9cbiAgcHJpdmF0ZSBfcGF0aDogU1ZHUGF0aEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBfbW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbG9yID0gJ3ByaW1hcnknO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFZhbHVlcyBmb3IgYXJpYSBtYXggYW5kIG1pbiBhcmUgb25seSBkZWZpbmVkIGFzIG51bWJlcnMgd2hlbiBpbiBhIGRldGVybWluYXRlIG1vZGUuICBXZSBkbyB0aGlzXG4gICAqIGJlY2F1c2Ugdm9pY2VvdmVyIGRvZXMgbm90IHJlcG9ydCB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGFzIGluZGV0ZXJtaW5hdGUgaWYgdGhlIGFyaWEgbWluXG4gICAqIGFuZC9vciBtYXggdmFsdWUgYXJlIG51bWJlciB2YWx1ZXMuXG4gICAqL1xuICBnZXQgX2FyaWFWYWx1ZU1pbigpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gMCA6IG51bGw7XG4gIH1cblxuICBnZXQgX2FyaWFWYWx1ZU1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gMTAwIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBpbnRlcmRldGVybWluYXRlSW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbDtcbiAgfVxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzZXQgaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKGludGVydmFsKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwpO1xuICAgIHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuIHVwIGFueSBhbmltYXRpb25zIHRoYXQgd2VyZSBydW5uaW5nLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgdGhlIHByb2dyZXNzLXNwaW5uZXIuIENhbiBiZSBwcmltYXJ5LCBhY2NlbnQsIG9yIHdhcm4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZUNvbG9yKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlLiBJdCBpcyBib3VuZCB0byB0aGUgaG9zdCBhcyB0aGUgYXR0cmlidXRlIGFyaWEtdmFsdWVub3cuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbm93JylcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc2V0IHZhbHVlKHY6IG51bWJlciB8IGFueSkge1xuICAgIGlmICh2ICE9IG51bGwgJiYgdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGNsYW1wKHYpO1xuICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZSh0aGlzLnZhbHVlIHx8IDAsIG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vZGUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZVxuICAgKlxuICAgKiBJbnB1dCBtdXN0IGJlIG9uZSBvZiB0aGUgdmFsdWVzIGZyb20gUHJvZ3Jlc3NNb2RlLCBkZWZhdWx0cyB0byAnZGV0ZXJtaW5hdGUnLlxuICAgKiBtb2RlIGlzIGJvdW5kIHRvIHRoZSBob3N0IGFzIHRoZSBhdHRyaWJ1dGUgaG9zdC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tb2RlJylcbiAgQElucHV0KClcbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgc2V0IG1vZGUobW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSkge1xuICAgIGlmIChtb2RlICE9PSB0aGlzLl9tb2RlKSB7XG4gICAgICBpZiAobW9kZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0SW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZSgwLCB0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZD86IHN0cmluZyB8IGFueVxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSBjaXJjbGUgZnJvbSBvbmUgcGVyY2VudGFnZSB2YWx1ZSB0byBhbm90aGVyLlxuICAgKlxuICAgKiBAcGFyYW0gYW5pbWF0ZUZyb20gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNpcmNsZSBmaWxsZWQgc3RhcnRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICogQHBhcmFtIGFuaW1hdGVUbyBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2lyY2xlIGZpbGxlZCBlbmRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICogQHBhcmFtIGVhc2UgVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtYW5hZ2UgdGhlIHBhY2Ugb2YgY2hhbmdlIGluIHRoZSBhbmltYXRpb24uXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgbGVuZ3RoIG9mIHRpbWUgdG8gc2hvdyB0aGUgYW5pbWF0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSByb3RhdGlvbiBUaGUgc3RhcnRpbmcgYW5nbGUgb2YgdGhlIGNpcmNsZSBmaWxsLCB3aXRoIDDCsCByZXByZXNlbnRlZCBhdCB0aGUgdG9wIGNlbnRlclxuICAgKiAgICBvZiB0aGUgY2lyY2xlLlxuICAgKi9cbiAgcHJpdmF0ZSBfYW5pbWF0ZUNpcmNsZShcbiAgICBhbmltYXRlRnJvbTogbnVtYmVyLFxuICAgIGFuaW1hdGVUbzogbnVtYmVyLFxuICAgIGVhc2U6IEVhc2luZ0ZuID0gbGluZWFyRWFzZSxcbiAgICBkdXJhdGlvbiA9IERVUkFUSU9OX0RFVEVSTUlOQVRFLFxuICAgIHJvdGF0aW9uID0gMFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5fbGFzdEFuaW1hdGlvbklkO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgY2hhbmdlSW5WYWx1ZSA9IGFuaW1hdGVUbyAtIGFuaW1hdGVGcm9tO1xuXG4gICAgLy8gTm8gbmVlZCB0byBhbmltYXRlIGl0IGlmIHRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lXG4gICAgaWYgKGFuaW1hdGVUbyA9PT0gYW5pbWF0ZUZyb20pIHtcbiAgICAgIHRoaXMuX3JlbmRlckFyYyhhbmltYXRlVG8sIHJvdGF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKERhdGUubm93KCkgLSBzdGFydFRpbWUsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyQXJjKGVhc2UoZWxhcHNlZFRpbWUsIGFuaW1hdGVGcm9tLCBjaGFuZ2VJblZhbHVlLCBkdXJhdGlvbiksIHJvdGF0aW9uKTtcblxuICAgICAgICAvLyBQcmV2ZW50IG92ZXJsYXBwaW5nIGFuaW1hdGlvbnMgYnkgY2hlY2tpbmcgaWYgYSBuZXcgYW5pbWF0aW9uIGhhcyBiZWVuIGNhbGxlZCBmb3IgYW5kXG4gICAgICAgIC8vIGlmIHRoZSBhbmltYXRpb24gaGFzIGxhc3RlZCBsb25nZXIgdGhhbiB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uLlxuICAgICAgICBpZiAoaWQgPT09IHRoaXMuX2xhc3RBbmltYXRpb25JZCAmJiBlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIFJ1biB0aGUgYW5pbWF0aW9uIG91dHNpZGUgb2YgQW5ndWxhcidzIHpvbmUsIGluIG9yZGVyIHRvIGF2b2lkXG4gICAgICAvLyBoaXR0aW5nIFpvbmVKUyBhbmQgY2hhbmdlIGRldGVjdGlvbiBvbiBlYWNoIGZyYW1lLlxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFuaW1hdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24gaW50ZXJ2YWwsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHJ1bm5pbmcuXG4gICAqL1xuICBwcml2YXRlIF9zdGFydEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTogdm9pZCB7XG4gICAgbGV0IHJvdGF0aW9uU3RhcnRQb2ludCA9IDA7XG4gICAgbGV0IHN0YXJ0ID0gc3RhcnRJbmRldGVybWluYXRlO1xuICAgIGxldCBlbmQgPSBlbmRJbmRldGVybWluYXRlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gRFVSQVRJT05fSU5ERVRFUk1JTkFURTtcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZShzdGFydCwgZW5kLCBtYXRlcmlhbEVhc2UsIGR1cmF0aW9uLCByb3RhdGlvblN0YXJ0UG9pbnQpO1xuICAgICAgLy8gUHJldmVudCByb3RhdGlvbiBmcm9tIHJlYWNoaW5nIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLlxuICAgICAgcm90YXRpb25TdGFydFBvaW50ID0gKHJvdGF0aW9uU3RhcnRQb2ludCArIGVuZCkgJSAxMDA7XG4gICAgICBjb25zdCB0ZW1wID0gc3RhcnQ7XG4gICAgICBzdGFydCA9IC1lbmQ7XG4gICAgICBlbmQgPSAtdGVtcDtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAoIXRoaXMuaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhbmltYXRlLCBkdXJhdGlvbiArIDUwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBpbnRlcnZhbCwgZW5kaW5nIHRoZSBhbmltYXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYXJjIG9udG8gdGhlIFNWRyBlbGVtZW50LiBQcm94aWVzIGBnZXRBcmNgIHdoaWxlIHNldHRpbmcgdGhlIHByb3BlclxuICAgKiBET00gYXR0cmlidXRlIG9uIHRoZSBgPHBhdGg+YC5cbiAgICovXG4gIHByaXZhdGUgX3JlbmRlckFyYyhjdXJyZW50VmFsdWU6IG51bWJlciwgcm90YXRpb24gPSAwKTogdm9pZCB7XG4gICAgLy8gQ2FjaGVzIHRoZSBwYXRoIHJlZmVyZW5jZSBzbyBpdCBkb2Vzbid0IGhhdmUgdG8gYmUgbG9va2VkIHVwIGV2ZXJ5IHRpbWUuXG4gICAgY29uc3QgcGF0aCA9ICh0aGlzLl9wYXRoID0gdGhpcy5fcGF0aCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcigncGF0aCcpKTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBwYXRoIHdhcyBmb3VuZC4gVGhpcyBtYXkgbm90IGJlIHRoZSBjYXNlIGlmIHRoZVxuICAgIC8vIGFuaW1hdGlvbiBmdW5jdGlvbiBmaXJlcyB0b28gZWFybHkuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgZ2V0U3ZnQXJjKGN1cnJlbnRWYWx1ZSwgcm90YXRpb24pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY29sb3Igb2YgdGhlIHByb2dyZXNzLXNwaW5uZXIgYnkgYWRkaW5nIHRoZSBuZXcgcGFsZXR0ZSBjbGFzcyB0byB0aGUgZWxlbWVudFxuICAgKiBhbmQgcmVtb3ZpbmcgdGhlIG9sZCBvbmUuXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVDb2xvcihuZXdDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0RWxlbWVudENvbG9yKHRoaXMuX2NvbG9yLCBmYWxzZSk7XG4gICAgdGhpcy5fc2V0RWxlbWVudENvbG9yKG5ld0NvbG9yLCB0cnVlKTtcbiAgICB0aGlzLl9jb2xvciA9IG5ld0NvbG9yO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGdpdmVuIHBhbGV0dGUgY2xhc3Mgb24gdGhlIGNvbXBvbmVudCBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9zZXRFbGVtZW50Q29sb3IoY29sb3I6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoY29sb3IgIT0gbnVsbCAmJiBjb2xvciAhPT0gJycpIHtcbiAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXQtJHtjb2xvcn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiA8bWQtc3Bpbm5lcj4gY29tcG9uZW50LlxuICpcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGFzIGEgY29udmVuaWVuY2UgcmVmZXJlbmNlIHRvIGNyZWF0ZSBhblxuICogaW5kZXRlcm1pbmF0ZSA8bWQtcHJvZ3Jlc3Mtc3Bpbm5lcj4gaW5zdGFuY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zcGlubmVycywgbWF0LXNwaW5uZXIsIG1kYi1wcm9ncmVzcy1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zcGlubmVyJykgdHJ1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIobmdab25lLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gICAgdGhpcy5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gVGhlIGBuZ09uRGVzdHJveWAgZnJvbSBgTWRQcm9ncmVzc1NwaW5uZXJgIHNob3VsZCBiZSBjYWxsZWQgZXhwbGljaXRseSwgYmVjYXVzZVxuICAgIC8vIGluIGNlcnRhaW4gY2FzZXMgQW5ndWxhciB3b24ndCBjYWxsIGl0IChlLmcuIHdoZW4gdXNpbmcgQW9UIGFuZCBpbiB1bml0IHRlc3RzKS5cbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogTW9kdWxlIGZ1bmN0aW9ucy5cbiAqL1xuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdikpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIFBvbGFyIGNvb3JkaW5hdGVzIHRvIENhcnRlc2lhbi5cbiAqL1xuZnVuY3Rpb24gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXM6IG51bWJlciwgcGF0aFJhZGl1czogbnVtYmVyLCBhbmdsZUluRGVncmVlczogbnVtYmVyKSB7XG4gIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzIC0gOTApICogREVHUkVFX0lOX1JBRElBTlM7XG5cbiAgcmV0dXJuIChcbiAgICByYWRpdXMgK1xuICAgIHBhdGhSYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykgK1xuICAgICcsJyArXG4gICAgKHJhZGl1cyArIHBhdGhSYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXG4gICk7XG59XG5cbi8qKlxuICogRWFzaW5nIGZ1bmN0aW9uIGZvciBsaW5lYXIgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBsaW5lYXJFYXNlKFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBzdGFydFZhbHVlOiBudW1iZXIsXG4gIGNoYW5nZUluVmFsdWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlclxuKSB7XG4gIHJldHVybiAoY2hhbmdlSW5WYWx1ZSAqIGN1cnJlbnRUaW1lKSAvIGR1cmF0aW9uICsgc3RhcnRWYWx1ZTtcbn1cblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gbWF0Y2ggbWF0ZXJpYWwgZGVzaWduIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRlcmlhbEVhc2UoXG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyXG4pIHtcbiAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG4gIGNvbnN0IHRpbWVDdWJlZCA9IE1hdGgucG93KHRpbWUsIDMpO1xuICBjb25zdCB0aW1lUXVhZCA9IE1hdGgucG93KHRpbWUsIDQpO1xuICBjb25zdCB0aW1lUXVpbnQgPSBNYXRoLnBvdyh0aW1lLCA1KTtcbiAgcmV0dXJuIHN0YXJ0VmFsdWUgKyBjaGFuZ2VJblZhbHVlICogKDYgKiB0aW1lUXVpbnQgKyAtMTUgKiB0aW1lUXVhZCArIDEwICogdGltZUN1YmVkKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBwYXRoIHZhbHVlIHRvIGRlZmluZSB0aGUgYXJjLiAgQ29udmVydGluZyBwZXJjZW50YWdlIHZhbHVlcyB0byB0byBwb2xhclxuICogY29vcmRpbmF0ZXMgb24gdGhlIGNpcmNsZSwgYW5kIHRoZW4gdG8gY2FydGVzaWFuIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiBAcGFyYW0gY3VycmVudFZhbHVlIFRoZSBjdXJyZW50IHBlcmNlbnRhZ2UgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZSwgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlXG4gKiAgICBjaXJjbGUgdG8gZmlsbC5cbiAqIEBwYXJhbSByb3RhdGlvbiBUaGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGNpcmNsZSB3aXRoIDAgYmVpbmcgdGhlIDAgZGVncmVlIHBvaW50LlxuICogQHJldHVybiBBIHN0cmluZyBmb3IgYW4gU1ZHIHBhdGggcmVwcmVzZW50aW5nIGEgY2lyY2xlIGZpbGxlZCBmcm9tIHRoZSBzdGFydGluZyBwb2ludCB0byB0aGVcbiAqICAgIHBlcmNlbnRhZ2UgdmFsdWUgcHJvdmlkZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFN2Z0FyYyhjdXJyZW50VmFsdWU6IG51bWJlciwgcm90YXRpb246IG51bWJlcikge1xuICBjb25zdCBzdGFydFBvaW50ID0gcm90YXRpb24gfHwgMDtcbiAgY29uc3QgcmFkaXVzID0gNTA7XG4gIGNvbnN0IHBhdGhSYWRpdXMgPSA0MDtcblxuICBjb25zdCBzdGFydEFuZ2xlID0gc3RhcnRQb2ludCAqIE1BWF9BTkdMRTtcbiAgY29uc3QgZW5kQW5nbGUgPSBjdXJyZW50VmFsdWUgKiBNQVhfQU5HTEU7XG4gIGNvbnN0IHN0YXJ0ID0gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXMsIHBhdGhSYWRpdXMsIHN0YXJ0QW5nbGUpO1xuICBjb25zdCBlbmQgPSBwb2xhclRvQ2FydGVzaWFuKHJhZGl1cywgcGF0aFJhZGl1cywgZW5kQW5nbGUgKyBzdGFydEFuZ2xlKTtcbiAgY29uc3QgYXJjU3dlZXAgPSBlbmRBbmdsZSA8IDAgPyAwIDogMTtcbiAgbGV0IGxhcmdlQXJjRmxhZzogbnVtYmVyO1xuXG4gIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSA+PSAtMTgwID8gMCA6IDE7XG4gIH0gZWxzZSB7XG4gICAgbGFyZ2VBcmNGbGFnID0gZW5kQW5nbGUgPD0gMTgwID8gMCA6IDE7XG4gIH1cblxuICByZXR1cm4gYE0ke3N0YXJ0fUEke3BhdGhSYWRpdXN9LCR7cGF0aFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30sJHthcmNTd2VlcH0gJHtlbmR9YDtcbn1cbiJdfQ==