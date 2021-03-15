/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Inject, PLATFORM_ID, Renderer2, } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { isPlatformBrowser } from '@angular/common';
export class TabDirective {
    /**
     * @param {?} platformId
     * @param {?} tabset
     * @param {?} el
     * @param {?} renderer
     */
    constructor(platformId, tabset, el, renderer) {
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
    /**
     * if true tab can not be activated
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        if (this._disabled && this._active) {
            this.tabset.initActiveTab();
        }
    }
    /**
     * tab active state toggle
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
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
        (mdbTab) => {
            if (mdbTab !== this) {
                mdbTab.active = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.removable = this.removable;
        this.tabset.addTab(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabset.removeTab(this);
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] }
];
/** @nocollapse */
TabDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: TabsetComponent },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFFTixVQUFVLEVBRVYsTUFBTSxFQUNOLFdBQVcsRUFFWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE1BQU0sT0FBTyxZQUFZOzs7Ozs7O0lBbUV2QixZQUN1QixVQUFrQixFQUNoQyxNQUF1QixFQUN2QixFQUFjLEVBQ2IsUUFBbUI7UUFGcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQVc7UUF2RHJCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFxQ1QsV0FBTSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRXhELGFBQVEsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUUxRCxZQUFPLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBR3RDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsY0FBUyxHQUFRLElBQUksQ0FBQztRQVFwQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBdEVELElBQ0ksUUFBUTtRQUNW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OztJQUM5QiwwQkFBcUI7Ozs7O0lBQ3JCLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbWRiLXRhYiwgW21kYlRhYl0nIH0pXG5leHBvcnQgY2xhc3MgVGFiRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAvKiogdGFiIGhlYWRlciB0ZXh0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLnRhYnNldC5pbml0QWN0aXZlVGFiKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gYmUgcmVtb3ZhYmxlLCBhZGRpdGlvbmFsIGJ1dHRvbiB3aWxsIGFwcGVhciAqL1xuICBASW5wdXQoKSBwdWJsaWMgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAvKiogaWYgc2V0LCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0YWIncyBjbGFzcyBhdHJpYnV0ZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKSB0YWJPcmRlcjogbnVtYmVyO1xuXG4gIC8qKiB0YWIgYWN0aXZlIHN0YXRlIHRvZ2dsZSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgcHVibGljIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgaWYgKCh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSkgfHwgIWFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhYWN0aXZlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2hvdycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuZGVzZWxlY3QuZW1pdCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgobWRiVGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcbiAgICAgIGlmIChtZGJUYWIgIT09IHRoaXMpIHtcbiAgICAgICAgbWRiVGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBhY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIHNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGluYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBkZXNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCBiZWZvcmUgdGFiIHdpbGwgYmUgcmVtb3ZlZCAqL1xuICBAT3V0cHV0KCkgcHVibGljIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLXBhbmUnKSBwdWJsaWMgYWRkQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZhZGUnKSBwdWJsaWMgdGVzdCA9IHRydWU7XG5cbiAgcHVibGljIGhlYWRpbmdSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIHB1YmxpYyB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCxcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnRhYnNldC5yZW1vdmVUYWIodGhpcyk7XG4gIH1cbn1cbiJdfQ==