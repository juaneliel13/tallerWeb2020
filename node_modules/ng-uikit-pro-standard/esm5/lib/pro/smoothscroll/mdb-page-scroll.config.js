/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
EasingLogic = /** @class */ (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());
/**
 * @abstract
 */
export { EasingLogic };
if (false) {
    /**
     * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
     * or http://gizma.com/easing/
     * @abstract
     * @param {?} t current time
     * @param {?} b beginning value
     * @param {?} c change In value
     * @param {?} d duration
     * @return {?}
     */
    EasingLogic.prototype.ease = function (t, b, c, d) { };
}
// @dynamic
var PageScrollConfig = /** @class */ (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: 
        // Getter and setter to avoid auto completion to suggest calling the method
        /**
         * @return {?}
         */
        function () {
            return PageScrollConfig._easingLogic;
        },
        set: /**
         * @param {?} easingLogic
         * @return {?}
         */
        function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     */
    PageScrollConfig._interval = 10;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     */
    PageScrollConfig._minScrollDistance = 2;
    /**
     * Name of the default namespace.
     */
    PageScrollConfig._defaultNamespace = 'default';
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     */
    PageScrollConfig.defaultIsVerticalScrolling = true;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     */
    PageScrollConfig._logLevel = 2;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     */
    PageScrollConfig._interruptEvents = [
        'mousedown',
        'wheel',
        'DOMMouseScroll',
        'mousewheel',
        'keyup',
        'touchmove',
    ];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingLogic = {
        ease: (/**
         * @param {?} t
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @return {?}
         */
        function (t, b, c, d) {
            // Linear easing
            return (c * t) / d + b;
        }),
    };
    return PageScrollConfig;
}());
export { PageScrollConfig };
if (false) {
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {?}
     */
    PageScrollConfig._interval;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     * @type {?}
     */
    PageScrollConfig._minScrollDistance;
    /**
     * Name of the default namespace.
     * @type {?}
     */
    PageScrollConfig._defaultNamespace;
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     * @type {?}
     */
    PageScrollConfig.defaultIsVerticalScrolling;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     * @type {?}
     */
    PageScrollConfig._logLevel;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {?}
     */
    PageScrollConfig.defaultDuration;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {?}
     */
    PageScrollConfig.defaultScrollOffset;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     * @type {?}
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {?}
     */
    PageScrollConfig._interruptEvents;
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {?}
     */
    PageScrollConfig._interruptKeys;
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {?}
     */
    PageScrollConfig.defaultInterruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollConfig._easingLogic;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBQUE7SUFVQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7Ozs7Ozs7Ozs7Ozs7OztJQURDLHVEQUF5RTs7O0FBTzNFO0lBQUE7SUErRkEsQ0FBQztJQVBDLHNCQUFrQixzQ0FBa0I7UUFEcEMsMkVBQTJFOzs7Ozs7UUFDM0U7WUFDRSxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUN2QyxDQUFDOzs7OztRQUVELFVBQXFDLFdBQXdCO1lBQzNELGdCQUFnQixDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDOUMsQ0FBQzs7O09BSkE7Ozs7O0lBckZhLDBCQUFTLEdBQUcsRUFBRSxDQUFDOzs7Ozs7OztJQVNmLG1DQUFrQixHQUFHLENBQUMsQ0FBQzs7OztJQUt2QixrQ0FBaUIsR0FBRyxTQUFTLENBQUM7Ozs7O0lBTTlCLDJDQUEwQixHQUFHLElBQUksQ0FBQzs7Ozs7OztJQVFsQywwQkFBUyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFNZCxnQ0FBZSxHQUFHLElBQUksQ0FBQzs7Ozs7SUFNdkIsb0NBQW1CLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztJQVN4Qix1REFBc0MsR0FBRyxLQUFLLENBQUM7Ozs7SUFLL0MsaUNBQWdCLEdBQWE7UUFDekMsV0FBVztRQUNYLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLE9BQU87UUFDUCxXQUFXO0tBQ1osQ0FBQzs7Ozs7SUFNWSwrQkFBYyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFNcEQscUNBQW9CLEdBQUcsSUFBSSxDQUFDO0lBRTNCLDZCQUFZLEdBQWdCO1FBQ3pDLElBQUk7Ozs7Ozs7UUFBRSxVQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFDL0MsZ0JBQWdCO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUE7S0FDRixDQUFDO0lBVUosdUJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQS9GWSxnQkFBZ0I7Ozs7Ozs7SUFLM0IsMkJBQTZCOzs7Ozs7Ozs7SUFTN0Isb0NBQXFDOzs7OztJQUtyQyxtQ0FBNEM7Ozs7OztJQU01Qyw0Q0FBZ0Q7Ozs7Ozs7O0lBUWhELDJCQUE0Qjs7Ozs7O0lBTTVCLGlDQUFxQzs7Ozs7O0lBTXJDLHFDQUFzQzs7Ozs7Ozs7O0lBU3RDLHdEQUE2RDs7Ozs7SUFLN0Qsa0NBT0U7Ozs7OztJQU1GLGdDQUFrRTs7Ozs7O0lBTWxFLHNDQUEwQzs7Ozs7SUFFMUMsOEJBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRWFzaW5nTG9naWMge1xuICAvKipcbiAgICogRXhhbXBsZXMgbWF5IGJlIGZvdW5kIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9nZHNtaXRoL2pxdWVyeS5lYXNpbmcvYmxvYi9tYXN0ZXIvanF1ZXJ5LmVhc2luZy5qc1xuICAgKiBvciBodHRwOi8vZ2l6bWEuY29tL2Vhc2luZy9cbiAgICogQHBhcmFtIHQgY3VycmVudCB0aW1lXG4gICAqIEBwYXJhbSBiIGJlZ2lubmluZyB2YWx1ZVxuICAgKiBAcGFyYW0gYyBjaGFuZ2UgSW4gdmFsdWVcbiAgICogQHBhcmFtIGQgZHVyYXRpb25cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBlYXNlKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBQYWdlU2Nyb2xsVGFyZ2V0ID0gSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgUGFnZVNjcm9sbGluZ1ZpZXdzID0gSFRNTEVsZW1lbnQgfCBEb2N1bWVudCB8IEhUTUxCb2R5RWxlbWVudCB8IE5vZGU7XG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxDb25maWcge1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCB0aWxsIHVwZGF0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gYWdhaW4uXG4gICAqIFNtYWxsIGFtb3VudHMgbWF5IHByb2R1Y2Ugc21vb3RoZXIgYW5pbWF0aW9ucyBidXQgcmVxdWlyZSBtb3JlIHByb2Nlc3NpbmcgcG93ZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9pbnRlcnZhbCA9IDEwO1xuXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIHBpeGVscyB0aGF0IG5lZWQgdG8gYmUgYmV0d2VlbiB0aGUgY3VycmVudCBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBwb3NpdGlvblxuICAgKiBhbmQgdGhlIHRhcmdldCBwb3NpdGlvbiB0aGUgY2F1c2UgYSBzY3JvbGwgYW5pbWF0aW9uLiBJbiBjYXNlIGRpc3RhbmNlIGlzIGJlbG93XG4gICAqIHRoaXMgdGhyZXNob2xkLCBhbiBpbW1lZGlhdGUganVtcCB3aWxsIGJlIHBlcmZvcm1lZC5cbiAgICogRHVlIHRvIGRwaSBvciByb3VuZGluZyBpcnJlZ3VsYXJpdGllcyBpbiBicm93c2VycyBmbG9hdGluZyBwb2ludCBudW1iZXJzIGZvciBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZXNcbiAgICogYXJlIHBvc3NpYmxlLCBtYWtpbmcgYSA9PT0gY29tcGFyaXNvbiBvZiBjdXJyZW50IHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IGFuZCB0YXJnZXQgc2Nyb2xsUG9zaXRpb24gZXJyb3ItcHJvbmUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9taW5TY3JvbGxEaXN0YW5jZSA9IDI7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGRlZmF1bHQgbmFtZXNwYWNlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfZGVmYXVsdE5hbWVzcGFjZSA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgICogV2hldGhlciBieSBkZWZhdWx0IHRoZSBzY3JvbGxpbmcgc2hvdWxkIGhhcHBlbiBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKGJ5IG1hbmlwdWxhdGluZyB0aGUgc2Nyb2xsVG9wIHByb3BlcnR5KVxuICAgKiAoPSB0cnVlOyBkZWZhdWx0KSBvciBpbiBob3Jpem9udGFsIGRpcmVjdGlvbiAoYnkgbWFuaXB1bGF0aW5nIHRoZSBzY3JvbGxMZWZ0IHByb3BlcnR5KSAoPSBmYWxzZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0SXNWZXJ0aWNhbFNjcm9sbGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEhvdyBtYW55IGNvbnNvbGUgbG9ncyBzaG91bGQgYmUgZW1pdHRlZC5cbiAgICogMDogTm9uZVxuICAgKiAyOiBJZiBhbmltYXRpb24gY291bGQgbm90IGJlIHN0YXJ0ZWQgZHVlIHRvIG1pc3NpbmcgdGFyZ2V0LCBcImFscmVhZHkgYXQgZGVzdGluYXRpb25cIiBvciBzaW1pbGFyIHJlYXNvbnNcbiAgICogNTogQWxsIHNjcm9sbCBwb3NpdGlvbiB2YWx1ZXMgdGhhdCBnZXQgc2V0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9sb2dMZXZlbCA9IDI7XG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBob3cgbG9uZyBhIHNjcm9sbFRvIGFuaW1hdGlvbiBzaG91bGQgbGFzdCBieSBkZWZhdWx0LlxuICAgKiBNYXkgYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgcGFnZS1zY3JvbGwtZHVyYXRpb24gYXR0cmlidXRlIG9uIGEgc2luZ2xlIG5nMlBhZ2VTY3JvbGwgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHREdXJhdGlvbiA9IDEyNTA7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgYWJvdmUgc2Nyb2xsIHRhcmdldCB3aGVyZSB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdG9wLiBTZXR0aW5nIGEgcG9zaXRpdmUgbnVtYmVyIHJlc3VsdHMgaW5cbiAgICogdGhlIHNjcm9sbCB0YXJnZXQgYmVpbmcgbW9yZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4sIG5lZ2F0aXZlIG51bWJlcnMgd2lsbCBwcm9kdWNlIHNjcm9sbGluZyBcInRvbyBmYXJcIlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0U2Nyb2xsT2Zmc2V0ID0gMDtcblxuICAvKipcbiAgICogV2hldGhlciBieSBkZWZhdWx0IGZvciBpbmxpbmUgc2Nyb2xsIGFuaW1hdGlvbnMgdGhlIGFkdmFuY2VkIG9mZnNldCBjYWxjdWxhdGlvbiBzaG91bGQgdGFrZSBwbGFjZSAodHJ1ZSkgb3JcbiAgICogbm90IChmYWxzZSkuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqIFRoZSBhZHZhbmNlZCBvZmZzZXQgY2FsY3VsYXRpb24gd2lsbCB0cmF2ZXJzZSB0aGUgRE9NIHRyZWUgdXB3YXJkcywgc3RhcnRpbmcgYXQgdGhlIHNjcm9sbFRhcmdldCwgdW50aWwgaXQgZmluZHNcbiAgICogdGhlIHNjcm9sbGluZ1ZpZXcgY29udGFpbmVyIGVsZW1lbnQuIEFsb25nIHRoZSB3YXkgdGhlIG9mZnNldCBwb3NpdGlvbnMgb2YgdGhlIHJlbGF0aXZlIHBvc2l0aW9uZWRcbiAgICogKHBvc2l0aW9uOiByZWxhdGl2ZSkgZWxlbWVudHMgd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgZm9yIGNhbGN1bGF0aW5nIHRoZSB0YXJnZXQgZWxlbWVudHMgcG9zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudHMgdGhhdCBhcmUgbGlzdGVuZWQgdG8gb24gdGhlIGJvZHkgdG8gZGVjaWRlIHdoZXRoZXIgYSBzY3JvbGwgYW5pbWF0aW9uIGhhcyBiZWVuIGludGVyZmVyZWQvaW50ZXJydXB0ZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX2ludGVycnVwdEV2ZW50czogc3RyaW5nW10gPSBbXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ3doZWVsJyxcbiAgICAnRE9NTW91c2VTY3JvbGwnLFxuICAgICdtb3VzZXdoZWVsJyxcbiAgICAna2V5dXAnLFxuICAgICd0b3VjaG1vdmUnLFxuICBdO1xuXG4gIC8qKlxuICAgKiBUaGUga2V5cyB0aGF0IGFyZSBjb25zaWRlcmVkIHRvIGludGVycnVwdCBhIHNjcm9sbCBhbmltYXRpb24gKG1haW5seSB0aGUgYXJyb3cga2V5cykuIEFsbCBvdGhlciBrZXkgcHJlc3NlcyB3aWxsIG5vdCBzdG9wIHRoZVxuICAgKiBzY3JvbGwgYW5pbWF0aW9uLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfaW50ZXJydXB0S2V5czogbnVtYmVyW10gPSBbMzMsIDM0LCAzNSwgMzYsIDM4LCA0MF07XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBiZSBpbnRlcnJ1cHRpYmxlIGJ5IHVzZXIgaW50ZXJhY3Rpb24gKHRydWUpIG9yIG5vdCAoZmFsc2UpLiBJZiB0aGUgdXNlciBwZXJmb3JtcyBhblxuICAgKiBpbnRlcnJ1cHRpbmcgZXZlbnQgd2hpbGUgYSBzY3JvbGwgYW5pbWF0aW9uIHRha2VzIHBsYWNlLCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzdG9wcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEludGVycnVwdGlibGUgPSB0cnVlO1xuXG4gIHByaXZhdGUgc3RhdGljIF9lYXNpbmdMb2dpYzogRWFzaW5nTG9naWMgPSB7XG4gICAgZWFzZTogKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAvLyBMaW5lYXIgZWFzaW5nXG4gICAgICByZXR1cm4gKGMgKiB0KSAvIGQgKyBiO1xuICAgIH0sXG4gIH07XG5cbiAgLy8gR2V0dGVyIGFuZCBzZXR0ZXIgdG8gYXZvaWQgYXV0byBjb21wbGV0aW9uIHRvIHN1Z2dlc3QgY2FsbGluZyB0aGUgbWV0aG9kXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRlZmF1bHRFYXNpbmdMb2dpYygpOiBFYXNpbmdMb2dpYyB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxDb25maWcuX2Vhc2luZ0xvZ2ljO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXQgZGVmYXVsdEVhc2luZ0xvZ2ljKGVhc2luZ0xvZ2ljOiBFYXNpbmdMb2dpYykge1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2Vhc2luZ0xvZ2ljID0gZWFzaW5nTG9naWM7XG4gIH1cbn1cbiJdfQ==