/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function ComponentType() { }
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    ComponentPortal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    ComponentPortal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    ComponentPortal.prototype.setAttachedHost = /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
export { ComponentPortal };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentPortal.prototype._attachedHost;
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalHost.
     * The origin necessary when the host is outside of the Angular application context.
     * @type {?}
     */
    ComponentPortal.prototype.viewContainerRef;
    /** @type {?} */
    ComponentPortal.prototype.component;
    /** @type {?} */
    ComponentPortal.prototype.injector;
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var /**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
        this.setToNullValue = null;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attach = /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = this.setToNullValue;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
export { BasePortalHost };
if (false) {
    /** @type {?} */
    BasePortalHost.prototype.setToNullValue;
    /**
     * The portal currently attached to the host.
     * @type {?}
     * @private
     */
    BasePortalHost.prototype._attachedPortal;
    /**
     * A function that will permanently dispose this host.
     * @type {?}
     * @private
     */
    BasePortalHost.prototype._disposeFn;
    /**
     * @abstract
     * @template T
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvcG9ydGFsL3BvcnRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLG1DQUVDOzs7OztBQUtEOzs7OztJQVVFLHlCQUFtQixTQUEyQixFQUFTLFFBQWtCO1FBQXRELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFN0Usb0NBQW9DOzs7Ozs7O0lBQ3BDLGdDQUFNOzs7Ozs7SUFBTixVQUFPLElBQW9CLEVBQUUsV0FBb0I7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdUNBQXVDOzs7OztJQUN2QyxnQ0FBTTs7OztJQUFOOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYTtRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR0Qsc0JBQUksdUNBQVU7UUFEZCxpREFBaUQ7Ozs7O1FBQ2pEO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFlOzs7Ozs7SUFBZixVQUFnQixJQUFvQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDOzs7Ozs7Ozs7OztJQXBDQyx3Q0FBNEM7Ozs7Ozs7SUFPNUMsMkNBQW1DOztJQUV2QixvQ0FBa0M7O0lBQUUsbUNBQXlCOzs7Ozs7O0FBaUMzRTs7Ozs7O0lBQUE7UUFDUyxtQkFBYyxHQUFRLElBQUksQ0FBQztJQWdDcEMsQ0FBQzs7Ozs7O0lBekJDLCtCQUFNOzs7OztJQUFOLFVBQU8sTUFBNEIsRUFBRSxXQUFvQjtRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQU9ELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRUQscUNBQVk7Ozs7SUFBWixVQUFhLEVBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7Ozs7O0lBaENDLHdDQUFrQzs7Ozs7O0lBRWxDLHlDQUFvRDs7Ozs7O0lBR3BELG9DQUFxQzs7Ozs7Ozs7SUFPckMsb0ZBR21CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50UmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGU8VD4ge1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVDtcbn1cblxuLyoqXG4gKiBBIGBDb21wb25lbnRQb3J0YWxgIGlzIGEgcG9ydGFsIHRoYXQgaW5zdGFudGlhdGVzIHNvbWUgQ29tcG9uZW50IHVwb24gYXR0YWNobWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbDxUPiB7XG4gIHByaXZhdGUgX2F0dGFjaGVkSG9zdDogQmFzZVBvcnRhbEhvc3QgfCBhbnk7XG5cbiAgLyoqXG4gICAqIFtPcHRpb25hbF0gV2hlcmUgdGhlIGF0dGFjaGVkIGNvbXBvbmVudCBzaG91bGQgbGl2ZSBpbiBBbmd1bGFyJ3MgKmxvZ2ljYWwqIGNvbXBvbmVudCB0cmVlLlxuICAgKiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIHdoZXJlIHRoZSBjb21wb25lbnQgKnJlbmRlcnMqLCB3aGljaCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBQb3J0YWxIb3N0LlxuICAgKiBUaGUgb3JpZ2luIG5lY2Vzc2FyeSB3aGVuIHRoZSBob3N0IGlzIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgYXBwbGljYXRpb24gY29udGV4dC5cbiAgICovXG4gIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgcHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICAvKiogQXR0YWNoIHRoaXMgcG9ydGFsIHRvIGEgaG9zdC4gKi9cbiAgYXR0YWNoKGhvc3Q6IEJhc2VQb3J0YWxIb3N0LCBuZXdlc3RPblRvcDogYm9vbGVhbik6IGFueSB7XG4gICAgdGhpcy5fYXR0YWNoZWRIb3N0ID0gaG9zdDtcbiAgICByZXR1cm4gaG9zdC5hdHRhY2godGhpcywgbmV3ZXN0T25Ub3ApO1xuICB9XG5cbiAgLyoqIERldGFjaCB0aGlzIHBvcnRhbCBmcm9tIGl0cyBob3N0ICovXG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5fYXR0YWNoZWRIb3N0O1xuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IG51bGw7XG4gICAgcmV0dXJuIGhvc3QuZGV0YWNoKCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIHBvcnRhbCBpcyBhdHRhY2hlZCB0byBhIGhvc3QuICovXG4gIGdldCBpc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2hlZEhvc3QgIT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBQb3J0YWxIb3N0IHJlZmVyZW5jZSB3aXRob3V0IHBlcmZvcm1pbmcgYGF0dGFjaCgpYC4gVGhpcyBpcyB1c2VkIGRpcmVjdGx5IGJ5XG4gICAqIHRoZSBQb3J0YWxIb3N0IHdoZW4gaXQgaXMgcGVyZm9ybWluZyBhbiBgYXR0YWNoKClgIG9yIGBkZXRhY2goKWAuXG4gICAqL1xuICBzZXRBdHRhY2hlZEhvc3QoaG9zdDogQmFzZVBvcnRhbEhvc3QpOiBhbnkge1xuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJ0aWFsIGltcGxlbWVudGF0aW9uIG9mIFBvcnRhbEhvc3QgdGhhdCBvbmx5IGRlYWxzIHdpdGggYXR0YWNoaW5nIGFcbiAqIENvbXBvbmVudFBvcnRhbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBvcnRhbEhvc3Qge1xuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG4gIC8qKiBUaGUgcG9ydGFsIGN1cnJlbnRseSBhdHRhY2hlZCB0byB0aGUgaG9zdC4gKi9cbiAgcHJpdmF0ZSBfYXR0YWNoZWRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+IHwgYW55O1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZUZuOiAoKSA9PiB2b2lkIHwgYW55O1xuXG4gIGF0dGFjaChwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+LCBuZXdlc3RPblRvcDogYm9vbGVhbikge1xuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gcG9ydGFsO1xuICAgIHJldHVybiB0aGlzLmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwsIG5ld2VzdE9uVG9wKTtcbiAgfVxuXG4gIGFic3RyYWN0IGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPixcbiAgICBuZXdlc3RPblRvcDogYm9vbGVhblxuICApOiBDb21wb25lbnRSZWY8VD47XG5cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9hdHRhY2hlZFBvcnRhbCkge1xuICAgICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwuc2V0QXR0YWNoZWRIb3N0KG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gbnVsbDtcbiAgICBpZiAodGhpcy5fZGlzcG9zZUZuICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbigpO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNwb3NlRm4oZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9kaXNwb3NlRm4gPSBmbjtcbiAgfVxufVxuIl19