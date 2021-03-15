/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject, Optional, HostListener, } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollInstance } from './mdb-page-scroll.instance';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
var PageScrollDirective = /** @class */ (function () {
    function PageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = (/** @type {?} */ (document));
    }
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.generatePageScrollInstance = /**
     * @private
     * @return {?}
     */
    function () {
        if (Util.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish,
            });
        }
        return this.pageScrollInstance;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.pushRouterState = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.pageScrollAdjustHash &&
            typeof this.pageScrollInstance.scrollTarget === 'string' &&
            this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: (/** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1))),
                queryParamsHandling: 'preserve',
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.scroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            /** @type {?} */
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                /** @type {?} */
                var subscription_1 = (/** @type {?} */ (this.router.events.subscribe((/**
                 * @param {?} routerEvent
                 * @return {?}
                 */
                function (routerEvent) {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError ||
                        routerEvent instanceof NavigationCancel) {
                        subscription_1.unsubscribe();
                    }
                }))));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    PageScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbPageScroll]',
                },] }
    ];
    /** @nocollapse */
    PageScrollDirective.ctorParameters = function () { return [
        { type: PageScrollService },
        { type: Router, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    PageScrollDirective.propDecorators = {
        routerLink: [{ type: Input }],
        href: [{ type: Input }],
        pageScrollHorizontal: [{ type: Input }],
        pageScrollOffset: [{ type: Input }],
        pageScrollDuration: [{ type: Input }],
        pageScrollSpeed: [{ type: Input }],
        pageScrollEasing: [{ type: Input }],
        pageScrollInterruptible: [{ type: Input }],
        pageScrollAdjustHash: [{ type: Input }],
        pageScroll: [{ type: Input }],
        pageScrollFinish: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['click',] }]
    };
    return PageScrollDirective;
}());
export { PageScrollDirective };
if (false) {
    /** @type {?} */
    PageScrollDirective.prototype.routerLink;
    /** @type {?} */
    PageScrollDirective.prototype.href;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollHorizontal;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollOffset;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollDuration;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollSpeed;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollEasing;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollInterruptible;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollAdjustHash;
    /** @type {?} */
    PageScrollDirective.prototype.pageScroll;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollFinish;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.pageScrollInstance;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.pageScrollService;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFFBQVEsRUFFUixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxJQUFJLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUcvRTtJQW9CRSw2QkFDVSxpQkFBb0MsRUFDeEIsTUFBYyxFQUNoQixRQUFhO1FBRnZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhCcEIseUJBQW9CLEdBQWtCLElBQUksQ0FBQztRQUMzQyxxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLHVCQUFrQixHQUFpQixJQUFJLENBQUM7UUFDeEMsb0JBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFzQixJQUFJLENBQUM7UUFFM0MseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRXRDLHFCQUFnQixHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBVTlFLElB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Ozs7O0lBQ3JELHVDQUEyQjs7Ozs7SUFHekIsZ0RBQTRDOzs7OztJQUM1QyxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBPbkNoYW5nZXMsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvbkNhbmNlbCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQYWdlU2Nyb2xsU2VydmljZSB9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVNjcm9sbEluc3RhbmNlIH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuaW5zdGFuY2UnO1xuaW1wb3J0IHsgUGFnZVNjcm9sbFV0aWxTZXJ2aWNlIGFzIFV0aWwgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWFzaW5nTG9naWMgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiUGFnZVNjcm9sbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgcm91dGVyTGluazogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbEhvcml6b250YWw6IGJvb2xlYW4gfCBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbE9mZnNldDogbnVtYmVyIHwgYW55ID0gbnVsbDtcbiAgQElucHV0KCkgcHVibGljIHBhZ2VTY3JvbGxEdXJhdGlvbjogbnVtYmVyIHwgYW55ID0gbnVsbDtcbiAgQElucHV0KCkgcHVibGljIHBhZ2VTY3JvbGxTcGVlZDogbnVtYmVyIHwgYW55ID0gbnVsbDtcbiAgQElucHV0KCkgcHVibGljIHBhZ2VTY3JvbGxFYXNpbmc6IEVhc2luZ0xvZ2ljIHwgYW55ID0gbnVsbDtcbiAgQElucHV0KCkgcHVibGljIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbEFkanVzdEhhc2ggPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHBhZ2VTY3JvbGw6IHN0cmluZyB8IGFueSA9IG51bGw7XG5cbiAgQE91dHB1dCgpIHBhZ2VTY3JvbGxGaW5pc2g6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlIHwgYW55O1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2VTY3JvbGxTZXJ2aWNlOiBQYWdlU2Nyb2xsU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IDxEb2N1bWVudD5kb2N1bWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIC8vIFNvbWUgaW5wdXRzIGNoYW5nZWQsIHJlc2V0IHRoZSBwYWdlU2Nyb2xsSW5zdGFuY2VcbiAgICB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSkge1xuICAgICAgdGhpcy5wYWdlU2Nyb2xsU2VydmljZS5zdG9wKHRoaXMucGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQYWdlU2Nyb2xsSW5zdGFuY2UoKTogUGFnZVNjcm9sbEluc3RhbmNlIHwgYW55IHtcbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbCh0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSkpIHtcbiAgICAgIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlID0gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgICAgZG9jdW1lbnQ6IHRoaXMuZG9jdW1lbnQsXG4gICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy5ocmVmLFxuICAgICAgICBzY3JvbGxpbmdWaWV3czogbnVsbCxcbiAgICAgICAgbmFtZXNwYWNlOiB0aGlzLnBhZ2VTY3JvbGwsXG4gICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiAhdGhpcy5wYWdlU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgcGFnZVNjcm9sbE9mZnNldDogdGhpcy5wYWdlU2Nyb2xsT2Zmc2V0LFxuICAgICAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZTogdGhpcy5wYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSxcbiAgICAgICAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljOiB0aGlzLnBhZ2VTY3JvbGxFYXNpbmcsXG4gICAgICAgIHBhZ2VTY3JvbGxEdXJhdGlvbjogdGhpcy5wYWdlU2Nyb2xsRHVyYXRpb24sXG4gICAgICAgIHBhZ2VTY3JvbGxTcGVlZDogdGhpcy5wYWdlU2Nyb2xsU3BlZWQsXG4gICAgICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcjogdGhpcy5wYWdlU2Nyb2xsRmluaXNoLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgcHVzaFJvdXRlclN0YXRlKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucGFnZVNjcm9sbEFkanVzdEhhc2ggJiZcbiAgICAgIHR5cGVvZiB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxUYXJnZXQgPT09ICdzdHJpbmcnICYmXG4gICAgICB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxUYXJnZXQuc3Vic3RyKDAsIDEpID09PSAnIydcbiAgICApIHtcbiAgICAgIC8vIFwiTmF2aWdhdGVcIiB0byB0aGUgY3VycmVudCByb3V0ZSBhZ2FpbiBhbmQgdGhpcyB0aW1lIHNldCB0aGUgZnJhZ21lbnQvaGFzaFxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgICAgZnJhZ21lbnQ6IDxzdHJpbmc+dGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsVGFyZ2V0LnN1YnN0cigxKSxcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ3ByZXNlcnZlJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VTY3JvbGxJbnN0YW5jZSA9IHRoaXMuZ2VuZXJhdGVQYWdlU2Nyb2xsSW5zdGFuY2UoKTtcbiAgICB0aGlzLnB1c2hSb3V0ZXJTdGF0ZSgpO1xuICAgIHRoaXMucGFnZVNjcm9sbFNlcnZpY2Uuc3RhcnQocGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIGhhbmRsZUNsaWNrKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJvdXRlckxpbmsgJiYgdGhpcy5yb3V0ZXIgIT09IG51bGwgJiYgdGhpcy5yb3V0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHVybFRyZWU6IFVybFRyZWU7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucm91dGVyTGluayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyTGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmxUcmVlID0gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZSh0aGlzLnJvdXRlckxpbmspO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnJvdXRlci5pc0FjdGl2ZSh1cmxUcmVlLCB0cnVlKSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIG5hdmlnYXRlIHRoZWlyIGZpcnN0LlxuICAgICAgICAvLyBOYXZpZ2F0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIHJvdXRlckxpbmsgZGlyZWN0aXZlXG4gICAgICAgIC8vIHNvIHdlIG9ubHkgbmVlZCB0byBsaXN0ZW4gZm9yIHJvdXRlIGNoYW5nZVxuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IDxTdWJzY3JpcHRpb24+dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShcbiAgICAgICAgICByb3V0ZXJFdmVudCA9PiB7XG4gICAgICAgICAgICBpZiAocm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgcm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHxcbiAgICAgICAgICAgICAgcm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHRvIHByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgICByZXR1cm4gZmFsc2U7IC8vIHRvIHByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuIl19