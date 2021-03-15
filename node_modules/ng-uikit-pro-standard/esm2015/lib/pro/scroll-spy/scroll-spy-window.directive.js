/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Renderer2, NgZone, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from './scroll-spy.service';
export class ScrollSpyWindowDirective {
    /**
     * @param {?} document
     * @param {?} el
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} scrollSpyService
     */
    constructor(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    /**
     * @return {?}
     */
    get scrollSpyId() { return this._scrollSpyId; }
    /**
     * @param {?} newId
     * @return {?}
     */
    set scrollSpyId(newId) {
        if (newId) {
            this._scrollSpyId = newId;
        }
    }
    /**
     * @return {?}
     */
    isElementInViewport() {
        /** @type {?} */
        const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        /** @type {?} */
        const elHeight = this.el.nativeElement.offsetHeight;
        /** @type {?} */
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        const elBottom = elTop + elHeight;
        return (scrollTop >= elTop && scrollTop <= elBottom);
    }
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    }
    /**
     * @return {?}
     */
    onScroll() {
        this.updateActiveState(this.scrollSpyId, this.id);
    }
    /**
     * @return {?}
     */
    listenToScroll() {
        this.renderer.listen(window, 'scroll', (/**
         * @return {?}
         */
        () => {
            this.onScroll();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.updateActiveState(this.scrollSpyId, this.id);
        }), 0);
    }
}
ScrollSpyWindowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbScrollSpyWindow]'
            },] }
];
/** @nocollapse */
ScrollSpyWindowDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ScrollSpyService }
];
ScrollSpyWindowDirective.propDecorators = {
    scrollSpyId: [{ type: Input, args: ['mdbScrollSpyWindow',] }],
    offset: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype._scrollSpyId;
    /** @type {?} */
    ScrollSpyWindowDirective.prototype.offset;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.scrollSpyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHktd2luZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7OztJQWNuQyxZQUM0QixRQUFhLEVBQy9CLEVBQWMsRUFDZCxRQUFtQixFQUNuQixNQUFjLEVBQ2QsZ0JBQWtDO1FBSmhCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQbkMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQVFqQixDQUFDOzs7O0lBakJKLElBQ0ksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFhRCxtQkFBbUI7O2NBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTOztjQUNuRixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWTs7Y0FDN0MsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTTs7Y0FDckQsUUFBUSxHQUFHLEtBQUssR0FBRyxRQUFRO1FBRWpDLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUTs7O1FBQUUsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7Ozs0Q0FnQkksTUFBTSxTQUFDLFFBQVE7WUE3QmxCLFVBQVU7WUFHVixTQUFTO1lBQ1QsTUFBTTtZQUtDLGdCQUFnQjs7OzBCQVF0QixLQUFLLFNBQUMsb0JBQW9CO3FCQVMxQixLQUFLOzs7Ozs7O0lBWE4sc0NBQW1COzs7OztJQVNuQixnREFBNkI7O0lBRTdCLDBDQUFvQjs7Ozs7SUFHbEIsNENBQXVDOzs7OztJQUN2QyxzQ0FBc0I7Ozs7O0lBQ3RCLDRDQUEyQjs7Ozs7SUFDM0IsMENBQXNCOzs7OztJQUN0QixvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTY3JvbGxTcHlTZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU2Nyb2xsU3B5V2luZG93XSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU3B5V2luZG93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5V2luZG93JylcbiAgZ2V0IHNjcm9sbFNweUlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zY3JvbGxTcHlJZDsgfVxuICBzZXQgc2Nyb2xsU3B5SWQobmV3SWQ6IHN0cmluZykge1xuICAgIGlmIChuZXdJZCkge1xuICAgICAgdGhpcy5fc2Nyb2xsU3B5SWQgPSBuZXdJZDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2Nyb2xsU3B5SWQ6IHN0cmluZztcblxuICBASW5wdXQoKSBvZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc2Nyb2xsU3B5U2VydmljZTogU2Nyb2xsU3B5U2VydmljZVxuICApIHt9XG5cbiAgaXNFbGVtZW50SW5WaWV3cG9ydCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBlbEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgZWxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5vZmZzZXQ7XG4gICAgY29uc3QgZWxCb3R0b20gPSBlbFRvcCArIGVsSGVpZ2h0O1xuXG4gICAgcmV0dXJuIChzY3JvbGxUb3AgPj0gZWxUb3AgJiYgc2Nyb2xsVG9wIDw9IGVsQm90dG9tKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS51cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZCwgaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UucmVtb3ZlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQsIGlkKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICB9XG5cbiAgbGlzdGVuVG9TY3JvbGwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4od2luZG93LCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNjcm9sbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKHRoaXMubGlzdGVuVG9TY3JvbGwuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=