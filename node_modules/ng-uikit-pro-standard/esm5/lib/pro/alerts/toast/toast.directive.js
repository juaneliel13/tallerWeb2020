/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Directive, ElementRef } from '@angular/core';
var ToastContainerDirective = /** @class */ (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ToastContainerDirective.prototype.getContainerElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbToastContainer]',
                    exportAs: 'mdb-toast-container',
                },] }
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ToastContainerDirective;
}());
export { ToastContainerDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastContainerDirective.prototype.el;
}
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    /**
     * @return {?}
     */
    ToastContainerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    ToastContainerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [ToastContainerDirective],
                    declarations: [ToastContainerDirective],
                },] }
    ];
    return ToastContainerModule;
}());
export { ToastContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJGO0lBS0UsaUNBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7OztJQUN0QyxxREFBbUI7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDL0IsQ0FBQzs7Z0JBUkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7O2dCQUxrRCxVQUFVOztJQVc3RCw4QkFBQztDQUFBLEFBVEQsSUFTQztTQUxZLHVCQUF1Qjs7Ozs7O0lBQ3RCLHFDQUFzQjs7QUFNcEM7SUFBQTtJQVdBLENBQUM7Ozs7SUFOUSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOztnQkFWRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUN4Qzs7SUFRRCwyQkFBQztDQUFBLEFBWEQsSUFXQztTQVBZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRvYXN0Q29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnbWRiLXRvYXN0LWNvbnRhaW5lcicsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cbiAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbVG9hc3RDb250YWluZXJEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdENvbnRhaW5lck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=