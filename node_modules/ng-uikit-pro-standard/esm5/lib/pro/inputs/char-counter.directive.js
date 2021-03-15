/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
var CharCounterDirective = /** @class */ (function () {
    function CharCounterDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    };
    CharCounterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCharCounter]',
                },] }
    ];
    /** @nocollapse */
    CharCounterDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CharCounterDirective.propDecorators = {
        length: [{ type: Input }],
        onKeyUp: [{ type: HostListener, args: ['input',] }],
        hide: [{ type: HostListener, args: ['blur',] }],
        show: [{ type: HostListener, args: ['focus',] }]
    };
    return CharCounterDirective;
}());
export { CharCounterDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhci1jb3VudGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vaW5wdXRzL2NoYXItY291bnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGO0lBT0UsOEJBQW9CLE1BQWtCLEVBQVUsU0FBb0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIcEQsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUcyQyxDQUFDOzs7O0lBRXhFLHVDQUFROzs7SUFBUjtRQUNFLGlHQUFpRztRQUNqRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRXNCLHNDQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7Ozs7SUFFcUIsbUNBQUk7OztJQUExQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFc0IsbUNBQUk7OztJQUEzQjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBSjJCLFVBQVU7Z0JBQUUsU0FBUzs7O3lCQU05QyxLQUFLOzBCQWNMLFlBQVksU0FBQyxPQUFPO3VCQVVwQixZQUFZLFNBQUMsTUFBTTt1QkFJbkIsWUFBWSxTQUFDLE9BQU87O0lBSXZCLDJCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FqQ1ksb0JBQW9COzs7SUFDL0Isc0NBQTRCOztJQUM1Qiw2Q0FBMEI7Ozs7O0lBRWQsc0NBQTBCOzs7OztJQUFFLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkNoYXJDb3VudGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENoYXJDb3VudGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIGxlbmd0aCA9IDIwO1xuICBwdWJsaWMgdGV4dENvbnRhaW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEluaXRpdGFsaXNlIGEgbmV3IDxzcGFuPiBlbGVtZW50IGZvciB0aGUgY291bnQgZGlzcGxheSBhbmQgcmVuZGVyIGl0IGJlbG93IHRoZSBob3N0IGNvbXBvbmVudC5cbiAgICB0aGlzLnRleHRDb250YWluZXIgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCB0aGlzLnRleHRDb250YWluZXIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMudGV4dENvbnRhaW5lciwgJ2NoYXJzJyk7XG4gICAgdGhpcy50ZXh0Q29udGFpbmVyLmlubmVySFRNTCA9ICcwLycgKyB0aGlzLmxlbmd0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0Jykgb25LZXlVcCgpIHtcbiAgICB0aGlzLnRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggKyAnLycgKyB0aGlzLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBoaWRlKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMudGV4dENvbnRhaW5lciwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBzaG93KCkge1xuICAgIHRoaXMub25LZXlVcCgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMudGV4dENvbnRhaW5lciwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxufVxuIl19