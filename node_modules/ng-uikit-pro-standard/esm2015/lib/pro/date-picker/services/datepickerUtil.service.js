/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/** @type {?} */
const M = 'm';
/** @type {?} */
const D = 'd';
export class UtilService {
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} minYear
     * @param {?} maxYear
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} monthLabels
     * @param {?} enableDays
     * @return {?}
     */
    isDateValid(dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        /** @type {?} */
        const returnDate = { day: 0, month: 0, year: 0 };
        /** @type {?} */
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (monthLabels === undefined) {
        }
        /** @type {?} */
        const delimeters = this.getDateFormatDelimeters(dateFormat);
        /** @type {?} */
        const dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        const year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        const month = this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        const day = this.getNumberByValue(dateValue[2]);
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            const date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            // Valid date
            return date;
        }
        return returnDate;
    }
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    getDateValue(dateStr, dateFormat, delimeters) {
        /** @type {?} */
        let del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        const re = new RegExp('[' + del + ']');
        /** @type {?} */
        const ds = dateStr.split(re);
        /** @type {?} */
        const df = dateFormat.split(re);
        /** @type {?} */
        const da = [];
        for (let i = 0; i < df.length; i++) {
            if (df[i].indexOf('yy') !== -1) {
                da[0] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(M) !== -1) {
                da[1] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(D) !== -1) {
                da[2] = { value: ds[i], format: df[i] };
            }
        }
        return da;
    }
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    getMonthNumberByMonthName(df, monthLabels) {
        if (df.value) {
            for (let key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    }
    /**
     * @param {?} df
     * @return {?}
     */
    getNumberByValue(df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        let nbr = Number(df.value);
        if ((df.format.length === 1 && df.value.length !== 1 && nbr < 10) ||
            (df.format.length === 1 && df.value.length !== 2 && nbr >= 10)) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    }
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    getDateFormatSeparator(dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    }
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    getDateFormatDelimeters(dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    }
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    isMonthLabelValid(monthLabel, monthLabels) {
        for (let key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    }
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    isYearLabelValid(yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    parseDatePartNumber(dateFormat, dateString, datePart) {
        /** @type {?} */
        const pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            /** @type {?} */
            const value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    parseDatePartMonthName(dateFormat, dateString, datePart, monthLabels) {
        /** @type {?} */
        const pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    getDatePartIndex(dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    }
    /**
     * @param {?} monthString
     * @return {?}
     */
    parseDefaultMonth(monthString) {
        /** @type {?} */
        const month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            /** @type {?} */
            const split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        for (const e of enableDays) {
            if (typeof e === 'number') {
                if (e === this.getDayNumber(date)) {
                    return false;
                }
            }
            else if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        /** @type {?} */
        const dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) &&
            dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) &&
            dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            /** @type {?} */
            const dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        for (const d of disableDays) {
            if (typeof d === 'number') {
                if (this.getDayNumber(date) === d) {
                    return true;
                }
            }
            else if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (const d of disableDateRanges) {
            if (this.isInitializedDate(d.begin) &&
                this.isInitializedDate(d.end) &&
                dateMs >= this.getTimeInMilliseconds(d.begin) &&
                dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    isMarkedDate(date, markedDates, markWeekends) {
        for (const md of markedDates) {
            for (const d of md.dates) {
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            const dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNumber(date) {
        /** @type {?} */
        const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000 / 7) + 1;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    isMonthDisabledByDisableUntil(date, disableUntil) {
        return (this.isInitializedDate(disableUntil) &&
            this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil));
    }
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    isMonthDisabledByDisableSince(date, disableSince) {
        return (this.isInitializedDate(disableSince) &&
            this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInitializedDate(date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        /** @type {?} */
        const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    }
}
UtilService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlclV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvc2VydmljZXMvZGF0ZXBpY2tlclV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFTckMsQ0FBQyxHQUFHLEdBQUc7O01BQ1AsQ0FBQyxHQUFHLEdBQUc7QUFHYixNQUFNLE9BQU8sV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0lBQ3RCLFdBQVcsQ0FDVCxPQUFlLEVBQ2YsVUFBa0IsRUFDbEIsT0FBZSxFQUNmLE9BQWUsRUFDZixZQUFxQixFQUNyQixZQUFxQixFQUNyQixlQUF3QixFQUN4QixXQUFvQyxFQUNwQyxpQkFBc0MsRUFDdEMsV0FBMkIsRUFDM0IsVUFBbUM7O2NBRTdCLFVBQVUsR0FBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOztjQUNuRCxXQUFXLEdBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDbkYsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1NBQzlCOztjQUVLLFVBQVUsR0FBa0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQzs7Y0FFcEUsU0FBUyxHQUF5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOztjQUNwRixJQUFJLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDbEQsS0FBSyxHQUFX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SUFFRCxxQkFBcUIsQ0FBQyxJQUFhO1FBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWE7O2NBQ2xCLENBQUMsR0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQXpTRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTXlEYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kYXRlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeURhdGVSYW5nZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGF0ZVJhbmdlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeU1vbnRoIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb250aC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJTXlNb250aExhYmVscyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9udGhMYWJlbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21hcmtlZERhdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeU1hcmtlZERhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21hcmtlZERhdGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbXktZGF0ZS1mb3JtYXQuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IE0gPSAnbSc7XHJcbmNvbnN0IEQgPSAnZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcbiAgaXNEYXRlVmFsaWQoXHJcbiAgICBkYXRlU3RyOiBzdHJpbmcsXHJcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmcsXHJcbiAgICBtaW5ZZWFyOiBudW1iZXIsXHJcbiAgICBtYXhZZWFyOiBudW1iZXIsXHJcbiAgICBkaXNhYmxlVW50aWw6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlU2luY2U6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sXHJcbiAgICBkaXNhYmxlRGF5czogQXJyYXk8SU15RGF0ZSB8IG51bWJlcj4sXHJcbiAgICBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPixcclxuICAgIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyxcclxuICAgIGVuYWJsZURheXM6IEFycmF5PElNeURhdGUgfCBudW1iZXI+XHJcbiAgKTogSU15RGF0ZSB7XHJcbiAgICBjb25zdCByZXR1cm5EYXRlOiBJTXlEYXRlID0geyBkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwIH07XHJcbiAgICBjb25zdCBkYXlzSW5Nb250aDogQXJyYXk8bnVtYmVyPiA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuICAgIGlmIChtb250aExhYmVscyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZ2V0RGF0ZUZvcm1hdERlbGltZXRlcnMoZGF0ZUZvcm1hdCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZVZhbHVlOiBBcnJheTxJTXlEYXRlRm9ybWF0PiA9IHRoaXMuZ2V0RGF0ZVZhbHVlKGRhdGVTdHIsIGRhdGVGb3JtYXQsIGRlbGltZXRlcnMpO1xyXG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVswXSk7XHJcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsxXSk7XHJcbiAgICBjb25zdCBkYXk6IG51bWJlciA9IHRoaXMuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMl0pO1xyXG5cclxuICAgIGlmIChkYXkgIT09IC0xICYmIG1vbnRoICE9PSAtMSAmJiB5ZWFyICE9PSAtMSkge1xyXG4gICAgICBpZiAoeWVhciA8IG1pblllYXIgfHwgeWVhciA+IG1heFllYXIgfHwgbW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBkYXk6IGRheSB9O1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZERheShcclxuICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICBkaXNhYmxlVW50aWwsXHJcbiAgICAgICAgICBkaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICBkaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICBkaXNhYmxlRGF5cyxcclxuICAgICAgICAgIGRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgZW5hYmxlRGF5c1xyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgMTAwICE9PSAwICYmIHllYXIgJSA0ID09PSAwKSkge1xyXG4gICAgICAgIGRheXNJbk1vbnRoWzFdID0gMjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IGRheXNJbk1vbnRoW21vbnRoIC0gMV0pIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVmFsaWQgZGF0ZVxyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZVZhbHVlKFxyXG4gICAgZGF0ZVN0cjogc3RyaW5nLFxyXG4gICAgZGF0ZUZvcm1hdDogc3RyaW5nLFxyXG4gICAgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPlxyXG4gICk6IEFycmF5PElNeURhdGVGb3JtYXQ+IHtcclxuICAgIGxldCBkZWw6IHN0cmluZyA9IGRlbGltZXRlcnNbMF07XHJcbiAgICBpZiAoZGVsaW1ldGVyc1swXSAhPT0gZGVsaW1ldGVyc1sxXSkge1xyXG4gICAgICBkZWwgPSBkZWxpbWV0ZXJzWzBdICsgZGVsaW1ldGVyc1sxXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlOiBhbnkgPSBuZXcgUmVnRXhwKCdbJyArIGRlbCArICddJyk7XHJcbiAgICBjb25zdCBkczogQXJyYXk8c3RyaW5nPiA9IGRhdGVTdHIuc3BsaXQocmUpO1xyXG4gICAgY29uc3QgZGY6IEFycmF5PHN0cmluZz4gPSBkYXRlRm9ybWF0LnNwbGl0KHJlKTtcclxuICAgIGNvbnN0IGRhOiBBcnJheTxJTXlEYXRlRm9ybWF0PiA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRmW2ldLmluZGV4T2YoJ3l5JykgIT09IC0xKSB7XHJcbiAgICAgICAgZGFbMF0gPSB7IHZhbHVlOiBkc1tpXSwgZm9ybWF0OiBkZltpXSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkZltpXS5pbmRleE9mKE0pICE9PSAtMSkge1xyXG4gICAgICAgIGRhWzFdID0geyB2YWx1ZTogZHNbaV0sIGZvcm1hdDogZGZbaV0gfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGZbaV0uaW5kZXhPZihEKSAhPT0gLTEpIHtcclxuICAgICAgICBkYVsyXSA9IHsgdmFsdWU6IGRzW2ldLCBmb3JtYXQ6IGRmW2ldIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoTnVtYmVyQnlNb250aE5hbWUoZGY6IElNeURhdGVGb3JtYXQsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XHJcbiAgICBpZiAoZGYudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQga2V5ID0gMTsga2V5IDw9IDEyOyBrZXkrKykge1xyXG4gICAgICAgIGlmIChkZi52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBtb250aExhYmVsc1trZXldLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXJCeVZhbHVlKGRmOiBJTXlEYXRlRm9ybWF0KTogbnVtYmVyIHtcclxuICAgIGlmICghL15cXGQrJC8udGVzdChkZi52YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuYnI6IG51bWJlciA9IE51bWJlcihkZi52YWx1ZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIChkZi5mb3JtYXQubGVuZ3RoID09PSAxICYmIGRmLnZhbHVlLmxlbmd0aCAhPT0gMSAmJiBuYnIgPCAxMCkgfHxcclxuICAgICAgKGRmLmZvcm1hdC5sZW5ndGggPT09IDEgJiYgZGYudmFsdWUubGVuZ3RoICE9PSAyICYmIG5iciA+PSAxMClcclxuICAgICkge1xyXG4gICAgICBuYnIgPSAtMTtcclxuICAgIH0gZWxzZSBpZiAoZGYuZm9ybWF0Lmxlbmd0aCA9PT0gMiAmJiBkZi52YWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgIG5iciA9IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5icjtcclxuICB9XHJcblxyXG4gIGdldERhdGVGb3JtYXRTZXBhcmF0b3IoZGF0ZUZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlRm9ybWF0LnJlcGxhY2UoL1tkbXldL2csICcnKVswXTtcclxuICB9XHJcblxyXG4gIGdldERhdGVGb3JtYXREZWxpbWV0ZXJzKGRhdGVGb3JtYXQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4gfCBhbnkge1xyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXQubWF0Y2goL1teKGRteSldezEsfS9nKTtcclxuICB9XHJcblxyXG4gIGlzTW9udGhMYWJlbFZhbGlkKG1vbnRoTGFiZWw6IHN0cmluZywgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgIGZvciAobGV0IGtleSA9IDE7IGtleSA8PSAxMjsga2V5KyspIHtcclxuICAgICAgaWYgKG1vbnRoTGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gbW9udGhMYWJlbHNba2V5XS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgaXNZZWFyTGFiZWxWYWxpZCh5ZWFyTGFiZWw6IG51bWJlciwgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHllYXJMYWJlbCA+PSBtaW5ZZWFyICYmIHllYXJMYWJlbCA8PSBtYXhZZWFyKSB7XHJcbiAgICAgIHJldHVybiB5ZWFyTGFiZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvczogbnVtYmVyID0gdGhpcy5nZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQsIGRhdGVQYXJ0KTtcclxuICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhwb3MsIHBvcyArIGRhdGVQYXJ0Lmxlbmd0aCk7XHJcbiAgICAgIGlmICghL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZVBhcnRNb250aE5hbWUoXHJcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmcsXHJcbiAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXHJcbiAgICBkYXRlUGFydDogc3RyaW5nLFxyXG4gICAgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvczogbnVtYmVyID0gdGhpcy5nZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQsIGRhdGVQYXJ0KTtcclxuICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzTW9udGhMYWJlbFZhbGlkKGRhdGVTdHJpbmcuc3Vic3RyaW5nKHBvcywgcG9zICsgZGF0ZVBhcnQubGVuZ3RoKSwgbW9udGhMYWJlbHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZVBhcnRJbmRleChkYXRlRm9ybWF0OiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXQuaW5kZXhPZihkYXRlUGFydCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZURlZmF1bHRNb250aChtb250aFN0cmluZzogc3RyaW5nIHwgYW55KTogSU15TW9udGgge1xyXG4gICAgY29uc3QgbW9udGg6IElNeU1vbnRoID0geyBtb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwIH07XHJcbiAgICBpZiAobW9udGhTdHJpbmcgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0ID0gbW9udGhTdHJpbmcuc3BsaXQobW9udGhTdHJpbmcubWF0Y2goL1teMC05XS8pWzBdKTtcclxuICAgICAgbW9udGgubW9udGhOYnIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFswXSwgMCkgOiBwYXJzZUludChzcGxpdFsxXSwgMCk7XHJcbiAgICAgIG1vbnRoLnllYXIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSwgMCkgOiBwYXJzZUludChzcGxpdFswXSwgMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9udGg7XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVkRGF5KFxyXG4gICAgZGF0ZTogSU15RGF0ZSxcclxuICAgIGRpc2FibGVVbnRpbDogSU15RGF0ZSxcclxuICAgIGRpc2FibGVTaW5jZTogSU15RGF0ZSxcclxuICAgIGRpc2FibGVXZWVrZW5kczogYm9vbGVhbixcclxuICAgIGRpc2FibGVEYXlzOiBBcnJheTxJTXlEYXRlIHwgbnVtYmVyPixcclxuICAgIGRpc2FibGVEYXRlUmFuZ2VzOiBBcnJheTxJTXlEYXRlUmFuZ2U+LFxyXG4gICAgZW5hYmxlRGF5czogQXJyYXk8SU15RGF0ZSB8IG51bWJlcj5cclxuICApOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3QgZSBvZiBlbmFibGVEYXlzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBpZiAoZSA9PT0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZS55ZWFyID09PSBkYXRlLnllYXIgJiYgZS5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBlLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlTXM6IG51bWJlciA9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiZcclxuICAgICAgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbClcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJlxyXG4gICAgICBkYXRlTXMgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVNpbmNlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXNhYmxlV2Vla2VuZHMpIHtcclxuICAgICAgY29uc3QgZG4gPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuICAgICAgaWYgKGRuID09PSAwIHx8IGRuID09PSA2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGlzYWJsZURheXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBkID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGlmICh0aGlzLmdldERheU51bWJlcihkYXRlKSA9PT0gZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGlzYWJsZURhdGVSYW5nZXMpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5iZWdpbikgJiZcclxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuZW5kKSAmJlxyXG4gICAgICAgIGRhdGVNcyA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmJlZ2luKSAmJlxyXG4gICAgICAgIGRhdGVNcyA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmVuZClcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzTWFya2VkRGF0ZShcclxuICAgIGRhdGU6IElNeURhdGUsXHJcbiAgICBtYXJrZWREYXRlczogQXJyYXk8SU15TWFya2VkRGF0ZXM+LFxyXG4gICAgbWFya1dlZWtlbmRzOiBJTXlNYXJrZWREYXRlXHJcbiAgKTogSU15TWFya2VkRGF0ZSB7XHJcbiAgICBmb3IgKGNvbnN0IG1kIG9mIG1hcmtlZERhdGVzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZCBvZiBtZC5kYXRlcykge1xyXG4gICAgICAgIGlmIChkLnllYXIgPT09IGRhdGUueWVhciAmJiBkLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgbWFya2VkOiB0cnVlLCBjb2xvcjogbWQuY29sb3IgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtYXJrV2Vla2VuZHMgJiYgbWFya1dlZWtlbmRzLm1hcmtlZCkge1xyXG4gICAgICBjb25zdCBkYXlOYnIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuICAgICAgaWYgKGRheU5iciA9PT0gMCB8fCBkYXlOYnIgPT09IDYpIHtcclxuICAgICAgICByZXR1cm4geyBtYXJrZWQ6IHRydWUsIGNvbG9yOiBtYXJrV2Vla2VuZHMuY29sb3IgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbWFya2VkOiBmYWxzZSwgY29sb3I6ICcnIH07XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrTnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIChkLmdldERheSgpID09PSAwID8gLTMgOiA0IC0gZC5nZXREYXkoKSkpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKGQuZ2V0VGltZSgpIC0gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCAwLCA0KS5nZXRUaW1lKCkpIC8gODY0MDAwMDAgLyA3KSArIDE7XHJcbiAgfVxyXG5cclxuICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlOiBJTXlEYXRlLCBkaXNhYmxlVW50aWw6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVVudGlsKSAmJlxyXG4gICAgICB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlVW50aWwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVTaW5jZSkgJiZcclxuICAgICAgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVNpbmNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzSW5pdGlhbGl6ZWREYXRlKGRhdGU6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRlLnllYXIgIT09IDAgJiYgZGF0ZS5tb250aCAhPT0gMCAmJiBkYXRlLmRheSAhPT0gMDtcclxuICB9XHJcblxyXG4gIGdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCkuZ2V0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5TnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgIHJldHVybiBkLmdldERheSgpO1xyXG4gIH1cclxufVxyXG4iXX0=