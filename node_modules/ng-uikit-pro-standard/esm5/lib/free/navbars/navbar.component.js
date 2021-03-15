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
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, _navbarService, _cdRef, _ngZone, _document) {
        var _this = this;
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
        function (navbarLinkClicks) {
            _this.closeNavbarOnClick(navbarLinkClicks);
        }));
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.addTogglerIconClasses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach((/**
                 * @param {?} iconClass
                 * @return {?}
                 */
                function (iconClass) {
                    _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                }));
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NavbarComponent.prototype._listenToScroll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this._document, 'scroll')
                .pipe(takeUntil(_this._destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (window.pageYOffset > _this.scrollSensitivity) {
                    _this.renderer.addClass(_this.navbar.nativeElement, 'top-nav-collapse');
                }
                else {
                    _this.renderer.removeClass(_this.navbar.nativeElement, 'top-nav-collapse');
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDoubleNav = this.SideClass.split(' ');
        this.doubleNav = isDoubleNav.indexOf('double-nav') !== -1;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.containerInside) {
            /** @type {?} */
            var childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this.renderer.appendChild(_this.navbar.nativeElement, child);
                _this.container.nativeElement.remove();
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
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        this.ariaExpanded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }), 0);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }), this.duration);
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.shown) {
            this.shown = false;
            this.collapse = false;
            this.showClass = false;
            this.collapsing = true;
            this.ariaExpanded = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
            }), 0);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.collapsing = false;
                _this.collapse = true;
            }), this.duration);
        }
        this._cdRef.markForCheck();
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.containerInside) {
                return 'flex';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var breakpoint = 0;
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
                function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
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
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.firstElementChild) {
            if (this._itemsLength !==
                this.el.nativeElement.firstElementChild.firstElementChild.children.length) {
                this.height = this.el.nativeElement.firstElementChild.firstElementChild.clientHeight;
                this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
            }
            this._itemsLength = this.el.nativeElement.firstElementChild.firstElementChild.children.length;
        }
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
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
    NavbarComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NavbarService },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
    return NavbarComponent;
}());
export { NavbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFHTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQXVDRSx5QkFDUyxRQUFtQixFQUNsQixjQUE2QixFQUM3QixNQUF5QixFQUN6QixPQUFlLEVBQ0csU0FBYztRQUwxQyxpQkFhQztRQVpRLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNHLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFsQ2pDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRTFCLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUs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QVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQUN2QyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFDdEMsWUFBWSxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBc0k5QyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVEM0Msc0JBQUM7Q0FBQSxBQWxPRCxJQWtPQztTQTNOWSxlQUFlOzs7SUFDMUIseUNBQTJDOztJQUMzQyxvQ0FBMkI7O0lBQzNCLDBDQUFnQzs7SUFDaEMscUNBQXVDOztJQUN2Qyw0Q0FBaUM7O0lBQ2pDLDJDQUFrQzs7Ozs7SUFFbEMsb0NBQWlEOztJQUVqRCwyQ0FBc0I7O0lBQ3RCLGdDQUFjOztJQUVkLG9DQUEwQjs7SUFDMUIsaUNBQXNCOztJQUN0QixtQ0FBc0I7O0lBRXRCLG1DQUF1Qjs7SUFDdkIsb0NBQXlCOztJQUN6QixxQ0FBMEI7Ozs7O0lBRTFCLHVDQUF5Qjs7SUFFekIsdUNBQXFCOztJQUVyQiw2QkFBc0Q7O0lBQ3RELGlDQUEyRDs7SUFDM0QsaUNBQXVEOztJQUN2RCxvQ0FBZ0U7O0lBQ2hFLGtDQUE2RDs7SUFDN0QsZ0NBQXVFOztJQUdyRSxtQ0FBMEI7Ozs7O0lBQzFCLHlDQUFxQzs7Ozs7SUFDckMsaUNBQWlDOzs7OztJQUNqQyxrQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhclNlcnZpY2UgfSBmcm9tICcuL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbmplY3QsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlua3NDb21wb25lbnQgfSBmcm9tICcuL2xpbmtzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdmJhcnMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWNvbkJhY2tncm91bmQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBTaWRlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY29udGFpbmVySW5zaWRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sbGFwc2VJZCA9ICduYXZiYXJDb2xsYXBzZSc7XG4gIEBJbnB1dCgpIHNjcm9sbFNlbnNpdGl2aXR5ID0gMTIwO1xuICBASW5wdXQoKSBzY3JvbGxhYmxlTmF2YmFyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIG5hdmJhckxpbmtDbGlja3M6IGFueTtcbiAgc2hvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgZG91YmxlTmF2OiBib29sZWFuO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIHB1YmxpYyBkdXJhdGlvbiA9IDM1MDsgLy8gbXNcblxuICBwdWJsaWMgY29sbGFwc2UgPSB0cnVlO1xuICBwdWJsaWMgc2hvd0NsYXNzID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaXRlbXNMZW5ndGggPSAwO1xuXG4gIGFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ25hdmJhcicsIHsgc3RhdGljOiB0cnVlIH0pIGVsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtb2JpbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbW9iaWxlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCduYXYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZiYXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndG9nZ2xlcicsIHsgc3RhdGljOiBmYWxzZSB9KSB0b2dnbGVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKExpbmtzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgbGlua3M6IExpbmtzQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX25hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5fbmF2YmFyU2VydmljZVxuICAgICAgLmdldE5hdmJhckxpbmtDbGlja3MoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUobmF2YmFyTGlua0NsaWNrcyA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VOYXZiYXJPbkNsaWNrKG5hdmJhckxpbmtDbGlja3MpO1xuICAgICAgfSk7XG4gIH1cblxuICBjbG9zZU5hdmJhck9uQ2xpY2sobmF2YmFyTGlua0NsaWNrczogYW55KSB7XG4gICAgdGhpcy5uYXZiYXJMaW5rQ2xpY2tzID0gbmF2YmFyTGlua0NsaWNrcztcbiAgICBpZiAodGhpcy5zaG93Q2xhc3MpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZ2dsZXJJY29uQ2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy5pY29uQmFja2dyb3VuZCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pY29uQmFja2dyb3VuZCkpIHtcbiAgICAgICAgdGhpcy5pY29uQmFja2dyb3VuZC5mb3JFYWNoKGljb25DbGFzcyA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRvZ2dsZXIubmF0aXZlRWxlbWVudCwgaWNvbkNsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9nZ2xlci5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CYWNrZ3JvdW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub1Njcm9sbCgpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnc2Nyb2xsJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHRoaXMuc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5uYXZiYXIubmF0aXZlRWxlbWVudCwgJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCAndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBpc0RvdWJsZU5hdiA9IHRoaXMuU2lkZUNsYXNzLnNwbGl0KCcgJyk7XG4gICAgdGhpcy5kb3VibGVOYXYgPSBpc0RvdWJsZU5hdi5pbmRleE9mKCdkb3VibGUtbmF2JykgIT09IC0xO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5jb250YWluZXJJbnNpZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVucyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbnMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXZiYXIubmF0aXZlRWxlbWVudCwgY2hpbGQpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkVG9nZ2xlckljb25DbGFzc2VzKCk7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYWJsZU5hdmJhcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjb2xsYXBzZWQtbmF2YmFyLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsaW5nLW5hdmJhcicpKSB7XG4gICAgICB0aGlzLl9saXN0ZW5Ub1Njcm9sbCgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29sbGFwc2luZykge1xuICAgICAgaWYgKHRoaXMuc2hvd24pIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuc2hvd24gPSB0cnVlO1xuICAgIHRoaXMuY29sbGFwc2UgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgIH0sIDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgdGhpcy5zaG93Q2xhc3MgPSB0cnVlO1xuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLnNob3duKSB7XG4gICAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbGxhcHNlID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dDbGFzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMHB4Jyk7XG4gICAgICB9LCAwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVySW5zaWRlKSB7XG4gICAgICByZXR1cm4gJ2ZsZXgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pIG9uUmVzaXplKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgYnJlYWtwb2ludCA9IDA7XG5cbiAgICBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQteGwnKSkge1xuICAgICAgYnJlYWtwb2ludCA9IDEyMDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLlNpZGVDbGFzcy5pbmNsdWRlcygnbmF2YmFyLWV4cGFuZC1sZycpKSB7XG4gICAgICBicmVha3BvaW50ID0gOTkyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtbWQnKSkge1xuICAgICAgYnJlYWtwb2ludCA9IDc2ODtcbiAgICB9IGVsc2UgaWYgKHRoaXMuU2lkZUNsYXNzLmluY2x1ZGVzKCduYXZiYXItZXhwYW5kLXNtJykpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSA1NzY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aCArIDE7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoIDwgYnJlYWtwb2ludCkge1xuICAgICAgaWYgKCF0aGlzLnNob3duKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMHB4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcwJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnJyk7XG4gICAgICAgIH0sIDQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd0NsYXNzID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICcnKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9pdGVtc0xlbmd0aCAhPT1cbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pdGVtc0xlbmd0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==