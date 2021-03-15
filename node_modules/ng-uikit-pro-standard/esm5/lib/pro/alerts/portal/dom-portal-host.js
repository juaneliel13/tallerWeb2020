/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BasePortalHost } from './portal';
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var /**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
DomPortalHost = /** @class */ (function (_super) {
    tslib_1.__extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    DomPortalHost.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        var _this = this;
        /** @type {?} */
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn((/**
         * @return {?}
         */
        function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }));
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalHost.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
    };
    return DomPortalHost;
}(BasePortalHost));
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
export { DomPortalHost };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomPortalHost.prototype._hostDomElement;
    /**
     * @type {?}
     * @private
     */
    DomPortalHost.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    DomPortalHost.prototype._appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLXBvcnRhbC1ob3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvcG9ydGFsL2RvbS1wb3J0YWwtaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLE9BQU8sRUFBRSxjQUFjLEVBQW1CLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0FBUTNEOzs7Ozs7O0lBQW1DLHlDQUFjO0lBQy9DLHVCQUNVLGVBQXdCLEVBQ3hCLHlCQUFtRCxFQUNuRCxPQUF1QjtRQUhqQyxZQUtFLGlCQUFPLFNBQ1I7UUFMUyxxQkFBZSxHQUFmLGVBQWUsQ0FBUztRQUN4QiwrQkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGFBQU8sR0FBUCxPQUFPLENBQWdCOztJQUdqQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDZDQUFxQjs7Ozs7OztJQUFyQixVQUF5QixNQUEwQixFQUFFLFdBQW9CO1FBQXpFLGlCQW9DQzs7WUFuQ08sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUM3RSxNQUFNLENBQUMsU0FBUyxDQUNqQjs7WUFDRyxZQUE2QjtRQUVqQyx1RkFBdUY7UUFDdkYsMkVBQTJFO1FBQzNFLDRGQUE0RjtRQUM1RiwyRkFBMkY7UUFDM0YscURBQXFEO1FBQ3JELFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELHFGQUFxRjtRQUNyRix1RkFBdUY7UUFDdkYsb0ZBQW9GO1FBQ3BGLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFlBQVk7OztRQUFDO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFFSCw4RkFBOEY7UUFDOUYsbUNBQW1DO1FBQ25DLElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQy9CLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQ2hDLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDNUU7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsK0RBQStEOzs7Ozs7O0lBQ3ZELDZDQUFxQjs7Ozs7O0lBQTdCLFVBQThCLFlBQStCO1FBQzNELE9BQU8sbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUM7SUFDckYsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUFtQyxjQUFjLEdBdURoRDs7Ozs7Ozs7Ozs7OztJQXJERyx3Q0FBZ0M7Ozs7O0lBQ2hDLGtEQUEyRDs7Ozs7SUFDM0QsZ0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4vcG9ydGFsJztcblxuLyoqXG4gKiBBIFBvcnRhbEhvc3QgZm9yIGF0dGFjaGluZyBwb3J0YWxzIHRvIGFuIGFyYml0cmFyeSBET00gZWxlbWVudCBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyXG4gKiBhcHBsaWNhdGlvbiBjb250ZXh0LlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgcGFydCBvZiB0aGUgcG9ydGFsIGNvcmUgdGhhdCBkaXJlY3RseSB0b3VjaGVzIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjbGFzcyBEb21Qb3J0YWxIb3N0IGV4dGVuZHMgQmFzZVBvcnRhbEhvc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9ob3N0RG9tRWxlbWVudDogRWxlbWVudCxcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBnaXZlbiBDb21wb25lbnRQb3J0YWwgdG8gRE9NIGVsZW1lbnQgdXNpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5cbiAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWRcbiAgICovXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBwb3J0YWwuY29tcG9uZW50XG4gICAgKTtcbiAgICBsZXQgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47XG5cbiAgICAvLyBJZiB0aGUgcG9ydGFsIHNwZWNpZmllcyBhIFZpZXdDb250YWluZXJSZWYsIHdlIHdpbGwgdXNlIHRoYXQgYXMgdGhlIGF0dGFjaG1lbnQgcG9pbnRcbiAgICAvLyBmb3IgdGhlIGNvbXBvbmVudCAoaW4gdGVybXMgb2YgQW5ndWxhcidzIGNvbXBvbmVudCB0cmVlLCBub3QgcmVuZGVyaW5nKS5cbiAgICAvLyBXaGVuIHRoZSBWaWV3Q29udGFpbmVyUmVmIGlzIG1pc3NpbmcsIHdlIHVzZSB0aGUgZmFjdG9yeSB0byBjcmVhdGUgdGhlIGNvbXBvbmVudCBkaXJlY3RseVxuICAgIC8vIGFuZCB0aGVuIG1hbnVhbGx5IGF0dGFjaCB0aGUgQ2hhbmdlRGV0ZWN0b3IgZm9yIHRoYXQgY29tcG9uZW50IHRvIHRoZSBhcHBsaWNhdGlvbiAod2hpY2hcbiAgICAvLyBoYXBwZW5zIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBhIFZpZXdDb250YWluZXIpLlxuICAgIGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHBvcnRhbC5pbmplY3Rvcik7XG5cbiAgICAvLyBXaGVuIGNyZWF0aW5nIGEgY29tcG9uZW50IG91dHNpZGUgb2YgYSBWaWV3Q29udGFpbmVyLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHJlZ2lzdGVyXG4gICAgLy8gaXRzIENoYW5nZURldGVjdG9yIHdpdGggdGhlIGFwcGxpY2F0aW9uLiBUaGlzIEFQSSBpcyB1bmZvcnR1bmF0ZWx5IG5vdCB5ZXQgcHVibGlzaGVkXG4gICAgLy8gaW4gQW5ndWxhciBjb3JlLiBUaGUgY2hhbmdlIGRldGVjdG9yIG11c3QgYWxzbyBiZSBkZXJlZ2lzdGVyZWQgd2hlbiB0aGUgY29tcG9uZW50XG4gICAgLy8gaXMgZGVzdHJveWVkIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLlxuICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICB0aGlzLnNldERpc3Bvc2VGbigoKSA9PiB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBpbnN0YW50aWF0ZWQsIHNvIHdlIG1vdmUgaXQgdG8gdGhlIGxvY2F0aW9uIGluIHRoZSBET01cbiAgICAvLyB3aGVyZSB3ZSB3YW50IGl0IHRvIGJlIHJlbmRlcmVkLlxuICAgIGlmIChuZXdlc3RPblRvcCkge1xuICAgICAgdGhpcy5faG9zdERvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICB0aGlzLl9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWYpLFxuICAgICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5maXJzdENoaWxkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWYpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHJvb3QgSFRNTEVsZW1lbnQgZm9yIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQuICovXG4gIHByaXZhdGUgX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxufVxuIl19