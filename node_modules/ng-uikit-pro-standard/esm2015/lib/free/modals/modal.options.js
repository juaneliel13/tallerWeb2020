/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     *  Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.containerClass;
    /** @type {?} */
    ModalOptions.prototype.animated;
    /** @type {?} */
    ModalOptions.prototype.scroll;
    /** @type {?} */
    ModalOptions.prototype.data;
}
export class MDBModalRef {
    /**
     * Hides the modal
     * @return {?}
     */
    hide() { }
}
MDBModalRef.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
const ɵ0 = {};
/** @type {?} */
export const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: ɵ0,
};
/** @type {?} */
export const ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show',
};
/** @type {?} */
export const Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed',
};
/** @type {?} */
export const TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150,
};
/** @type {?} */
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxZQUFZOzs7WUFEeEIsVUFBVTs7Ozs7OztJQUtULGdDQUFvQzs7Ozs7SUFJcEMsZ0NBQW1COztJQUVuQiw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFlOzs7OztJQUlmLDJDQUE4Qjs7Ozs7SUFJOUIsNkJBQWU7Ozs7O0lBSWYsc0NBQXdCOztJQUN4QixnQ0FBbUI7O0lBQ25CLDhCQUFpQjs7SUFDakIsNEJBQWM7O0FBSWhCLE1BQU0sT0FBTyxXQUFXOzs7OztJQVF0QixJQUFJLEtBQVUsQ0FBQzs7O1lBVGhCLFVBQVU7Ozs7Ozs7SUFLVCw4QkFBcUI7O1dBaUJmLEVBQUU7O0FBVlYsTUFBTSxPQUFPLG1CQUFtQixHQUFpQjtJQUMvQyxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsS0FBSyxFQUFFLEVBQUU7SUFDVCxjQUFjLEVBQUUsRUFBRTtJQUNsQixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxJQUFJO0NBQ1Q7O0FBRUQsTUFBTSxPQUFPLFNBQVMsR0FBUTtJQUM1QixrQkFBa0IsRUFBRSx5QkFBeUI7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLEVBQUUsRUFBRSxJQUFJOztJQUNSLElBQUksRUFBRSxNQUFNO0NBQ2I7O0FBRUQsTUFBTSxPQUFPLFFBQVEsR0FBUTtJQUMzQixNQUFNLEVBQUUsZUFBZTtJQUN2QixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsYUFBYSxFQUFFLG9EQUFvRDtDQUNwRTs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBQVE7SUFDdEMsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsR0FBRztDQUNkOztBQUVELE1BQU0sT0FBTyxlQUFlLEdBQUc7SUFDN0IsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixHQUFHLEVBQUUsS0FBSztDQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqICBJbmNsdWRlcyBhIG1vZGFsLWJhY2tkcm9wIGVsZW1lbnQuIEFsdGVybmF0aXZlbHksIHNwZWNpZnkgc3RhdGljIGZvciBhIGJhY2tkcm9wIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxuICAgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYycgfCBhbnk7XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkLlxuICAgKi9cbiAga2V5Ym9hcmQ/OiBib29sZWFuO1xuXG4gIGZvY3VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBtb2RhbCB3aGVuIGluaXRpYWxpemVkLlxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXG4gICAqL1xuICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3Igb3BlbmVkIG1vZGFsXG4gICAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRvZ2dsZSBhbmltYXRpb25cbiAgICovXG4gIGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xuICBhbmltYXRlZD86IGJvb2xlYW47XG4gIHNjcm9sbD86IGJvb2xlYW47XG4gIGRhdGE/OiBPYmplY3Q7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNREJNb2RhbFJlZiB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gYSBjb21wb25lbnQgaW5zaWRlIHRoZSBtb2RhbC4gTnVsbCBpZiBtb2RhbCdzIGJlZW4gY3JlYXRlZCB3aXRoIFRlbXBsYXRlUmVmXG4gICAqL1xuICBjb250ZW50PzogYW55IHwgbnVsbDtcbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBtb2RhbFxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHt9XG59XG5cbmV4cG9ydCBjb25zdCBtb2RhbENvbmZpZ0RlZmF1bHRzOiBNb2RhbE9wdGlvbnMgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIHNob3c6IGZhbHNlLFxuICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcbiAgY2xhc3M6ICcnLFxuICBjb250YWluZXJDbGFzczogJycsXG4gIGFuaW1hdGVkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlLFxuICBkYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBDbGFzc05hbWU6IGFueSA9IHtcbiAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgT1BFTjogJ21vZGFsLW9wZW4nLFxuICBGQURFOiAnZmFkZScsXG4gIElOOiAnaW4nLCAvLyBiczNcbiAgU0hPVzogJ3Nob3cnLCAvLyBiczRcbn07XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RvcjogYW55ID0ge1xuICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcbiAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCcsXG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnNpdGlvbkR1cmF0aW9uczogYW55ID0ge1xuICBNT0RBTDogMzAwLFxuICBCQUNLRFJPUDogMTUwLFxufTtcblxuZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUyA9IHtcbiAgQkFDS1JET1A6ICdiYWNrZHJvcC1jbGljaycsXG4gIEVTQzogJ2VzYycsXG59O1xuIl19