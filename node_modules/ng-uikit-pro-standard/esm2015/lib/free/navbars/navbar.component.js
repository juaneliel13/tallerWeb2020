/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChild, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, Inject, NgZone, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { LinksComponent } from './links.component';
import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
export class NavbarComponent {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     * @param {?} _cdRef
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(renderer, _navbarService, _cdRef, _ngZone, _document) {
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this._document = _document;
        this.containerInside = true;
        this.collapseId = 'navbarCollapse';
        this.scrollSensitivity = 120;
        this.scrollableNavbar = false;
        this._destroy$ = new Subject();
        this.shown = false;
        this.duration = 350; // ms
        // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        this._itemsLength = 0;
        this.ariaExpanded = false;
        this._navbarService
            .getNavbarLinkClicks()
            .pipe(takeUntil(this._destroy$))
            .subscribe((/**
         * @param {?} navbarLinkClicks
         * @return {?}
         */
        navbarLinkClicks => {
            this.closeNavbarOnClick(navbarLinkClicks);
        }));
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    closeNavbarOnClick(navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    addTogglerIconClasses() {
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach((/**
                 * @param {?} iconClass
                 * @return {?}
                 */
                iconClass => {
                    this.renderer.addClass(this.toggler.nativeElement, iconClass);
                }));
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _listenToScroll() {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(this._document, 'scroll')
                .pipe(takeUntil(this._destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (window.pageYOffset > this.scrollSensitivity) {
                    this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
                }
                else {
                    this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isDoubleNav = this.SideClass.split(' ');
        this.doubleNav = isDoubleNav.indexOf('double-nav') !== -1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.containerInside) {
            /** @type {?} */
            const childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach((/**
             * @param {?} child
             * @return {?}
             */
            child => {
                this.renderer.appendChild(this.navbar.nativeElement, child);
                this.container.nativeElement.remove();
            }));
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
        if (this.scrollableNavbar) {
            this.renderer.addClass(this.el.nativeElement, 'collapsed-navbar-scroll');
        }
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            this._listenToScroll();
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    /**
     * @return {?}
     */
    show() {
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        this.ariaExpanded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.height = this.el.nativeElement.scrollHeight;
            this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
        }), 0);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.collapsing = false;
            this.collapse = true;
            this.showClass = true;
        }), this.duration);
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.shown) {
            this.shown = false;
            this.collapse = false;
            this.showClass = false;
            this.collapsing = true;
            this.ariaExpanded = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
            }), 0);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.collapsing = false;
                this.collapse = true;
            }), this.duration);
        }
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        if (!this.containerInside) {
            return 'flex';
        }
        else {
            return '';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        /** @type {?} */
        let breakpoint = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoint = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoint = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoint = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoint = 576;
        }
        else {
            breakpoint = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoint) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.height = this.el.nativeElement.scrollHeight;
                    this.collapse = true;
                    this.renderer.setStyle(this.el.nativeElement, 'opacity', '');
                }), 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.ariaExpanded = false;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.el.nativeElement.firstElementChild) {
            if (this._itemsLength !==
                this.el.nativeElement.firstElementChild.firstElementChild.children.length) {
                this.height = this.el.nativeElement.firstElementChild.firstElementChild.clientHeight;
                this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
            }
            this._itemsLength = this.el.nativeElement.firstElementChild.firstElementChild.children.length;
        }
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{ SideClass }}\" #nav>\n  <div [ngClass]=\"{ container: containerInside }\" [ngStyle]=\"{ display: displayStyle }\" #container>\n    <ng-content select=\"mdb-navbar-brand\"></ng-content>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button\n        #toggler\n        class=\"navbar-toggler\"\n        type=\"button\"\n        [attr.aria-controls]=\"collapseId\"\n        [attr.aria-expanded]=\"ariaExpanded\"\n        aria-label=\"Toggle navigation\"\n        (click)=\"toggle(); $event.preventDefault()\"\n        mdbWavesEffect\n        *ngIf=\"this.el.nativeElement.children.length !== 0\"\n      >\n        <span class=\"navbar-toggler-icon\"> </span>\n      </button>\n    </div>\n    <div\n      #navbar\n      [attr.id]=\"collapseId\"\n      [style.height]=\"height\"\n      class=\"navbar-collapse collapse\"\n      [ngClass]=\"{ collapse: collapse, show: showClass, collapsing: collapsing }\"\n    >\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".navbar{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);font-weight:300}.navbar form .md-form input{margin:0 5px 1px 8px}.navbar .breadcrumb{margin:0;padding:.3rem 0 0 1rem;background-color:inherit;font-size:15px;font-weight:300}.navbar .breadcrumb .breadcrumb-item{color:#fff}.navbar .breadcrumb .breadcrumb-item.active,.navbar .breadcrumb .breadcrumb-item:before{color:rgba(255,255,255,.65)}.navbar .navbar-toggler{outline:0;border-width:0}.navbar .nav-flex-icons{flex-direction:row}.navbar .nav-item .nav-link{display:block}.navbar .nav-item .nav-link.disabled:active{pointer-events:none}.navbar .nav-item .nav-link .fab,.navbar .nav-item .nav-link .far,.navbar .nav-item .nav-link .fas{padding-right:3px;padding-left:3px}@media (max-width:992px){.navbar .container{width:100%}.navbar .container .navbar-toggler-right{right:0}.navbar .nav-item .nav-link{padding-right:6px;padding-left:6px}.double-nav{padding-top:4px;padding-bottom:4px}}.navbar .dropdown-menu{position:absolute!important;margin-top:0}.navbar .dropdown-menu a{padding:10px;font-size:.9375rem;font-weight:300;color:#000}@media (max-width:600px){.navbar .dropdown-menu form{width:17rem}}.navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled,.navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled:hover{color:rgba(0,0,0,.5)}.navbar.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");cursor:pointer}.navbar.navbar-light .breadcrumb .nav-item .nav-link,.navbar.navbar-light .navbar-nav .nav-item .nav-link{color:#000;transition:.35s}.navbar.navbar-light .breadcrumb .nav-item .nav-link:hover,.navbar.navbar-light .navbar-nav .nav-item .nav-link:hover{color:rgba(0,0,0,.75)}.navbar.navbar-light .breadcrumb .nav-item.active>.nav-link,.navbar.navbar-light .navbar-nav .nav-item.active>.nav-link{background-color:rgba(0,0,0,.1)}.navbar.navbar-light .breadcrumb .nav-item.active>.nav-link:hover,.navbar.navbar-light .navbar-nav .nav-item.active>.nav-link:hover,.navbar.navbar-light .navbar-toggler{color:#000}.navbar.navbar-light form .md-form input{border-bottom:1px solid #000}.navbar.navbar-light form .md-form input:focus:not([readonly]){border-color:#4285f4}.navbar.navbar-light form .md-form .form-control{color:#000}.navbar.navbar-light form .md-form .form-control::-webkit-input-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::-moz-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::-ms-input-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::placeholder{color:#000;font-weight:300}.navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled,.navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled:hover{color:rgba(255,255,255,.5)}.navbar.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");cursor:pointer}.navbar.navbar-dark .breadcrumb .nav-item .nav-link,.navbar.navbar-dark .navbar-nav .nav-item .nav-link{color:#fff;transition:.35s}.navbar.navbar-dark .breadcrumb .nav-item .nav-link:hover,.navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover{color:rgba(255,255,255,.75)}.navbar.navbar-dark .breadcrumb .nav-item.active>.nav-link,.navbar.navbar-dark .navbar-nav .nav-item.active>.nav-link{background-color:rgba(255,255,255,.1)}.navbar.navbar-dark .breadcrumb .nav-item.active>.nav-link:hover,.navbar.navbar-dark .navbar-nav .nav-item.active>.nav-link:hover,.navbar.navbar-dark .navbar-toggler{color:#fff}.navbar.navbar-dark form .md-form input{border-bottom:1px solid #fff}.navbar.navbar-dark form .md-form input:focus:not([readonly]){border-color:#4285f4}.navbar.navbar-dark form .md-form .form-control{color:#fff}.navbar.navbar-dark form .md-form .form-control::-webkit-input-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::-moz-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::-ms-input-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::placeholder{color:#fff;font-weight:300}@media (min-width:600px){.navbar .dropdown-menu form{width:22rem}.navbar.scrolling-navbar{transition:background .5s ease-in-out,padding .5s ease-in-out;padding-top:12px;padding-bottom:12px}.navbar.scrolling-navbar .navbar-nav>li{transition-duration:1s}.navbar.scrolling-navbar.top-nav-collapse{padding-top:5px;padding-bottom:5px}}@media (min-width:1200px){.navbar.navbar-expand-xl links,.navbar.navbar-expand-xl navlinks{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%}}@media (min-width:992px){.navbar>logo>div>a img{margin-left:20px}.navbar.navbar-expand-lg links,.navbar.navbar-expand-lg navlinks{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%}}@media (min-width:768px){.navbar.navbar-expand-md links,.navbar.navbar-expand-md navlinks{display:flex;flex-direction:row;width:100%}}@media (min-width:576px){.navbar.navbar-expand-sm links,.navbar.navbar-expand-sm navlinks{display:flex;flex-direction:row;width:100%}}@media all and (max-width:992px){.collapsed-navbar-scroll{max-height:calc(100vh - 40px);overflow-y:scroll}}.navbar-container{order:-1;width:50px!important;padding-left:5px;padding-right:5px}.navbar-nav .dropdown-menu-right.dropdown-menu{left:unset}.navbar-nav .dropdown-menu{top:100%!important;-webkit-transform:translate3d(0,0,0)!important;transform:translate3d(0,0,0)!important}.breadcrumbs{display:flex;padding-left:5px;padding-right:5px;order:0;align-items:center}@media (min-width:1441px){.breadcrumbs{margin-left:-.6rem}}@supports (-ms-ime-align:auto){.ie-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}@media all and (min-width:992px){.ie-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.ie-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.ie-nav .navbar-brand>img{margin-top:-2px;padding-right:16px}.intro-non-fixed-nav>links .navbar-collapse{display:inline-flex!important;align-items:center!important;justify-content:space-between!important}.intro-fixed-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.intro-fixed-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.intro-fixed-nav .navbar-brand img{margin-top:-2px;padding-right:16px}}.intro-fixed-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}@media all and (-ms-high-contrast:none) and (min-width:992px),all and (-ms-high-contrast:active) and (min-width:992px){.ie-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.ie-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.ie-nav .navbar-brand>img{margin-top:-2px;padding-right:16px}.intro-non-fixed-nav>links .navbar-collapse{display:inline-flex!important;align-items:center!important;justify-content:space-between!important}.intro-fixed-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.intro-fixed-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.intro-fixed-nav .navbar-brand img{margin-top:-2px;padding-right:16px}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ie-nav .navbar-toggler,.intro-fixed-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:none}.navbar .nav-item.avatar{padding:0}.navbar .nav-item.avatar.active{background-color:transparent!important}.navbar .nav-item.avatar .dropdown-toggle{padding:0}.navbar .nav-item.avatar .dropdown-toggle img{height:35px}.navbar .nav-item.avatar .dropdown-toggle:after{display:none}@media (max-width:768px){.double-nav .container{padding-left:0;padding-right:0}}.double-nav a{font-size:15px;color:#fff}.double-nav .breadcrumb-dn p{margin:0;padding-top:0;padding-left:1rem}@media (max-width:993px){.double-nav .breadcrumb-dn{display:none}}.double-nav .button-collapse{left:10px;font-size:1.5rem}@media (min-width:1440px){.double-nav .button-collapse{display:none}}@media (max-width:1440px){.double-nav .button-collapse{display:block;position:relative;font-size:1.4rem;margin-right:10px;margin-left:10px}}"]
            }] }
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NavbarService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NavbarComponent.propDecorators = {
    iconBackground: [{ type: Input }],
    SideClass: [{ type: Input }],
    containerInside: [{ type: Input }],
    collapseId: [{ type: Input }],
    scrollSensitivity: [{ type: Input }],
    scrollableNavbar: [{ type: Input }],
    el: [{ type: ViewChild, args: ['navbar', { static: true },] }],
    mobile: [{ type: ViewChild, args: ['mobile', { static: false },] }],
    navbar: [{ type: ViewChild, args: ['nav', { static: true },] }],
    container: [{ type: ViewChild, args: ['container', { static: true },] }],
    toggler: [{ type: ViewChild, args: ['toggler', { static: false },] }],
    links: [{ type: ContentChild, args: [LinksComponent, { static: false },] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.iconBackground;
    /** @type {?} */
    NavbarComponent.prototype.SideClass;
    /** @type {?} */
    NavbarComponent.prototype.containerInside;
    /** @type {?} */
    NavbarComponent.prototype.collapseId;
    /** @type {?} */
    NavbarComponent.prototype.scrollSensitivity;
    /** @type {?} */
    NavbarComponent.prototype.scrollableNavbar;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._destroy$;
    /** @type {?} */
    NavbarComponent.prototype.navbarLinkClicks;
    /** @type {?} */
    NavbarComponent.prototype.shown;
    /** @type {?} */
    NavbarComponent.prototype.doubleNav;
    /** @type {?} */
    NavbarComponent.prototype.height;
    /** @type {?} */
    NavbarComponent.prototype.duration;
    /** @type {?} */
    NavbarComponent.prototype.collapse;
    /** @type {?} */
    NavbarComponent.prototype.showClass;
    /** @type {?} */
    NavbarComponent.prototype.collapsing;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._itemsLength;
    /** @type {?} */
    NavbarComponent.prototype.ariaExpanded;
    /** @type {?} */
    NavbarComponent.prototype.el;
    /** @type {?} */
    NavbarComponent.prototype.mobile;
    /** @type {?} */
    NavbarComponent.prototype.navbar;
    /** @type {?} */
    NavbarComponent.prototype.container;
    /** @type {?} */
    NavbarComponent.prototype.toggler;
    /** @type {?} */
    NavbarComponent.prototype.links;
    /** @type {?} */
    NavbarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._navbarService;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._cdRef;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFHTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVMzQyxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7SUFnQzFCLFlBQ1MsUUFBbUIsRUFDbEIsY0FBNkIsRUFDN0IsTUFBeUIsRUFDekIsT0FBZSxFQUNHLFNBQWM7UUFKakMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ0csY0FBUyxHQUFULFNBQVMsQ0FBSztRQWxDakMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZUFBVSxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFMUIsY0FBUyxHQUFrQixJQUFJ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RTtvQkFDdEMsWUFBWSxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7dUJBc0k5QyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbkt6Qyx5Q0FBMkM7O0lBQzNDLG9DQUEyQjs7SUFDM0IsMENBQWdDOztJQUNoQyxxQ0FBdUM7O0lBQ3ZDLDRDQUFpQzs7SUFDakMsMkNBQWtDOzs7OztJQUVsQyxvQ0FBaUQ7O0lBRWpELDJDQUFzQjs7SUFDdEIsZ0NBQWM7O0lBRWQsb0NBQTBCOztJQUMxQixpQ0FBc0I7O0lBQ3RCLG1DQUFzQjs7SUFFdEIsbUNBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7Ozs7SUFFMUIsdUNBQXlCOztJQUV6Qix1Q0FBcUI7O0lBRXJCLDZCQUFzRDs7SUFDdEQsaUNBQTJEOztJQUMzRCxpQ0FBdUQ7O0lBQ3ZELG9DQUFnRTs7SUFDaEUsa0NBQTZEOztJQUM3RCxnQ0FBdUU7O0lBR3JFLG1DQUEwQjs7Ozs7SUFDMUIseUNBQXFDOzs7OztJQUNyQyxpQ0FBaUM7Ozs7O0lBQ2pDLGtDQUF1Qjs7Ozs7SUFDdkIsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyU2VydmljZSB9IGZyb20gJy4vbmF2YmFyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEluamVjdCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMaW5rc0NvbXBvbmVudCB9IGZyb20gJy4vbGlua3MuY29tcG9uZW50JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFycy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpY29uQmFja2dyb3VuZDogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIFNpZGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjb250YWluZXJJbnNpZGUgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xsYXBzZUlkID0gJ25hdmJhckNvbGxhcHNlJztcbiAgQElucHV0KCkgc2Nyb2xsU2Vuc2l0aXZpdHkgPSAxMjA7XG4gIEBJbnB1dCgpIHNjcm9sbGFibGVOYXZiYXIgPSBmYWxzZTtcblxuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgbmF2YmFyTGlua0NsaWNrczogYW55O1xuICBzaG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkb3VibGVOYXY6IGJvb2xlYW47XG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgcHVibGljIGR1cmF0aW9uID0gMzUwOyAvLyBtc1xuXG4gIHB1YmxpYyBjb2xsYXBzZSA9IHRydWU7XG4gIHB1YmxpYyBzaG93Q2xhc3MgPSBmYWxzZTtcbiAgcHVibGljIGNvbGxhcHNpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9pdGVtc0xlbmd0aCA9IDA7XG5cbiAgYXJpYUV4cGFuZGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnbmF2YmFyJywgeyBzdGF0aWM6IHRydWUgfSkgZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vYmlsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBtb2JpbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25hdicsIHsgc3RhdGljOiB0cnVlIH0pIG5hdmJhcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0b2dnbGVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRvZ2dsZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoTGlua3NDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBsaW5rczogTGlua3NDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSxcbiAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLl9uYXZiYXJTZXJ2aWNlXG4gICAgICAuZ2V0TmF2YmFyTGlua0NsaWNrcygpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShuYXZiYXJMaW5rQ2xpY2tzID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZU5hdmJhck9uQ2xpY2sobmF2YmFyTGlua0NsaWNrcyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTmF2YmFyT25DbGljayhuYXZiYXJMaW5rQ2xpY2tzOiBhbnkpIHtcbiAgICB0aGlzLm5hdmJhckxpbmtDbGlja3MgPSBuYXZiYXJMaW5rQ2xpY2tzO1xuICAgIGlmICh0aGlzLnNob3dDbGFzcykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9nZ2xlckljb25DbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmljb25CYWNrZ3JvdW5kKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmljb25CYWNrZ3JvdW5kKSkge1xuICAgICAgICB0aGlzLmljb25CYWNrZ3JvdW5kLmZvckVhY2goaWNvbkNsYXNzID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9nZ2xlci5uYXRpdmVFbGVtZW50LCBpY29uQ2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b2dnbGVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvbkJhY2tncm91bmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvU2Nyb2xsKCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdzY3JvbGwnKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5zY3JvbGxTZW5zaXRpdml0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCAndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubmF2YmFyLm5hdGl2ZUVsZW1lbnQsICd0b3AtbmF2LWNvbGxhcHNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGlzRG91YmxlTmF2ID0gdGhpcy5TaWRlQ2xhc3Muc3BsaXQoJyAnKTtcbiAgICB0aGlzLmRvdWJsZU5hdiA9IGlzRG91YmxlTmF2LmluZGV4T2YoJ2RvdWJsZS1uYXYnKSAhPT0gLTE7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckluc2lkZSkge1xuICAgICAgY29uc3QgY2hpbGRyZW5zID0gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgIGNoaWxkcmVucy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCBjaGlsZCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRUb2dnbGVySWNvbkNsYXNzZXMoKTtcbiAgICBpZiAodGhpcy5zY3JvbGxhYmxlTmF2YmFyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNlZC1uYXZiYXItc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmF2YmFyLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY3JvbGxpbmctbmF2YmFyJykpIHtcbiAgICAgIHRoaXMuX2xpc3RlblRvU2Nyb2xsKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy5jb2xsYXBzaW5nKSB7XG4gICAgICBpZiAodGhpcy5zaG93bikge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5zaG93biA9IHRydWU7XG4gICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2luZyA9IHRydWU7XG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfSwgMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xsYXBzZSA9IHRydWU7XG4gICAgICB0aGlzLnNob3dDbGFzcyA9IHRydWU7XG4gICAgfSwgdGhpcy5kdXJhdGlvbik7XG5cbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd24pIHtcbiAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd0NsYXNzID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbGxhcHNpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICcwcHgnKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZGlzcGxheVN0eWxlKCkge1xuICAgIGlmICghdGhpcy5jb250YWluZXJJbnNpZGUpIHtcbiAgICAgIHJldHVybiAnZmxleCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSkgb25SZXNpemUoZXZlbnQ6IGFueSkge1xuICAgIGxldCBicmVha3BvaW50ID0gMDtcblxuICAgIGlmICh0aGlzLlNpZGVDbGFzcy5pbmNsdWRlcygnbmF2YmFyLWV4cGFuZC14bCcpKSB7XG4gICAgICBicmVha3BvaW50ID0gMTIwMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuU2lkZUNsYXNzLmluY2x1ZGVzKCduYXZiYXItZXhwYW5kLWxnJykpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSA5OTI7XG4gICAgfSBlbHNlIGlmICh0aGlzLlNpZGVDbGFzcy5pbmNsdWRlcygnbmF2YmFyLWV4cGFuZC1tZCcpKSB7XG4gICAgICBicmVha3BvaW50ID0gNzY4O1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtc20nKSkge1xuICAgICAgYnJlYWtwb2ludCA9IDU3NjtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtwb2ludCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoICsgMTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPCBicmVha3BvaW50KSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd24pIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzAnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcnKTtcbiAgICAgICAgfSwgNCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93Q2xhc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJycpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2l0ZW1zTGVuZ3RoICE9PVxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2l0ZW1zTGVuZ3RoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19