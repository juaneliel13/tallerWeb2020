/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class LocaleService {
    constructor() {
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
    setLocaleOptions(locale) {
        Object.entries(locale).forEach((/**
         * @param {?} loc
         * @return {?}
         */
        (loc) => {
            /** @type {?} */
            const localeIdentifier = loc[0];
            this.locales[localeIdentifier] = loc[1];
        }));
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    getLocaleOptions(locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales['en'];
    }
}
LocaleService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    LocaleService.prototype.locales;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckxvY2FsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9kYXRlLXBpY2tlci9zZXJ2aWNlcy9kYXRlcGlja2VyTG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFFUyxZQUFPLEdBQWU7WUFDM0IsSUFBSSxFQUFFO2dCQUNKLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7Z0JBQzNILFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFGLGVBQWUsRUFBRTtvQkFDZixDQUFDLEVBQUUsU0FBUztvQkFDWixDQUFDLEVBQUUsVUFBVTtvQkFDYixDQUFDLEVBQUUsT0FBTztvQkFDVixDQUFDLEVBQUUsT0FBTztvQkFDVixDQUFDLEVBQUUsS0FBSztvQkFDUixDQUFDLEVBQUUsTUFBTTtvQkFDVCxDQUFDLEVBQUUsTUFBTTtvQkFDVCxDQUFDLEVBQUUsUUFBUTtvQkFDWCxDQUFDLEVBQUUsV0FBVztvQkFDZCxFQUFFLEVBQUUsU0FBUztvQkFDYixFQUFFLEVBQUUsVUFBVTtvQkFDZCxFQUFFLEVBQUUsVUFBVTtpQkFBRTtnQkFDbEIsV0FBVyxFQUFFO29CQUNYLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLEVBQUUsRUFBRSxLQUFLO29CQUNULEVBQUUsRUFBRSxLQUFLO29CQUNULEVBQUUsRUFBRSxLQUFLO2lCQUFFO2dCQUNiLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsT0FBTztnQkFDcEIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7U0FDRixDQUFDO0lBaUJKLENBQUM7Ozs7O0lBZkMsZ0JBQWdCLENBQUMsTUFBa0I7UUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs7a0JBQ3BDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBYztRQUM3QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqRCxvQkFBb0I7WUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF2REYsVUFBVTs7OztJQUVULGdDQXFDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU15TG9jYWxlcywgSU15T3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYWxlU2VydmljZSB7XHJcbiAgcHVibGljIGxvY2FsZXM6IElNeUxvY2FsZXMgPSB7XHJcbiAgICAnZW4nOiB7XHJcbiAgICAgIGRheUxhYmVsc0Z1bGw6IHsgc3U6ICdTdW5kYXknLCBtbzogJ01vbmRheScsIHR1OiAnVHVlc2RheScsIHdlOiAnV2VkbmVzZGF5JywgdGg6ICdUaHVyc2RheScsIGZyOiAnRnJpZGF5Jywgc2E6ICdTYXR1cmRheScgfSxcclxuICAgICAgZGF5TGFiZWxzOiB7IHN1OiAnU3VuJywgbW86ICdNb24nLCB0dTogJ1R1ZScsIHdlOiAnV2VkJywgdGg6ICdUaHUnLCBmcjogJ0ZyaScsIHNhOiAnU2F0JyB9LFxyXG4gICAgICBtb250aExhYmVsc0Z1bGw6IHtcclxuICAgICAgICAxOiAnSmFudWFyeScsXHJcbiAgICAgICAgMjogJ0ZlYnJ1YXJ5JyxcclxuICAgICAgICAzOiAnTWFyY2gnLFxyXG4gICAgICAgIDQ6ICdBcHJpbCcsXHJcbiAgICAgICAgNTogJ01heScsXHJcbiAgICAgICAgNjogJ0p1bmUnLFxyXG4gICAgICAgIDc6ICdKdWx5JyxcclxuICAgICAgICA4OiAnQXVndXN0JyxcclxuICAgICAgICA5OiAnU2VwdGVtYmVyJyxcclxuICAgICAgICAxMDogJ09jdG9iZXInLFxyXG4gICAgICAgIDExOiAnTm92ZW1iZXInLFxyXG4gICAgICAgIDEyOiAnRGVjZW1iZXInIH0sXHJcbiAgICAgIG1vbnRoTGFiZWxzOiB7XHJcbiAgICAgICAgMTogJ0phbicsXHJcbiAgICAgICAgMjogJ0ZlYicsXHJcbiAgICAgICAgMzogJ01hcicsXHJcbiAgICAgICAgNDogJ0FwcicsXHJcbiAgICAgICAgNTogJ01heScsXHJcbiAgICAgICAgNjogJ0p1bicsXHJcbiAgICAgICAgNzogJ0p1bCcsXHJcbiAgICAgICAgODogJ0F1ZycsXHJcbiAgICAgICAgOTogJ1NlcCcsXHJcbiAgICAgICAgMTA6ICdPY3QnLFxyXG4gICAgICAgIDExOiAnTm92JyxcclxuICAgICAgICAxMjogJ0RlYycgfSxcclxuICAgICAgZGF0ZUZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICB0b2RheUJ0blR4dDogJ1RvZGF5JyxcclxuICAgICAgY2xlYXJCdG5UeHQ6ICdDbGVhcicsXHJcbiAgICAgIGNsb3NlQnRuVHh0OiAnQ2xvc2UnLFxyXG4gICAgICBmaXJzdERheU9mV2VlazogJ21vJyxcclxuICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZSxcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZXRMb2NhbGVPcHRpb25zKGxvY2FsZTogSU15TG9jYWxlcykge1xyXG4gICAgT2JqZWN0LmVudHJpZXMobG9jYWxlKS5mb3JFYWNoKChsb2M6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBsb2NhbGVJZGVudGlmaWVyID0gbG9jWzBdO1xyXG4gICAgICB0aGlzLmxvY2FsZXNbbG9jYWxlSWRlbnRpZmllcl0gPSBsb2NbMV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZU9wdGlvbnMobG9jYWxlOiBzdHJpbmcpOiBJTXlPcHRpb25zIHtcclxuICAgIGlmIChsb2NhbGUgJiYgdGhpcy5sb2NhbGVzLmhhc093blByb3BlcnR5KGxvY2FsZSkpIHtcclxuICAgICAgLy8gVXNlciBnaXZlbiBsb2NhbGVcclxuICAgICAgcmV0dXJuIHRoaXMubG9jYWxlc1tsb2NhbGVdO1xyXG4gICAgfVxyXG4gICAgLy8gRGVmYXVsdDogZW5cclxuICAgIHJldHVybiB0aGlzLmxvY2FsZXNbJ2VuJ107XHJcbiAgfVxyXG59XHJcbiJdfQ==