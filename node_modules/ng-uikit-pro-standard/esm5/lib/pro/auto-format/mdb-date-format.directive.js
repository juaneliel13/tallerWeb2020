/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
var MdbDateFormatDirective = /** @class */ (function () {
    function MdbDateFormatDirective() {
        this.separator = '/';
        this.format = ['dd', 'mm', 'yyyy'];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbDateFormatDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var currentValue = event.target.value;
        /** @type {?} */
        var newValue = this.getFormattedDate(currentValue);
        event.target.value = newValue;
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setSeparatorsNumber();
        this.setResultLength();
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.setSeparatorsNumber = /**
     * @return {?}
     */
    function () {
        this.separatorsNumber = this.format.length - 1;
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.setResultLength = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var resLength = 0;
        this.format.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            resLength += value.length;
        }));
        this.resultLength = resLength + this.separatorsNumber;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        /** @type {?} */
        var dateParts = this.getDateParts(date);
        /** @type {?} */
        var result = dateParts.map((/**
         * @param {?} part
         * @param {?} index
         * @return {?}
         */
        function (part, index) {
            return _this.formatDateParts(part, index);
        }));
        return result.join(this.separator).slice(0, this.resultLength);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getDateParts = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        date = this.getDigits(date).slice(0, this.resultLength - this.separatorsNumber);
        /** @type {?} */
        var parts = [];
        /** @type {?} */
        var partsIndex = {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getDigits = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    MdbDateFormatDirective.prototype.formatDateParts = /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    function (datePart, index) {
        switch (this.format[index]) {
            case 'dd':
                datePart = this.getFormattedDay(datePart);
                break;
            case 'mm':
                datePart = this.getFormattedMonth(datePart);
                break;
        }
        return datePart;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedDay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var dayFirstNum = parseInt(value.charAt(0), 10);
        if (value) {
            if (dayFirstNum > 3 && dayFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else {
                return value;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var monthFirstNum = parseInt(value.charAt(0), 10);
        /** @type {?} */
        var monthNum = parseInt(value, 10);
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
    };
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
    return MdbDateFormatDirective;
}());
export { MdbDateFormatDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUFPVyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFzR3pDLENBQUM7Ozs7O0lBbEdDLHdDQUFPOzs7O0lBRlAsVUFFUSxLQUFVOztZQUNWLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7O1lBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3BELEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxvREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjs7WUFDTSxTQUFTLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDdkIsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLFNB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QUFDO2FBQzlCO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsa0RBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQWE7O1lBQ3ZCLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1lBQzdDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUVwQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDOztnQkE3R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7NEJBS0UsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFtR25DLDZCQUFDO0NBQUEsQUE5R0QsSUE4R0M7U0EzR1ksc0JBQXNCOzs7SUFDakMsOENBQXFCOztJQUNyQixrREFBeUI7O0lBRXpCLDJDQUF5Qjs7SUFDekIsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkRhdGVGb3JtYXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiRGF0ZUZvcm1hdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlc3VsdExlbmd0aDogbnVtYmVyO1xuICBzZXBhcmF0b3JzTnVtYmVyOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2VwYXJhdG9yID0gJy8nO1xuICBASW5wdXQoKSBmb3JtYXQgPSBbJ2RkJywgJ21tJywgJ3l5eXknXTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcbiAgb25JbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGN1cnJlbnRWYWx1ZSk7XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNlcGFyYXRvcnNOdW1iZXIoKTtcbiAgICB0aGlzLnNldFJlc3VsdExlbmd0aCgpO1xuICB9XG5cbiAgc2V0U2VwYXJhdG9yc051bWJlcigpIHtcbiAgICB0aGlzLnNlcGFyYXRvcnNOdW1iZXIgPSB0aGlzLmZvcm1hdC5sZW5ndGggLSAxO1xuICB9XG5cbiAgc2V0UmVzdWx0TGVuZ3RoKCkge1xuICAgIGxldCByZXNMZW5ndGggPSAwO1xuICAgIHRoaXMuZm9ybWF0LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgcmVzTGVuZ3RoICs9IHZhbHVlLmxlbmd0aDtcbiAgICB9KTtcbiAgICB0aGlzLnJlc3VsdExlbmd0aCA9IHJlc0xlbmd0aCArIHRoaXMuc2VwYXJhdG9yc051bWJlcjtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZERhdGUoZGF0ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZVBhcnRzID0gdGhpcy5nZXREYXRlUGFydHMoZGF0ZSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBkYXRlUGFydHMubWFwKChwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVBhcnRzKHBhcnQsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQuam9pbih0aGlzLnNlcGFyYXRvcikuc2xpY2UoMCwgdGhpcy5yZXN1bHRMZW5ndGgpO1xuICB9XG5cbiAgZ2V0RGF0ZVBhcnRzKGRhdGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBkYXRlID0gdGhpcy5nZXREaWdpdHMoZGF0ZSkuc2xpY2UoMCwgdGhpcy5yZXN1bHRMZW5ndGggLSB0aGlzLnNlcGFyYXRvcnNOdW1iZXIpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHBhcnRzSW5kZXggPSB7XG4gICAgICBmaXJzdDogdGhpcy5mb3JtYXRbMF0ubGVuZ3RoLFxuICAgICAgbWlkOiB0aGlzLmZvcm1hdFswXS5sZW5ndGggKyB0aGlzLmZvcm1hdFsxXS5sZW5ndGgsXG4gICAgICBsYXN0OiB0aGlzLnJlc3VsdExlbmd0aCxcbiAgICB9O1xuXG4gICAgcGFydHNbMF0gPSBkYXRlLnNsaWNlKDAsIHBhcnRzSW5kZXguZmlyc3QpO1xuXG4gICAgaWYgKGRhdGUubGVuZ3RoID4gcGFydHNJbmRleC5maXJzdCkge1xuICAgICAgcGFydHNbMV0gPSBkYXRlLnNsaWNlKHBhcnRzSW5kZXguZmlyc3QsIHBhcnRzSW5kZXgubWlkKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZS5sZW5ndGggPiBwYXJ0c0luZGV4Lm1pZCkge1xuICAgICAgcGFydHNbMl0gPSBkYXRlLnNsaWNlKHBhcnRzSW5kZXgubWlkLCBwYXJ0c0luZGV4Lmxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuXG4gIGdldERpZ2l0cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gIH1cblxuICBmb3JtYXREYXRlUGFydHMoZGF0ZVBhcnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHN3aXRjaCAodGhpcy5mb3JtYXRbaW5kZXhdKSB7XG4gICAgICBjYXNlICdkZCc6XG4gICAgICAgIGRhdGVQYXJ0ID0gdGhpcy5nZXRGb3JtYXR0ZWREYXkoZGF0ZVBhcnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW0nOlxuICAgICAgICBkYXRlUGFydCA9IHRoaXMuZ2V0Rm9ybWF0dGVkTW9udGgoZGF0ZVBhcnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZVBhcnQ7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWREYXkodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGRheUZpcnN0TnVtID0gcGFyc2VJbnQodmFsdWUuY2hhckF0KDApLCAxMCk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoZGF5Rmlyc3ROdW0gPiAzICYmIGRheUZpcnN0TnVtICE9PSAwKSB7XG4gICAgICAgIHJldHVybiAnMCcgKyB2YWx1ZS5jaGFyQXQoMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9ybWF0dGVkTW9udGgodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG1vbnRoRmlyc3ROdW0gPSBwYXJzZUludCh2YWx1ZS5jaGFyQXQoMCksIDEwKTtcbiAgICBjb25zdCBtb250aE51bSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChtb250aEZpcnN0TnVtID4gMSAmJiBtb250aEZpcnN0TnVtICE9PSAwKSB7XG4gICAgICAgIHJldHVybiAnMCcgKyB2YWx1ZS5jaGFyQXQoMCk7XG4gICAgICB9IGVsc2UgaWYgKG1vbnRoTnVtID4gMTIpIHtcbiAgICAgICAgcmV0dXJuICcxMic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=