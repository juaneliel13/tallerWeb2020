/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, HostBinding, ElementRef, Renderer2, Component, ViewEncapsulation, } from '@angular/core';
import { Utils } from '../utils';
/** @type {?} */
let defaultIdNumber = 0;
// tslint:disable-next-line:component-class-suffix
export class MdbSuccessDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = `mdb-success-${defaultIdNumber++}`;
        this.successMsg = true;
        this.messageId = this.id;
        this.utils = new Utils();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateMarginTop() {
        /** @type {?} */
        const parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        /** @type {?} */
        const heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            /** @type {?} */
            const margin = heightParent / 12.5;
            this.el.nativeElement.style.top = `${heightParent + heightParent / margin}px`;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.prefix = this.el.nativeElement.parentNode.querySelector('.prefix');
        if (this.prefix) {
            this.prefix.classList.add('success-message');
        }
        /** @type {?} */
        const textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            /** @type {?} */
            let height = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', (/**
             * @return {?}
             */
            () => {
                height = textarea.offsetHeight + 4 + 'px';
                this.renderer.setStyle(this.el.nativeElement, 'top', height);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
        if (this.prefix) {
            this.prefix.classList.remove('success-message');
        }
    }
}
MdbSuccessDirective.decorators = [
    { type: Component, args: [{
                selector: 'mdb-success',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".error-message,.success-message{position:absolute;top:40px;left:0;font-size:.8rem}textarea~.error-message,textarea~.success-message{top:unset;bottom:-20px}.error-message{color:#f44336}.success-message{color:#00c851}"]
            }] }
];
/** @nocollapse */
MdbSuccessDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbSuccessDirective.propDecorators = {
    id: [{ type: Input }],
    successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
    messageId: [{ type: HostBinding, args: ['attr.id',] }]
};
if (false) {
    /** @type {?} */
    MdbSuccessDirective.prototype.prefix;
    /** @type {?} */
    MdbSuccessDirective.prototype.id;
    /** @type {?} */
    MdbSuccessDirective.prototype.successMsg;
    /** @type {?} */
    MdbSuccessDirective.prototype.messageId;
    /** @type {?} */
    MdbSuccessDirective.prototype.textareaListenFunction;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.utils;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvc3VjY2Vzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDOztJQUU3QixlQUFlLEdBQUcsQ0FBQztBQVF2QixrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFXOUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVHRELE9BQUUsR0FBRyxlQUFlLGVBQWUsRUFBRSxFQUFFLENBQUM7UUFFWCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBSXBDLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBRStCLENBQUM7Ozs7O0lBRTNELG1CQUFtQjs7Y0FDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDOztjQUN0RSxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3hELElBQUksWUFBWSxFQUFFOztrQkFDVixNQUFNLEdBQUcsWUFBWSxHQUFHLElBQUk7WUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUM7U0FDL0U7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM5Qzs7Y0FFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBRS9FLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxFQUFFOztnQkFDUixNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFN0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPOzs7WUFBRSxHQUFHLEVBQUU7Z0JBQ3pFLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvRCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBaEJDLFVBQVU7WUFDVixTQUFTOzs7aUJBbUJSLEtBQUs7eUJBRUwsV0FBVyxTQUFDLHVCQUF1Qjt3QkFDbkMsV0FBVyxTQUFDLFNBQVM7Ozs7SUFKdEIscUNBQW9COztJQUNwQixpQ0FBaUQ7O0lBRWpELHlDQUF3RDs7SUFDeEQsd0NBQTRDOztJQUU1QyxxREFBaUM7Ozs7O0lBRWpDLG9DQUFtQzs7Ozs7SUFFdkIsaUNBQXNCOzs7OztJQUFFLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL3V0aWxzJztcblxubGV0IGRlZmF1bHRJZE51bWJlciA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zdWNjZXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtdXRpbGl0aWVzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJTdWNjZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcmVmaXg6IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKSBpZCA9IGBtZGItc3VjY2Vzcy0ke2RlZmF1bHRJZE51bWJlcisrfWA7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdWNjZXNzLW1lc3NhZ2UnKSBzdWNjZXNzTXNnID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgbWVzc2FnZUlkID0gdGhpcy5pZDtcblxuICB0ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uOiBGdW5jdGlvbjtcblxuICBwcml2YXRlIHV0aWxzOiBVdGlscyA9IG5ldyBVdGlscygpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIF9jYWxjdWxhdGVNYXJnaW5Ub3AoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZvcm0tY2hlY2snKTtcbiAgICBjb25zdCBoZWlnaHRQYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQub2Zmc2V0SGVpZ2h0IDogbnVsbDtcbiAgICBpZiAoaGVpZ2h0UGFyZW50KSB7XG4gICAgICBjb25zdCBtYXJnaW4gPSBoZWlnaHRQYXJlbnQgLyAxMi41O1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGAke2hlaWdodFBhcmVudCArIGhlaWdodFBhcmVudCAvIG1hcmdpbn1weGA7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcmVmaXggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcucHJlZml4Jyk7XG4gICAgaWYgKHRoaXMucHJlZml4KSB7XG4gICAgICB0aGlzLnByZWZpeC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzLW1lc3NhZ2UnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tZC10ZXh0YXJlYScpO1xuXG4gICAgdGhpcy5fY2FsY3VsYXRlTWFyZ2luVG9wKCk7XG4gICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0ICsgNCArICdweCc7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlaWdodCk7XG5cbiAgICAgIHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRleHRhcmVhLCAna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgIGhlaWdodCA9IHRleHRhcmVhLm9mZnNldEhlaWdodCArIDQgKyAncHgnO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJlZml4KSB7XG4gICAgICB0aGlzLnByZWZpeC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzLW1lc3NhZ2UnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==