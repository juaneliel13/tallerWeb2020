/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, Component, HostBinding, HostListener, ViewEncapsulation, } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastPackage, tsConfig } from './toast.config';
export class ToastComponent {
    /**
     * @param {?} toastPackage
     * @param {?} appRef
     */
    constructor(toastPackage, appRef) {
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        this.state = 'inactive';
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        this.toastService = tsConfig.serviceInstance;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe((/**
         * @return {?}
         */
        () => {
            this.activateToast();
        }));
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe((/**
         * @return {?}
         */
        () => {
            this.remove();
        }));
        this.opacity = this.options.opacity;
    }
    /**
     * controls animation
     * @return {?}
     */
    get animationParams() {
        return {
            value: this.state,
            params: {
                opacity: this.opacity,
            },
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    activateToast() {
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.remove();
            }), this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval((/**
                 * @return {?}
                 */
                () => this.updateProgress()), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    }
    /**
     * updates progress bar width
     * @return {?}
     */
    updateProgress() {
        if (this.width === 0) {
            return;
        }
        /** @type {?} */
        const now = new Date().getTime();
        /** @type {?} */
        const remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    remove() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => this.toastService.remove(this.toastPackage.toastId)), 250);
    }
    /**
     * @return {?}
     */
    onActionClick() {
        this.toastPackage.triggerAction();
        this.remove();
    }
    /**
     * @return {?}
     */
    tapToast() {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    stickAround() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    /**
     * @return {?}
     */
    delayedHideToast() {
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => this.remove()), this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval((/**
             * @return {?}
             */
            () => this.updateProgress()), 10);
        }
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-toast-component',
                template: "<button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"md-toast-close-button\">\n  &times;\n</button>\n<div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n  {{title}}\n</div>\n<div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n</div>\n<div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n  {{message}}\n</div>\n<button *ngIf=\"options.actionButton\" class=\"btn btn-block md-toast-action mt-2\" [ngClass]=\"options.actionButtonClass\"\n        (click)=\"onActionClick()\">{{ options.actionButton }}</button>\n<div *ngIf=\"options.progressBar\">\n  <div class=\"md-toast-progress\" [style.width.%]=\"width\"></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('flyInOut', [
                        state('inactive', style({ opacity: 0 })),
                        state('active', style({ opacity: '{{ opacity }}' }), { params: { opacity: 0.5 } }),
                        state('removed', style({ opacity: 0 })),
                        transition('inactive => active', animate('300ms ease-in')),
                        transition('active => removed', animate('300ms ease-in')),
                    ]),
                ],
                styles: [".md-toast-title{font-weight:400}.md-toast-message{word-wrap:break-word}.md-toast-message a,.md-toast-message label{color:#fff}.md-toast-message a:hover{color:#ccc;text-decoration:none}.md-toast-close-button{color:#fff;position:relative;right:-.3em;top:-.3em;float:right;font-size:1.25rem;font-weight:400;text-shadow:0 1px 0 #fff;opacity:.8}.md-toast-close-button:focus,.md-toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.md-toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.md-toast-top-center{top:0;right:0;width:100%}.md-toast-bottom-center{bottom:0;right:0;width:100%}.md-toast-top-full-width{top:0;right:0;width:100%}.md-toast-bottom-full-width{bottom:0;right:0;width:100%}.md-toast-top-left{top:12px;left:12px}.md-toast-top-right{top:12px;right:12px}.md-toast-bottom-right{right:12px;bottom:12px}.md-toast-bottom-left{bottom:12px;left:12px}#toast-container{position:fixed;z-index:999999}#toast-container *{box-sizing:border-box}#toast-container>div{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);color:#fff;position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:18.75rem;background-position:15px center;background-repeat:no-repeat;opacity:.95}#toast-container>:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);opacity:1;transition:.45s;box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);opacity:1!important;cursor:pointer}#toast-container.md-toast-bottom-center>div,#toast-container.md-toast-top-center>div{width:18.75rem;margin:auto}#toast-container.md-toast-bottom-full-width>div,#toast-container.md-toast-top-full-width>div{width:96%;margin:auto}.md-toast{background-color:#030303}.md-toast-success{background-color:#00c851;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}.md-toast-error{background-color:#ff3547;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}.md-toast-info{background-color:#33b5e5;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}.md-toast-warning{background-color:#fb3;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}.md-toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}#toast-container>mdb-toast-component{display:block;position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;background-position:15px center;background-repeat:no-repeat;opacity:.8;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);color:#fff!important}#toast-container.md-toast-bottom-center>mdb-toast-component,#toast-container.md-toast-top-center>mdb-toast-component{width:300px;margin:auto}#toast-container.md-toast-bottom-full-width>mdb-toast-component,#toast-container.md-toast-top-full-width>mdb-toast-component{width:96%;margin:auto}@media all and (max-width:240px){#toast-container>mdb-toast-component{padding:8px 8px 8px 50px;width:11em}#toast-container .md-toast-close-button{right:-.2em;top:-.2em}}@media all and (min-width:241px) and (max-width:480px){#toast-container>mdb-toast-component{padding:8px 8px 8px 50px;width:18em}#toast-container .md-toast-close-button{right:-.2em;top:-.2em}}@media all and (min-width:481px) and (max-width:768px){#toast-container>mdb-toast-component{padding:15px 15px 15px 50px;width:25em}}.md-toast-action{background-color:transparent}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ToastPackage },
    { type: ApplicationRef }
];
ToastComponent.propDecorators = {
    toastClasses: [{ type: HostBinding, args: ['class',] }],
    animationParams: [{ type: HostBinding, args: ['@flyInOut',] }],
    tapToast: [{ type: HostListener, args: ['click',] }],
    stickAround: [{ type: HostListener, args: ['mouseenter',] }],
    delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    ToastComponent.prototype.message;
    /** @type {?} */
    ToastComponent.prototype.title;
    /** @type {?} */
    ToastComponent.prototype.options;
    /**
     * width of progress bar
     * @type {?}
     */
    ToastComponent.prototype.width;
    /** @type {?} */
    ToastComponent.prototype.state;
    /**
     * a combination of toast type and options.toastClass
     * @type {?}
     */
    ToastComponent.prototype.toastClasses;
    /** @type {?} */
    ToastComponent.prototype.opacity;
    /** @type {?} */
    ToastComponent.prototype.timeout;
    /** @type {?} */
    ToastComponent.prototype.intervalId;
    /** @type {?} */
    ToastComponent.prototype.hideTime;
    /** @type {?} */
    ToastComponent.prototype.sub;
    /** @type {?} */
    ToastComponent.prototype.sub1;
    /**
     * @type {?}
     * @protected
     */
    ToastComponent.prototype.toastService;
    /** @type {?} */
    ToastComponent.prototype.toastPackage;
    /**
     * @type {?}
     * @protected
     */
    ToastComponent.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUVaLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS2pGLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBaUJ0RSxNQUFNLE9BQU8sY0FBYzs7Ozs7SUEyQnpCLFlBQW1CLFlBQTBCLEVBQVksTUFBc0I7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFnQjs7OztRQXRCL0UsVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1gsVUFBSyxHQUFHLFVBQVUsQ0FBQzs7OztRQUVHLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBb0J0QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFFN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLFlBQVksQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMs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LFNBQUMsWUFBWTsrQkFhekIsWUFBWSxTQUFDLFlBQVk7Ozs7SUExSDFCLGlDQUEyQjs7SUFDM0IsK0JBQWM7O0lBQ2QsaUNBQXNCOzs7OztJQUV0QiwrQkFBVzs7SUFDWCwrQkFBbUI7Ozs7O0lBRW5CLHNDQUF3Qzs7SUFXeEMsaUNBQTRCOztJQUM1QixpQ0FBYTs7SUFDYixvQ0FBZ0I7O0lBQ2hCLGtDQUFpQjs7SUFDakIsNkJBQWtCOztJQUNsQiw4QkFBbUI7Ozs7O0lBQ25CLHNDQUE0Qjs7SUFFaEIsc0NBQWlDOzs7OztJQUFFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIFRvYXN0UGFja2FnZSwgdHNDb25maWcgfSBmcm9tICcuL3RvYXN0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10b2FzdC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi8uLi9hbGVydHMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZseUluT3V0JywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IG9wYWNpdHk6ICd7eyBvcGFjaXR5IH19JyB9KSwgeyBwYXJhbXM6IHsgb3BhY2l0eTogMC41IH0gfSksXG4gICAgICBzdGF0ZSgncmVtb3ZlZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IHJlbW92ZWQnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sO1xuICB0aXRsZTogc3RyaW5nO1xuICBvcHRpb25zOiBHbG9iYWxDb25maWc7XG4gIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgd2lkdGggPSAtMTtcbiAgc3RhdGUgPSAnaW5hY3RpdmUnO1xuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRvYXN0Q2xhc3NlcyA9ICcnO1xuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gIEBIb3N0QmluZGluZygnQGZseUluT3V0JylcbiAgZ2V0IGFuaW1hdGlvblBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMuc3RhdGUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgb3BhY2l0eTogdGhpcy5vcGFjaXR5LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIG9wYWNpdHk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdGltZW91dDogYW55O1xuICBpbnRlcnZhbElkOiBhbnk7XG4gIGhpZGVUaW1lOiBudW1iZXI7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBzdWIxOiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCB0b2FzdFNlcnZpY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsIHByb3RlY3RlZCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG4gICAgdGhpcy50b2FzdFNlcnZpY2UgPSB0c0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2U7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcbiAgICB0aGlzLnRpdGxlID0gdG9hc3RQYWNrYWdlLnRpdGxlO1xuICAgIHRoaXMub3B0aW9ucyA9IHRvYXN0UGFja2FnZS5jb25maWc7XG4gICAgdGhpcy50b2FzdENsYXNzZXMgPSBgJHt0b2FzdFBhY2thZ2UudG9hc3RUeXBlfSAke3RvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc31gO1xuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5vcHRpb25zLm9wYWNpdHk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMS51bnN1YnNjcmliZSgpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuICAvKipcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcbiAgICovXG4gIGFjdGl2YXRlVG9hc3QoKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZU91dCAhPT0gMCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMudGltZU91dCk7XG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMub25BY3RpdmF0ZVRpY2spIHtcbiAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXG4gICAqL1xuICB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xuICAgIGlmICh0aGlzLndpZHRoIDw9IDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnN0YXRlID0gJ3JlbW92ZWQnO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy50b2FzdFNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpLCAyNTApO1xuICB9XG5cbiAgb25BY3Rpb25DbGljaygpIHtcbiAgICB0aGlzLnRvYXN0UGFja2FnZS50cmlnZ2VyQWN0aW9uKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdGFwVG9hc3QoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0UGFja2FnZS50cmlnZ2VyVGFwKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBzdGlja0Fyb3VuZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gMDtcbiAgICB0aGlzLmhpZGVUaW1lID0gMDtcblxuICAgIC8vIGRpc2FibGUgcHJvZ3Jlc3NCYXJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XG4gICAgaWYgKCt0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0ID09PSAwIHx8IHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gK3RoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQ7XG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XG4gICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==