/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, HostListener, PLATFORM_ID, Inject, } from '@angular/core';
import { DOWN_ARROW, UP_ARROW } from '../utils/keyboard-navigation';
// tslint:disable-next-line:directive-class-suffix
export class MdbInput {
    /**
     * @param {?} el
     * @param {?} _renderer
     * @param {?} platformId
     */
    constructor(el, _renderer, platformId) {
        this.el = el;
        this._renderer = _renderer;
        this.elLabel = null;
        this.elIcon = null;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.element = null;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    onfocus() {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onblur() {
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onchange() {
        try {
            this.checkValue();
        }
        catch (error) { }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeydown(event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 10;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    }
    /**
     * @return {?}
     */
    oncut() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onpaste() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    ondrop() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        const type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
    }
    /**
     * @return {?}
     */
    resize() {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    }
    /**
     * @return {?}
     */
    delayedResize() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.resize();
        }), 0);
    }
    /**
     * @return {?}
     */
    initComponent() {
        /** @type {?} */
        let inputId;
        /** @type {?} */
        let inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel =
                inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkValue() {
        /** @type {?} */
        let value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
            }
            if ((value === '' && this.isClicked) ||
                (value === '' && this.el.nativeElement.placeholder) ||
                (value === '' && this.el.nativeElement.attributes.placeholder)) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    }
}
MdbInput.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInput]',
            },] }
];
/** @nocollapse */
MdbInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbInput.propDecorators = {
    focusCheckbox: [{ type: Input }],
    focusRadio: [{ type: Input }],
    onfocus: [{ type: HostListener, args: ['focus',] }],
    onblur: [{ type: HostListener, args: ['blur',] }],
    onchange: [{ type: HostListener, args: ['change',] }],
    onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: HostListener, args: ['cut',] }],
    onpaste: [{ type: HostListener, args: ['paste',] }],
    ondrop: [{ type: HostListener, args: ['drop',] }]
};
if (false) {
    /** @type {?} */
    MdbInput.prototype.elLabel;
    /** @type {?} */
    MdbInput.prototype.elIcon;
    /** @type {?} */
    MdbInput.prototype.focusCheckbox;
    /** @type {?} */
    MdbInput.prototype.focusRadio;
    /** @type {?} */
    MdbInput.prototype.isBrowser;
    /** @type {?} */
    MdbInput.prototype.isClicked;
    /** @type {?} */
    MdbInput.prototype.element;
    /**
     * @type {?}
     * @private
     */
    MdbInput.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbInput.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXRzL2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFFTCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBS3BFLGtEQUFrRDtBQUNsRCxNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBV25CLFlBQ1UsRUFBYyxFQUNkLFNBQW9CLEVBQ1AsVUFBa0I7UUFGL0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFadkIsWUFBTyxHQUFxQixJQUFJLENBQUM7UUFDakMsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFFM0Isa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUUzQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFRLElBQUksQ0FBQztRQU9sQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFc0IsT0FBTztRQUM1QixJQUFJO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7SUFD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QUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Z0JBQ25ELENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQzlEO2dCQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDakQ7U0FDRjtJQUNILENBQUM7OztZQTFLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFiQyxVQUFVO1lBQ1YsU0FBUzt5Q0E0Qk4sTUFBTSxTQUFDLFdBQVc7Ozs0QkFWcEIsS0FBSzt5QkFDTCxLQUFLO3NCQWNMLFlBQVksU0FBQyxPQUFPO3FCQU9wQixZQUFZLFNBQUMsTUFBTTt1QkFTbkIsWUFBWSxTQUFDLFFBQVE7d0JBTXJCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBMkJsQyxZQUFZLFNBQUMsS0FBSztzQkFPbEIsWUFBWSxTQUFDLE9BQU87cUJBT3BCLFlBQVksU0FBQyxNQUFNOzs7O0lBakZwQiwyQkFBd0M7O0lBQ3hDLDBCQUFvQzs7SUFFcEMsaUNBQThCOztJQUM5Qiw4QkFBMkI7O0lBRTNCLDZCQUF1Qjs7SUFDdkIsNkJBQWtCOztJQUNsQiwyQkFBb0I7Ozs7O0lBR2xCLHNCQUFzQjs7Ozs7SUFDdEIsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgVVBfQVJST1cgfSBmcm9tICcuLi91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYklucHV0XScsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJJbnB1dCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgZWxMYWJlbDogRWxlbWVudFJlZiB8IGFueSA9IG51bGw7XG4gIHB1YmxpYyBlbEljb246IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGZvY3VzQ2hlY2tib3ggPSB0cnVlO1xuICBASW5wdXQoKSBmb2N1c1JhZGlvID0gdHJ1ZTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICBpc0NsaWNrZWQgPSBmYWxzZTtcbiAgZWxlbWVudDogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uZm9jdXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uYmx1cigpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJykgb25jaGFuZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY2hlY2tWYWx1ZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9ua2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlICsgMTA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMTA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlICsgMC4xO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gK2V2ZW50LnRhcmdldC52YWx1ZSAtIDAuMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgdGhpcy5kZWxheWVkUmVzaXplKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY3V0Jykgb25jdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJykgb25wYXN0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcpIG9uZHJvcCgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWQtdGV4dGFyZWEtYXV0bycpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudHlwZTtcbiAgICBpZiAodGhpcy5mb2N1c0NoZWNrYm94ICYmIHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uRm9jdXNTZWxlY3QnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNSYWRpbyAmJiB0eXBlID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvbkZvY3VzU2VsZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuaW5pdENvbXBvbmVudCgpO1xuICAgIHRoaXMuY2hlY2tWYWx1ZSgpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZC10ZXh0YXJlYS1hdXRvJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZGVsYXllZFJlc2l6ZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBsZXQgaW5wdXRJZDtcbiAgICBsZXQgaW5wdXRQO1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXRJZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXRQID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAgIHRoaXMuZWxMYWJlbCA9XG4gICAgICAgIGlucHV0UC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCInICsgaW5wdXRJZCArICdcIl0nKSB8fCBpbnB1dFAucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICAgIGlmICh0aGlzLmVsTGFiZWwgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlICE9PSAnJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxJY29uID0gaW5wdXRQLnF1ZXJ5U2VsZWN0b3IoJ2knKSB8fCBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmFsdWUoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMuZWxMYWJlbCAhPSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmVsSWNvbikge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxJY29uLCAnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHZhbHVlID09PSAnJyAmJiB0aGlzLmlzQ2xpY2tlZCkgfHxcbiAgICAgICAgKHZhbHVlID09PSAnJyAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIpIHx8XG4gICAgICAgICh2YWx1ZSA9PT0gJycgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=