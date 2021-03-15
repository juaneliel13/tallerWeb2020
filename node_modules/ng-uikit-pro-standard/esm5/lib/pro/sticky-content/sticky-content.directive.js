/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var MdbStickyDirective = /** @class */ (function () {
    function MdbStickyDirective(el, platformId) {
        var _this = this;
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            var bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            var dynProps;
            if (_this.original.float === 'right') {
                /** @type {?} */
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                /** @type {?} */
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                dynProps = { width: parentRect.width + 'px' };
            }
            if (_this.original.marginTop +
                _this.original.marginBottom +
                _this.original.boundingClientRect.height +
                _this.stickyOffsetTop >=
                parentRect.bottom) {
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                var floatAdjustment = _this.original.float === 'right'
                    ? { right: 0 }
                    : _this.original.float === 'left'
                        ? { left: 0 }
                        : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0,
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop >
                _this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit',
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); // IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left,
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
    MdbStickyDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        var parentElPosition = computedStyle(this.parentEl, 'position');
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
            var elRect = this.el.getBoundingClientRect();
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
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.attach = /**
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.detach = /**
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    MdbStickyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSticky]',
                },] }
    ];
    /** @nocollapse */
    MdbStickyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStickyDirective.propDecorators = {
        stickyAfter: [{ type: Input }],
        stickyAfterAlias: [{ type: Input, args: ['sticky-after',] }]
    };
    return MdbStickyDirective;
}());
export { MdbStickyDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBaUJFLDRCQUFZLEVBQWMsRUFBdUIsVUFBa0I7UUFBbkUsaUJBSUM7O1FBZEQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQThFcEIsa0JBQWE7OztRQUFHOztnQkFDUixVQUFVLEdBQWUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2dCQUN0RSxRQUFRLEdBQWUsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzlELFFBQVE7WUFFWixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTs7b0JBQzdCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2dCQUMzRSxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDO2FBQ3BDO2lCQUFNLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFOztvQkFDbkMsSUFB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SyxTQUFDLGNBQWM7O0lBNkt2Qix5QkFBQztDQUFBLEFBbkxELElBbUxDO1NBaExZLGtCQUFrQjs7O0lBQzdCLHlDQUE2Qjs7SUFFN0IsOENBQWdEOztJQUNoRCx1Q0FBa0I7O0lBRWxCLGdDQUFzQjs7SUFDdEIsc0NBQTRCOztJQUM1QixzQ0FBNEI7O0lBQzVCLDZDQUFvQjs7SUFFcEIsa0NBQVU7O0lBQ1Ysc0NBQWM7O0lBMkVkLDJDQXdGRSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21wdXRlZFN0eWxlIH0gZnJvbSAnLi9jb21wdXRlZC5zdHlsZSc7XG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlN0aWNreV0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGlja3lEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzdGlja3lBZnRlcjogc3RyaW5nOyAvLyBjc3Mgc2VsZWN0b3IgdG8gYmUgc3RpY2t5IGFmdGVyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdzdGlja3ktYWZ0ZXInKSBzdGlja3lBZnRlckFsaWFzOiBzdHJpbmc7IC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgaXNCcm93c2VyID0gZmFsc2U7XG5cbiAgZWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICBwYXJlbnRFbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIGZpbGxlckVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgc3RpY2t5T2Zmc2V0VG9wID0gMDtcblxuICBkaWZmOiBhbnk7XG4gIG9yaWdpbmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAodGhpcy5zdGlja3lBZnRlcikge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlcik7XG4gICAgICBpZiAoY2V0U3RpY2t5QWZ0ZXJFbCkge1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA9IGNldFN0aWNreUFmdGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0aWNreUFmdGVyQWxpYXMpIHtcbiAgICAgIGNvbnN0IGNldFN0aWNreUFmdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc3RpY2t5QWZ0ZXJBbGlhcyk7XG4gICAgICBpZiAoY2V0U3RpY2t5QWZ0ZXJFbCkge1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA9IGNldFN0aWNreUFmdGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgcGFyZW50IHJlbGF0aXZlbHkgcG9zaXRpb25lZFxuICAgIGNvbnN0IGFsbG93ZWRQb3NpdGlvbnMgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3JlbGF0aXZlJ107XG4gICAgY29uc3QgcGFyZW50RWxQb3NpdGlvbiA9IGNvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnRFbCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKGFsbG93ZWRQb3NpdGlvbnMuaW5kZXhPZihwYXJlbnRFbFBvc2l0aW9uKSA9PT0gLTEpIHtcbiAgICAgIC8vIGluaGVyaXQsIGluaXRpYWwsIHVuc2V0XG4gICAgICB0aGlzLnBhcmVudEVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLmRpZmYgPSB7XG4gICAgICB0b3A6IHRoaXMuZWwub2Zmc2V0VG9wIC0gdGhpcy5wYXJlbnRFbC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiB0aGlzLmVsLm9mZnNldExlZnQgLSB0aGlzLnBhcmVudEVsLm9mZnNldExlZnQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLm9yaWdpbmFsID0ge1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IGVsUmVjdCxcbiAgICAgICAgcG9zaXRpb246IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJyksXG4gICAgICAgIGZsb2F0OiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdmbG9hdCcpLFxuICAgICAgICB0b3A6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3RvcCcpLFxuICAgICAgICBib3R0b206IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2JvdHRvbScpLFxuICAgICAgICB3aWR0aDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnKSxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIG9mZnNldFRvcDogdGhpcy5lbC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgbWFyZ2luVG9wOiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5Ub3AnKSwgMTApLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkJvdHRvbScpLCAxMCksXG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkxlZnQnKSwgMTApLFxuICAgICAgICBtYXJnaW5SaWdodDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICB9XG5cbiAgYXR0YWNoKCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgZGV0YWNoKCk6IHZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnRSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlSZWN0OiBDbGllbnRSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgZHluUHJvcHM7XG5cbiAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgcmlnaHQgPSBib2R5UmVjdC5yaWdodCAtIHBhcmVudFJlY3QucmlnaHQgKyB0aGlzLm9yaWdpbmFsLm1hcmdpblJpZ2h0O1xuICAgICAgZHluUHJvcHMgPSB7IHJpZ2h0OiByaWdodCArICdweCcgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0Jykge1xuICAgICAgY29uc3QgbGVmdCA9IHBhcmVudFJlY3QubGVmdCAtIGJvZHlSZWN0LmxlZnQgKyB0aGlzLm9yaWdpbmFsLm1hcmdpbkxlZnQ7XG4gICAgICBkeW5Qcm9wcyA9IHsgbGVmdDogbGVmdCArICdweCcgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHluUHJvcHMgPSB7IHdpZHRoOiBwYXJlbnRSZWN0LndpZHRoICsgJ3B4JyB9O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wICtcbiAgICAgICAgdGhpcy5vcmlnaW5hbC5tYXJnaW5Cb3R0b20gK1xuICAgICAgICB0aGlzLm9yaWdpbmFsLmJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgK1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA+PVxuICAgICAgcGFyZW50UmVjdC5ib3R0b21cbiAgICApIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgcmVhY2hlZCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgY29uc3QgZmxvYXRBZGp1c3RtZW50ID1cbiAgICAgICAgdGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ3JpZ2h0J1xuICAgICAgICAgID8geyByaWdodDogMCB9XG4gICAgICAgICAgOiB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAnbGVmdCdcbiAgICAgICAgICA/IHsgbGVmdDogMCB9XG4gICAgICAgICAgOiB7fTtcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHRoaXMuZWwuc3R5bGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgICAgIHRvcDogJ2luaGVyaXQnLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZHluUHJvcHMsXG4gICAgICAgIGZsb2F0QWRqdXN0bWVudFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcGFyZW50UmVjdC50b3AgKiAtMSArIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wICsgdGhpcy5zdGlja3lPZmZzZXRUb3AgPlxuICAgICAgdGhpcy5vcmlnaW5hbC5vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgaXMgaW4gdGhlIG1pZGRsZSBvZiBjb250YWluZXJcbiAgICAgICAqL1xuXG4gICAgICAvLyBpZiBub3QgZmxvYXRpbmcsIGFkZCBhbiBlbXB0eSBmaWxsZXIgZWxlbWVudCwgc2luY2UgdGhlIG9yaWdpbmFsIGVsZW1lbnRzIGJlY2FtZXMgJ2ZpeGVkJ1xuICAgICAgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdsZWZ0JyAmJiB0aGlzLm9yaWdpbmFsLmZsb2F0ICE9PSAncmlnaHQnICYmICF0aGlzLmZpbGxlckVsKSB7XG4gICAgICAgIHRoaXMuZmlsbGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5maWxsZXJFbC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMucGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRoaXMuZmlsbGVyRWwsIHRoaXMuZWwpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB0aGlzLmVsLnN0eWxlLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsIC8vIGZpeGVkIGlzIGEgbG90IHNtb290aGVyIHRoYW4gYWJzb2x1dGVcbiAgICAgICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgICAgIHRvcDogdGhpcy5zdGlja3lPZmZzZXRUb3AgKyAncHgnLFxuICAgICAgICAgIGJvdHRvbTogJ2luaGVyaXQnLFxuICAgICAgICB9LFxuICAgICAgICBkeW5Qcm9wc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5yZW1vdmVDaGlsZCh0aGlzLmZpbGxlckVsKTsgLy8gSUUxMSBkb2VzIG5vdCB3b3JrIHdpdGggZWwucmVtb3ZlKClcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHRoaXMuZWwuc3R5bGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vcmlnaW5hbC5wb3NpdGlvbixcbiAgICAgICAgICBmbG9hdDogdGhpcy5vcmlnaW5hbC5mbG9hdCxcbiAgICAgICAgICB0b3A6IHRoaXMub3JpZ2luYWwudG9wLFxuICAgICAgICAgIGJvdHRvbTogdGhpcy5vcmlnaW5hbC5ib3R0b20sXG4gICAgICAgICAgd2lkdGg6IHRoaXMub3JpZ2luYWwud2lkdGgsXG4gICAgICAgICAgbGVmdDogdGhpcy5vcmlnaW5hbC5sZWZ0LFxuICAgICAgICB9LFxuICAgICAgICBkeW5Qcm9wc1xuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=