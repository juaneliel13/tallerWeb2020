/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new Subject();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        this.navbarLinkClicks.next();
    };
    NavbarService.decorators = [
        { type: Injectable }
    ];
    return NavbarService;
}());
export { NavbarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavbarService.prototype.navbarLinkClicks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9uYXZiYXJzL25hdmJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFM0M7SUFBQTtRQUVVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFTaEQsQ0FBQzs7OztJQVBDLDJDQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELDJDQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dCQVZGLFVBQVU7O0lBV1gsb0JBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxhQUFhOzs7Ozs7SUFDeEIseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2YmFyU2VydmljZSB7XG4gIHByaXZhdGUgbmF2YmFyTGlua0NsaWNrcyA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBnZXROYXZiYXJMaW5rQ2xpY2tzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubmF2YmFyTGlua0NsaWNrcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldE5hdmJhckxpbmtDbGlja3MoKSB7XG4gICAgdGhpcy5uYXZiYXJMaW5rQ2xpY2tzLm5leHQoKTtcbiAgfVxufVxuIl19