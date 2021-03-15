/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Option } from './option';
import { Diacritics } from './diacritics';
export class OptionList {
    /**
     * @param {?} options
     * @param {?=} _multiple
     */
    constructor(options, _multiple = false) {
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
        option => {
            /** @type {?} */
            const o = new Option(option);
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
    /**
     * @return {?}
     */
    get highlightFirst() {
        return this._highlightFirst;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set highlightFirst(value) {
        this._highlightFirst = value;
    }
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    static equalValues(v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        const a = v0.slice().sort();
        /** @type {?} */
        const b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        (v, i) => {
            return v === b[i];
        }));
    }
    /**
     * Options. *
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionsByValue(value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.value === value;
        }));
    }
    /**
     * Value. *
     * @return {?}
     */
    get value() {
        return this.selection.map((/**
         * @param {?} selectedOption
         * @return {?}
         */
        selectedOption => {
            return selectedOption.value;
        }));
    }
    /**
     * Selection. *
     * @return {?}
     */
    get selection() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.selected;
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    select(option) {
        if (!this._multiple) {
            this.clearSelection();
        }
        option.selected = true;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselect(option) {
        option.selected = false;
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            option.selected = false;
        }));
    }
    /**
     * Filter. *
     * @return {?}
     */
    get filtered() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.shown;
        }));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        /** @type {?} */
        let anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                const t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            }));
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    }
    /**
     * @private
     * @return {?}
     */
    resetFilter() {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            option.shown = true;
        }));
    }
    /**
     * Highlight. *
     * @return {?}
     */
    get highlightedOption() {
        return this._highlightedOption;
    }
    /**
     * @return {?}
     */
    highlight() {
        /** @type {?} */
        const firstShown = this.getFirstShown();
        /** @type {?} */
        const firstSelected = this.getFirstShownSelected();
        if (this.highlightFirst && firstShown && !firstSelected) {
            this.highlightOption(firstShown);
        }
        else {
            this.highlightOption(firstSelected);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    highlightOption(option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    }
    /**
     * @return {?}
     */
    highlightNextOption() {
        /** @type {?} */
        const shownOptions = this.filtered;
        /** @type {?} */
        const index = this.getHighlightedIndexFromList(shownOptions);
        if (index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    }
    /**
     * @return {?}
     */
    highlightPreviousOption() {
        /** @type {?} */
        const shownOptions = this.filtered;
        /** @type {?} */
        const index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearHighlightedOption() {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    getHighlightedIndexFromList(options) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @return {?}
     */
    getHighlightedIndex() {
        return this.getHighlightedIndexFromList(this.filtered);
    }
    /**
     * Util. *
     * @return {?}
     */
    get hasShown() {
        return this._hasShown;
    }
    /**
     * @return {?}
     */
    hasSelected() {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.selected;
        }));
    }
    /**
     * @return {?}
     */
    hasShownSelected() {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.shown && option.selected;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getFirstShown() {
        for (const option of this.options) {
            if (option.shown && !option.group && !option.disabled) {
                return option;
            }
        }
        return this.setToNullValue;
    }
    /**
     * @private
     * @return {?}
     */
    getFirstShownSelected() {
        for (const option of this.options) {
            if (option.shown && option.selected) {
                return option;
            }
        }
        return this.setToNullValue;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL21hdGVyaWFsLXNlbGVjdC9vcHRpb24tbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sT0FBTyxVQUFVOzs7OztJQTZCckIsWUFBWSxPQUF1QixFQUFVLFlBQVksS0FBSztRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBM0J0RCx1QkFBa0IsR0FBaUIsSUFBSSxDQUFDO1FBV3pDLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBaUJoQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RELE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTs7a0JBQzdCLENBQUMsR0FBVyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNuQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNu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akMsb0NBQWtDOzs7OztJQWdCRywrQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24taW50ZXJmYWNlJztcbmltcG9ydCB7IERpYWNyaXRpY3MgfSBmcm9tICcuL2RpYWNyaXRpY3MnO1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uTGlzdCB7XG4gIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PE9wdGlvbj47XG4gIHByaXZhdGUgX2hpZ2hsaWdodGVkT3B0aW9uOiBPcHRpb24gfCBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9oYXNTaG93bjogYm9vbGVhbjtcblxuICBwcml2YXRlIF9oaWdobGlnaHRGaXJzdDogYm9vbGVhbjtcbiAgZ2V0IGhpZ2hsaWdodEZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLl9oaWdobGlnaHRGaXJzdDtcbiAgfVxuICBzZXQgaGlnaGxpZ2h0Rmlyc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWdobGlnaHRGaXJzdCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuXG4gIC8vIHYwIGFuZCB2MSBhcmUgYXNzdW1lZCBub3QgdG8gYmUgdW5kZWZpbmVkIG9yIG51bGwuXG4gIHN0YXRpYyBlcXVhbFZhbHVlcyh2MDogQXJyYXk8c3RyaW5nPiwgdjE6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICBpZiAodjAubGVuZ3RoICE9PSB2MS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhOiBBcnJheTxzdHJpbmc+ID0gdjAuc2xpY2UoKS5zb3J0KCk7XG4gICAgY29uc3QgYjogQXJyYXk8c3RyaW5nPiA9IHYxLnNsaWNlKCkuc29ydCgpO1xuXG4gICAgcmV0dXJuIGEuZXZlcnkoKHYsIGkpID0+IHtcbiAgICAgIHJldHVybiB2ID09PSBiW2ldO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQXJyYXk8SU9wdGlvbj4sIHByaXZhdGUgX211bHRpcGxlID0gZmFsc2UpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgIGNvbnN0IG86IE9wdGlvbiA9IG5ldyBPcHRpb24ob3B0aW9uKTtcbiAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uLmdyb3VwKSB7XG4gICAgICAgIG8uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBvLmdyb3VwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faGFzU2hvd24gPSB0aGlzLl9vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBPcHRpb25zLiAqKi9cblxuICBnZXQgb3B0aW9ucygpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIGdldE9wdGlvbnNCeVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVmFsdWUuICoqL1xuXG4gIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24ubWFwKHNlbGVjdGVkT3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTZWxlY3Rpb24uICoqL1xuXG4gIGdldCBzZWxlY3Rpb24oKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3Qob3B0aW9uOiBPcHRpb24pIHtcbiAgICBpZiAoIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdChvcHRpb246IE9wdGlvbikge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbHRlci4gKiovXG5cbiAgZ2V0IGZpbHRlcmVkKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnNob3duO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyKHRlcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCBhbnlTaG93biA9IGZhbHNlO1xuXG4gICAgaWYgKHRlcm0udHJpbSgpID09PSAnJykge1xuICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgICAgYW55U2hvd24gPSB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgbDogc3RyaW5nID0gRGlhY3JpdGljcy5zdHJpcChvcHRpb24ubGFiZWwpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHQ6IHN0cmluZyA9IERpYWNyaXRpY3Muc3RyaXAodGVybSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uLnNob3duID0gbC5pbmRleE9mKHQpID4gLTE7XG5cbiAgICAgICAgaWYgKG9wdGlvbi5zaG93bikge1xuICAgICAgICAgIGFueVNob3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB0aGlzLl9oYXNTaG93biA9IGFueVNob3duO1xuXG4gICAgcmV0dXJuIGFueVNob3duO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLnNob3duID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBIaWdobGlnaHQuICoqL1xuXG4gIGdldCBoaWdobGlnaHRlZE9wdGlvbigpOiBPcHRpb24ge1xuICAgIHJldHVybiB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbjtcbiAgfVxuXG4gIGhpZ2hsaWdodCgpIHtcbiAgICBjb25zdCBmaXJzdFNob3duOiBPcHRpb24gPSB0aGlzLmdldEZpcnN0U2hvd24oKTtcbiAgICBjb25zdCBmaXJzdFNlbGVjdGVkOiBPcHRpb24gPSB0aGlzLmdldEZpcnN0U2hvd25TZWxlY3RlZCgpO1xuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0Rmlyc3QgJiYgZmlyc3RTaG93biAmJiAhZmlyc3RTZWxlY3RlZCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oZmlyc3RTaG93bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uKGZpcnN0U2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgIHRoaXMuY2xlYXJIaWdobGlnaHRlZE9wdGlvbigpO1xuXG4gICAgaWYgKG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgb3B0aW9uLmhpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodE5leHRPcHRpb24oKSB7XG4gICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5maWx0ZXJlZDtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duT3B0aW9ucyk7XG5cbiAgICBpZiAoaW5kZXggPCBzaG93bk9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oc2hvd25PcHRpb25zW2luZGV4ICsgMV0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodFByZXZpb3VzT3B0aW9uKCkge1xuICAgIGNvbnN0IHNob3duT3B0aW9ucyA9IHRoaXMuZmlsdGVyZWQ7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdChzaG93bk9wdGlvbnMpO1xuXG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oc2hvd25PcHRpb25zW2luZGV4IC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIaWdobGlnaHRlZE9wdGlvbigpIHtcbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZE9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRlZE9wdGlvbi5oaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KG9wdGlvbnM6IEFycmF5PE9wdGlvbj4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcHRpb25zW2ldLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBnZXRIaWdobGlnaHRlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdCh0aGlzLmZpbHRlcmVkKTtcbiAgfVxuXG4gIC8qKiBVdGlsLiAqKi9cblxuICBnZXQgaGFzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1Nob3duO1xuICB9XG5cbiAgaGFzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb21lKG9wdGlvbiA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnNlbGVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgaGFzU2hvd25TZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvbWUob3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdFNob3duKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmICFvcHRpb24uZ3JvdXAgJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmIG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxufVxuIl19