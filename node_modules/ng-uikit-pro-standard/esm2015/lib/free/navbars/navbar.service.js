/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class NavbarService {
    constructor() {
        this.navbarLinkClicks = new Subject();
    }
    /**
     * @return {?}
     */
    getNavbarLinkClicks() {
        return this.navbarLinkClicks.asObservable();
    }
    /**
     * @return {?}
     */
    setNavbarLinkClicks() {
        this.navbarLinkClicks.next();
    }
}
NavbarService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavbarService.prototype.navbarLinkClicks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9uYXZiYXJzL25hdmJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHM0MsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFFVSxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBU2hELENBQUM7Ozs7SUFQQyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7O1lBVkYsVUFBVTs7Ozs7OztJQUVULHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmJhclNlcnZpY2Uge1xuICBwcml2YXRlIG5hdmJhckxpbmtDbGlja3MgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgZ2V0TmF2YmFyTGlua0NsaWNrcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm5hdmJhckxpbmtDbGlja3MuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXROYXZiYXJMaW5rQ2xpY2tzKCkge1xuICAgIHRoaXMubmF2YmFyTGlua0NsaWNrcy5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==