/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output, Renderer2, } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService, renderer) {
        this._navbarService = _navbarService;
        this.renderer = renderer;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.links.forEach((/**
             * @param {?} link
             * @return {?}
             */
            function (link) {
                _this.renderer.listen(link.nativeElement, 'click', (/**
                 * @return {?}
                 */
                function () {
                    _this._navbarService.setNavbarLinkClicks();
                }));
            }));
        }), 0);
    };
    NavlinksComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'navlinks',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    NavlinksComponent.ctorParameters = function () { return [
        { type: NavbarService },
        { type: Renderer2 }
    ]; };
    NavlinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return NavlinksComponent;
}());
export { NavlinksComponent };
if (false) {
    /** @type {?} */
    NavlinksComponent.prototype.links;
    /** @type {?} */
    NavlinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    NavlinksComponent.prototype._navbarService;
    /**
     * @type {?}
     * @private
     */
    NavlinksComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2bGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9uYXZsaW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJEO0lBYUUsMkJBQW9CLGNBQTZCLEVBQVUsUUFBbUI7UUFBMUQsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRnBFLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW1DLENBQUM7Ozs7SUFFbEYsOENBQWtCOzs7SUFBbEI7UUFBQSxpQkFRQztRQVBDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxJQUE2QjtnQkFDL0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7Z0JBQUU7b0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7Ozs7Z0JBbkJRLGFBQWE7Z0JBU3BCLFNBQVM7Ozt3QkFZUixlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7NEJBRzNFLE1BQU07O0lBYVQsd0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWpCWSxpQkFBaUI7OztJQUM1QixrQ0FDNkI7O0lBRTdCLHNDQUE4Qzs7Ozs7SUFFbEMsMkNBQXFDOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhclNlcnZpY2UgfSBmcm9tICcuL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3QsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduYXZsaW5rcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZsaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyByZWFkOiBFbGVtZW50UmVmLCBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaW5rczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKChsaW5rOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PikgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihsaW5rLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9uYXZiYXJTZXJ2aWNlLnNldE5hdmJhckxpbmtDbGlja3MoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19