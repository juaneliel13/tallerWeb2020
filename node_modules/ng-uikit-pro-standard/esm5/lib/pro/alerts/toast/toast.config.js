/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Configuration for an individual toast.
 * @record
 */
export function IndividualConfig() { }
if (false) {
    /**
     * toast time to live in milliseconds
     * default: 5000
     * @type {?|undefined}
     */
    IndividualConfig.prototype.timeOut;
    /**
     * toast show close button
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.closeButton;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.extendedTimeOut;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.progressBar;
    /**
     * render html in toast message (possibly unsafe)
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.enableHtml;
    /**
     * css class on toast component
     * default: toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastClass;
    /**
     * css class on toast container
     * default: toast-top-right
     * @type {?|undefined}
     */
    IndividualConfig.prototype.positionClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.titleClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.messageClass;
    /**
     * clicking on toast dismisses it
     * default: true
     * @type {?|undefined}
     */
    IndividualConfig.prototype.tapToDismiss;
    /**
     * Angular toast component to be shown
     * default: Toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastComponent;
    /**
     * Helps show toast from a websocket or from event outside Angular
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.onActivateTick;
    /**
     * actionButton - Field will create action button in toast, and assing parameter's value as button text
     * @type {?|undefined}
     */
    IndividualConfig.prototype.actionButton;
    /**
     * - Adds class to the toast action button
     * @type {?|undefined}
     */
    IndividualConfig.prototype.actionButtonClass;
    /** @type {?|undefined} */
    IndividualConfig.prototype.opacity;
}
/**
 * @record
 */
export function ToastIconClasses() { }
if (false) {
    /** @type {?|undefined} */
    ToastIconClasses.prototype.error;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.info;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.success;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.warning;
}
// WARNING: interface has both a type and a value, skipping emit
/**
 * Remove warning message from angular-cli
 */
var /**
 * Remove warning message from angular-cli
 */
GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());
/**
 * Remove warning message from angular-cli
 */
export { GlobalConfig };
/**
 * Everything a toast needs to launch
 */
var /**
 * Everything a toast needs to launch
 */
ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /** Fired on click */
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = /**
     * Fired on click
     * @return {?}
     */
    function () {
        this._onTap.next();
        this._onTap.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = /**
     * @return {?}
     */
    function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = /**
     * @return {?}
     */
    function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
/**
 * Everything a toast needs to launch
 */
export { ToastPackage };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onTap;
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onAction;
    /** @type {?} */
    ToastPackage.prototype.toastId;
    /** @type {?} */
    ToastPackage.prototype.config;
    /** @type {?} */
    ToastPackage.prototype.message;
    /** @type {?} */
    ToastPackage.prototype.title;
    /** @type {?} */
    ToastPackage.prototype.toastType;
    /** @type {?} */
    ToastPackage.prototype.toastRef;
}
/** @type {?} */
export var tsConfig = {
    serviceInstance: new Object(),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7OztBQVEzQyxzQ0F1RUM7Ozs7Ozs7SUFsRUMsbUNBQXVCOzs7Ozs7SUFLdkIsdUNBQXNCOzs7Ozs7SUFNdEIsMkNBQStCOzs7Ozs7SUFLL0IsdUNBQXNCOzs7Ozs7SUFLdEIsc0NBQXFCOzs7Ozs7SUFLckIsc0NBQW9COzs7Ozs7SUFLcEIseUNBQTZCOzs7Ozs7SUFLN0Isc0NBQW9COzs7Ozs7SUFLcEIsd0NBQXNCOzs7Ozs7SUFLdEIsd0NBQXVCOzs7Ozs7SUFLdkIsMENBQTBDOzs7Ozs7SUFLMUMsMENBQXlCOzs7OztJQUl6Qix3Q0FBc0I7Ozs7O0lBSXRCLDZDQUEyQjs7SUFDM0IsbUNBQWlCOzs7OztBQUduQixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixtQ0FBaUI7Ozs7OztBQW1DbkI7Ozs7SUFBQTtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCOzs7Ozs7OztBQUk1Qjs7OztJQUlFLHNCQUNTLE9BQWUsRUFDZixNQUF3QixFQUN4QixPQUEwQixFQUMxQixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsUUFBdUI7UUFMdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFUeEIsV0FBTSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQVM3QyxDQUFDO0lBRUoscUJBQXFCOzs7OztJQUNyQixpQ0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw0QkFBSzs7O0lBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHdDQUF3Qzs7Ozs7O0lBQ3hDLG9DQUFhOzs7OztJQUFiLFVBQWMsTUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7Ozs7OztJQS9CQyw4QkFBNkM7Ozs7O0lBQzdDLGlDQUFnRDs7SUFHOUMsK0JBQXNCOztJQUN0Qiw4QkFBK0I7O0lBQy9CLCtCQUFpQzs7SUFDakMsNkJBQW9COztJQUNwQixpQ0FBd0I7O0lBQ3hCLGdDQUE4Qjs7O0FBd0JsQyxNQUFNLEtBQU8sUUFBUSxHQUFHO0lBQ3RCLGVBQWUsRUFBRSxJQUFJLE1BQU0sRUFBRTtDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWluZmVycmFibGUtdHlwZXMgKi9cbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LXJlZic7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgYW4gaW5kaXZpZHVhbCB0b2FzdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIHRvYXN0IHRpbWUgdG8gbGl2ZSBpbiBtaWxsaXNlY29uZHNcbiAgICogZGVmYXVsdDogNTAwMFxuICAgKi9cbiAgdGltZU91dD86IG51bWJlciB8IGFueTtcbiAgLyoqXG4gICAqIHRvYXN0IHNob3cgY2xvc2UgYnV0dG9uXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIC8qKiB0aW1lIHRvIGNsb3NlIGFmdGVyIGEgdXNlciBob3ZlcnMgb3ZlciB0b2FzdCAqL1xuICAvKipcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGV4dGVuZGVkVGltZU91dD86IG51bWJlciB8IGFueTtcbiAgLyoqXG4gICAqIHNob3cgdG9hc3QgcHJvZ3Jlc3MgYmFyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBwcm9ncmVzc0Jhcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiByZW5kZXIgaHRtbCBpbiB0b2FzdCBtZXNzYWdlIChwb3NzaWJseSB1bnNhZmUpXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBlbmFibGVIdG1sPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb21wb25lbnRcbiAgICogZGVmYXVsdDogdG9hc3RcbiAgICovXG4gIHRvYXN0Q2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29udGFpbmVyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRvcC1yaWdodFxuICAgKi9cbiAgcG9zaXRpb25DbGFzcz86IHN0cmluZyB8IGFueTtcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0byB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgdGl0bGVDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0byB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgbWVzc2FnZUNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogY2xpY2tpbmcgb24gdG9hc3QgZGlzbWlzc2VzIGl0XG4gICAqIGRlZmF1bHQ6IHRydWVcbiAgICovXG4gIHRhcFRvRGlzbWlzcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbmd1bGFyIHRvYXN0IGNvbXBvbmVudCB0byBiZSBzaG93blxuICAgKiBkZWZhdWx0OiBUb2FzdFxuICAgKi9cbiAgdG9hc3RDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPGFueT4gfCBhbnk7XG4gIC8qKlxuICAgKiBIZWxwcyBzaG93IHRvYXN0IGZyb20gYSB3ZWJzb2NrZXQgb3IgZnJvbSBldmVudCBvdXRzaWRlIEFuZ3VsYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIG9uQWN0aXZhdGVUaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGFjdGlvbkJ1dHRvbiAtIEZpZWxkIHdpbGwgY3JlYXRlIGFjdGlvbiBidXR0b24gaW4gdG9hc3QsIGFuZCBhc3NpbmcgcGFyYW1ldGVyJ3MgdmFsdWUgYXMgYnV0dG9uIHRleHRcbiAgICovXG4gIGFjdGlvbkJ1dHRvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIC0gQWRkcyBjbGFzcyB0byB0aGUgdG9hc3QgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgYWN0aW9uQnV0dG9uQ2xhc3M/OiBzdHJpbmc7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RJY29uQ2xhc3NlcyB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBpbmZvPzogc3RyaW5nO1xuICBzdWNjZXNzPzogc3RyaW5nO1xuICB3YXJuaW5nPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEdsb2JhbCBUb2FzdCBjb25maWd1cmF0aW9uXG4gKiBJbmNsdWRlcyBhbGwgSW5kaXZpZHVhbENvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogbWF4IHRvYXN0cyBvcGVuZWQuIFRvYXN0cyB3aWxsIGJlIHF1ZXVlZFxuICAgKiBaZXJvIGlzIHVubGltaXRlZFxuICAgKiBkZWZhdWx0OiAwXG4gICAqL1xuICBtYXhPcGVuZWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgYXV0b0Rpc21pc3M/OiBib29sZWFuO1xuICBpY29uQ2xhc3Nlcz86IFRvYXN0SWNvbkNsYXNzZXM7XG4gIC8qKlxuICAgKiBOZXcgdG9hc3QgcGxhY2VtZW50XG4gICAqIGRlZmF1bHQ6IHRydWVcbiAgICovXG4gIG5ld2VzdE9uVG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGJsb2NrIGR1cGxpY2F0ZSBtZXNzYWdlc1xuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcHJldmVudER1cGxpY2F0ZXM/OiBib29sZWFuO1xuICBvcGFjaXR5PzogbnVtYmVyO1xufVxuLyoqXG4gKiBSZW1vdmUgd2FybmluZyBtZXNzYWdlIGZyb20gYW5ndWxhci1jbGlcbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbENvbmZpZyB7fVxuLyoqXG4gKiBFdmVyeXRoaW5nIGEgdG9hc3QgbmVlZHMgdG8gbGF1bmNoXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdFBhY2thZ2Uge1xuICBwcml2YXRlIF9vblRhcDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfb25BY3Rpb246IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0SWQ6IG51bWJlcixcbiAgICBwdWJsaWMgY29uZmlnOiBJbmRpdmlkdWFsQ29uZmlnLFxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHRvYXN0UmVmOiBUb2FzdFJlZjxhbnk+XG4gICkge31cblxuICAvKiogRmlyZWQgb24gY2xpY2sgKi9cbiAgdHJpZ2dlclRhcCgpIHtcbiAgICB0aGlzLl9vblRhcC5uZXh0KCk7XG4gICAgdGhpcy5fb25UYXAuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uVGFwKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29uVGFwLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIGF2YWlsYWJsZSBmb3IgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xuICB0cmlnZ2VyQWN0aW9uKGFjdGlvbj86IGFueSkge1xuICAgIHRoaXMuX29uQWN0aW9uLm5leHQoYWN0aW9uKTtcbiAgICB0aGlzLl9vbkFjdGlvbi5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25BY3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25BY3Rpb24uYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRzQ29uZmlnID0ge1xuICBzZXJ2aWNlSW5zdGFuY2U6IG5ldyBPYmplY3QoKSxcbn07XG4iXX0=