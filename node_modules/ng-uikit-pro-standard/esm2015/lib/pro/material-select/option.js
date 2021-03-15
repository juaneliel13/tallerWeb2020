/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Option {
    /**
     * @param {?} option
     */
    constructor(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        this.group = false;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.wrappedOption.value;
    }
    /**
     * @return {?}
     */
    get label() {
        return this.wrappedOption.label;
    }
    /**
     * @return {?}
     */
    get icon() {
        if (this.wrappedOption.icon !== '' && this.wrappedOption.icon !== undefined) {
            return this.wrappedOption.icon;
        }
        else {
            return '';
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9tYXRlcmlhbC1zZWxlY3Qvb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sTUFBTTs7OztJQVdqQixZQUFZLE1BQWU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBRUgsQ0FBQztDQUVGOzs7SUFwQ0MsK0JBQXVCOztJQUV2QiwwQkFBa0I7O0lBQ2xCLDZCQUFxQjs7SUFDckIsMEJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHVCQUFlOztJQUNmLHVCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJT3B0aW9ufSBmcm9tICcuL29wdGlvbi1pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIHtcblxuICB3cmFwcGVkT3B0aW9uOiBJT3B0aW9uO1xuXG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBoaWdobGlnaHRlZDogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGhvdmVyZWQ/OiBib29sZWFuO1xuICBzaG93bjogYm9vbGVhbjtcbiAgZ3JvdXA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uOiBJT3B0aW9uKSB7XG4gICAgdGhpcy53cmFwcGVkT3B0aW9uID0gb3B0aW9uO1xuXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zaG93biA9IHRydWU7XG4gICAgdGhpcy5ncm91cCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMud3JhcHBlZE9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndyYXBwZWRPcHRpb24ubGFiZWw7XG4gIH1cblxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLndyYXBwZWRPcHRpb24uaWNvbiAhPT0gJycgJiYgdGhpcy53cmFwcGVkT3B0aW9uLmljb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZE9wdGlvbi5pY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gIH1cblxufVxuXG4iXX0=