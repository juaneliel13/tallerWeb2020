/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, NgZone, Input } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
export class ScrollSpyElementDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} scrollSpyService
     */
    constructor(el, renderer, ngZone, scrollSpyService) {
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
        const scrollTop = this.el.nativeElement.parentElement.scrollTop;
        /** @type {?} */
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        const elHeight = this.el.nativeElement.offsetHeight;
        return (scrollTop >= elTop && scrollTop < elTop + elHeight);
    }
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.removeActiveLinks(scrollSpyId);
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
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
        this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', (/**
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
        this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
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
ScrollSpyElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbScrollSpyElement]'
            },] }
];
/** @nocollapse */
ScrollSpyElementDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ScrollSpyService }
];
ScrollSpyElementDirective.propDecorators = {
    scrollSpyId: [{ type: Input, args: ['mdbScrollSpyElement',] }],
    offset: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype._scrollSpyId;
    /** @type {?} */
    ScrollSpyElementDirective.prototype.offset;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.scrollSpyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBY3BDLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxnQkFBa0M7UUFIbEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFObkMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQU9qQixDQUFDOzs7O0lBaEJKLElBQ0ksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFZRCxtQkFBbUI7O2NBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNOztjQUNyRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWTtRQUVuRCxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsRUFBVTtRQUMvQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsUUFBUTs7O1FBQUUsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O1lBWEMsVUFBVTtZQUVWLFNBQVM7WUFDVCxNQUFNO1lBSUMsZ0JBQWdCOzs7MEJBUXRCLEtBQUssU0FBQyxxQkFBcUI7cUJBUzNCLEtBQUs7Ozs7Ozs7SUFYTix1Q0FBbUI7Ozs7O0lBU25CLGlEQUE2Qjs7SUFFN0IsMkNBQW9COzs7OztJQUdsQix1Q0FBc0I7Ozs7O0lBQ3RCLDZDQUEyQjs7Ozs7SUFDM0IsMkNBQXNCOzs7OztJQUN0QixxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsU3B5U2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweUVsZW1lbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlFbGVtZW50RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5RWxlbWVudCcpXG4gIGdldCBzY3JvbGxTcHlJZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc2Nyb2xsU3B5SWQ7IH1cbiAgc2V0IHNjcm9sbFNweUlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFNweUlkID0gbmV3SWQ7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Njcm9sbFNweUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc2Nyb2xsU3B5U2VydmljZTogU2Nyb2xsU3B5U2VydmljZVxuICApIHt9XG5cbiAgaXNFbGVtZW50SW5WaWV3cG9ydCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgZWxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5vZmZzZXQ7XG4gICAgY29uc3QgZWxIZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgcmV0dXJuIChzY3JvbGxUb3AgPj0gZWxUb3AgJiYgc2Nyb2xsVG9wIDwgZWxUb3AgKyBlbEhlaWdodCk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UucmVtb3ZlQWN0aXZlTGlua3Moc2Nyb2xsU3B5SWQpO1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkLCBpZCk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgfVxuXG4gIGxpc3RlblRvU2Nyb2xsKCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNjcm9sbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKHRoaXMubGlzdGVuVG9TY3JvbGwuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=