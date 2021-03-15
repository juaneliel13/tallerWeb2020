/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var LocaleService = /** @class */ (function () {
    function LocaleService() {
        this.locales = {
            'en': {
                dayLabelsFull: { su: 'Sunday', mo: 'Monday', tu: 'Tuesday', we: 'Wednesday', th: 'Thursday', fr: 'Friday', sa: 'Saturday' },
                dayLabels: { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' },
                monthLabelsFull: {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                },
                monthLabels: {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                },
                dateFormat: 'yyyy-mm-dd',
                todayBtnTxt: 'Today',
                clearBtnTxt: 'Clear',
                closeBtnTxt: 'Close',
                firstDayOfWeek: 'mo',
                sunHighlight: false,
            }
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    LocaleService.prototype.setLocaleOptions = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        Object.entries(locale).forEach((/**
         * @param {?} loc
         * @return {?}
         */
        function (loc) {
            /** @type {?} */
            var localeIdentifier = loc[0];
            _this.locales[localeIdentifier] = loc[1];
        }));
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    LocaleService.prototype.getLocaleOptions = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales['en'];
    };
    LocaleService.decorators = [
        { type: Injectable }
    ];
    return LocaleService;
}());
export { LocaleService };
if (false) {
    /** @type {?} */
    LocaleService.prototype.locales;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckxvY2FsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9kYXRlLXBpY2tlci9zZXJ2aWNlcy9kYXRlcGlja2VyTG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBQTtRQUVTLFlBQU8sR0FBZTtZQUMzQixJQUFJLEVBQUU7Z0JBQ0osYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRTtnQkFDM0gsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDMUYsZUFBZSxFQUFFO29CQUNmLENBQUMsRUFBRSxTQUFTO29CQUNaLENBQUMsRUFBRSxVQUFVO29CQUNiLENBQUMsRUFBRSxPQUFPO29CQUNWLENBQUMsRUFBRSxPQUFPO29CQUNWLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxNQUFNO29CQUNULENBQUMsRUFBRSxNQUFNO29CQUNULENBQUMsRUFBRSxRQUFRO29CQUNYLENBQUMsRUFBRSxXQUFXO29CQUNkLEVBQUUsRUFBRSxTQUFTO29CQUNiLEVBQUUsRUFBRSxVQUFVO29CQUNkLEVBQUUsRUFBRSxVQUFVO2lCQUFFO2dCQUNsQixXQUFXLEVBQUU7b0JBQ1gsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsRUFBRSxFQUFFLEtBQUs7b0JBQ1QsRUFBRSxFQUFFLEtBQUs7b0JBQ1QsRUFBRSxFQUFFLEtBQUs7aUJBQUU7Z0JBQ2IsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixXQUFXLEVBQUUsT0FBTztnQkFDcEIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsS0FBSzthQUNwQjtTQUNGLENBQUM7SUFpQkosQ0FBQzs7Ozs7SUFmQyx3Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsTUFBa0I7UUFBbkMsaUJBS0M7UUFKQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQVE7O2dCQUNoQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFnQjs7OztJQUFoQixVQUFpQixNQUFjO1FBQzdCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELG9CQUFvQjtZQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7UUFDRCxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXZERixVQUFVOztJQXdEWCxvQkFBQztDQUFBLEFBeERELElBd0RDO1NBdkRZLGFBQWE7OztJQUN4QixnQ0FxQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElNeUxvY2FsZXMsIElNeU9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsZVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBsb2NhbGVzOiBJTXlMb2NhbGVzID0ge1xyXG4gICAgJ2VuJzoge1xyXG4gICAgICBkYXlMYWJlbHNGdWxsOiB7IHN1OiAnU3VuZGF5JywgbW86ICdNb25kYXknLCB0dTogJ1R1ZXNkYXknLCB3ZTogJ1dlZG5lc2RheScsIHRoOiAnVGh1cnNkYXknLCBmcjogJ0ZyaWRheScsIHNhOiAnU2F0dXJkYXknIH0sXHJcbiAgICAgIGRheUxhYmVsczogeyBzdTogJ1N1bicsIG1vOiAnTW9uJywgdHU6ICdUdWUnLCB3ZTogJ1dlZCcsIHRoOiAnVGh1JywgZnI6ICdGcmknLCBzYTogJ1NhdCcgfSxcclxuICAgICAgbW9udGhMYWJlbHNGdWxsOiB7XHJcbiAgICAgICAgMTogJ0phbnVhcnknLFxyXG4gICAgICAgIDI6ICdGZWJydWFyeScsXHJcbiAgICAgICAgMzogJ01hcmNoJyxcclxuICAgICAgICA0OiAnQXByaWwnLFxyXG4gICAgICAgIDU6ICdNYXknLFxyXG4gICAgICAgIDY6ICdKdW5lJyxcclxuICAgICAgICA3OiAnSnVseScsXHJcbiAgICAgICAgODogJ0F1Z3VzdCcsXHJcbiAgICAgICAgOTogJ1NlcHRlbWJlcicsXHJcbiAgICAgICAgMTA6ICdPY3RvYmVyJyxcclxuICAgICAgICAxMTogJ05vdmVtYmVyJyxcclxuICAgICAgICAxMjogJ0RlY2VtYmVyJyB9LFxyXG4gICAgICBtb250aExhYmVsczoge1xyXG4gICAgICAgIDE6ICdKYW4nLFxyXG4gICAgICAgIDI6ICdGZWInLFxyXG4gICAgICAgIDM6ICdNYXInLFxyXG4gICAgICAgIDQ6ICdBcHInLFxyXG4gICAgICAgIDU6ICdNYXknLFxyXG4gICAgICAgIDY6ICdKdW4nLFxyXG4gICAgICAgIDc6ICdKdWwnLFxyXG4gICAgICAgIDg6ICdBdWcnLFxyXG4gICAgICAgIDk6ICdTZXAnLFxyXG4gICAgICAgIDEwOiAnT2N0JyxcclxuICAgICAgICAxMTogJ05vdicsXHJcbiAgICAgICAgMTI6ICdEZWMnIH0sXHJcbiAgICAgIGRhdGVGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgdG9kYXlCdG5UeHQ6ICdUb2RheScsXHJcbiAgICAgIGNsZWFyQnRuVHh0OiAnQ2xlYXInLFxyXG4gICAgICBjbG9zZUJ0blR4dDogJ0Nsb3NlJyxcclxuICAgICAgZmlyc3REYXlPZldlZWs6ICdtbycsXHJcbiAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0TG9jYWxlT3B0aW9ucyhsb2NhbGU6IElNeUxvY2FsZXMpIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKGxvY2FsZSkuZm9yRWFjaCgobG9jOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgbG9jYWxlSWRlbnRpZmllciA9IGxvY1swXTtcclxuICAgICAgdGhpcy5sb2NhbGVzW2xvY2FsZUlkZW50aWZpZXJdID0gbG9jWzFdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGVPcHRpb25zKGxvY2FsZTogc3RyaW5nKTogSU15T3B0aW9ucyB7XHJcbiAgICBpZiAobG9jYWxlICYmIHRoaXMubG9jYWxlcy5oYXNPd25Qcm9wZXJ0eShsb2NhbGUpKSB7XHJcbiAgICAgIC8vIFVzZXIgZ2l2ZW4gbG9jYWxlXHJcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsZXNbbG9jYWxlXTtcclxuICAgIH1cclxuICAgIC8vIERlZmF1bHQ6IGVuXHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVzWydlbiddO1xyXG4gIH1cclxufVxyXG4iXX0=