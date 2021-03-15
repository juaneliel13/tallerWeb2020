/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function ScrollSpy() { }
if (false) {
    /** @type {?} */
    ScrollSpy.prototype.id;
    /** @type {?} */
    ScrollSpy.prototype.links;
}
var ScrollSpyService = /** @class */ (function () {
    function ScrollSpyService() {
        this.scrollSpys = [];
        this.activeSubject = new Subject();
        this.active$ = this.activeSubject;
    }
    /**
     * @param {?} scrollSpy
     * @return {?}
     */
    ScrollSpyService.prototype.addScrollSpy = /**
     * @param {?} scrollSpy
     * @return {?}
     */
    function (scrollSpy) {
        this.scrollSpys.push(scrollSpy);
    };
    /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    ScrollSpyService.prototype.removeScrollSpy = /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    function (scrollSpyId) {
        /** @type {?} */
        var scrollSpyIndex = this.scrollSpys.findIndex((/**
         * @param {?} spy
         * @return {?}
         */
        function (spy) {
            return spy.id === scrollSpyId;
        }));
        this.scrollSpys.splice(scrollSpyIndex, 1);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    ScrollSpyService.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    function (scrollSpyId, activeLinkId) {
        /** @type {?} */
        var scrollSpy = this.scrollSpys.find((/**
         * @param {?} spy
         * @return {?}
         */
        function (spy) {
            return spy.id === scrollSpyId;
        }));
        if (!scrollSpy) {
            return;
        }
        /** @type {?} */
        var activeLink = scrollSpy.links.find((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.id === activeLinkId;
        }));
        this.setActiveLink(activeLink);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    ScrollSpyService.prototype.removeActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    function (scrollSpyId, activeLinkId) {
        /** @type {?} */
        var scrollSpy = this.scrollSpys.find((/**
         * @param {?} spy
         * @return {?}
         */
        function (spy) {
            return spy.id === scrollSpyId;
        }));
        if (!scrollSpy) {
            return;
        }
        /** @type {?} */
        var activeLink = scrollSpy.links.find((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.id === activeLinkId;
        }));
        if (!activeLink) {
            return;
        }
        activeLink.active = false;
        activeLink.detectChanges();
    };
    /**
     * @param {?} activeLink
     * @return {?}
     */
    ScrollSpyService.prototype.setActiveLink = /**
     * @param {?} activeLink
     * @return {?}
     */
    function (activeLink) {
        if (activeLink) {
            activeLink.active = true;
            activeLink.detectChanges();
            this.activeSubject.next(activeLink);
        }
    };
    /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    ScrollSpyService.prototype.removeActiveLinks = /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    function (scrollSpyId) {
        /** @type {?} */
        var scrollSpy = this.scrollSpys.find((/**
         * @param {?} spy
         * @return {?}
         */
        function (spy) {
            return spy.id === scrollSpyId;
        }));
        if (!scrollSpy) {
            return;
        }
        scrollSpy.links.forEach((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            link.active = false;
            link.detectChanges();
        }));
    };
    ScrollSpyService.decorators = [
        { type: Injectable }
    ];
    return ScrollSpyService;
}());
export { ScrollSpyService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollSpyService.prototype.scrollSpys;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyService.prototype.activeSubject;
    /** @type {?} */
    ScrollSpyService.prototype.active$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTNDLCtCQUdDOzs7SUFGQyx1QkFBVzs7SUFDWCwwQkFBeUM7O0FBRzNDO0lBQUE7UUFFVSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUEwQixDQUFDO1FBQzlELFlBQU8sR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQXdFaEQsQ0FBQzs7Ozs7SUF0RUMsdUNBQVk7Ozs7SUFBWixVQUFhLFNBQW9CO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixXQUFtQjs7WUFDM0IsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFFLFVBQUMsR0FBRztZQUNwRCxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7O0lBQWpCLFVBQWtCLFdBQW1CLEVBQUUsWUFBb0I7O1lBQ25ELFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDeEMsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQztRQUNoQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTztTQUNSOztZQUVLLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUk7WUFDMUMsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELDRDQUFpQjs7Ozs7SUFBakIsVUFBa0IsV0FBbUIsRUFBRSxZQUFvQjs7WUFDbkQsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUN4QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPO1NBQ1I7O1lBRUssVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSTtZQUMxQyxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDO1FBQ2xDLENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFFRCxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMxQixVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsVUFBd0M7UUFDcEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixXQUFtQjs7WUFDN0IsU0FBUyxHQUEwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDL0QsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQztRQUNoQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVFRixVQUFVOztJQTZFWCx1QkFBQztDQUFBLEFBN0VELElBNkVDO1NBNUVZLGdCQUFnQjs7Ozs7O0lBQzNCLHNDQUFxQzs7Ozs7SUFFckMseUNBQThEOztJQUM5RCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFNweUxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbC1zcHktbGluay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFNweSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxpbmtzOiBRdWVyeUxpc3Q8U2Nyb2xsU3B5TGlua0RpcmVjdGl2ZT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzY3JvbGxTcHlzOiBTY3JvbGxTcHlbXSA9IFtdO1xuXG4gIHByaXZhdGUgYWN0aXZlU3ViamVjdCA9IG5ldyBTdWJqZWN0PFNjcm9sbFNweUxpbmtEaXJlY3RpdmU+KCk7XG4gIGFjdGl2ZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aXZlU3ViamVjdDtcblxuICBhZGRTY3JvbGxTcHkoc2Nyb2xsU3B5OiBTY3JvbGxTcHkpIHtcbiAgICB0aGlzLnNjcm9sbFNweXMucHVzaChzY3JvbGxTcHkpO1xuICB9XG5cbiAgcmVtb3ZlU2Nyb2xsU3B5KHNjcm9sbFNweUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JvbGxTcHlJbmRleCA9IHRoaXMuc2Nyb2xsU3B5cy5maW5kSW5kZXgoIChzcHkpID0+IHtcbiAgICAgIHJldHVybiBzcHkuaWQgPT09IHNjcm9sbFNweUlkO1xuICAgIH0pO1xuICAgIHRoaXMuc2Nyb2xsU3B5cy5zcGxpY2Uoc2Nyb2xsU3B5SW5kZXgsIDEpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQ6IHN0cmluZywgYWN0aXZlTGlua0lkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JvbGxTcHkgPSB0aGlzLnNjcm9sbFNweXMuZmluZChzcHkgPT4ge1xuICAgICAgcmV0dXJuIHNweS5pZCA9PT0gc2Nyb2xsU3B5SWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbFNweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSBzY3JvbGxTcHkubGlua3MuZmluZChsaW5rID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmlkID09PSBhY3RpdmVMaW5rSWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEFjdGl2ZUxpbmsoYWN0aXZlTGluayk7XG4gIH1cblxuICByZW1vdmVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZDogc3RyaW5nLCBhY3RpdmVMaW5rSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNjcm9sbFNweSA9IHRoaXMuc2Nyb2xsU3B5cy5maW5kKHNweSA9PiB7XG4gICAgICByZXR1cm4gc3B5LmlkID09PSBzY3JvbGxTcHlJZDtcbiAgICB9KTtcblxuICAgIGlmICghc2Nyb2xsU3B5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHNjcm9sbFNweS5saW5rcy5maW5kKGxpbmsgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuaWQgPT09IGFjdGl2ZUxpbmtJZDtcbiAgICB9KTtcblxuICAgIGlmICghYWN0aXZlTGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2ZUxpbmsuYWN0aXZlID0gZmFsc2U7XG4gICAgYWN0aXZlTGluay5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZXRBY3RpdmVMaW5rKGFjdGl2ZUxpbms6IFNjcm9sbFNweUxpbmtEaXJlY3RpdmUgfCBhbnkpIHtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgYWN0aXZlTGluay5hY3RpdmUgPSB0cnVlO1xuICAgICAgYWN0aXZlTGluay5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmFjdGl2ZVN1YmplY3QubmV4dChhY3RpdmVMaW5rKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVBY3RpdmVMaW5rcyhzY3JvbGxTcHlJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3B5OiBTY3JvbGxTcHkgfCB1bmRlZmluZWQgPSB0aGlzLnNjcm9sbFNweXMuZmluZChzcHkgPT4ge1xuICAgICAgcmV0dXJuIHNweS5pZCA9PT0gc2Nyb2xsU3B5SWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbFNweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjcm9sbFNweS5saW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgbGluay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpbmsuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=