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
export class GlobalConfig {
}
/**
 * Everything a toast needs to launch
 */
export class ToastPackage {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /**
     * Fired on click
     * @return {?}
     */
    triggerTap() {
        this._onTap.next();
        this._onTap.complete();
    }
    /**
     * @return {?}
     */
    onTap() {
        return this._onTap.asObservable();
    }
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    triggerAction(action) {
        this._onAction.next(action);
        this._onAction.complete();
    }
    /**
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}
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
export const tsConfig = {
    serviceInstance: new Object(),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7OztBQVEzQyxzQ0F1RUM7Ozs7Ozs7SUFsRUMsbUNBQXVCOzs7Ozs7SUFLdkIsdUNBQXNCOzs7Ozs7SUFNdEIsMkNBQStCOzs7Ozs7SUFLL0IsdUNBQXNCOzs7Ozs7SUFLdEIsc0NBQXFCOzs7Ozs7SUFLckIsc0NBQW9COzs7Ozs7SUFLcEIseUNBQTZCOzs7Ozs7SUFLN0Isc0NBQW9COzs7Ozs7SUFLcEIsd0NBQXNCOzs7Ozs7SUFLdEIsd0NBQXVCOzs7Ozs7SUFLdkIsMENBQTBDOzs7Ozs7SUFLMUMsMENBQXlCOzs7OztJQUl6Qix3Q0FBc0I7Ozs7O0lBSXRCLDZDQUEyQjs7SUFDM0IsbUNBQWlCOzs7OztBQUduQixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixtQ0FBaUI7Ozs7OztBQW1DbkIsTUFBTSxPQUFPLFlBQVk7Q0FBRzs7OztBQUk1QixNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBSXZCLFlBQ1MsT0FBZSxFQUNmLE1BQXdCLEVBQ3hCLE9BQTBCLEVBQzFCLEtBQWEsRUFDYixTQUFpQixFQUNqQixRQUF1QjtRQUx2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQVR4QixXQUFNLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDckMsY0FBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUzdDLENBQUM7Ozs7O0lBR0osVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsTUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjs7Ozs7O0lBL0JDLDhCQUE2Qzs7Ozs7SUFDN0MsaUNBQWdEOztJQUc5QywrQkFBc0I7O0lBQ3RCLDhCQUErQjs7SUFDL0IsK0JBQWlDOztJQUNqQyw2QkFBb0I7O0lBQ3BCLGlDQUF3Qjs7SUFDeEIsZ0NBQThCOzs7QUF3QmxDLE1BQU0sT0FBTyxRQUFRLEdBQUc7SUFDdEIsZUFBZSxFQUFFLElBQUksTUFBTSxFQUFFO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8taW5mZXJyYWJsZS10eXBlcyAqL1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtcmVmJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogdG9hc3QgdGltZSB0byBsaXZlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBkZWZhdWx0OiA1MDAwXG4gICAqL1xuICB0aW1lT3V0PzogbnVtYmVyIHwgYW55O1xuICAvKipcbiAgICogdG9hc3Qgc2hvdyBjbG9zZSBidXR0b25cbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgLyoqIHRpbWUgdG8gY2xvc2UgYWZ0ZXIgYSB1c2VyIGhvdmVycyBvdmVyIHRvYXN0ICovXG4gIC8qKlxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZXh0ZW5kZWRUaW1lT3V0PzogbnVtYmVyIHwgYW55O1xuICAvKipcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByb2dyZXNzQmFyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHJlbmRlciBodG1sIGluIHRvYXN0IG1lc3NhZ2UgKHBvc3NpYmx5IHVuc2FmZSlcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGVuYWJsZUh0bWw/OiBib29sZWFuO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbXBvbmVudFxuICAgKiBkZWZhdWx0OiB0b2FzdFxuICAgKi9cbiAgdG9hc3RDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb250YWluZXJcbiAgICogZGVmYXVsdDogdG9hc3QtdG9wLXJpZ2h0XG4gICAqL1xuICBwb3NpdGlvbkNsYXNzPzogc3RyaW5nIHwgYW55O1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvIHRvYXN0IHRpdGxlXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRpdGxlXG4gICAqL1xuICB0aXRsZUNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvIHRvYXN0IHRpdGxlXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRpdGxlXG4gICAqL1xuICBtZXNzYWdlQ2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjbGlja2luZyBvbiB0b2FzdCBkaXNtaXNzZXMgaXRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgdGFwVG9EaXNtaXNzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgdG9hc3QgY29tcG9uZW50IHRvIGJlIHNob3duXG4gICAqIGRlZmF1bHQ6IFRvYXN0XG4gICAqL1xuICB0b2FzdENvbXBvbmVudD86IENvbXBvbmVudFR5cGU8YW55PiB8IGFueTtcbiAgLyoqXG4gICAqIEhlbHBzIHNob3cgdG9hc3QgZnJvbSBhIHdlYnNvY2tldCBvciBmcm9tIGV2ZW50IG91dHNpZGUgQW5ndWxhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgb25BY3RpdmF0ZVRpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogYWN0aW9uQnV0dG9uIC0gRmllbGQgd2lsbCBjcmVhdGUgYWN0aW9uIGJ1dHRvbiBpbiB0b2FzdCwgYW5kIGFzc2luZyBwYXJhbWV0ZXIncyB2YWx1ZSBhcyBidXR0b24gdGV4dFxuICAgKi9cbiAgYWN0aW9uQnV0dG9uPzogc3RyaW5nO1xuICAvKipcbiAgICogLSBBZGRzIGNsYXNzIHRvIHRoZSB0b2FzdCBhY3Rpb24gYnV0dG9uXG4gICAqL1xuICBhY3Rpb25CdXR0b25DbGFzcz86IHN0cmluZztcbiAgb3BhY2l0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEljb25DbGFzc2VzIHtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGluZm8/OiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBzdHJpbmc7XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogR2xvYmFsIFRvYXN0IGNvbmZpZ3VyYXRpb25cbiAqIEluY2x1ZGVzIGFsbCBJbmRpdmlkdWFsQ29uZmlnXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBtYXggdG9hc3RzIG9wZW5lZC4gVG9hc3RzIHdpbGwgYmUgcXVldWVkXG4gICAqIFplcm8gaXMgdW5saW1pdGVkXG4gICAqIGRlZmF1bHQ6IDBcbiAgICovXG4gIG1heE9wZW5lZD86IG51bWJlcjtcbiAgLyoqXG4gICAqIGRpc21pc3MgY3VycmVudCB0b2FzdCB3aGVuIG1heCBpcyByZWFjaGVkXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBhdXRvRGlzbWlzcz86IGJvb2xlYW47XG4gIGljb25DbGFzc2VzPzogVG9hc3RJY29uQ2xhc3NlcztcbiAgLyoqXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgbmV3ZXN0T25Ub3A/OiBib29sZWFuO1xuICAvKipcbiAgICogYmxvY2sgZHVwbGljYXRlIG1lc3NhZ2VzXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBwcmV2ZW50RHVwbGljYXRlcz86IGJvb2xlYW47XG4gIG9wYWNpdHk/OiBudW1iZXI7XG59XG4vKipcbiAqIFJlbW92ZSB3YXJuaW5nIG1lc3NhZ2UgZnJvbSBhbmd1bGFyLWNsaVxuICovXG5leHBvcnQgY2xhc3MgR2xvYmFsQ29uZmlnIHt9XG4vKipcbiAqIEV2ZXJ5dGhpbmcgYSB0b2FzdCBuZWVkcyB0byBsYXVuY2hcbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UGFja2FnZSB7XG4gIHByaXZhdGUgX29uVGFwOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9vbkFjdGlvbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9hc3RJZDogbnVtYmVyLFxuICAgIHB1YmxpYyBjb25maWc6IEluZGl2aWR1YWxDb25maWcsXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sLFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9hc3RSZWY6IFRvYXN0UmVmPGFueT5cbiAgKSB7fVxuXG4gIC8qKiBGaXJlZCBvbiBjbGljayAqL1xuICB0cmlnZ2VyVGFwKCkge1xuICAgIHRoaXMuX29uVGFwLm5leHQoKTtcbiAgICB0aGlzLl9vblRhcC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25UYXAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25UYXAuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogYXZhaWxhYmxlIGZvciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XG4gICAgdGhpcy5fb25BY3Rpb24ubmV4dChhY3Rpb24pO1xuICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkFjdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vbkFjdGlvbi5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHNDb25maWcgPSB7XG4gIHNlcnZpY2VJbnN0YW5jZTogbmV3IE9iamVjdCgpLFxufTtcbiJdfQ==