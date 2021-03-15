/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
export { ModalOptions };
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
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = /**
     * Hides the modal
     * @return {?}
     */
    function () { };
    MDBModalRef.decorators = [
        { type: Injectable }
    ];
    return MDBModalRef;
}());
export { MDBModalRef };
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
var ɵ0 = {};
/** @type {?} */
export var modalConfigDefaults = {
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
export var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show',
};
/** @type {?} */
export var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed',
};
/** @type {?} */
export var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150,
};
/** @type {?} */
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUErQkEsQ0FBQzs7Z0JBL0JBLFVBQVU7O0lBK0JYLG1CQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksWUFBWTs7Ozs7O0lBSXZCLGdDQUFvQzs7Ozs7SUFJcEMsZ0NBQW1COztJQUVuQiw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFlOzs7OztJQUlmLDJDQUE4Qjs7Ozs7SUFJOUIsNkJBQWU7Ozs7O0lBSWYsc0NBQXdCOztJQUN4QixnQ0FBbUI7O0lBQ25CLDhCQUFpQjs7SUFDakIsNEJBQWM7O0FBR2hCO0lBQUE7SUFVQSxDQUFDO0lBSkM7O09BRUc7Ozs7O0lBQ0gsMEJBQUk7Ozs7SUFBSixjQUFjLENBQUM7O2dCQVRoQixVQUFVOztJQVVYLGtCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksV0FBVzs7Ozs7O0lBSXRCLDhCQUFxQjs7U0FpQmYsRUFBRTs7QUFWVixNQUFNLEtBQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLElBQUk7Q0FDVDs7QUFFRCxNQUFNLEtBQU8sU0FBUyxHQUFRO0lBQzVCLGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7O0lBQ1IsSUFBSSxFQUFFLE1BQU07Q0FDYjs7QUFFRCxNQUFNLEtBQU8sUUFBUSxHQUFRO0lBQzNCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFOztBQUVELE1BQU0sS0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7O0FBRUQsTUFBTSxLQUFPLGVBQWUsR0FBRztJQUM3QixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0NBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMge1xuICAvKipcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSwgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJyB8IGFueTtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgZm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcbiAgICovXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgc2Nyb2xsPzogYm9vbGVhbjtcbiAgZGF0YT86IE9iamVjdDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1EQk1vZGFsUmVmIHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBpbnNpZGUgdGhlIG1vZGFsLiBOdWxsIGlmIG1vZGFsJ3MgYmVlbiBjcmVhdGVkIHdpdGggVGVtcGxhdGVSZWZcbiAgICovXG4gIGNvbnRlbnQ/OiBhbnkgfCBudWxsO1xuICAvKipcbiAgICogSGlkZXMgdGhlIG1vZGFsXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAgc2hvdzogZmFsc2UsXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICBjbGFzczogJycsXG4gIGNvbnRhaW5lckNsYXNzOiAnJyxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2UsXG4gIGRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IENsYXNzTmFtZTogYW55ID0ge1xuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gIEZBREU6ICdmYWRlJyxcbiAgSU46ICdpbicsIC8vIGJzM1xuICBTSE9XOiAnc2hvdycsIC8vIGJzNFxufTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdG9yOiBhbnkgPSB7XG4gIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uRHVyYXRpb25zOiBhbnkgPSB7XG4gIE1PREFMOiAzMDAsXG4gIEJBQ0tEUk9QOiAxNTAsXG59O1xuXG5leHBvcnQgY29uc3QgRElTTUlTU19SRUFTT05TID0ge1xuICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcbiAgRVNDOiAnZXNjJyxcbn07XG4iXX0=