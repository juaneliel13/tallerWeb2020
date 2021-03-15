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
export class ScrollSpyService {
    constructor() {
        this.scrollSpys = [];
        this.activeSubject = new Subject();
        this.active$ = this.activeSubject;
    }
    /**
     * @param {?} scrollSpy
     * @return {?}
     */
    addScrollSpy(scrollSpy) {
        this.scrollSpys.push(scrollSpy);
    }
    /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    removeScrollSpy(scrollSpyId) {
        /** @type {?} */
        const scrollSpyIndex = this.scrollSpys.findIndex((/**
         * @param {?} spy
         * @return {?}
         */
        (spy) => {
            return spy.id === scrollSpyId;
        }));
        this.scrollSpys.splice(scrollSpyIndex, 1);
    }
    /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    updateActiveState(scrollSpyId, activeLinkId) {
        /** @type {?} */
        const scrollSpy = this.scrollSpys.find((/**
         * @param {?} spy
         * @return {?}
         */
        spy => {
            return spy.id === scrollSpyId;
        }));
        if (!scrollSpy) {
            return;
        }
        /** @type {?} */
        const activeLink = scrollSpy.links.find((/**
         * @param {?} link
         * @return {?}
         */
        link => {
            return link.id === activeLinkId;
        }));
        this.setActiveLink(activeLink);
    }
    /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    removeActiveState(scrollSpyId, activeLinkId) {
        /** @type {?} */
        const scrollSpy = this.scrollSpys.find((/**
         * @param {?} spy
         * @return {?}
         */
        spy => {
            return spy.id === scrollSpyId;
        }));
        if (!scrollSpy) {
            return;
        }
        /** @type {?} */
        const activeLink = scrollSpy.links.find((/**
         * @param {?} link
         * @return {?}
         */
        link => {
            return link.id === activeLinkId;
        }));
        if (!activeLink) {
            return;
        }
        activeLink.active = false;
        activeLink.detectChanges();
    }
    /**
     * @param {?} activeLink
     * @return {?}
     */
    setActiveLink(activeLink) {
        if (activeLink) {
            activeLink.active = true;
            activeLink.detectChanges();
            this.activeSubject.next(activeLink);
        }
    }
    /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    removeActiveLinks(scrollSpyId) {
        /** @type {?} */
        const scrollSpy = this.scrollSpys.find((/**
         * @param {?} spy
         * @return {?}
         */
        spy => {
            return spy.id === scrollSpyId;
        }));
        if (!scrollSpy) {
            return;
        }
        scrollSpy.links.forEach((/**
         * @param {?} link
         * @return {?}
         */
        link => {
            link.active = false;
            link.detectChanges();
        }));
    }
}
ScrollSpyService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTNDLCtCQUdDOzs7SUFGQyx1QkFBVzs7SUFDWCwwQkFBeUM7O0FBSTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFFVSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUEwQixDQUFDO1FBQzlELFlBQU8sR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQXdFaEQsQ0FBQzs7Ozs7SUF0RUMsWUFBWSxDQUFDLFNBQW9CO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW1COztjQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4RCxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLFlBQW9COztjQUNuRCxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQztRQUNoQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTztTQUNSOztjQUVLLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDO1FBQ2xDLENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxZQUFvQjs7Y0FDbkQsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUM7UUFDaEMsQ0FBQyxFQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU87U0FDUjs7Y0FFSyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBRUQsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQXdDO1FBQ3BELElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQjs7Y0FDN0IsU0FBUyxHQUEwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNsRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE1RUYsVUFBVTs7Ozs7OztJQUVULHNDQUFxQzs7Ozs7SUFFckMseUNBQThEOztJQUM5RCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFNweUxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbC1zcHktbGluay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFNweSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxpbmtzOiBRdWVyeUxpc3Q8U2Nyb2xsU3B5TGlua0RpcmVjdGl2ZT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzY3JvbGxTcHlzOiBTY3JvbGxTcHlbXSA9IFtdO1xuXG4gIHByaXZhdGUgYWN0aXZlU3ViamVjdCA9IG5ldyBTdWJqZWN0PFNjcm9sbFNweUxpbmtEaXJlY3RpdmU+KCk7XG4gIGFjdGl2ZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aXZlU3ViamVjdDtcblxuICBhZGRTY3JvbGxTcHkoc2Nyb2xsU3B5OiBTY3JvbGxTcHkpIHtcbiAgICB0aGlzLnNjcm9sbFNweXMucHVzaChzY3JvbGxTcHkpO1xuICB9XG5cbiAgcmVtb3ZlU2Nyb2xsU3B5KHNjcm9sbFNweUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JvbGxTcHlJbmRleCA9IHRoaXMuc2Nyb2xsU3B5cy5maW5kSW5kZXgoIChzcHkpID0+IHtcbiAgICAgIHJldHVybiBzcHkuaWQgPT09IHNjcm9sbFNweUlkO1xuICAgIH0pO1xuICAgIHRoaXMuc2Nyb2xsU3B5cy5zcGxpY2Uoc2Nyb2xsU3B5SW5kZXgsIDEpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQ6IHN0cmluZywgYWN0aXZlTGlua0lkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JvbGxTcHkgPSB0aGlzLnNjcm9sbFNweXMuZmluZChzcHkgPT4ge1xuICAgICAgcmV0dXJuIHNweS5pZCA9PT0gc2Nyb2xsU3B5SWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbFNweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSBzY3JvbGxTcHkubGlua3MuZmluZChsaW5rID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmlkID09PSBhY3RpdmVMaW5rSWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEFjdGl2ZUxpbmsoYWN0aXZlTGluayk7XG4gIH1cblxuICByZW1vdmVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZDogc3RyaW5nLCBhY3RpdmVMaW5rSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNjcm9sbFNweSA9IHRoaXMuc2Nyb2xsU3B5cy5maW5kKHNweSA9PiB7XG4gICAgICByZXR1cm4gc3B5LmlkID09PSBzY3JvbGxTcHlJZDtcbiAgICB9KTtcblxuICAgIGlmICghc2Nyb2xsU3B5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHNjcm9sbFNweS5saW5rcy5maW5kKGxpbmsgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuaWQgPT09IGFjdGl2ZUxpbmtJZDtcbiAgICB9KTtcblxuICAgIGlmICghYWN0aXZlTGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2ZUxpbmsuYWN0aXZlID0gZmFsc2U7XG4gICAgYWN0aXZlTGluay5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZXRBY3RpdmVMaW5rKGFjdGl2ZUxpbms6IFNjcm9sbFNweUxpbmtEaXJlY3RpdmUgfCBhbnkpIHtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgYWN0aXZlTGluay5hY3RpdmUgPSB0cnVlO1xuICAgICAgYWN0aXZlTGluay5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmFjdGl2ZVN1YmplY3QubmV4dChhY3RpdmVMaW5rKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVBY3RpdmVMaW5rcyhzY3JvbGxTcHlJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3B5OiBTY3JvbGxTcHkgfCB1bmRlZmluZWQgPSB0aGlzLnNjcm9sbFNweXMuZmluZChzcHkgPT4ge1xuICAgICAgcmV0dXJuIHNweS5pZCA9PT0gc2Nyb2xsU3B5SWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbFNweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjcm9sbFNweS5saW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgbGluay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpbmsuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=