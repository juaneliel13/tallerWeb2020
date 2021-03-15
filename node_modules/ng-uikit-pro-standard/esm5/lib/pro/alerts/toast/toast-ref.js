/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Reference to a toast opened via the Toast service.
 * @template T
 */
var /**
 * Reference to a toast opened via the Toast service.
 * @template T
 */
ToastRef = /** @class */ (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the toast has finished closing.
         */
        this._afterClosed = new Subject();
        this._activate = new Subject();
        this._manualClose = new Subject();
    }
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClose = /**
     * @return {?}
     */
    function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClosed = /**
     * @return {?}
     */
    function () {
        return this._manualClose.asObservable();
    };
    /**
     * Close the toast.
     */
    /**
     * Close the toast.
     * @return {?}
     */
    ToastRef.prototype.close = /**
     * Close the toast.
     * @return {?}
     */
    function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    ToastRef.prototype.afterClosed = /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.isInactive = /**
     * @return {?}
     */
    function () {
        return this._activate.isStopped;
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.activate = /**
     * @return {?}
     */
    function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    ToastRef.prototype.afterActivate = /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());
/**
 * Reference to a toast opened via the Toast service.
 * @template T
 */
export { ToastRef };
if (false) {
    /**
     * The instance of component opened into the toast.
     * @type {?}
     */
    ToastRef.prototype.componentInstance;
    /**
     * Subject for notifying the user that the toast has finished closing.
     * @type {?}
     * @private
     */
    ToastRef.prototype._afterClosed;
    /**
     * @type {?}
     * @private
     */
    ToastRef.prototype._activate;
    /**
     * @type {?}
     * @private
     */
    ToastRef.prototype._manualClose;
    /**
     * @type {?}
     * @private
     */
    ToastRef.prototype._overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QtcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQU8zQzs7Ozs7SUFTRSxrQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7Ozs7UUFKbkMsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMzQyxjQUFTLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDeEMsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVMLENBQUM7Ozs7SUFFL0MsOEJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCwrQkFBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHdCQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsOEVBQThFOzs7OztJQUM5RSw4QkFBVzs7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw2QkFBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCwyQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDhFQUE4RTs7Ozs7SUFDOUUsZ0NBQWE7Ozs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7Ozs7Ozs7Ozs7O0lBN0NDLHFDQUFxQjs7Ozs7O0lBR3JCLGdDQUFtRDs7Ozs7SUFDbkQsNkJBQWdEOzs7OztJQUNoRCxnQ0FBbUQ7Ozs7O0lBRXZDLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1yZWYnO1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhIHRvYXN0IG9wZW5lZCB2aWEgdGhlIFRvYXN0IHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdFJlZjxUPiB7XG4gIC8qKiBUaGUgaW5zdGFuY2Ugb2YgY29tcG9uZW50IG9wZW5lZCBpbnRvIHRoZSB0b2FzdC4gKi9cbiAgY29tcG9uZW50SW5zdGFuY2U6IFQ7XG5cbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGUgdXNlciB0aGF0IHRoZSB0b2FzdCBoYXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgcHJpdmF0ZSBfYWZ0ZXJDbG9zZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX2FjdGl2YXRlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9tYW51YWxDbG9zZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7fVxuXG4gIG1hbnVhbENsb3NlKCkge1xuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbWFudWFsQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbnVhbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSB0b2FzdC5cbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCgpO1xuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgdG9hc3QgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpc0luYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZS5pc1N0b3BwZWQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLl9hY3RpdmF0ZS5uZXh0KCk7XG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSB0b2FzdCBoYXMgc3RhcnRlZCBvcGVuaW5nLiAqL1xuICBhZnRlckFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=