/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, NgZone, Input } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
var ScrollSpyElementDirective = /** @class */ (function () {
    function ScrollSpyElementDirective(el, renderer, ngZone, scrollSpyService) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    Object.defineProperty(ScrollSpyElementDirective.prototype, "scrollSpyId", {
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
    ScrollSpyElementDirective.prototype.isElementInViewport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTop = this.el.nativeElement.parentElement.scrollTop;
        /** @type {?} */
        var elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        var elHeight = this.el.nativeElement.offsetHeight;
        return (scrollTop >= elTop && scrollTop < elTop + elHeight);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    function (scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.removeActiveLinks(scrollSpyId);
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        this.updateActiveState(this.scrollSpyId, this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.listenToScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', (/**
         * @return {?}
         */
        function () {
            _this.onScroll();
        }));
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.el.nativeElement.id;
        this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.ngAfterViewInit = /**
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
    ScrollSpyElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyElement]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyElementDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ScrollSpyService }
    ]; };
    ScrollSpyElementDirective.propDecorators = {
        scrollSpyId: [{ type: Input, args: ['mdbScrollSpyElement',] }],
        offset: [{ type: Input }]
    };
    return ScrollSpyElementDirective;
}());
export { ScrollSpyElementDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQWlCRSxtQ0FDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLGdCQUFrQztRQUhsQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU5uQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBT2pCLENBQUM7SUFoQkosc0JBQ0ksa0RBQVc7Ozs7UUFEZixjQUM0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7OztRQUN2RCxVQUFnQixLQUFhO1lBQzNCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7O09BTHNEOzs7O0lBaUJ2RCx1REFBbUI7OztJQUFuQjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVM7O1lBQ3pELEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU07O1lBQ3JELFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1FBRW5ELE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQscURBQWlCOzs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGtEQUFjOzs7SUFBZDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFFBQVE7OztRQUFFO1lBQ2xFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzs7O2dCQVhDLFVBQVU7Z0JBRVYsU0FBUztnQkFDVCxNQUFNO2dCQUlDLGdCQUFnQjs7OzhCQVF0QixLQUFLLFNBQUMscUJBQXFCO3lCQVMzQixLQUFLOztJQThDUixnQ0FBQztDQUFBLEFBN0RELElBNkRDO1NBMURZLHlCQUF5Qjs7Ozs7O0lBQ3BDLHVDQUFtQjs7Ozs7SUFTbkIsaURBQTZCOztJQUU3QiwyQ0FBb0I7Ozs7O0lBR2xCLHVDQUFzQjs7Ozs7SUFDdEIsNkNBQTJCOzs7OztJQUMzQiwyQ0FBc0I7Ozs7O0lBQ3RCLHFEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxTcHlTZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU2Nyb2xsU3B5RWxlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweUVsZW1lbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJTY3JvbGxTcHlFbGVtZW50JylcbiAgZ2V0IHNjcm9sbFNweUlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zY3JvbGxTcHlJZDsgfVxuICBzZXQgc2Nyb2xsU3B5SWQobmV3SWQ6IHN0cmluZykge1xuICAgIGlmIChuZXdJZCkge1xuICAgICAgdGhpcy5fc2Nyb2xsU3B5SWQgPSBuZXdJZDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2Nyb2xsU3B5SWQ6IHN0cmluZztcblxuICBASW5wdXQoKSBvZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcHlTZXJ2aWNlOiBTY3JvbGxTcHlTZXJ2aWNlXG4gICkge31cblxuICBpc0VsZW1lbnRJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCBlbFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLm9mZnNldDtcbiAgICBjb25zdCBlbEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICByZXR1cm4gKHNjcm9sbFRvcCA+PSBlbFRvcCAmJiBzY3JvbGxUb3AgPCBlbFRvcCArIGVsSGVpZ2h0KTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS5yZW1vdmVBY3RpdmVMaW5rcyhzY3JvbGxTcHlJZCk7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UudXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQsIGlkKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICB9XG5cbiAgbGlzdGVuVG9TY3JvbGwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2Nyb2xsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIodGhpcy5saXN0ZW5Ub1Njcm9sbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==