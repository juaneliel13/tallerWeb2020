/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/** @type {?} */
var M = 'm';
/** @type {?} */
var D = 'd';
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
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
    UtilService.prototype.isDateValid = /**
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
    function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        /** @type {?} */
        var returnDate = { day: 0, month: 0, year: 0 };
        /** @type {?} */
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (monthLabels === undefined) {
        }
        /** @type {?} */
        var delimeters = this.getDateFormatDelimeters(dateFormat);
        /** @type {?} */
        var dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        var year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        var month = this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        var day = this.getNumberByValue(dateValue[2]);
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            var date = { year: year, month: month, day: day };
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
    };
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    UtilService.prototype.getDateValue = /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    function (dateStr, dateFormat, delimeters) {
        /** @type {?} */
        var del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        var re = new RegExp('[' + del + ']');
        /** @type {?} */
        var ds = dateStr.split(re);
        /** @type {?} */
        var df = dateFormat.split(re);
        /** @type {?} */
        var da = [];
        for (var i = 0; i < df.length; i++) {
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
    };
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.getMonthNumberByMonthName = /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    function (df, monthLabels) {
        if (df.value) {
            for (var key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    };
    /**
     * @param {?} df
     * @return {?}
     */
    UtilService.prototype.getNumberByValue = /**
     * @param {?} df
     * @return {?}
     */
    function (df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        var nbr = Number(df.value);
        if ((df.format.length === 1 && df.value.length !== 1 && nbr < 10) ||
            (df.format.length === 1 && df.value.length !== 2 && nbr >= 10)) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatSeparator = /**
     * @param {?} dateFormat
     * @return {?}
     */
    function (dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatDelimeters = /**
     * @param {?} dateFormat
     * @return {?}
     */
    function (dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    };
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.isMonthLabelValid = /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    function (monthLabel, monthLabels) {
        for (var key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    UtilService.prototype.isYearLabelValid = /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.parseDatePartNumber = /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    function (dateFormat, dateString, datePart) {
        /** @type {?} */
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            /** @type {?} */
            var value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.parseDatePartMonthName = /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    function (dateFormat, dateString, datePart, monthLabels) {
        /** @type {?} */
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.getDatePartIndex = /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    /**
     * @param {?} monthString
     * @return {?}
     */
    UtilService.prototype.parseDefaultMonth = /**
     * @param {?} monthString
     * @return {?}
     */
    function (monthString) {
        /** @type {?} */
        var month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            /** @type {?} */
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    };
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
    UtilService.prototype.isDisabledDay = /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    function (date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            for (var enableDays_1 = tslib_1.__values(enableDays), enableDays_1_1 = enableDays_1.next(); !enableDays_1_1.done; enableDays_1_1 = enableDays_1.next()) {
                var e = enableDays_1_1.value;
                if (typeof e === 'number') {
                    if (e === this.getDayNumber(date)) {
                        return false;
                    }
                }
                else if (e.year === date.year && e.month === date.month && e.day === date.day) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (enableDays_1_1 && !enableDays_1_1.done && (_a = enableDays_1.return)) _a.call(enableDays_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var dateMs = this.getTimeInMilliseconds(date);
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
            var dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        try {
            for (var disableDays_1 = tslib_1.__values(disableDays), disableDays_1_1 = disableDays_1.next(); !disableDays_1_1.done; disableDays_1_1 = disableDays_1.next()) {
                var d = disableDays_1_1.value;
                if (typeof d === 'number') {
                    if (this.getDayNumber(date) === d) {
                        return true;
                    }
                }
                else if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (disableDays_1_1 && !disableDays_1_1.done && (_b = disableDays_1.return)) _b.call(disableDays_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var disableDateRanges_1 = tslib_1.__values(disableDateRanges), disableDateRanges_1_1 = disableDateRanges_1.next(); !disableDateRanges_1_1.done; disableDateRanges_1_1 = disableDateRanges_1.next()) {
                var d = disableDateRanges_1_1.value;
                if (this.isInitializedDate(d.begin) &&
                    this.isInitializedDate(d.end) &&
                    dateMs >= this.getTimeInMilliseconds(d.begin) &&
                    dateMs <= this.getTimeInMilliseconds(d.end)) {
                    return true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (disableDateRanges_1_1 && !disableDateRanges_1_1.done && (_c = disableDateRanges_1.return)) _c.call(disableDateRanges_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    UtilService.prototype.isMarkedDate = /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    function (date, markedDates, markWeekends) {
        var e_4, _a, e_5, _b;
        try {
            for (var markedDates_1 = tslib_1.__values(markedDates), markedDates_1_1 = markedDates_1.next(); !markedDates_1_1.done; markedDates_1_1 = markedDates_1.next()) {
                var md = markedDates_1_1.value;
                try {
                    for (var _c = tslib_1.__values(md.dates), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var d = _d.value;
                        if (d.year === date.year && d.month === date.month && d.day === date.day) {
                            return { marked: true, color: md.color };
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (markedDates_1_1 && !markedDates_1_1.done && (_a = markedDates_1.return)) _a.call(markedDates_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getWeekNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000 / 7) + 1;
    };
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableUntil = /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    function (date, disableUntil) {
        return (this.isInitializedDate(disableUntil) &&
            this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil));
    };
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableSince = /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    function (date, disableSince) {
        return (this.isInitializedDate(disableSince) &&
            this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.isInitializedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getTimeInMilliseconds = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getDayNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    UtilService.decorators = [
        { type: Injectable }
    ];
    return UtilService;
}());
export { UtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlclV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvc2VydmljZXMvZGF0ZXBpY2tlclV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBU3JDLENBQUMsR0FBRyxHQUFHOztJQUNQLENBQUMsR0FBRyxHQUFHO0FBRWI7SUFBQTtJQTBTQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUF4U0MsaUNBQVc7Ozs7Ozs7Ozs7Ozs7O0lBQVgsVUFDRSxPQUFlLEVBQ2YsVUFBa0IsRUFDbEIsT0FBZSxFQUNmLE9BQWUsRUFDZixZQUFxQixFQUNyQixZQUFxQixFQUNyQixlQUF3QixFQUN4QixXQUFvQyxFQUNwQyxpQkFBc0MsRUFDdEMsV0FBMkIsRUFDM0IsVUFBbUM7O1lBRTdCLFVBQVUsR0FBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOztZQUNuRCxXQUFXLEdBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDbkYsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1NBQzlCOztZQUVLLFVBQVUsR0FBa0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQzs7WUFFcEUsU0FBUyxHQUF5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOztZQUNwRixJQUFJLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMs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MVNELElBMFNDO1NBelNZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElNeURhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RhdGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15RGF0ZVJhbmdlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kYXRlUmFuZ2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15TW9udGggfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vbnRoLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeU1vbnRoTGFiZWxzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb250aExhYmVscy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJTXlNYXJrZWREYXRlcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWFya2VkRGF0ZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWFya2VkRGF0ZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9teS1kYXRlLWZvcm1hdC5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgTSA9ICdtJztcclxuY29uc3QgRCA9ICdkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcclxuICBpc0RhdGVWYWxpZChcclxuICAgIGRhdGVTdHI6IHN0cmluZyxcclxuICAgIGRhdGVGb3JtYXQ6IHN0cmluZyxcclxuICAgIG1pblllYXI6IG51bWJlcixcclxuICAgIG1heFllYXI6IG51bWJlcixcclxuICAgIGRpc2FibGVVbnRpbDogSU15RGF0ZSxcclxuICAgIGRpc2FibGVTaW5jZTogSU15RGF0ZSxcclxuICAgIGRpc2FibGVXZWVrZW5kczogYm9vbGVhbixcclxuICAgIGRpc2FibGVEYXlzOiBBcnJheTxJTXlEYXRlIHwgbnVtYmVyPixcclxuICAgIGRpc2FibGVEYXRlUmFuZ2VzOiBBcnJheTxJTXlEYXRlUmFuZ2U+LFxyXG4gICAgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzLFxyXG4gICAgZW5hYmxlRGF5czogQXJyYXk8SU15RGF0ZSB8IG51bWJlcj5cclxuICApOiBJTXlEYXRlIHtcclxuICAgIGNvbnN0IHJldHVybkRhdGU6IElNeURhdGUgPSB7IGRheTogMCwgbW9udGg6IDAsIHllYXI6IDAgfTtcclxuICAgIGNvbnN0IGRheXNJbk1vbnRoOiBBcnJheTxudW1iZXI+ID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG4gICAgaWYgKG1vbnRoTGFiZWxzID09PSB1bmRlZmluZWQpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5nZXREYXRlRm9ybWF0RGVsaW1ldGVycyhkYXRlRm9ybWF0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlVmFsdWU6IEFycmF5PElNeURhdGVGb3JtYXQ+ID0gdGhpcy5nZXREYXRlVmFsdWUoZGF0ZVN0ciwgZGF0ZUZvcm1hdCwgZGVsaW1ldGVycyk7XHJcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB0aGlzLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzBdKTtcclxuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSB0aGlzLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzFdKTtcclxuICAgIGNvbnN0IGRheTogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsyXSk7XHJcblxyXG4gICAgaWYgKGRheSAhPT0gLTEgJiYgbW9udGggIT09IC0xICYmIHllYXIgIT09IC0xKSB7XHJcbiAgICAgIGlmICh5ZWFyIDwgbWluWWVhciB8fCB5ZWFyID4gbWF4WWVhciB8fCBtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIGRheTogZGF5IH07XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgIGRpc2FibGVVbnRpbCxcclxuICAgICAgICAgIGRpc2FibGVTaW5jZSxcclxuICAgICAgICAgIGRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgIGRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgICBlbmFibGVEYXlzXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSAxMDAgIT09IDAgJiYgeWVhciAlIDQgPT09IDApKSB7XHJcbiAgICAgICAgZGF5c0luTW9udGhbMV0gPSAyOTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gZGF5c0luTW9udGhbbW9udGggLSAxXSkge1xyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBWYWxpZCBkYXRlXHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlVmFsdWUoXHJcbiAgICBkYXRlU3RyOiBzdHJpbmcsXHJcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmcsXHJcbiAgICBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+XHJcbiAgKTogQXJyYXk8SU15RGF0ZUZvcm1hdD4ge1xyXG4gICAgbGV0IGRlbDogc3RyaW5nID0gZGVsaW1ldGVyc1swXTtcclxuICAgIGlmIChkZWxpbWV0ZXJzWzBdICE9PSBkZWxpbWV0ZXJzWzFdKSB7XHJcbiAgICAgIGRlbCA9IGRlbGltZXRlcnNbMF0gKyBkZWxpbWV0ZXJzWzFdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmU6IGFueSA9IG5ldyBSZWdFeHAoJ1snICsgZGVsICsgJ10nKTtcclxuICAgIGNvbnN0IGRzOiBBcnJheTxzdHJpbmc+ID0gZGF0ZVN0ci5zcGxpdChyZSk7XHJcbiAgICBjb25zdCBkZjogQXJyYXk8c3RyaW5nPiA9IGRhdGVGb3JtYXQuc3BsaXQocmUpO1xyXG4gICAgY29uc3QgZGE6IEFycmF5PElNeURhdGVGb3JtYXQ+ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZGZbaV0uaW5kZXhPZigneXknKSAhPT0gLTEpIHtcclxuICAgICAgICBkYVswXSA9IHsgdmFsdWU6IGRzW2ldLCBmb3JtYXQ6IGRmW2ldIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRmW2ldLmluZGV4T2YoTSkgIT09IC0xKSB7XHJcbiAgICAgICAgZGFbMV0gPSB7IHZhbHVlOiBkc1tpXSwgZm9ybWF0OiBkZltpXSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkZltpXS5pbmRleE9mKEQpICE9PSAtMSkge1xyXG4gICAgICAgIGRhWzJdID0geyB2YWx1ZTogZHNbaV0sIGZvcm1hdDogZGZbaV0gfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShkZjogSU15RGF0ZUZvcm1hdCwgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgIGlmIChkZi52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBrZXkgPSAxOyBrZXkgPD0gMTI7IGtleSsrKSB7XHJcbiAgICAgICAgaWYgKGRmLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIGdldE51bWJlckJ5VmFsdWUoZGY6IElNeURhdGVGb3JtYXQpOiBudW1iZXIge1xyXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGRmLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5icjogbnVtYmVyID0gTnVtYmVyKGRmLnZhbHVlKTtcclxuICAgIGlmIChcclxuICAgICAgKGRmLmZvcm1hdC5sZW5ndGggPT09IDEgJiYgZGYudmFsdWUubGVuZ3RoICE9PSAxICYmIG5iciA8IDEwKSB8fFxyXG4gICAgICAoZGYuZm9ybWF0Lmxlbmd0aCA9PT0gMSAmJiBkZi52YWx1ZS5sZW5ndGggIT09IDIgJiYgbmJyID49IDEwKVxyXG4gICAgKSB7XHJcbiAgICAgIG5iciA9IC0xO1xyXG4gICAgfSBlbHNlIGlmIChkZi5mb3JtYXQubGVuZ3RoID09PSAyICYmIGRmLnZhbHVlLmxlbmd0aCA+IDIpIHtcclxuICAgICAgbmJyID0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmJyO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZUZvcm1hdFNlcGFyYXRvcihkYXRlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXQucmVwbGFjZSgvW2RteV0vZywgJycpWzBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZUZvcm1hdERlbGltZXRlcnMoZGF0ZUZvcm1hdDogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB8IGFueSB7XHJcbiAgICByZXR1cm4gZGF0ZUZvcm1hdC5tYXRjaCgvW14oZG15KV17MSx9L2cpO1xyXG4gIH1cclxuXHJcbiAgaXNNb250aExhYmVsVmFsaWQobW9udGhMYWJlbDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xyXG4gICAgZm9yIChsZXQga2V5ID0gMTsga2V5IDw9IDEyOyBrZXkrKykge1xyXG4gICAgICBpZiAobW9udGhMYWJlbC50b0xvd2VyQ2FzZSgpID09PSBtb250aExhYmVsc1trZXldLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBpc1llYXJMYWJlbFZhbGlkKHllYXJMYWJlbDogbnVtYmVyLCBtaW5ZZWFyOiBudW1iZXIsIG1heFllYXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoeWVhckxhYmVsID49IG1pblllYXIgJiYgeWVhckxhYmVsIDw9IG1heFllYXIpIHtcclxuICAgICAgcmV0dXJuIHllYXJMYWJlbDtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZVBhcnROdW1iZXIoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcG9zOiBudW1iZXIgPSB0aGlzLmdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdCwgZGF0ZVBhcnQpO1xyXG4gICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKHBvcywgcG9zICsgZGF0ZVBhcnQubGVuZ3RoKTtcclxuICAgICAgaWYgKCEvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VEYXRlUGFydE1vbnRoTmFtZShcclxuICAgIGRhdGVGb3JtYXQ6IHN0cmluZyxcclxuICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcclxuICAgIGRhdGVQYXJ0OiBzdHJpbmcsXHJcbiAgICBtb250aExhYmVsczogSU15TW9udGhMYWJlbHNcclxuICApOiBudW1iZXIge1xyXG4gICAgY29uc3QgcG9zOiBudW1iZXIgPSB0aGlzLmdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdCwgZGF0ZVBhcnQpO1xyXG4gICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNNb250aExhYmVsVmFsaWQoZGF0ZVN0cmluZy5zdWJzdHJpbmcocG9zLCBwb3MgKyBkYXRlUGFydC5sZW5ndGgpLCBtb250aExhYmVscyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0ZUZvcm1hdC5pbmRleE9mKGRhdGVQYXJ0KTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGVmYXVsdE1vbnRoKG1vbnRoU3RyaW5nOiBzdHJpbmcgfCBhbnkpOiBJTXlNb250aCB7XHJcbiAgICBjb25zdCBtb250aDogSU15TW9udGggPSB7IG1vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDAgfTtcclxuICAgIGlmIChtb250aFN0cmluZyAhPT0gJycpIHtcclxuICAgICAgY29uc3Qgc3BsaXQgPSBtb250aFN0cmluZy5zcGxpdChtb250aFN0cmluZy5tYXRjaCgvW14wLTldLylbMF0pO1xyXG4gICAgICBtb250aC5tb250aE5iciA9IHNwbGl0WzBdLmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzBdLCAwKSA6IHBhcnNlSW50KHNwbGl0WzFdLCAwKTtcclxuICAgICAgbW9udGgueWVhciA9IHNwbGl0WzBdLmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzFdLCAwKSA6IHBhcnNlSW50KHNwbGl0WzBdLCAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb250aDtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZWREYXkoXHJcbiAgICBkYXRlOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVVudGlsOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLFxyXG4gICAgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGUgfCBudW1iZXI+LFxyXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sXHJcbiAgICBlbmFibGVEYXlzOiBBcnJheTxJTXlEYXRlIHwgbnVtYmVyPlxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBlIG9mIGVuYWJsZURheXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGlmIChlID09PSB0aGlzLmdldERheU51bWJlcihkYXRlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChlLnllYXIgPT09IGRhdGUueWVhciAmJiBlLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGUuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGVNczogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVVudGlsKSAmJlxyXG4gICAgICBkYXRlTXMgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlU2luY2UpICYmXHJcbiAgICAgIGRhdGVNcyA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc2FibGVXZWVrZW5kcykge1xyXG4gICAgICBjb25zdCBkbiA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICBpZiAoZG4gPT09IDAgfHwgZG4gPT09IDYpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZCBvZiBkaXNhYmxlRGF5cykge1xyXG4gICAgICBpZiAodHlwZW9mIGQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpID09PSBkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZCBvZiBkaXNhYmxlRGF0ZVJhbmdlcykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmJlZ2luKSAmJlxyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5lbmQpICYmXHJcbiAgICAgICAgZGF0ZU1zID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuYmVnaW4pICYmXHJcbiAgICAgICAgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuZW5kKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNNYXJrZWREYXRlKFxyXG4gICAgZGF0ZTogSU15RGF0ZSxcclxuICAgIG1hcmtlZERhdGVzOiBBcnJheTxJTXlNYXJrZWREYXRlcz4sXHJcbiAgICBtYXJrV2Vla2VuZHM6IElNeU1hcmtlZERhdGVcclxuICApOiBJTXlNYXJrZWREYXRlIHtcclxuICAgIGZvciAoY29uc3QgbWQgb2YgbWFya2VkRGF0ZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBkIG9mIG1kLmRhdGVzKSB7XHJcbiAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICByZXR1cm4geyBtYXJrZWQ6IHRydWUsIGNvbG9yOiBtZC5jb2xvciB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1hcmtXZWVrZW5kcyAmJiBtYXJrV2Vla2VuZHMubWFya2VkKSB7XHJcbiAgICAgIGNvbnN0IGRheU5iciA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICBpZiAoZGF5TmJyID09PSAwIHx8IGRheU5iciA9PT0gNikge1xyXG4gICAgICAgIHJldHVybiB7IG1hcmtlZDogdHJ1ZSwgY29sb3I6IG1hcmtXZWVrZW5kcy5jb2xvciB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBtYXJrZWQ6IGZhbHNlLCBjb2xvcjogJycgfTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgKGQuZ2V0RGF5KCkgPT09IDAgPyAtMyA6IDQgLSBkLmdldERheSgpKSk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoZC5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIDAsIDQpLmdldFRpbWUoKSkgLyA4NjQwMDAwMCAvIDcpICsgMTtcclxuICB9XHJcblxyXG4gIGlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKGRhdGU6IElNeURhdGUsIGRpc2FibGVVbnRpbDogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmXHJcbiAgICAgIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJlxyXG4gICAgICB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNJbml0aWFsaXplZERhdGUoZGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGUueWVhciAhPT0gMCAmJiBkYXRlLm1vbnRoICE9PSAwICYmIGRhdGUuZGF5ICE9PSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgcmV0dXJuIGQuZ2V0RGF5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==