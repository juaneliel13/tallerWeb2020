/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * returns coumputed style of given element
 * @param {?} element
 * @param {?} styleProp
 * @return {?}
 */
export function computedStyle(element, styleProp) {
    /** @type {?} */
    var el;
    el = typeof element === 'string' ? (/** @type {?} */ (document.querySelector((/** @type {?} */ (element))))) : element;
    /** @type {?} */
    var value;
    /** @type {?} */
    var defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    else if (el['currentStyle']) {
        // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) {
            return letter.toUpperCase();
        }));
        value = el['currentStyle'][styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return ((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var oldLeft = el.style.left;
                /** @type {?} */
                var oldRsLeft = el['runtimeStyle'].left;
                el['runtimeStyle'].left = el['currentStyle'].left;
                el.style.left = val || 0;
                val = el.style['pixelLeft'] + 'px';
                el.style.left = oldLeft;
                el['runtimeStyle'].left = oldRsLeft;
                return val;
            }))(value);
        }
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZWQuc3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0aWNreS1jb250ZW50L2NvbXB1dGVkLnN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxNQUFNLFVBQVUsYUFBYSxDQUFDLE9BQTZCLEVBQUUsU0FBaUI7O1FBQ3hFLEVBQU87SUFDWCxFQUFFLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBYSxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFRLE9BQU8sRUFBQSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDOztRQUU5RixLQUFVOztRQUNSLFdBQVcsR0FBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsV0FBVztJQUVuRSxvQkFBb0I7SUFDcEIsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBQy9DLHlDQUF5QztRQUN6Qyx3Q0FBd0M7UUFDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9ELE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzRTtTQUFNLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQzdCLEtBQUs7UUFDTCxzQ0FBc0M7UUFDdEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFFLFVBQVMsTUFBTTtZQUN0RCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsc0NBQXNDO1FBQ3RDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLE9BQU87Ozs7WUFBQyxVQUFTLEdBQVE7O29CQUNqQixPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJOztvQkFDM0IsU0FBUyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJO2dCQUNyQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztnQkFDcEMsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNYO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHJldHVybnMgY291bXB1dGVkIHN0eWxlIG9mIGdpdmVuIGVsZW1lbnRcblxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWRTdHlsZShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCwgc3R5bGVQcm9wOiBzdHJpbmcpOiBzdHJpbmcgfCBhbnkge1xuICBsZXQgZWw6IGFueTtcbiAgZWwgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8c3RyaW5nPmVsZW1lbnQpIDogZWxlbWVudDtcblxuICBsZXQgdmFsdWU6IGFueTtcbiAgY29uc3QgZGVmYXVsdFZpZXc6IGFueSA9IChlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5kZWZhdWx0VmlldztcblxuICAvLyBXM0Mgc3RhbmRhcmQgd2F5OlxuICBpZiAoZGVmYXVsdFZpZXcgJiYgZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIC8vIHNhbml0aXplIHByb3BlcnR5IG5hbWUgdG8gY3NzIG5vdGF0aW9uXG4gICAgLy8gKGh5cGVuIHNlcGFyYXRlZCB3b3JkcyBlZy4gZm9udC1TaXplKVxuICAgIHN0eWxlUHJvcCA9IHN0eWxlUHJvcC5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcCk7XG4gIH0gZWxzZSBpZiAoZWxbJ2N1cnJlbnRTdHlsZSddKSB7XG4gICAgLy8gSUVcbiAgICAvLyBzYW5pdGl6ZSBwcm9wZXJ0eSBuYW1lIHRvIGNhbWVsQ2FzZVxuICAgIHN0eWxlUHJvcCA9IHN0eWxlUHJvcC5yZXBsYWNlKC9cXC0oXFx3KS9nLCBmdW5jdGlvbihsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgICB2YWx1ZSA9IGVsWydjdXJyZW50U3R5bGUnXVtzdHlsZVByb3BdO1xuICAgIC8vIGNvbnZlcnQgb3RoZXIgdW5pdHMgdG8gcGl4ZWxzIG9uIElFXG4gICAgaWYgKC9eXFxkKyhlbXxwdHwlfGV4KT8kL2kudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24odmFsOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb2xkTGVmdCA9IGVsLnN0eWxlLmxlZnQsXG4gICAgICAgICAgb2xkUnNMZWZ0ID0gZWxbJ3J1bnRpbWVTdHlsZSddLmxlZnQ7XG4gICAgICAgIGVsWydydW50aW1lU3R5bGUnXS5sZWZ0ID0gZWxbJ2N1cnJlbnRTdHlsZSddLmxlZnQ7XG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSB2YWwgfHwgMDtcbiAgICAgICAgdmFsID0gZWwuc3R5bGVbJ3BpeGVsTGVmdCddICsgJ3B4JztcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9IG9sZExlZnQ7XG4gICAgICAgIGVsWydydW50aW1lU3R5bGUnXS5sZWZ0ID0gb2xkUnNMZWZ0O1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSkodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==