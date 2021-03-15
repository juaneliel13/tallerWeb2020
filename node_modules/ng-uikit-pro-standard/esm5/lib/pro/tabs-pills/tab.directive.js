/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Inject, PLATFORM_ID, Renderer2, } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { isPlatformBrowser } from '@angular/common';
var TabDirective = /** @class */ (function () {
    function TabDirective(platformId, tabset, el, renderer) {
        this.tabset = tabset;
        this.el = el;
        this.renderer = renderer;
        this._disabled = false;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.test = true;
        this._active = false;
        this.isBrowser = null;
        this.isBrowser = isPlatformBrowser(platformId);
        this.tabset = tabset;
    }
    Object.defineProperty(TabDirective.prototype, "disabled", {
        /** if true tab can not be activated */
        get: /**
         * if true tab can not be activated
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            if (this._disabled && this._active) {
                this.tabset.initActiveTab();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.renderer.removeClass(this.el.nativeElement, 'show');
                    this.renderer.removeClass(this.el.nativeElement, 'active');
                    this._active = active;
                    this.deselect.emit(this);
                }
                return;
            }
            this.renderer.addClass(this.el.nativeElement, 'show');
            this.renderer.addClass(this.el.nativeElement, 'active');
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach((/**
             * @param {?} mdbTab
             * @return {?}
             */
            function (mdbTab) {
                if (mdbTab !== _this) {
                    mdbTab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
        this.tabset.addTab(this);
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this);
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        type: [{ type: Input }],
        heading: [{ type: Input }],
        disabled: [{ type: Input }],
        removable: [{ type: Input }],
        customClass: [{ type: Input }],
        tabOrder: [{ type: Input }],
        active: [{ type: Input }],
        select: [{ type: Output }],
        deselect: [{ type: Output }],
        removed: [{ type: Output }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
        test: [{ type: HostBinding, args: ['class.fade',] }]
    };
    return TabDirective;
}());
export { TabDirective };
if (false) {
    /** @type {?} */
    TabDirective.prototype.type;
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * @type {?}
     * @private
     */
    TabDirective.prototype._disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * if set, will be added to the tab's class atribute
     * @type {?}
     */
    TabDirective.prototype.customClass;
    /** @type {?} */
    TabDirective.prototype.tabOrder;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.select;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired before tab will be removed
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.test;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /**
     * @type {?}
     * @private
     */
    TabDirective.prototype._active;
    /** @type {?} */
    TabDirective.prototype.isBrowser;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /** @type {?} */
    TabDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    TabDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFFTixVQUFVLEVBRVYsTUFBTSxFQUNOLFdBQVcsRUFFWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBb0VFLHNCQUN1QixVQUFrQixFQUNoQyxNQUF1QixFQUN2QixFQUFjLEVBQ2IsUUFBbUI7UUFGcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQVc7UUF2RHJCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFxQ1QsV0FBTSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRXhELGFBQVEsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUUxRCxZQUFPLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBR3RDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsY0FBUyxHQUFRLElBQUksQ0FBQztRQVFwQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUF0RUQsc0JBQ0ksa0NBQVE7UUFGWix1Q0FBdUM7Ozs7O1FBQ3ZDO1lBRUUs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SUFFMUUsZ0NBQXNEOztJQUN0RCw0QkFBOEM7O0lBRTlDLGtDQUFvQzs7Ozs7SUFDcEMsK0JBQXdCOztJQUV4QixpQ0FBc0I7O0lBSXBCLDhCQUE4Qjs7SUFDOUIsMEJBQXFCOzs7OztJQUNyQixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ21kYi10YWIsIFttZGJUYWJdJyB9KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGluZzogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICYmIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy50YWJzZXQuaW5pdEFjdGl2ZVRhYigpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cbiAgQElucHV0KCkgcHVibGljIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXRyaWJ1dGUgKi9cbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdGFiT3JkZXI6IG51bWJlcjtcblxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Nob3cnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcyk7XG5cbiAgICB0aGlzLnRhYnNldC50YWJzLmZvckVhY2goKG1kYlRhYjogVGFiRGlyZWN0aXZlKSA9PiB7XG4gICAgICBpZiAobWRiVGFiICE9PSB0aGlzKSB7XG4gICAgICAgIG1kYlRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBpbmFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gZGVzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgcHVibGljIGFkZENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWRlJykgcHVibGljIHRlc3QgPSB0cnVlO1xuXG4gIHB1YmxpYyBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMudGFic2V0ID0gdGFic2V0O1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZhYmxlID0gdGhpcy5yZW1vdmFibGU7XG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMpO1xuICB9XG59XG4iXX0=