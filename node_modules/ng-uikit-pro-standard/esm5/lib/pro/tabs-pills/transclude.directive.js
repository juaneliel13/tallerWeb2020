/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "mdbNgTransclude", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbNgTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        mdbNgTransclude: [{ type: Input }]
    };
    return NgTranscludeDirective;
}());
export { NgTranscludeDirective };
if (false) {
    /** @type {?} */
    NgTranscludeDirective.prototype.viewRef;
    /**
     * @type {?}
     * @protected
     */
    NgTranscludeDirective.prototype._viewRef;
    /**
     * @type {?}
     * @protected
     */
    NgTranscludeDirective.prototype._ngTransclude;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNjbHVkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3RhYnMtcGlsbHMvdHJhbnNjbHVkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQXFCRSwrQkFBbUIsT0FBeUI7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQWRELHNCQUNXLGtEQUFlOzs7O1FBTzFCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBVkQsVUFDMkIsV0FBNkI7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7WUFDakMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUM7OztPQUFBOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBSnVDLGdCQUFnQjs7O2tDQVdyRCxLQUFLOztJQWVSLDRCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FyQlkscUJBQXFCOzs7SUFDaEMsd0NBQWlDOzs7OztJQUVqQyx5Q0FBcUM7Ozs7O0lBQ3JDLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJOZ1RyYW5zY2x1ZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUge1xuICBwdWJsaWMgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBwcm90ZWN0ZWQgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIHByb3RlY3RlZCBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWRiTmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1kYk5nVHJhbnNjbHVkZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xuICB9XG59XG4iXX0=