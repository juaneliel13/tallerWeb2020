/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var FixedButtonCaptionDirective = /** @class */ (function () {
    function FixedButtonCaptionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createCaptionElement();
    };
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.createCaptionElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var paragraph = this.renderer.createElement('p');
        /** @type {?} */
        var text = this.renderer.createText(this.caption);
        this.renderer.appendChild(paragraph, text);
        this.renderer.appendChild(this.el.nativeElement, paragraph);
        this.paragraphEl = paragraph;
    };
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.showCaption = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.paragraphEl, 'fixed-button-caption');
        this.renderer.setStyle(this.paragraphEl, 'position', 'absolute');
        this.renderer.setStyle(this.paragraphEl, 'right', "60px");
        this.renderer.setStyle(this.paragraphEl, 'top', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
    };
    FixedButtonCaptionDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbFixedCaption]' },] }
    ];
    /** @nocollapse */
    FixedButtonCaptionDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    FixedButtonCaptionDirective.propDecorators = {
        caption: [{ type: Input, args: ['mdbFixedCaption',] }],
        collapseButtonActivator: [{ type: Input, args: ['collapseButton',] }]
    };
    return FixedButtonCaptionDirective;
}());
export { FixedButtonCaptionDirective };
if (false) {
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.caption;
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.collapseButtonActivator;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.paragraphEl;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtY2FwdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBTUUscUNBQW9CLFFBQW1CLEVBQVUsRUFBYztRQUEzQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFbkUsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELDBEQUFvQjs7O0lBQXBCOztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7O1lBQzVDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsaURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkExQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7O2dCQUZHLFNBQVM7Z0JBQXBDLFVBQVU7OzswQkFJM0IsS0FBSyxTQUFDLGlCQUFpQjswQ0FFdkIsS0FBSyxTQUFDLGdCQUFnQjs7SUF1QnpCLGtDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksMkJBQTJCOzs7SUFDdEMsOENBQTBDOztJQUUxQyw4REFBc0Q7Ozs7O0lBQ3RELGtEQUF5Qjs7Ozs7SUFDYiwrQ0FBMkI7Ozs7O0lBQUUseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW21kYkZpeGVkQ2FwdGlvbl0nIH0pXG5leHBvcnQgY2xhc3MgRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdtZGJGaXhlZENhcHRpb24nKSBjYXB0aW9uOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdjb2xsYXBzZUJ1dHRvbicpIGNvbGxhcHNlQnV0dG9uQWN0aXZhdG9yOiBhbnk7XG4gIHByaXZhdGUgcGFyYWdyYXBoRWw6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3JlYXRlQ2FwdGlvbkVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUNhcHRpb25FbGVtZW50KCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5jYXB0aW9uKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHBhcmFncmFwaCk7XG4gICAgdGhpcy5wYXJhZ3JhcGhFbCA9IHBhcmFncmFwaDtcbiAgfVxuXG4gIHNob3dDYXB0aW9uKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wYXJhZ3JhcGhFbCwgJ2ZpeGVkLWJ1dHRvbi1jYXB0aW9uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBhcmFncmFwaEVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucGFyYWdyYXBoRWwsICdyaWdodCcsIGA2MHB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBhcmFncmFwaEVsLCAndG9wJywgJzEwcHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcbiAgfVxufVxuIl19