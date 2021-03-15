/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Renderer2, NgZone, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from './scroll-spy.service';
var ScrollSpyWindowDirective = /** @class */ (function () {
    function ScrollSpyWindowDirective(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    Object.defineProperty(ScrollSpyWindowDirective.prototype, "scrollSpyId", {
        get: /**
         * @return {?}
         */
        function () { return this._scrollSpyId; },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._scrollSpyId = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.isElementInViewport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        /** @type {?} */
        var elHeight = this.el.nativeElement.offsetHeight;
        /** @type {?} */
        var elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        var elBottom = elTop + elHeight;
        return (scrollTop >= elTop && scrollTop <= elBottom);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    function (scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        this.updateActiveState(this.scrollSpyId, this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.listenToScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(window, 'scroll', (/**
         * @return {?}
         */
        function () {
            _this.onScroll();
        }));
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.updateActiveState(_this.scrollSpyId, _this.id);
        }), 0);
    };
    ScrollSpyWindowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyWindow]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyWindowDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ScrollSpyService }
    ]; };
    ScrollSpyWindowDirective.propDecorators = {
        scrollSpyId: [{ type: Input, args: ['mdbScrollSpyWindow',] }],
        offset: [{ type: Input }]
    };
    return ScrollSpyWindowDirective;
}());
export { ScrollSpyWindowDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHktd2luZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQWlCRSxrQ0FDNEIsUUFBYSxFQUMvQixFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLGdCQUFrQztRQUpoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUG5DLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFRakIsQ0FBQztJQWpCSixzQkFDSSxpREFBVzs7OztRQURmLGNBQzRCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3ZELFVBQWdCLEtBQWE7WUFDM0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FMc0Q7Ozs7SUFrQnZELHNEQUFtQjs7O0lBQW5COztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUzs7WUFDbkYsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVk7O1lBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU07O1lBQ3JELFFBQVEsR0FBRyxLQUFLLEdBQUcsUUFBUTtRQUVqQyxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsb0RBQWlCOzs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUTs7O1FBQUU7WUFDckMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dEQWdCSSxNQUFNLFNBQUMsUUFBUTtnQkE3QmxCLFVBQVU7Z0JBR1YsU0FBUztnQkFDVCxNQUFNO2dCQUtDLGdCQUFnQjs7OzhCQVF0QixLQUFLLFNBQUMsb0JBQW9CO3lCQVMxQixLQUFLOztJQWdEUiwrQkFBQztDQUFBLEFBL0RELElBK0RDO1NBNURZLHdCQUF3Qjs7Ozs7O0lBQ25DLHNDQUFtQjs7Ozs7SUFTbkIsZ0RBQTZCOztJQUU3QiwwQ0FBb0I7Ozs7O0lBR2xCLDRDQUF1Qzs7Ozs7SUFDdkMsc0NBQXNCOzs7OztJQUN0Qiw0Q0FBMkI7Ozs7O0lBQzNCLDBDQUFzQjs7Ozs7SUFDdEIsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsU3B5U2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweVdpbmRvd10nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweVdpbmRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICBASW5wdXQoJ21kYlNjcm9sbFNweVdpbmRvdycpXG4gIGdldCBzY3JvbGxTcHlJZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc2Nyb2xsU3B5SWQ7IH1cbiAgc2V0IHNjcm9sbFNweUlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFNweUlkID0gbmV3SWQ7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Njcm9sbFNweUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2VcbiAgKSB7fVxuXG4gIGlzRWxlbWVudEluVmlld3BvcnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3QgZWxIZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IGVsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRoaXMub2Zmc2V0O1xuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbEhlaWdodDtcblxuICAgIHJldHVybiAoc2Nyb2xsVG9wID49IGVsVG9wICYmIHNjcm9sbFRvcCA8PSBlbEJvdHRvbSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UudXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQsIGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnJlbW92ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkLCBpZCk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgfVxuXG4gIGxpc3RlblRvU2Nyb2xsKCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmxpc3RlblRvU2Nyb2xsLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19