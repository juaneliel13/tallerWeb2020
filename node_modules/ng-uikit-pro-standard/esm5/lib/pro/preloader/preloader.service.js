/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CONTAINER_QUERY, COMPLETE_CLASS_NAME, TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE, EMULATE_ELEMENT_NAME, } from './preloader.constants';
var MDBSpinningPreloader = /** @class */ (function () {
    function MDBSpinningPreloader(document) {
        this.document = document;
        this.container = this.document.querySelector(CONTAINER_QUERY);
    }
    /**
     * @return {?}
     */
    MDBSpinningPreloader.errorHandler = /**
     * @return {?}
     */
    function () {
        throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.start = /**
     * @return {?}
     */
    function () {
        this.container.classList.remove(COMPLETE_CLASS_NAME);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.container.classList.add(COMPLETE_CLASS_NAME);
    };
    Object.defineProperty(MDBSpinningPreloader.prototype, "container", {
        get: /**
         * @return {?}
         */
        function () {
            return this._container;
        },
        set: /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
        },
        enumerable: true,
        configurable: true
    });
    MDBSpinningPreloader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBSpinningPreloader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return MDBSpinningPreloader;
}());
export { MDBSpinningPreloader };
if (false) {
    /** @type {?} */
    MDBSpinningPreloader.prototype._container;
    /** @type {?} */
    MDBSpinningPreloader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3ByZWxvYWRlci9wcmVsb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLDBDQUEwQyxFQUMxQyxvQkFBb0IsR0FDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUkvQjtJQVFFLDhCQUFxQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFOYSxpQ0FBWTs7O0lBQTFCO1FBQ0UsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFNTSxvQ0FBSzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRU0sbUNBQUk7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNCQUFXLDJDQUFTOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBcUIsT0FBTztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7OztPQUpBOztnQkF0QkYsVUFBVTs7OztnREFRSSxNQUFNLFNBQUMsUUFBUTs7SUFtQjlCLDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksb0JBQW9COzs7SUFDL0IsMENBQStDOztJQU1uQyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBDT05UQUlORVJfUVVFUlksXG4gIENPTVBMRVRFX0NMQVNTX05BTUUsXG4gIFRZUEVfRVJST1JfQ09OVEFJTkVSX1dBU19OT1RfRk9VTkRfTUVTU0FHRSxcbiAgRU1VTEFURV9FTEVNRU5UX05BTUUsXG59IGZyb20gJy4vcHJlbG9hZGVyLmNvbnN0YW50cyc7XG5cbmltcG9ydCB7IE1EQl9TUElOTklOR19QUkVMT0FERVJfVFlQRSB9IGZyb20gJy4vcHJlbG9hZGVyLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1EQlNwaW5uaW5nUHJlbG9hZGVyIHtcbiAgcHVibGljIF9jb250YWluZXI6IE1EQl9TUElOTklOR19QUkVMT0FERVJfVFlQRTtcblxuICBwdWJsaWMgc3RhdGljIGVycm9ySGFuZGxlcigpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFRZUEVfRVJST1JfQ09OVEFJTkVSX1dBU19OT1RfRk9VTkRfTUVTU0FHRSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUl9RVUVSWSk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShDT01QTEVURV9DTEFTU19OQU1FKTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ09NUExFVEVfQ0xBU1NfTkFNRSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lcigpOiBNREJfU1BJTk5JTkdfUFJFTE9BREVSX1RZUEUge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbnRhaW5lcihlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZWxlbWVudCB8fCB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoRU1VTEFURV9FTEVNRU5UX05BTUUpO1xuICB9XG59XG4iXX0=