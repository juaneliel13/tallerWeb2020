/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CONTAINER_QUERY, COMPLETE_CLASS_NAME, TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE, EMULATE_ELEMENT_NAME, } from './preloader.constants';
export class MDBSpinningPreloader {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.container = this.document.querySelector(CONTAINER_QUERY);
    }
    /**
     * @return {?}
     */
    static errorHandler() {
        throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    }
    /**
     * @return {?}
     */
    start() {
        this.container.classList.remove(COMPLETE_CLASS_NAME);
    }
    /**
     * @return {?}
     */
    stop() {
        this.container.classList.add(COMPLETE_CLASS_NAME);
    }
    /**
     * @return {?}
     */
    get container() {
        return this._container;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    set container(element) {
        this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
    }
}
MDBSpinningPreloader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MDBSpinningPreloader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /** @type {?} */
    MDBSpinningPreloader.prototype._container;
    /** @type {?} */
    MDBSpinningPreloader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3ByZWxvYWRlci9wcmVsb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLDBDQUEwQyxFQUMxQyxvQkFBb0IsR0FDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUsvQixNQUFNLE9BQU8sb0JBQW9COzs7O0lBTy9CLFlBQXFDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQU5NLE1BQU0sQ0FBQyxZQUFZO1FBQ3hCLE1BQU0sSUFBSSxTQUFTLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBTU0sS0FBSztRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFXLFNBQVMsQ0FBQyxPQUFPO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakYsQ0FBQzs7O1lBMUJGLFVBQVU7Ozs7NENBUUksTUFBTSxTQUFDLFFBQVE7Ozs7SUFONUIsMENBQStDOztJQU1uQyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBDT05UQUlORVJfUVVFUlksXG4gIENPTVBMRVRFX0NMQVNTX05BTUUsXG4gIFRZUEVfRVJST1JfQ09OVEFJTkVSX1dBU19OT1RfRk9VTkRfTUVTU0FHRSxcbiAgRU1VTEFURV9FTEVNRU5UX05BTUUsXG59IGZyb20gJy4vcHJlbG9hZGVyLmNvbnN0YW50cyc7XG5cbmltcG9ydCB7IE1EQl9TUElOTklOR19QUkVMT0FERVJfVFlQRSB9IGZyb20gJy4vcHJlbG9hZGVyLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1EQlNwaW5uaW5nUHJlbG9hZGVyIHtcbiAgcHVibGljIF9jb250YWluZXI6IE1EQl9TUElOTklOR19QUkVMT0FERVJfVFlQRTtcblxuICBwdWJsaWMgc3RhdGljIGVycm9ySGFuZGxlcigpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFRZUEVfRVJST1JfQ09OVEFJTkVSX1dBU19OT1RfRk9VTkRfTUVTU0FHRSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUl9RVUVSWSk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShDT01QTEVURV9DTEFTU19OQU1FKTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ09NUExFVEVfQ0xBU1NfTkFNRSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lcigpOiBNREJfU1BJTk5JTkdfUFJFTE9BREVSX1RZUEUge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbnRhaW5lcihlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZWxlbWVudCB8fCB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoRU1VTEFURV9FTEVNRU5UX05BTUUpO1xuICB9XG59XG4iXX0=