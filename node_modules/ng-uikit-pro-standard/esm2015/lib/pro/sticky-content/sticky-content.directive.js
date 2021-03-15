/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class MdbStickyDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const parentRect = this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            const bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            let dynProps;
            if (this.original.float === 'right') {
                /** @type {?} */
                const right = bodyRect.right - parentRect.right + this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (this.original.float === 'left') {
                /** @type {?} */
                const left = parentRect.left - bodyRect.left + this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                dynProps = { width: parentRect.width + 'px' };
            }
            if (this.original.marginTop +
                this.original.marginBottom +
                this.original.boundingClientRect.height +
                this.stickyOffsetTop >=
                parentRect.bottom) {
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                const floatAdjustment = this.original.float === 'right'
                    ? { right: 0 }
                    : this.original.float === 'left'
                        ? { left: 0 }
                        : {};
                Object.assign(this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0,
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop >
                this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
                    this.fillerEl = document.createElement('div');
                    this.fillerEl.style.height = this.el.offsetHeight + 'px';
                    this.parentEl.insertBefore(this.fillerEl, this.el);
                }
                Object.assign(this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: this.stickyOffsetTop + 'px',
                    bottom: 'inherit',
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                if (this.fillerEl) {
                    this.parentEl.removeChild(this.fillerEl); // IE11 does not work with el.remove()
                    this.fillerEl = undefined;
                }
                Object.assign(this.el.style, {
                    position: this.original.position,
                    float: this.original.float,
                    top: this.original.top,
                    bottom: this.original.bottom,
                    width: this.original.width,
                    left: this.original.left,
                }, dynProps);
            }
        });
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        const allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        const parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft,
        };
        if (this.isBrowser) {
            /** @type {?} */
            const elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                width: computedStyle(this.el, 'width'),
                left: '',
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10),
            };
        }
        this.attach();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
    }
    /**
     * @return {?}
     */
    attach() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    }
    /**
     * @return {?}
     */
    detach() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    }
}
MdbStickyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSticky]',
            },] }
];
/** @nocollapse */
MdbStickyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbStickyDirective.propDecorators = {
    stickyAfter: [{ type: Input }],
    stickyAfterAlias: [{ type: Input, args: ['sticky-after',] }]
};
if (false) {
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfter;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfterAlias;
    /** @type {?} */
    MdbStickyDirective.prototype.isBrowser;
    /** @type {?} */
    MdbStickyDirective.prototype.el;
    /** @type {?} */
    MdbStickyDirective.prototype.parentEl;
    /** @type {?} */
    MdbStickyDirective.prototype.fillerEl;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyOffsetTop;
    /** @type {?} */
    MdbStickyDirective.prototype.diff;
    /** @type {?} */
    MdbStickyDirective.prototype.original;
    /** @type {?} */
    MdbStickyDirective.prototype.scrollHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBYzdCLFlBQVksRUFBYyxFQUF1QixVQUFrQjs7UUFWbkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQThFcEIsa0JBQWE7OztRQUFHLEdBQUcsRUFBRTs7a0JBQ2IsVUFBVSxHQUFlLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztrQkFDdEUsUUFBUSxHQUFlLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O2dCQUM5RCxRQUFRO1lBRVosSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7O3NCQUM3QixLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztnQkFDM0UsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQzthQUNwQztpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE1B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SUFGckIseUNBQTZCOztJQUU3Qiw4Q0FBZ0Q7O0lBQ2hELHVDQUFrQjs7SUFFbEIsZ0NBQXNCOztJQUN0QixzQ0FBNEI7O0lBQzVCLHNDQUE0Qjs7SUFDNUIsNkNBQW9COztJQUVwQixrQ0FBVTs7SUFDVixzQ0FBYzs7SUEyRWQsMkNBd0ZFIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbXB1dGVkU3R5bGUgfSBmcm9tICcuL2NvbXB1dGVkLnN0eWxlJztcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0aWNreURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHN0aWNreUFmdGVyOiBzdHJpbmc7IC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3N0aWNreS1hZnRlcicpIHN0aWNreUFmdGVyQWxpYXM6IHN0cmluZzsgLy8gY3NzIHNlbGVjdG9yIHRvIGJlIHN0aWNreSBhZnRlclxuICBpc0Jyb3dzZXIgPSBmYWxzZTtcblxuICBlbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIHBhcmVudEVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgZmlsbGVyRWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICBzdGlja3lPZmZzZXRUb3AgPSAwO1xuXG4gIGRpZmY6IGFueTtcbiAgb3JpZ2luYWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICh0aGlzLnN0aWNreUFmdGVyKSB7XG4gICAgICBjb25zdCBjZXRTdGlja3lBZnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0aWNreUFmdGVyKTtcbiAgICAgIGlmIChjZXRTdGlja3lBZnRlckVsKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID0gY2V0U3RpY2t5QWZ0ZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2t5QWZ0ZXJBbGlhcykge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlckFsaWFzKTtcbiAgICAgIGlmIChjZXRTdGlja3lBZnRlckVsKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID0gY2V0U3RpY2t5QWZ0ZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBwYXJlbnQgcmVsYXRpdmVseSBwb3NpdGlvbmVkXG4gICAgY29uc3QgYWxsb3dlZFBvc2l0aW9ucyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAncmVsYXRpdmUnXTtcbiAgICBjb25zdCBwYXJlbnRFbFBvc2l0aW9uID0gY29tcHV0ZWRTdHlsZSh0aGlzLnBhcmVudEVsLCAncG9zaXRpb24nKTtcbiAgICBpZiAoYWxsb3dlZFBvc2l0aW9ucy5pbmRleE9mKHBhcmVudEVsUG9zaXRpb24pID09PSAtMSkge1xuICAgICAgLy8gaW5oZXJpdCwgaW5pdGlhbCwgdW5zZXRcbiAgICAgIHRoaXMucGFyZW50RWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cblxuICAgIHRoaXMuZGlmZiA9IHtcbiAgICAgIHRvcDogdGhpcy5lbC5vZmZzZXRUb3AgLSB0aGlzLnBhcmVudEVsLm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCAtIHRoaXMucGFyZW50RWwub2Zmc2V0TGVmdCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMub3JpZ2luYWwgPSB7XG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogZWxSZWN0LFxuICAgICAgICBwb3NpdGlvbjogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nKSxcbiAgICAgICAgZmxvYXQ6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2Zsb2F0JyksXG4gICAgICAgIHRvcDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAndG9wJyksXG4gICAgICAgIGJvdHRvbTogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnYm90dG9tJyksXG4gICAgICAgIHdpZHRoOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICd3aWR0aCcpLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb2Zmc2V0VG9wOiB0aGlzLmVsLm9mZnNldFRvcCxcbiAgICAgICAgb2Zmc2V0TGVmdDogdGhpcy5lbC5vZmZzZXRMZWZ0LFxuICAgICAgICBtYXJnaW5Ub3A6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpblRvcCcpLCAxMCksXG4gICAgICAgIG1hcmdpbkJvdHRvbTogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luQm90dG9tJyksIDEwKSxcbiAgICAgICAgbWFyZ2luTGVmdDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMCksXG4gICAgICAgIG1hcmdpblJpZ2h0OiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5MZWZ0JyksIDEwKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICBhdHRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBkZXRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keVJlY3Q6IENsaWVudFJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBkeW5Qcm9wcztcblxuICAgIGlmICh0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCByaWdodCA9IGJvZHlSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5yaWdodCArIHRoaXMub3JpZ2luYWwubWFyZ2luUmlnaHQ7XG4gICAgICBkeW5Qcm9wcyA9IHsgcmlnaHQ6IHJpZ2h0ICsgJ3B4JyB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCArIHRoaXMub3JpZ2luYWwubWFyZ2luTGVmdDtcbiAgICAgIGR5blByb3BzID0geyBsZWZ0OiBsZWZ0ICsgJ3B4JyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkeW5Qcm9wcyA9IHsgd2lkdGg6IHBhcmVudFJlY3Qud2lkdGggKyAncHgnIH07XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgK1xuICAgICAgICB0aGlzLm9yaWdpbmFsLm1hcmdpbkJvdHRvbSArXG4gICAgICAgIHRoaXMub3JpZ2luYWwuYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCArXG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID49XG4gICAgICBwYXJlbnRSZWN0LmJvdHRvbVxuICAgICkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCByZWFjaGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICBjb25zdCBmbG9hdEFkanVzdG1lbnQgPVxuICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnXG4gICAgICAgICAgPyB7IHJpZ2h0OiAwIH1cbiAgICAgICAgICA6IHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0J1xuICAgICAgICAgID8geyBsZWZ0OiAwIH1cbiAgICAgICAgICA6IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgdGhpcy5lbC5zdHlsZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgdG9wOiAnaW5oZXJpdCcsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkeW5Qcm9wcyxcbiAgICAgICAgZmxvYXRBZGp1c3RtZW50XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJlbnRSZWN0LnRvcCAqIC0xICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgKyB0aGlzLnN0aWNreU9mZnNldFRvcCA+XG4gICAgICB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcFxuICAgICkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgbWlkZGxlIG9mIGNvbnRhaW5lclxuICAgICAgICovXG5cbiAgICAgIC8vIGlmIG5vdCBmbG9hdGluZywgYWRkIGFuIGVtcHR5IGZpbGxlciBlbGVtZW50LCBzaW5jZSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgYmVjYW1lcyAnZml4ZWQnXG4gICAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCAhPT0gJ2xlZnQnICYmIHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdyaWdodCcgJiYgIXRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbGxlckVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5pbnNlcnRCZWZvcmUodGhpcy5maWxsZXJFbCwgdGhpcy5lbCk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHRoaXMuZWwuc3R5bGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJywgLy8gZml4ZWQgaXMgYSBsb3Qgc21vb3RoZXIgdGhhbiBhYnNvbHV0ZVxuICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgdG9wOiB0aGlzLnN0aWNreU9mZnNldFRvcCArICdweCcsXG4gICAgICAgICAgYm90dG9tOiAnaW5oZXJpdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5maWxsZXJFbCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuZmlsbGVyRWwpOyAvLyBJRTExIGRvZXMgbm90IHdvcmsgd2l0aCBlbC5yZW1vdmUoKVxuICAgICAgICB0aGlzLmZpbGxlckVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgdGhpcy5lbC5zdHlsZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9yaWdpbmFsLnBvc2l0aW9uLFxuICAgICAgICAgIGZsb2F0OiB0aGlzLm9yaWdpbmFsLmZsb2F0LFxuICAgICAgICAgIHRvcDogdGhpcy5vcmlnaW5hbC50b3AsXG4gICAgICAgICAgYm90dG9tOiB0aGlzLm9yaWdpbmFsLmJvdHRvbSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5vcmlnaW5hbC53aWR0aCxcbiAgICAgICAgICBsZWZ0OiB0aGlzLm9yaWdpbmFsLmxlZnQsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==