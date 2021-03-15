/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
export class CharCounterDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    }
    /**
     * @return {?}
     */
    show() {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    }
}
CharCounterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCharCounter]',
            },] }
];
/** @nocollapse */
CharCounterDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CharCounterDirective.propDecorators = {
    length: [{ type: Input }],
    onKeyUp: [{ type: HostListener, args: ['input',] }],
    hide: [{ type: HostListener, args: ['blur',] }],
    show: [{ type: HostListener, args: ['focus',] }]
};
if (false) {
    /** @type {?} */
    CharCounterDirective.prototype.length;
    /** @type {?} */
    CharCounterDirective.prototype.textContainer;
    /**
     * @type {?}
     * @private
     */
    CharCounterDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    CharCounterDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhci1jb3VudGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vaW5wdXRzL2NoYXItY291bnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBSS9CLFlBQW9CLE1BQWtCLEVBQVUsU0FBb0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIcEQsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUcyQyxDQUFDOzs7O0lBRXhFLFFBQVE7UUFDTixpR0FBaUc7UUFDakcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVzQixPQUFPO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFMUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7OztJQUVxQixJQUFJO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFc0IsSUFBSTtRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFKMkIsVUFBVTtZQUFFLFNBQVM7OztxQkFNOUMsS0FBSztzQkFjTCxZQUFZLFNBQUMsT0FBTzttQkFVcEIsWUFBWSxTQUFDLE1BQU07bUJBSW5CLFlBQVksU0FBQyxPQUFPOzs7O0lBNUJyQixzQ0FBNEI7O0lBQzVCLDZDQUEwQjs7Ozs7SUFFZCxzQ0FBMEI7Ozs7O0lBQUUseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQ2hhckNvdW50ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhckNvdW50ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgbGVuZ3RoID0gMjA7XG4gIHB1YmxpYyB0ZXh0Q29udGFpbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gSW5pdGl0YWxpc2UgYSBuZXcgPHNwYW4+IGVsZW1lbnQgZm9yIHRoZSBjb3VudCBkaXNwbGF5IGFuZCByZW5kZXIgaXQgYmVsb3cgdGhlIGhvc3QgY29tcG9uZW50LlxuICAgIHRoaXMudGV4dENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsIHRoaXMudGV4dENvbnRhaW5lcik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50ZXh0Q29udGFpbmVyLCAnY2hhcnMnKTtcbiAgICB0aGlzLnRleHRDb250YWluZXIuaW5uZXJIVE1MID0gJzAvJyArIHRoaXMubGVuZ3RoO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMudGV4dENvbnRhaW5lciwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbktleVVwKCkge1xuICAgIHRoaXMudGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCArICcvJyArIHRoaXMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoID4gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdpbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIGhpZGUoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy50ZXh0Q29udGFpbmVyLCAnZGlzcGxheScsICdub25lJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIHNob3coKSB7XG4gICAgdGhpcy5vbktleVVwKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy50ZXh0Q29udGFpbmVyLCAnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG4iXX0=