/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class MdbDateFormatDirective {
    constructor() {
        this.separator = '/';
        this.format = ['dd', 'mm', 'yyyy'];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const currentValue = event.target.value;
        /** @type {?} */
        const newValue = this.getFormattedDate(currentValue);
        event.target.value = newValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setSeparatorsNumber();
        this.setResultLength();
    }
    /**
     * @return {?}
     */
    setSeparatorsNumber() {
        this.separatorsNumber = this.format.length - 1;
    }
    /**
     * @return {?}
     */
    setResultLength() {
        /** @type {?} */
        let resLength = 0;
        this.format.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            resLength += value.length;
        }));
        this.resultLength = resLength + this.separatorsNumber;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getFormattedDate(date) {
        /** @type {?} */
        const dateParts = this.getDateParts(date);
        /** @type {?} */
        const result = dateParts.map((/**
         * @param {?} part
         * @param {?} index
         * @return {?}
         */
        (part, index) => {
            return this.formatDateParts(part, index);
        }));
        return result.join(this.separator).slice(0, this.resultLength);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateParts(date) {
        date = this.getDigits(date).slice(0, this.resultLength - this.separatorsNumber);
        /** @type {?} */
        const parts = [];
        /** @type {?} */
        const partsIndex = {
            first: this.format[0].length,
            mid: this.format[0].length + this.format[1].length,
            last: this.resultLength,
        };
        parts[0] = date.slice(0, partsIndex.first);
        if (date.length > partsIndex.first) {
            parts[1] = date.slice(partsIndex.first, partsIndex.mid);
        }
        if (date.length > partsIndex.mid) {
            parts[2] = date.slice(partsIndex.mid, partsIndex.last);
        }
        return parts;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDigits(value) {
        return value.replace(/\D/g, '');
    }
    /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    formatDateParts(datePart, index) {
        switch (this.format[index]) {
            case 'dd':
                datePart = this.getFormattedDay(datePart);
                break;
            case 'mm':
                datePart = this.getFormattedMonth(datePart);
                break;
        }
        return datePart;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedDay(value) {
        /** @type {?} */
        const dayFirstNum = parseInt(value.charAt(0), 10);
        if (value) {
            if (dayFirstNum > 3 && dayFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else {
                return value;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedMonth(value) {
        /** @type {?} */
        const monthFirstNum = parseInt(value.charAt(0), 10);
        /** @type {?} */
        const monthNum = parseInt(value, 10);
        if (value) {
            if (monthFirstNum > 1 && monthFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else if (monthNum > 12) {
                return '12';
            }
            else {
                return value;
            }
        }
    }
}
MdbDateFormatDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDateFormat]',
            },] }
];
MdbDateFormatDirective.propDecorators = {
    separator: [{ type: Input }],
    format: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }, { type: HostListener, args: ['paste', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MdbDateFormatDirective.prototype.resultLength;
    /** @type {?} */
    MdbDateFormatDirective.prototype.separatorsNumber;
    /** @type {?} */
    MdbDateFormatDirective.prototype.separator;
    /** @type {?} */
    MdbDateFormatDirective.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS3ZFLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7UUFPVyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFzR3pDLENBQUM7Ozs7O0lBbEdDLE9BQU8sQ0FBQyxLQUFVOztjQUNWLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7O2NBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3BELEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGVBQWU7O1lBQ1QsU0FBUyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsR0FBRyxJ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OztJQUVELGlCQUFpQixDQUFDLEtBQWE7O2NBQ3ZCLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O2NBQzdDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUVwQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDOzs7WUE3R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozt3QkFLRSxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBUGpDLDhDQUFxQjs7SUFDckIsa0RBQXlCOztJQUV6QiwyQ0FBeUI7O0lBQ3pCLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJEYXRlRm9ybWF0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkRhdGVGb3JtYXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICByZXN1bHRMZW5ndGg6IG51bWJlcjtcbiAgc2VwYXJhdG9yc051bWJlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNlcGFyYXRvciA9ICcvJztcbiAgQElucHV0KCkgZm9ybWF0ID0gWydkZCcsICdtbScsICd5eXl5J107XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShjdXJyZW50VmFsdWUpO1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTZXBhcmF0b3JzTnVtYmVyKCk7XG4gICAgdGhpcy5zZXRSZXN1bHRMZW5ndGgoKTtcbiAgfVxuXG4gIHNldFNlcGFyYXRvcnNOdW1iZXIoKSB7XG4gICAgdGhpcy5zZXBhcmF0b3JzTnVtYmVyID0gdGhpcy5mb3JtYXQubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHNldFJlc3VsdExlbmd0aCgpIHtcbiAgICBsZXQgcmVzTGVuZ3RoID0gMDtcbiAgICB0aGlzLmZvcm1hdC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIHJlc0xlbmd0aCArPSB2YWx1ZS5sZW5ndGg7XG4gICAgfSk7XG4gICAgdGhpcy5yZXN1bHRMZW5ndGggPSByZXNMZW5ndGggKyB0aGlzLnNlcGFyYXRvcnNOdW1iZXI7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWREYXRlKGRhdGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGVQYXJ0cyA9IHRoaXMuZ2V0RGF0ZVBhcnRzKGRhdGUpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVBhcnRzLm1hcCgocGFydCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVQYXJ0cyhwYXJ0LCBpbmRleCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4odGhpcy5zZXBhcmF0b3IpLnNsaWNlKDAsIHRoaXMucmVzdWx0TGVuZ3RoKTtcbiAgfVxuXG4gIGdldERhdGVQYXJ0cyhkYXRlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgZGF0ZSA9IHRoaXMuZ2V0RGlnaXRzKGRhdGUpLnNsaWNlKDAsIHRoaXMucmVzdWx0TGVuZ3RoIC0gdGhpcy5zZXBhcmF0b3JzTnVtYmVyKTtcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBwYXJ0c0luZGV4ID0ge1xuICAgICAgZmlyc3Q6IHRoaXMuZm9ybWF0WzBdLmxlbmd0aCxcbiAgICAgIG1pZDogdGhpcy5mb3JtYXRbMF0ubGVuZ3RoICsgdGhpcy5mb3JtYXRbMV0ubGVuZ3RoLFxuICAgICAgbGFzdDogdGhpcy5yZXN1bHRMZW5ndGgsXG4gICAgfTtcblxuICAgIHBhcnRzWzBdID0gZGF0ZS5zbGljZSgwLCBwYXJ0c0luZGV4LmZpcnN0KTtcblxuICAgIGlmIChkYXRlLmxlbmd0aCA+IHBhcnRzSW5kZXguZmlyc3QpIHtcbiAgICAgIHBhcnRzWzFdID0gZGF0ZS5zbGljZShwYXJ0c0luZGV4LmZpcnN0LCBwYXJ0c0luZGV4Lm1pZCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUubGVuZ3RoID4gcGFydHNJbmRleC5taWQpIHtcbiAgICAgIHBhcnRzWzJdID0gZGF0ZS5zbGljZShwYXJ0c0luZGV4Lm1pZCwgcGFydHNJbmRleC5sYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydHM7XG4gIH1cblxuICBnZXREaWdpdHModmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVBhcnRzKGRhdGVQYXJ0OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZm9ybWF0W2luZGV4XSkge1xuICAgICAgY2FzZSAnZGQnOlxuICAgICAgICBkYXRlUGFydCA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF5KGRhdGVQYXJ0KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21tJzpcbiAgICAgICAgZGF0ZVBhcnQgPSB0aGlzLmdldEZvcm1hdHRlZE1vbnRoKGRhdGVQYXJ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVQYXJ0O1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGVkRGF5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXlGaXJzdE51bSA9IHBhcnNlSW50KHZhbHVlLmNoYXJBdCgwKSwgMTApO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGRheUZpcnN0TnVtID4gMyAmJiBkYXlGaXJzdE51bSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gJzAnICsgdmFsdWUuY2hhckF0KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEZvcm1hdHRlZE1vbnRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb250aEZpcnN0TnVtID0gcGFyc2VJbnQodmFsdWUuY2hhckF0KDApLCAxMCk7XG4gICAgY29uc3QgbW9udGhOdW0gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAobW9udGhGaXJzdE51bSA+IDEgJiYgbW9udGhGaXJzdE51bSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gJzAnICsgdmFsdWUuY2hhckF0KDApO1xuICAgICAgfSBlbHNlIGlmIChtb250aE51bSA+IDEyKSB7XG4gICAgICAgIHJldHVybiAnMTInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19