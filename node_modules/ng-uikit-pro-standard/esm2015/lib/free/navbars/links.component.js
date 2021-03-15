/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output, Renderer2, } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
export class LinksComponent {
    /**
     * @param {?} _navbarService
     * @param {?} renderer
     */
    constructor(_navbarService, renderer) {
        this._navbarService = _navbarService;
        this.renderer = renderer;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.links.forEach((/**
             * @param {?} link
             * @return {?}
             */
            (link) => {
                this.renderer.listen(link.nativeElement, 'click', (/**
                 * @return {?}
                 */
                () => {
                    this._navbarService.setNavbarLinkClicks();
                }));
            }));
        }), 0);
    }
}
LinksComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'links',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
LinksComponent.ctorParameters = () => [
    { type: NavbarService },
    { type: Renderer2 }
];
LinksComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
    linkClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LinksComponent.prototype.links;
    /** @type {?} */
    LinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    LinksComponent.prototype._navbarService;
    /**
     * @type {?}
     * @private
     */
    LinksComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBU3JELE1BQU0sT0FBTyxjQUFjOzs7OztJQU16QixZQUFvQixjQUE2QixFQUFVLFFBQW1CO1FBQTFELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUZwRSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVtQyxDQUFDOzs7O0lBRWxGLGtCQUFrQjtRQUNoQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLElBQTZCLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7Z0JBQUUsR0FBRyxFQUFFO29CQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzVDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFuQlEsYUFBYTtZQVNwQixTQUFTOzs7b0JBWVIsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3dCQUczRSxNQUFNOzs7O0lBSFAsK0JBQzZCOztJQUU3QixtQ0FBOEM7Ozs7O0lBRWxDLHdDQUFxQzs7Ozs7SUFBRSxrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgUXVlcnlMaXN0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGlua3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgcmVhZDogRWxlbWVudFJlZiwgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlua3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubGlua3MuZm9yRWFjaCgobGluazogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4obGluay5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbmF2YmFyU2VydmljZS5zZXROYXZiYXJMaW5rQ2xpY2tzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==