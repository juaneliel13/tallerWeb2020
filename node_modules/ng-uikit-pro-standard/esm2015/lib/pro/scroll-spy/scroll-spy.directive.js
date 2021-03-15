/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewEncapsulation, } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyService } from './scroll-spy.service';
import { distinctUntilChanged } from 'rxjs/operators';
// tslint:disable-next-line:component-class-suffix
export class ScrollSpyDirective {
    /**
     * @param {?} scrollSpyService
     */
    constructor(scrollSpyService) {
        this.scrollSpyService = scrollSpyService;
        this.activeLinkChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} newId
     * @return {?}
     */
    set id(newId) {
        if (newId) {
            this._id = newId;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activeSub = this.scrollSpyService.active$
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} activeLink
         * @return {?}
         */
        activeLink => {
            this.activeLinkChange.emit(activeLink);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.scrollSpyService.addScrollSpy({ id: this.id, links: this.links });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scrollSpyService.removeScrollSpy(this.id);
        this.activeSub.unsubscribe();
    }
}
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
ScrollSpyDirective.ctorParameters = () => [
    { type: ScrollSpyService }
];
ScrollSpyDirective.propDecorators = {
    links: [{ type: ContentChildren, args: [ScrollSpyLinkDirective, { descendants: true },] }],
    id: [{ type: Input, args: ['mdbScrollSpy',] }],
    activeLinkChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Njcm9sbC1zcHkvc2Nyb2xsLXNweS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVdEQsa0RBQWtEO0FBQ2xELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFxQjdCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjVDLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSWYsQ0FBQzs7OztJQWpCMUQsSUFDSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsSUFBSSxFQUFFLENBQUMsS0FBYTtRQUNsQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO2FBQzNDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMkJBQTJCO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFWUSxnQkFBZ0I7OztvQkFhdEIsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtpQkFHN0QsS0FBSyxTQUFDLGNBQWM7K0JBYXBCLE1BQU07Ozs7SUFoQlAsbUNBQ3lDOzs7OztJQWF6QyxpQ0FBb0I7O0lBRXBCLDhDQUF3RTs7SUFFeEUsdUNBQXdCOzs7OztJQUVaLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFNweUxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbC1zcHktbGluay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2Nyb2xsU3B5U2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweV0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9zY3JvbGwtc3B5LW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oU2Nyb2xsU3B5TGlua0RpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaW5rczogUXVlcnlMaXN0PFNjcm9sbFNweUxpbmtEaXJlY3RpdmU+O1xuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5JylcbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IGlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX2lkID0gbmV3SWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYWN0aXZlTGlua0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhY3RpdmVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3RpdmVTdWIgPSB0aGlzLnNjcm9sbFNweVNlcnZpY2UuYWN0aXZlJFxuICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlTGluayA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlua0NoYW5nZS5lbWl0KGFjdGl2ZUxpbmspO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLmFkZFNjcm9sbFNweSh7IGlkOiB0aGlzLmlkLCBsaW5rczogdGhpcy5saW5rcyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS5yZW1vdmVTY3JvbGxTcHkodGhpcy5pZCk7XG4gICAgdGhpcy5hY3RpdmVTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19