/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by sebastianfuss on 02.09.16.
 */
export class PageScrollUtilService {
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    static isUndefinedOrNull(variable) {
        return typeof variable === 'undefined' || variable === undefined || variable === null;
    }
    /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    static extractElementPosition(document, scrollTargetElement) {
        /** @type {?} */
        const body = document.body;
        /** @type {?} */
        const docEl = document.documentElement;
        /** @type {?} */
        const windowPageYOffset = (document.defaultView && ((/** @type {?} */ (document.defaultView.pageYOffset)))) || undefined;
        /** @type {?} */
        const windowPageXOffset = (document.defaultView && ((/** @type {?} */ (document.defaultView.pageXOffset)))) || undefined;
        /** @type {?} */
        const scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        const scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        const clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        /** @type {?} */
        const box = scrollTargetElement.getBoundingClientRect();
        /** @type {?} */
        const top = box.top + scrollTop - clientTop;
        /** @type {?} */
        const left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFNekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQWE7UUFDM0MsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDO0lBQ3hGLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FDbEMsUUFBa0IsRUFDbEIsbUJBQWdDOztjQUUxQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7O2NBQ3BCLEtBQUssR0FBUSxRQUFRLENBQUMsZUFBZTs7Y0FFckMsaUJBQWlCLEdBQ3JCLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFPLENBQUMsQ0FBQyxJQUFJLFNBQVM7O2NBQzVFLGlCQUFpQixHQUNyQixDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxtQkFBQSxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBTyxDQUFDLENBQUMsSUFBSSxTQUFTOztjQUU1RSxTQUFTLEdBQUcsaUJBQWlCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUzs7Y0FDbEUsVUFBVSxHQUFHLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVU7O2NBRXJFLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7Y0FDbEQsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDO1FBRTNELElBQUkscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNoRSw4RkFBOEY7WUFDOUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1NBQzdDOztjQUNLLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRTs7Y0FFakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLFNBQVM7O2NBQ3JDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxVQUFVO1FBRS9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzZWJhc3RpYW5mdXNzIG9uIDAyLjA5LjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsVXRpbFNlcnZpY2Uge1xuICAvKipcbiAgICogVXRpbCBtZXRob2QgdG8gY2hlY2sgd2hldGhlciBhIGdpdmVuIHZhcmlhYmxlIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbFxuICAgKiBAcGFyYW0gdmFyaWFibGVcbnRydWUgdGhlIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzVW5kZWZpbmVkT3JOdWxsKHZhcmlhYmxlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09PSAndW5kZWZpbmVkJyB8fCB2YXJpYWJsZSA9PT0gdW5kZWZpbmVkIHx8IHZhcmlhYmxlID09PSBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBleHRyYWN0RWxlbWVudFBvc2l0aW9uKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudFxuICApOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHdpbmRvd1BhZ2VZT2Zmc2V0OiBudW1iZXIgfCBhbnkgPVxuICAgICAgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIChkb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldCBhcyBhbnkpKSB8fCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgd2luZG93UGFnZVhPZmZzZXQ6IG51bWJlciB8IGFueSA9XG4gICAgICAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IGFzIGFueSkpIHx8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvd1BhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93UGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgIGlmIChQYWdlU2Nyb2xsVXRpbFNlcnZpY2UuaXNVbmRlZmluZWRPck51bGwoc2Nyb2xsVGFyZ2V0RWxlbWVudCkpIHtcbiAgICAgIC8vIE5vIGVsZW1lbnQgZm91bmQsIHNvIHJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiB0byBub3QgY2F1c2UgYW55IGNoYW5nZSBpbiBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHJldHVybiB7IHRvcDogc2Nyb2xsVG9wLCBsZWZ0OiBzY3JvbGxMZWZ0IH07XG4gICAgfVxuICAgIGNvbnN0IGJveCA9IHNjcm9sbFRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0b3AgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgIGNvbnN0IGxlZnQgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgcmV0dXJuIHsgdG9wOiBNYXRoLnJvdW5kKHRvcCksIGxlZnQ6IE1hdGgucm91bmQobGVmdCkgfTtcbiAgfVxufVxuIl19