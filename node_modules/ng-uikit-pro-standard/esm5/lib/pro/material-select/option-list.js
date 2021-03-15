/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Option } from './option';
import { Diacritics } from './diacritics';
var OptionList = /** @class */ (function () {
    function OptionList(options, _multiple) {
        if (_multiple === void 0) { _multiple = false; }
        this._multiple = _multiple;
        this._highlightedOption = null;
        this.setToNullValue = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            if (option.group) {
                o.disabled = true;
                o.group = true;
            }
            return o;
        }));
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "highlightFirst", {
        get: /**
         * @return {?}
         */
        function () {
            return this._highlightFirst;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._highlightFirst = value;
        },
        enumerable: true,
        configurable: true
    });
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) {
            return v === b[i];
        }));
    };
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.value === value;
        }));
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map((/**
             * @param {?} selectedOption
             * @return {?}
             */
            function (selectedOption) {
                return selectedOption.value;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option.selected;
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!this._multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.selected = false;
        }));
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option.shown;
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            }));
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @private
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.shown = true;
        }));
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstShown = this.getFirstShown();
        /** @type {?} */
        var firstSelected = this.getFirstShownSelected();
        if (this.highlightFirst && firstShown && !firstSelected) {
            this.highlightOption(firstShown);
        }
        else {
            this.highlightOption(firstSelected);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    Object.defineProperty(OptionList.prototype, "hasShown", {
        /** Util. **/
        get: /**
         * Util. *
         * @return {?}
         */
        function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.hasSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.selected;
        }));
    };
    /**
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.shown && option.selected;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && !option.group && !option.disabled) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.setToNullValue;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.setToNullValue;
    };
    return OptionList;
}());
export { OptionList };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._options;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._highlightedOption;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._hasShown;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._highlightFirst;
    /** @type {?} */
    OptionList.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._multiple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL21hdGVyaWFsLXNlbGVjdC9vcHRpb24tbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQztJQTZCRSxvQkFBWSxPQUF1QixFQUFVLFNBQWlCO1FBQWpCLDBCQUFBLEVBQUEsaUJBQWlCO1FBQWpCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUEzQnRELHVCQUFrQixHQUFpQixJQUFJLENBQUM7UUFXekMsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFpQmhDLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTTs7Z0JBQzFCLENBQUMsR0FBVyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNuQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixD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UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTywwQ0FBcUI7Ozs7SUFBN0I7OztZQUNFLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QixJQUFNLE1BQU0sV0FBQTtnQkFDZixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtvQkFDbkMsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF4T0QsSUF3T0M7Ozs7Ozs7SUF2T0MsOEJBQWdDOzs7OztJQUNoQyx3Q0FBZ0Q7Ozs7O0lBQ2hELCtCQUEyQjs7Ozs7SUFFM0IscUNBQWlDOztJQVFqQyxvQ0FBa0M7Ozs7O0lBZ0JHLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tICcuL29wdGlvbi1pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGlhY3JpdGljcyB9IGZyb20gJy4vZGlhY3JpdGljcyc7XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25MaXN0IHtcbiAgcHJpdmF0ZSBfb3B0aW9uczogQXJyYXk8T3B0aW9uPjtcbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRPcHRpb246IE9wdGlvbiB8IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2hhc1Nob3duOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2hpZ2hsaWdodEZpcnN0OiBib29sZWFuO1xuICBnZXQgaGlnaGxpZ2h0Rmlyc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodEZpcnN0O1xuICB9XG4gIHNldCBoaWdobGlnaHRGaXJzdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZ2hsaWdodEZpcnN0ID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG5cbiAgLy8gdjAgYW5kIHYxIGFyZSBhc3N1bWVkIG5vdCB0byBiZSB1bmRlZmluZWQgb3IgbnVsbC5cbiAgc3RhdGljIGVxdWFsVmFsdWVzKHYwOiBBcnJheTxzdHJpbmc+LCB2MTogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIGlmICh2MC5sZW5ndGggIT09IHYxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGE6IEFycmF5PHN0cmluZz4gPSB2MC5zbGljZSgpLnNvcnQoKTtcbiAgICBjb25zdCBiOiBBcnJheTxzdHJpbmc+ID0gdjEuc2xpY2UoKS5zb3J0KCk7XG5cbiAgICByZXR1cm4gYS5ldmVyeSgodiwgaSkgPT4ge1xuICAgICAgcmV0dXJuIHYgPT09IGJbaV07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBBcnJheTxJT3B0aW9uPiwgcHJpdmF0ZSBfbXVsdGlwbGUgPSBmYWxzZSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgbzogT3B0aW9uID0gbmV3IE9wdGlvbihvcHRpb24pO1xuICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICBvLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb24uZ3JvdXApIHtcbiAgICAgICAgby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIG8uZ3JvdXAgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG87XG4gICAgfSk7XG5cbiAgICB0aGlzLl9oYXNTaG93biA9IHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMDtcbiAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICB9XG5cbiAgLyoqIE9wdGlvbnMuICoqL1xuXG4gIGdldCBvcHRpb25zKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgZ2V0T3B0aW9uc0J5VmFsdWUodmFsdWU6IHN0cmluZyk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBWYWx1ZS4gKiovXG5cbiAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5tYXAoc2VsZWN0ZWRPcHRpb24gPT4ge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFNlbGVjdGlvbi4gKiovXG5cbiAgZ2V0IHNlbGVjdGlvbigpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdChvcHRpb246IE9wdGlvbikge1xuICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KG9wdGlvbjogT3B0aW9uKSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmlsdGVyLiAqKi9cblxuICBnZXQgZmlsdGVyZWQoKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd247XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXIodGVybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGFueVNob3duID0gZmFsc2U7XG5cbiAgICBpZiAodGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aGlzLnJlc2V0RmlsdGVyKCk7XG4gICAgICBhbnlTaG93biA9IHRoaXMub3B0aW9ucy5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBsOiBzdHJpbmcgPSBEaWFjcml0aWNzLnN0cmlwKG9wdGlvbi5sYWJlbCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdDogc3RyaW5nID0gRGlhY3JpdGljcy5zdHJpcCh0ZXJtKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBvcHRpb24uc2hvd24gPSBsLmluZGV4T2YodCkgPiAtMTtcblxuICAgICAgICBpZiAob3B0aW9uLnNob3duKSB7XG4gICAgICAgICAgYW55U2hvd24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICAgIHRoaXMuX2hhc1Nob3duID0gYW55U2hvd247XG5cbiAgICByZXR1cm4gYW55U2hvd247XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RmlsdGVyKCkge1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24uc2hvd24gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEhpZ2hsaWdodC4gKiovXG5cbiAgZ2V0IGhpZ2hsaWdodGVkT3B0aW9uKCk6IE9wdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uO1xuICB9XG5cbiAgaGlnaGxpZ2h0KCkge1xuICAgIGNvbnN0IGZpcnN0U2hvd246IE9wdGlvbiA9IHRoaXMuZ2V0Rmlyc3RTaG93bigpO1xuICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQ6IE9wdGlvbiA9IHRoaXMuZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk7XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCAmJiBmaXJzdFNob3duICYmICFmaXJzdFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihmaXJzdFNob3duKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oZmlyc3RTZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5jbGVhckhpZ2hsaWdodGVkT3B0aW9uKCk7XG5cbiAgICBpZiAob3B0aW9uICE9PSBudWxsKSB7XG4gICAgICBvcHRpb24uaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0TmV4dE9wdGlvbigpIHtcbiAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLmZpbHRlcmVkO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qoc2hvd25PcHRpb25zKTtcblxuICAgIGlmIChpbmRleCA8IHNob3duT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bk9wdGlvbnNbaW5kZXggKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0UHJldmlvdXNPcHRpb24oKSB7XG4gICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5maWx0ZXJlZDtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duT3B0aW9ucyk7XG5cbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bk9wdGlvbnNbaW5kZXggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkT3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qob3B0aW9uczogQXJyYXk8T3B0aW9uPikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9wdGlvbnNbaV0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGdldEhpZ2hsaWdodGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHRoaXMuZmlsdGVyZWQpO1xuICB9XG5cbiAgLyoqIFV0aWwuICoqL1xuXG4gIGdldCBoYXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU2hvd247XG4gIH1cblxuICBoYXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvbWUob3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBoYXNTaG93blNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29tZShvcHRpb24gPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi5zaG93biAmJiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpcnN0U2hvd24oKTogT3B0aW9uIHtcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb24uc2hvd24gJiYgIW9wdGlvbi5ncm91cCAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldFRvTnVsbFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdFNob3duU2VsZWN0ZWQoKTogT3B0aW9uIHtcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldFRvTnVsbFZhbHVlO1xuICB9XG59XG4iXX0=