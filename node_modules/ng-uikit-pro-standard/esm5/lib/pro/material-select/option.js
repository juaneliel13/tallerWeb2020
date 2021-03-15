/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Option = /** @class */ (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        this.group = false;
    }
    Object.defineProperty(Option.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.wrappedOption.icon !== '' && this.wrappedOption.icon !== undefined) {
                return this.wrappedOption.icon;
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());
export { Option };
if (false) {
    /** @type {?} */
    Option.prototype.wrappedOption;
    /** @type {?} */
    Option.prototype.disabled;
    /** @type {?} */
    Option.prototype.highlighted;
    /** @type {?} */
    Option.prototype.selected;
    /** @type {?} */
    Option.prototype.hovered;
    /** @type {?} */
    Option.prototype.shown;
    /** @type {?} */
    Option.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9tYXRlcmlhbC1zZWxlY3Qvb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQVdFLGdCQUFZLE1BQWU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFJLHlCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3QkFBSTs7OztRQUFSO1lBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUMzRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFFSCxDQUFDOzs7T0FBQTtJQUVILGFBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDOzs7O0lBcENDLCtCQUF1Qjs7SUFFdkIsMEJBQWtCOztJQUNsQiw2QkFBcUI7O0lBQ3JCLDBCQUFrQjs7SUFDbEIseUJBQWtCOztJQUNsQix1QkFBZTs7SUFDZix1QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU9wdGlvbn0gZnJvbSAnLi9vcHRpb24taW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiB7XG5cbiAgd3JhcHBlZE9wdGlvbjogSU9wdGlvbjtcblxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgaGlnaGxpZ2h0ZWQ6IGJvb2xlYW47XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICBob3ZlcmVkPzogYm9vbGVhbjtcbiAgc2hvd246IGJvb2xlYW47XG4gIGdyb3VwOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbjogSU9wdGlvbikge1xuICAgIHRoaXMud3JhcHBlZE9wdGlvbiA9IG9wdGlvbjtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd24gPSB0cnVlO1xuICAgIHRoaXMuZ3JvdXAgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndyYXBwZWRPcHRpb24udmFsdWU7XG4gIH1cblxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53cmFwcGVkT3B0aW9uLmxhYmVsO1xuICB9XG5cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy53cmFwcGVkT3B0aW9uLmljb24gIT09ICcnICYmIHRoaXMud3JhcHBlZE9wdGlvbi5pY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLndyYXBwZWRPcHRpb24uaWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICB9XG5cbn1cblxuIl19