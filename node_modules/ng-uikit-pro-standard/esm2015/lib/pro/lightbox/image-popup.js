/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { window } from '../../free/utils/facade/browser';
export class ImageModalComponent {
    /**
     * @param {?} platformId
     * @param {?} element
     * @param {?} renderer
     */
    constructor(platformId, element, renderer) {
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
    toggleZoomed() {
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
    }
    /**
     * @return {?}
     */
    toggleRestart() {
        this.zoomed = this.zoomed === 'inactive' ? 'active' : 'inactive';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    }
    /**
     * @return {?}
     */
    closeGallery() {
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    }
    /**
     * @return {?}
     */
    prevImage() {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    }
    /**
     * @return {?}
     */
    nextImage() {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openGallery(index) {
        // There was a problem, that with opened lightbox, if user have pressed the back button
        // (both physical device button and browser button)
        // the lightbox was not closed, but the whole application was closed (because of changing the URL).
        if (typeof history.pushState === 'function') {
            history.pushState('newstate', '', null);
            window.onpopstate = (/**
             * @return {?}
             */
            () => {
                if (this.opened) {
                    this.closeGallery();
                }
            });
        }
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (let i = 0; i < this.modalImages.length; i++) {
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
        () => {
            if (this.galleryDescription) {
                /** @type {?} */
                const descriptionHeight = this.galleryDescription.nativeElement.clientHeight;
                this.renderer.setStyle(this.galleryImg.nativeElement, 'max-height', `calc(100% - ${descriptionHeight + 25}px)`);
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    fullScreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
    /**
     * @return {?}
     */
    get is_iPhone_or_iPod() {
        if (this.isBrowser) {
            if (navigator && navigator.userAgent && navigator.userAgent != null) {
                /** @type {?} */
                const strUserAgent = navigator.userAgent.toLowerCase();
                /** @type {?} */
                const arrMatches = strUserAgent.match(/ipad/);
                if (arrMatches != null) {
                    return true;
                }
            }
            return false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardControl(event) {
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
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.prevImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextImage();
        }
    }
}
ImageModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-image-modal',
                template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img\n      src=\"{{ !i.thumb ? i.img : i.thumb }}\"\n      class=\"ng-thumb\"\n      (click)=\"openGallery(index)\"\n      alt=\"Image {{ index + 1 }}\"\n    />\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style=\"z-index: 100000\">\n    <span *ngIf=\"modalImages\" class=\"info-text\"\n      >{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span\n    >\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a\n      *ngIf=\"!is_iPhone_or_iPod\"\n      class=\"fullscreen-toogle\"\n      [class.toggled]=\"fullscreen\"\n      (click)=\"fullScreen()\"\n    ></a>\n    <a class=\"zoom-toogle\" [class.zoom]=\"zoom\" (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img\n      #galleryImg\n      *ngIf=\"!loading\"\n      src=\"{{ imgSrc }}\"\n      [class.smooth]=\"smooth\"\n      class=\"effect\"\n      (swipeleft)=\"swipe($event.type)\"\n      (swiperight)=\"swipe($event.type)\"\n      (click)=\"toggleZoomed()\"\n      style=\"\"\n    />\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a\n      class=\"nav-left\"\n      *ngIf=\"modalImages && modalImages.length > 1 && !isMobile\"\n      (click)=\"prevImage()\"\n    >\n      <span></span>\n    </a>\n    <a\n      class=\"nav-right\"\n      *ngIf=\"modalImages && modalImages.length > 1 && !isMobile\"\n      (click)=\"nextImage()\"\n    >\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption #galleryDescription class=\"text-white lightbox-caption\">{{ caption }}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".bottom-bar{z-index:100000;position:absolute;left:0;right:0;width:100%;bottom:0!important}mdb-image-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}mdb-image-modal .no-margin [class*=col-]{padding:0;margin:0}mdb-image-modal .hide_lightbox{display:none}mdb-image-modal .ng-gallery{display:flex;width:auto;flex-wrap:wrap}mdb-image-modal img.ng-thumb{width:100%;height:100%;float:none;display:block;cursor:zoom-in;transition:.3s ease-in-out}mdb-image-modal img.ng-thumb:hover{opacity:.85}mdb-image-modal .ng-overlay{outline:0;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;opacity:1;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}mdb-image-modal .ng-overlay .ng-gallery-content{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;text-align:center;overflow:hidden}mdb-image-modal .ng-overlay .ng-gallery-content>a.close-popup{font-size:42px;float:right;color:#fff;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:0}mdb-image-modal .ng-overlay .ng-gallery-content>a.download-image{font-size:42px;float:right;color:#fff;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:63px}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left span{display:block;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left span:before{content:' ';display:block;width:32px;height:30px;background-position:-138px -44px;opacity:.75;transition:opacity .2s;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left:hover span:before{opacity:1}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right span{display:block;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right span:before{content:' ';display:block;width:32px;height:30px;background-position:-94px -44px;opacity:.75;transition:opacity .2s;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right:hover span:before{opacity:1}mdb-image-modal .ng-overlay .ng-gallery-content>img{max-width:100%!important;max-width:1600px;max-height:1067px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;position:absolute;margin:auto;top:0;left:0;right:0;bottom:0}mdb-image-modal .ng-overlay .ng-gallery-content>img.smooth{transition:.2s}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-left,mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-right{color:#fff;text-decoration:none;font-size:60px;cursor:pointer;outline:0}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-left{position:fixed;left:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-right{position:fixed;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-image-modal .ng-overlay .ng-gallery-content>img.effect{-webkit-animation:.5s fadeIn;animation:.5s fadeIn}mdb-image-modal .ng-overlay .ng-gallery-content>span.info-text{color:#fff;display:inline-block;width:100%;height:20px;font-weight:700;text-align:center;position:fixed;left:0;right:0;bottom:100px;font-size:16px}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper{width:400px;height:70px;text-align:center;position:fixed;bottom:20px;left:0;right:0;margin-left:auto;margin-right:auto;overflow-x:hidden}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails{width:4000px;height:70px}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img{width:auto;height:70px;float:left;margin-right:10px;cursor:pointer;opacity:.6}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img.active,mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img:hover{transition:opacity .25s;opacity:.6}@-webkit-keyframes fadeIn{from{opacity:.3}to{opacity:1}}@keyframes fadeIn{from{opacity:.3}to{opacity:1}}.lightbox-caption{font-size:13px;max-height:50px}.effect{-webkit-transform:scale(.9,.9);transform:scale(.9,.9)}.top-bar{position:absolute;top:0;left:0;right:0;height:44px;width:100%;z-index:10001}.top-bar .info-text{position:absolute;height:44px;top:0;left:0;font-size:16px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.top-bar .close-popup{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;background-position:0 -44px;opacity:.75;transition:opacity .2s}.top-bar .close-popup:hover{opacity:1}.top-bar .fullscreen-toogle{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;opacity:.75;transition:opacity .2s}.top-bar .fullscreen-toogle.toggled{background-position:-44px 0}.top-bar .fullscreen-toogle:hover{opacity:1}.top-bar .zoom-toogle{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;background-position:-88px 0;opacity:.75;transition:opacity .2s}.top-bar .zoom-toogle.zoom{background-position:-132px 0}.top-bar .zoom-toogle:hover{opacity:1}"]
            }] }
];
/** @nocollapse */
ImageModalComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFVekQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBNkI5QixZQUN1QixVQUFrQixFQUNoQyxPQUFtQixFQUNuQixRQUFtQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUE5QnJCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJMUIsYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFNakQsV0FBTSxHQUFHLElBQUksQ0FBQztRQU1iLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU85QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFB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Qjs7SUFDckIsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLHFDQUFvQjs7SUFFcEIsMkNBQTBEOztJQUUxRCwwQ0FBMEI7O0lBQzFCLDJDQUE4Qjs7SUFDOUIseUNBQTZCOztJQUM3QixtQ0FBdUI7O0lBQ3ZCLHFDQUF1Qjs7SUFDdkIsbUNBQXNCOztJQUV0Qix5Q0FBbUU7O0lBQ25FLGlEQUFtRjs7SUFFbkYsMENBQWdEOztJQUk5QyxzQ0FBMEI7O0lBQzFCLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5cbmRlY2xhcmUgdmFyIHNjcmVlbmZ1bGw6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWltYWdlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS1wb3B1cC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlnaHRib3gtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBfZWxlbWVudDogYW55O1xuICBwdWJsaWMgb3BlbmVkID0gZmFsc2U7XG4gIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRJbWFnZUluZGV4OiBudW1iZXI7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93UmVwZWF0ID0gZmFsc2U7XG4gIHB1YmxpYyBvcGVuTW9kYWxXaW5kb3c6IGFueTtcbiAgcHVibGljIGNhcHRpb246IHN0cmluZztcblxuICBpc01vYmlsZTogYW55ID0gbnVsbDtcbiAgY2xpY2tlZDogYW55ID0gZmFsc2U7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIHpvb21lZCA9ICdpbmFjdGl2ZSc7XG5cbiAgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuXG4gIEBJbnB1dCgpIG1vZGFsSW1hZ2VzOiBhbnk7XG4gIEBJbnB1dCgpIGltYWdlUG9pbnRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoKSB6b29tOiBib29sZWFuO1xuICBASW5wdXQoKSBzbW9vdGggPSB0cnVlO1xuICBASW5wdXQoKSB0eXBlOiBTdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnZ2FsbGVyeUltZycsIHsgc3RhdGljOiBmYWxzZSB9KSBnYWxsZXJ5SW1nOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdnYWxsZXJ5RGVzY3JpcHRpb24nLCB7IHN0YXRpYzogZmFsc2UgfSkgZ2FsbGVyeURlc2NyaXB0aW9uOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVab29tZWQoKSB7XG4gICAgaWYgKCF0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMS4wLCAxLjApJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2FsbGVyeUltZy5uYXRpdmVFbGVtZW50LCAnYW5pbWF0ZScsICczMDBtcyBlYXNlLW91dCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICd6b29tLW91dCcpO1xuICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICdzY2FsZSgwLjksIDAuOSknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICdhbmltYXRlJywgJzMwMG1zIGVhc2UtaW4nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnem9vbS1pbicpO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUmVzdGFydCgpIHtcbiAgICB0aGlzLnpvb21lZCA9IHRoaXMuem9vbWVkID09PSAnaW5hY3RpdmUnID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pbWFnZVBvaW50ZXIgPj0gMCkge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuaW1hZ2VQb2ludGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUdhbGxlcnkoKSB7XG4gICAgdGhpcy56b29tID0gZmFsc2U7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5jZWxFdmVudC5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJldkltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleC0tO1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZUluZGV4IDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMubW9kYWxJbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgdGhpcy5vcGVuR2FsbGVyeSh0aGlzLmN1cnJlbnRJbWFnZUluZGV4KTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcbiAgICBpZiAodGhpcy5tb2RhbEltYWdlcy5sZW5ndGggPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgb3BlbkdhbGxlcnkoaW5kZXg6IGFueSkge1xuICAgIC8vIFRoZXJlIHdhcyBhIHByb2JsZW0sIHRoYXQgd2l0aCBvcGVuZWQgbGlnaHRib3gsIGlmIHVzZXIgaGF2ZSBwcmVzc2VkIHRoZSBiYWNrIGJ1dHRvblxuICAgIC8vIChib3RoIHBoeXNpY2FsIGRldmljZSBidXR0b24gYW5kIGJyb3dzZXIgYnV0dG9uKVxuICAgIC8vIHRoZSBsaWdodGJveCB3YXMgbm90IGNsb3NlZCwgYnV0IHRoZSB3aG9sZSBhcHBsaWNhdGlvbiB3YXMgY2xvc2VkIChiZWNhdXNlIG9mIGNoYW5naW5nIHRoZSBVUkwpLlxuICAgIGlmICh0eXBlb2YgaGlzdG9yeS5wdXNoU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKCduZXdzdGF0ZScsICcnLCBudWxsKTtcbiAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlR2FsbGVyeSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RhbEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmltZztcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gdGhpcy5tb2RhbEltYWdlc1tpXS5jYXB0aW9uO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2FsbGVyeURlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSGVpZ2h0ID0gdGhpcy5nYWxsZXJ5RGVzY3JpcHRpb24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgICAgIGBjYWxjKDEwMCUgLSAke2Rlc2NyaXB0aW9uSGVpZ2h0ICsgMjV9cHgpYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgZnVsbFNjcmVlbigpOiBhbnkge1xuICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzX2lQaG9uZV9vcl9pUG9kKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGFyck1hdGNoZXMgPSBzdHJVc2VyQWdlbnQubWF0Y2goL2lwYWQvKTtcbiAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgICAgfVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgICB9XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5jbG9zZUdhbGxlcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN0cmluZyA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCkge1xuICAgICAgdGhpcy5uZXh0SW1hZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==