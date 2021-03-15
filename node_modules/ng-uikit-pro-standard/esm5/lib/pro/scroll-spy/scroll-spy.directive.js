/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewEncapsulation, } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyService } from './scroll-spy.service';
import { distinctUntilChanged } from 'rxjs/operators';
var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(scrollSpyService) {
        this.scrollSpyService = scrollSpyService;
        this.activeLinkChange = new EventEmitter();
    }
    Object.defineProperty(ScrollSpyDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._id = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeSub = this.scrollSpyService.active$
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} activeLink
         * @return {?}
         */
        function (activeLink) {
            _this.activeLinkChange.emit(activeLink);
        }));
    };
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.scrollSpyService.addScrollSpy({ id: this.id, links: this.links });
    };
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollSpyService.removeScrollSpy(this.id);
        this.activeSub.unsubscribe();
    };
    ScrollSpyDirective.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbScrollSpy]',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".nav-pills.default-pills .nav-item a{text-align:left;color:#666;border-radius:0}.nav-pills.default-pills .nav-item a:hover{background-color:transparent;color:#45526e;border-left:.0625rem solid #45526e;font-weight:500}.nav-pills.default-pills .nav-item a.active{background-color:transparent;color:#45526e;border-left:.125rem solid #45526e;box-shadow:none;font-weight:500}.nav-pills.default-pills .nav-item a.active:active,.nav-pills.default-pills .nav-item a.active:focus,.nav-pills.default-pills .nav-item a.active:hover{background-color:transparent;color:#45526e;font-weight:500}.nav-pills .nav-item+.nav-item{margin-left:0}@media only screen and (max-width:991px){.sticky,.sticky-placeholder{display:none}}#scrollspy{width:100%}@media only screen and (max-width:992px){.col-lg-4 .sticky,.col-md-4 .sticky,.col-xl-4 .sticky{width:12.5rem}}@media only screen and (min-width:992px){.col-md-4 .sticky .col-lg-4 .sticky,.col-xl-4 .sticky{width:25rem}}@media only screen and (min-width:1200px){.col-md-4 .sticky{width:18.75rem}}@media only screen and (min-width:1440px){.col-md-4 .sticky{width:21.875rem}}.dotted-scrollspy{display:block;position:fixed;top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:rgba(0,0,0,.55);border-radius:.125rem 0 0 .125rem}.dotted-scrollspy li{display:block;padding:0 1rem}.dotted-scrollspy li:first-child{padding-top:.625rem}.dotted-scrollspy li:last-child{padding-bottom:.625rem}.dotted-scrollspy li a{padding:.5rem}.dotted-scrollspy li a span{display:block;background-color:rgba(255,255,255,.54);width:.5rem;height:.5rem;border-radius:50%}.dotted-scrollspy li a.active span{background:#fff}.scrollspy-example{overflow-y:scroll;position:relative;height:12.5rem;padding:1rem}.flex-column .nav-link{padding:.5rem 1rem!important}"]
                }] }
    ];
    /** @nocollapse */
    ScrollSpyDirective.ctorParameters = function () { return [
        { type: ScrollSpyService }
    ]; };
    ScrollSpyDirective.propDecorators = {
        links: [{ type: ContentChildren, args: [ScrollSpyLinkDirective, { descendants: true },] }],
        id: [{ type: Input, args: ['mdbScrollSpy',] }],
        activeLinkChange: [{ type: Output }]
    };
    return ScrollSpyDirective;
}());
export { ScrollSpyDirective };
if (false) {
    /** @type {?} */
    ScrollSpyDirective.prototype.links;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyDirective.prototype._id;
    /** @type {?} */
    ScrollSpyDirective.prototype.activeLinkChange;
    /** @type {?} */
    ScrollSpyDirective.prototype.activeSub;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyDirective.prototype.scrollSpyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Njcm9sbC1zcHkvc2Nyb2xsLXNweS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQ7SUE2QkUsNEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjVDLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSWYsQ0FBQztJQWpCMUQsc0JBQ0ksa0NBQUU7Ozs7UUFETjtZQUVFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7OztRQUVELFVBQU8sS0FBYTtZQUNsQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzthQUNsQjtRQUNILENBQUM7OztPQU5BOzs7O0lBZ0JELHFDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTzthQUMzQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsVUFBQSxVQUFVO1lBQ25CLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsK0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBVlEsZ0JBQWdCOzs7d0JBYXRCLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7cUJBRzdELEtBQUssU0FBQyxjQUFjO21DQWFwQixNQUFNOztJQXNCVCx5QkFBQztDQUFBLEFBL0NELElBK0NDO1NBdkNZLGtCQUFrQjs7O0lBQzdCLG1DQUN5Qzs7Ozs7SUFhekMsaUNBQW9COztJQUVwQiw4Q0FBd0U7O0lBRXhFLHVDQUF3Qjs7Ozs7SUFFWiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxTcHlMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LWxpbmsuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbFNweVNlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC1zcHkuc2VydmljZSc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJTY3JvbGxTcHldJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vc2Nyb2xsLXNweS1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgU2Nyb2xsU3B5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkcmVuKFNjcm9sbFNweUxpbmtEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlua3M6IFF1ZXJ5TGlzdDxTY3JvbGxTcHlMaW5rRGlyZWN0aXZlPjtcblxuICBASW5wdXQoJ21kYlNjcm9sbFNweScpXG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHNldCBpZChuZXdJZDogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0lkKSB7XG4gICAgICB0aGlzLl9pZCA9IG5ld0lkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGFjdGl2ZUxpbmtDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgYWN0aXZlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY3JvbGxTcHlTZXJ2aWNlOiBTY3JvbGxTcHlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZlU3ViID0gdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLmFjdGl2ZSRcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAuc3Vic2NyaWJlKGFjdGl2ZUxpbmsgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUxpbmtDaGFuZ2UuZW1pdChhY3RpdmVMaW5rKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS5hZGRTY3JvbGxTcHkoeyBpZDogdGhpcy5pZCwgbGlua3M6IHRoaXMubGlua3MgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UucmVtb3ZlU2Nyb2xsU3B5KHRoaXMuaWQpO1xuICAgIHRoaXMuYWN0aXZlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==