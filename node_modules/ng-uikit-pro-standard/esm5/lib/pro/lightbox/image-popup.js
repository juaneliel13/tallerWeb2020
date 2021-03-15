/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { window } from '../../free/utils/facade/browser';
var ImageModalComponent = /** @class */ (function () {
    function ImageModalComponent(platformId, element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.isMobile = null;
        this.clicked = false;
        this.isBrowser = false;
        this.zoomed = 'inactive';
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.smooth = true;
        this.cancelEvent = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        this._element = this.element.nativeElement;
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    }
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.toggleZoomed = /**
     * @return {?}
     */
    function () {
        if (!this.clicked) {
            this.renderer.setStyle(this.galleryImg.nativeElement, 'transform', 'scale(1.0, 1.0)');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'animate', '300ms ease-out');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'cursor', 'zoom-out');
            this.clicked = true;
        }
        else if (this.clicked) {
            this.renderer.setStyle(this.galleryImg.nativeElement, 'transform', 'scale(0.9, 0.9)');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'animate', '300ms ease-in');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'cursor', 'zoom-in');
            this.clicked = false;
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.toggleRestart = /**
     * @return {?}
     */
    function () {
        this.zoomed = this.zoomed === 'inactive' ? 'active' : 'inactive';
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.closeGallery = /**
     * @return {?}
     */
    function () {
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.prevImage = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.nextImage = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ImageModalComponent.prototype.openGallery = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        // There was a problem, that with opened lightbox, if user have pressed the back button
        // (both physical device button and browser button)
        // the lightbox was not closed, but the whole application was closed (because of changing the URL).
        if (typeof history.pushState === 'function') {
            history.pushState('newstate', '', null);
            window.onpopstate = (/**
             * @return {?}
             */
            function () {
                if (_this.opened) {
                    _this.closeGallery();
                }
            });
        }
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (var i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.caption = this.modalImages[i].caption;
                this.loading = false;
                break;
            }
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.galleryDescription) {
                /** @type {?} */
                var descriptionHeight = _this.galleryDescription.nativeElement.clientHeight;
                _this.renderer.setStyle(_this.galleryImg.nativeElement, 'max-height', "calc(100% - " + (descriptionHeight + 25) + "px)");
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.fullScreen = /**
     * @return {?}
     */
    function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    Object.defineProperty(ImageModalComponent.prototype, "is_iPhone_or_iPod", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isBrowser) {
                if (navigator && navigator.userAgent && navigator.userAgent != null) {
                    /** @type {?} */
                    var strUserAgent = navigator.userAgent.toLowerCase();
                    /** @type {?} */
                    var arrMatches = strUserAgent.match(/ipad/);
                    if (arrMatches != null) {
                        return true;
                    }
                }
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ImageModalComponent.prototype.keyboardControl = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.opened) {
            // tslint:disable-next-line: deprecation
            if (event.keyCode === 39) {
                this.nextImage();
            }
            // tslint:disable-next-line: deprecation
            if (event.keyCode === 37) {
                this.prevImage();
            }
            // tslint:disable-next-line: deprecation
            if (event.keyCode === 27) {
                this.closeGallery();
            }
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    ImageModalComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.prevImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextImage();
        }
    };
    ImageModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-image-modal',
                    template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img\n      src=\"{{ !i.thumb ? i.img : i.thumb }}\"\n      class=\"ng-thumb\"\n      (click)=\"openGallery(index)\"\n      alt=\"Image {{ index + 1 }}\"\n    />\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style=\"z-index: 100000\">\n    <span *ngIf=\"modalImages\" class=\"info-text\"\n      >{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span\n    >\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a\n      *ngIf=\"!is_iPhone_or_iPod\"\n      class=\"fullscreen-toogle\"\n      [class.toggled]=\"fullscreen\"\n      (click)=\"fullScreen()\"\n    ></a>\n    <a class=\"zoom-toogle\" [class.zoom]=\"zoom\" (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img\n      #galleryImg\n      *ngIf=\"!loading\"\n      src=\"{{ imgSrc }}\"\n      [class.smooth]=\"smooth\"\n      class=\"effect\"\n      (swipeleft)=\"swipe($event.type)\"\n      (swiperight)=\"swipe($event.type)\"\n      (click)=\"toggleZoomed()\"\n      style=\"\"\n    />\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a\n      class=\"nav-left\"\n      *ngIf=\"modalImages && modalImages.length > 1 && !isMobile\"\n      (click)=\"prevImage()\"\n    >\n      <span></span>\n    </a>\n    <a\n      class=\"nav-right\"\n      *ngIf=\"modalImages && modalImages.length > 1 && !isMobile\"\n      (click)=\"nextImage()\"\n    >\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption #galleryDescription class=\"text-white lightbox-caption\">{{ caption }}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".bottom-bar{z-index:100000;position:absolute;left:0;right:0;width:100%;bottom:0!important}mdb-image-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}mdb-image-modal .no-margin [class*=col-]{padding:0;margin:0}mdb-image-modal .hide_lightbox{display:none}mdb-image-modal .ng-gallery{display:flex;width:auto;flex-wrap:wrap}mdb-image-modal img.ng-thumb{width:100%;height:100%;float:none;display:block;cursor:zoom-in;transition:.3s ease-in-out}mdb-image-modal img.ng-thumb:hover{opacity:.85}mdb-image-modal .ng-overlay{outline:0;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;opacity:1;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}mdb-image-modal .ng-overlay .ng-gallery-content{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;text-align:center;overflow:hidden}mdb-image-modal .ng-overlay .ng-gallery-content>a.close-popup{font-size:42px;float:right;color:#fff;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:0}mdb-image-modal .ng-overlay .ng-gallery-content>a.download-image{font-size:42px;float:right;color:#fff;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:63px}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left span{display:block;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left span:before{content:' ';display:block;width:32px;height:30px;background-position:-138px -44px;opacity:.75;transition:opacity .2s;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left:hover span:before{opacity:1}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right span{display:block;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right span:before{content:' ';display:block;width:32px;height:30px;background-position:-94px -44px;opacity:.75;transition:opacity .2s;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right:hover span:before{opacity:1}mdb-image-modal .ng-overlay .ng-gallery-content>img{max-width:100%!important;max-width:1600px;max-height:1067px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;position:absolute;margin:auto;top:0;left:0;right:0;bottom:0}mdb-image-modal .ng-overlay .ng-gallery-content>img.smooth{transition:.2s}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-left,mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-right{color:#fff;text-decoration:none;font-size:60px;cursor:pointer;outline:0}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-left{position:fixed;left:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-right{position:fixed;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-image-modal .ng-overlay .ng-gallery-content>img.effect{-webkit-animation:.5s fadeIn;animation:.5s fadeIn}mdb-image-modal .ng-overlay .ng-gallery-content>span.info-text{color:#fff;display:inline-block;width:100%;height:20px;font-weight:700;text-align:center;position:fixed;left:0;right:0;bottom:100px;font-size:16px}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper{width:400px;height:70px;text-align:center;position:fixed;bottom:20px;left:0;right:0;margin-left:auto;margin-right:auto;overflow-x:hidden}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails{width:4000px;height:70px}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img{width:auto;height:70px;float:left;margin-right:10px;cursor:pointer;opacity:.6}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img.active,mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img:hover{transition:opacity .25s;opacity:.6}@-webkit-keyframes fadeIn{from{opacity:.3}to{opacity:1}}@keyframes fadeIn{from{opacity:.3}to{opacity:1}}.lightbox-caption{font-size:13px;max-height:50px}.effect{-webkit-transform:scale(.9,.9);transform:scale(.9,.9)}.top-bar{position:absolute;top:0;left:0;right:0;height:44px;width:100%;z-index:10001}.top-bar .info-text{position:absolute;height:44px;top:0;left:0;font-size:16px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.top-bar .close-popup{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;background-position:0 -44px;opacity:.75;transition:opacity .2s}.top-bar .close-popup:hover{opacity:1}.top-bar .fullscreen-toogle{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;opacity:.75;transition:opacity .2s}.top-bar .fullscreen-toogle.toggled{background-position:-44px 0}.top-bar .fullscreen-toogle:hover{opacity:1}.top-bar .zoom-toogle{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;background-position:-88px 0;opacity:.75;transition:opacity .2s}.top-bar .zoom-toogle.zoom{background-position:-132px 0}.top-bar .zoom-toogle:hover{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    ImageModalComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ImageModalComponent.propDecorators = {
        modalImages: [{ type: Input }],
        imagePointer: [{ type: Input }],
        fullscreen: [{ type: Input }],
        zoom: [{ type: Input }],
        smooth: [{ type: Input }],
        type: [{ type: Input }],
        galleryImg: [{ type: ViewChild, args: ['galleryImg', { static: false },] }],
        galleryDescription: [{ type: ViewChild, args: ['galleryDescription', { static: false },] }],
        cancelEvent: [{ type: Output }],
        keyboardControl: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return ImageModalComponent;
}());
export { ImageModalComponent };
if (false) {
    /** @type {?} */
    ImageModalComponent.prototype._element;
    /** @type {?} */
    ImageModalComponent.prototype.opened;
    /** @type {?} */
    ImageModalComponent.prototype.imgSrc;
    /** @type {?} */
    ImageModalComponent.prototype.currentImageIndex;
    /** @type {?} */
    ImageModalComponent.prototype.loading;
    /** @type {?} */
    ImageModalComponent.prototype.showRepeat;
    /** @type {?} */
    ImageModalComponent.prototype.openModalWindow;
    /** @type {?} */
    ImageModalComponent.prototype.caption;
    /** @type {?} */
    ImageModalComponent.prototype.isMobile;
    /** @type {?} */
    ImageModalComponent.prototype.clicked;
    /** @type {?} */
    ImageModalComponent.prototype.isBrowser;
    /** @type {?} */
    ImageModalComponent.prototype.zoomed;
    /** @type {?} */
    ImageModalComponent.prototype.SWIPE_ACTION;
    /** @type {?} */
    ImageModalComponent.prototype.modalImages;
    /** @type {?} */
    ImageModalComponent.prototype.imagePointer;
    /** @type {?} */
    ImageModalComponent.prototype.fullscreen;
    /** @type {?} */
    ImageModalComponent.prototype.zoom;
    /** @type {?} */
    ImageModalComponent.prototype.smooth;
    /** @type {?} */
    ImageModalComponent.prototype.type;
    /** @type {?} */
    ImageModalComponent.prototype.galleryImg;
    /** @type {?} */
    ImageModalComponent.prototype.galleryDescription;
    /** @type {?} */
    ImageModalComponent.prototype.cancelEvent;
    /** @type {?} */
    ImageModalComponent.prototype.element;
    /** @type {?} */
    ImageModalComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJekQ7SUFtQ0UsNkJBQ3VCLFVBQWtCLEVBQ2hDLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTlCckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUkxQixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQUcsVUFBVSxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQztRQU1qRCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBTWIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEs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QztTQXBMWSxtQkFBbUI7OztJQUM5Qix1Q0FBcUI7O0lBQ3JCLHFDQUFzQjs7SUFDdEIscUNBQXNCOztJQUN0QixnREFBaUM7O0lBQ2pDLHNDQUF1Qjs7SUFDdkIseUNBQTBCOztJQUMxQiw4Q0FBNEI7O0lBQzVCLHNDQUF1Qjs7SUFFdkIsdUNBQXFCOztJQUNyQixzQ0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIscUNBQW9COztJQUVwQiwyQ0FBMEQ7O0lBRTFELDBDQUEwQjs7SUFDMUIsMkNBQThCOztJQUM5Qix5Q0FBNkI7O0lBQzdCLG1DQUF1Qjs7SUFDdkIscUNBQXVCOztJQUN2QixtQ0FBc0I7O0lBRXRCLHlDQUFtRTs7SUFDbkUsaURBQW1GOztJQUVuRiwwQ0FBZ0Q7O0lBSTlDLHNDQUEwQjs7SUFDMUIsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcblxuZGVjbGFyZSB2YXIgc2NyZWVuZnVsbDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItaW1hZ2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2ltYWdlLXBvcHVwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWdodGJveC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIF9lbGVtZW50OiBhbnk7XG4gIHB1YmxpYyBvcGVuZWQgPSBmYWxzZTtcbiAgcHVibGljIGltZ1NyYzogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudEltYWdlSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHNob3dSZXBlYXQgPSBmYWxzZTtcbiAgcHVibGljIG9wZW5Nb2RhbFdpbmRvdzogYW55O1xuICBwdWJsaWMgY2FwdGlvbjogc3RyaW5nO1xuXG4gIGlzTW9iaWxlOiBhbnkgPSBudWxsO1xuICBjbGlja2VkOiBhbnkgPSBmYWxzZTtcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcbiAgem9vbWVkID0gJ2luYWN0aXZlJztcblxuICBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG5cbiAgQElucHV0KCkgbW9kYWxJbWFnZXM6IGFueTtcbiAgQElucHV0KCkgaW1hZ2VQb2ludGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHpvb206IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNtb290aCA9IHRydWU7XG4gIEBJbnB1dCgpIHR5cGU6IFN0cmluZztcblxuICBAVmlld0NoaWxkKCdnYWxsZXJ5SW1nJywgeyBzdGF0aWM6IGZhbHNlIH0pIGdhbGxlcnlJbWc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2dhbGxlcnlEZXNjcmlwdGlvbicsIHsgc3RhdGljOiBmYWxzZSB9KSBnYWxsZXJ5RGVzY3JpcHRpb246IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGNhbmNlbEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVpvb21lZCgpIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICdzY2FsZSgxLjAsIDEuMCknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICdhbmltYXRlJywgJzMwMG1zIGVhc2Utb3V0Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2FsbGVyeUltZy5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ3pvb20tb3V0Jyk7XG4gICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2FsbGVyeUltZy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3NjYWxlKDAuOSwgMC45KScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ2FuaW1hdGUnLCAnMzAwbXMgZWFzZS1pbicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICd6b29tLWluJyk7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVSZXN0YXJ0KCkge1xuICAgIHRoaXMuem9vbWVkID0gdGhpcy56b29tZWQgPT09ICdpbmFjdGl2ZScgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLmltYWdlUG9pbnRlciA+PSAwKSB7XG4gICAgICB0aGlzLnNob3dSZXBlYXQgPSBmYWxzZTtcbiAgICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5pbWFnZVBvaW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dSZXBlYXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlR2FsbGVyeSgpIHtcbiAgICB0aGlzLnpvb20gPSBmYWxzZTtcbiAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkKSB7XG4gICAgICBzY3JlZW5mdWxsLmV4aXQoKTtcbiAgICB9XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbmNlbEV2ZW50LmVtaXQobnVsbCk7XG4gIH1cblxuICBwcmV2SW1hZ2UoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4LS07XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlSW5kZXggPCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5tb2RhbEltYWdlcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCsrO1xuICAgIGlmICh0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aCA9PT0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5jdXJyZW50SW1hZ2VJbmRleCk7XG4gIH1cblxuICBvcGVuR2FsbGVyeShpbmRleDogYW55KSB7XG4gICAgLy8gVGhlcmUgd2FzIGEgcHJvYmxlbSwgdGhhdCB3aXRoIG9wZW5lZCBsaWdodGJveCwgaWYgdXNlciBoYXZlIHByZXNzZWQgdGhlIGJhY2sgYnV0dG9uXG4gICAgLy8gKGJvdGggcGh5c2ljYWwgZGV2aWNlIGJ1dHRvbiBhbmQgYnJvd3NlciBidXR0b24pXG4gICAgLy8gdGhlIGxpZ2h0Ym94IHdhcyBub3QgY2xvc2VkLCBidXQgdGhlIHdob2xlIGFwcGxpY2F0aW9uIHdhcyBjbG9zZWQgKGJlY2F1c2Ugb2YgY2hhbmdpbmcgdGhlIFVSTCkuXG4gICAgaWYgKHR5cGVvZiBoaXN0b3J5LnB1c2hTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoJ25ld3N0YXRlJywgJycsIG51bGwpO1xuICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICAgIHRoaXMuY2xvc2VHYWxsZXJ5KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAxO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCkge1xuICAgICAgICB0aGlzLmltZ1NyYyA9IHRoaXMubW9kYWxJbWFnZXNbaV0uaW1nO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmNhcHRpb247XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nYWxsZXJ5RGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25IZWlnaHQgPSB0aGlzLmdhbGxlcnlEZXNjcmlwdGlvbi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbWF4LWhlaWdodCcsXG4gICAgICAgICAgYGNhbGMoMTAwJSAtICR7ZGVzY3JpcHRpb25IZWlnaHQgKyAyNX1weClgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBmdWxsU2NyZWVuKCk6IGFueSB7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC50b2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNfaVBob25lX29yX2lQb2QoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0clVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgYXJyTWF0Y2hlcyA9IHN0clVzZXJBZ2VudC5tYXRjaCgvaXBhZC8pO1xuICAgICAgICBpZiAoYXJyTWF0Y2hlcyAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXG4gIGtleWJvYXJkQ29udHJvbChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMubmV4dEltYWdlKCk7XG4gICAgICB9XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGhpcy5wcmV2SW1hZ2UoKTtcbiAgICAgIH1cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlR2FsbGVyeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXBlKGFjdGlvbjogU3RyaW5nID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xuICAgICAgdGhpcy5wcmV2SW1hZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUKSB7XG4gICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgIH1cbiAgfVxufVxuIl19