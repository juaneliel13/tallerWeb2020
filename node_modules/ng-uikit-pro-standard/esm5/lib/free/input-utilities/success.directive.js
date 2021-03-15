/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, HostBinding, ElementRef, Renderer2, Component, ViewEncapsulation, } from '@angular/core';
import { Utils } from '../utils';
/** @type {?} */
var defaultIdNumber = 0;
var MdbSuccessDirective = /** @class */ (function () {
    function MdbSuccessDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = "mdb-success-" + defaultIdNumber++;
        this.successMsg = true;
        this.messageId = this.id;
        this.utils = new Utils();
    }
    /**
     * @private
     * @return {?}
     */
    MdbSuccessDirective.prototype._calculateMarginTop = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        /** @type {?} */
        var heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            /** @type {?} */
            var margin = heightParent / 12.5;
            this.el.nativeElement.style.top = heightParent + heightParent / margin + "px";
        }
    };
    /**
     * @return {?}
     */
    MdbSuccessDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.prefix = this.el.nativeElement.parentNode.querySelector('.prefix');
        if (this.prefix) {
            this.prefix.classList.add('success-message');
        }
        /** @type {?} */
        var textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            /** @type {?} */
            var height_1 = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height_1);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', (/**
             * @return {?}
             */
            function () {
                height_1 = textarea.offsetHeight + 4 + 'px';
                _this.renderer.setStyle(_this.el.nativeElement, 'top', height_1);
            }));
        }
    };
    /**
     * @return {?}
     */
    MdbSuccessDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
        if (this.prefix) {
            this.prefix.classList.remove('success-message');
        }
    };
    MdbSuccessDirective.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-success',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".error-message,.success-message{position:absolute;top:40px;left:0;font-size:.8rem}textarea~.error-message,textarea~.success-message{top:unset;bottom:-20px}.error-message{color:#f44336}.success-message{color:#00c851}"]
                }] }
    ];
    /** @nocollapse */
    MdbSuccessDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbSuccessDirective.propDecorators = {
        id: [{ type: Input }],
        successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbSuccessDirective;
}());
export { MdbSuccessDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvc3VjY2Vzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDOztJQUU3QixlQUFlLEdBQUcsQ0FBQztBQUV2QjtJQWtCRSw2QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVHRELE9BQUUsR0FBRyxpQkFBZSxlQUFlLEVBQUksQ0FBQztRQUVYLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFJcEMsVUFBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7SUFFK0IsQ0FBQzs7Ozs7SUFFM0QsaURBQW1COzs7O0lBQTNCOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7WUFDdEUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN4RCxJQUFJLFlBQVksRUFBRTs7Z0JBQ1YsTUFBTSxHQUFHLFlBQVksR0FBRyxJQUFJO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQU0sWUFBWSxHQUFHLFlBQVksR0FBRyxNQUFNLE9BQUksQ0FBQztTQUMvRTtJQUNILENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQzlDOztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFFL0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLEVBQUU7O2dCQUNSLFFBQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFNLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU87OztZQUFFO2dCQUNwRSxRQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFoQkMsVUFBVTtnQkFDVixTQUFTOzs7cUJBbUJSLEtBQUs7NkJBRUwsV0FBVyxTQUFDLHVCQUF1Qjs0QkFDbkMsV0FBVyxTQUFDLFNBQVM7O0lBNkN4QiwwQkFBQztDQUFBLEFBekRELElBeURDO1NBbERZLG1CQUFtQjs7O0lBQzlCLHFDQUFvQjs7SUFDcEIsaUNBQWlEOztJQUVqRCx5Q0FBd0Q7O0lBQ3hELHdDQUE0Qzs7SUFFNUMscURBQWlDOzs7OztJQUVqQyxvQ0FBbUM7Ozs7O0lBRXZCLGlDQUFzQjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmxldCBkZWZhdWx0SWROdW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3VjY2VzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXV0aWxpdGllcy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTWRiU3VjY2Vzc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4OiBIVE1MRWxlbWVudDtcbiAgQElucHV0KCkgaWQgPSBgbWRiLXN1Y2Nlc3MtJHtkZWZhdWx0SWROdW1iZXIrK31gO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3VjY2Vzcy1tZXNzYWdlJykgc3VjY2Vzc01zZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpIG1lc3NhZ2VJZCA9IHRoaXMuaWQ7XG5cbiAgdGV4dGFyZWFMaXN0ZW5GdW5jdGlvbjogRnVuY3Rpb247XG5cbiAgcHJpdmF0ZSB1dGlsczogVXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlTWFyZ2luVG9wKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNoZWNrJyk7XG4gICAgY29uc3QgaGVpZ2h0UGFyZW50ID0gcGFyZW50ID8gcGFyZW50Lm9mZnNldEhlaWdodCA6IG51bGw7XG4gICAgaWYgKGhlaWdodFBhcmVudCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gaGVpZ2h0UGFyZW50IC8gMTIuNTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtoZWlnaHRQYXJlbnQgKyBoZWlnaHRQYXJlbnQgLyBtYXJnaW59cHhgO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJlZml4ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnByZWZpeCcpO1xuICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgdGhpcy5wcmVmaXguY2xhc3NMaXN0LmFkZCgnc3VjY2Vzcy1tZXNzYWdlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLnV0aWxzLmdldENsb3Nlc3RFbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcubWQtdGV4dGFyZWEnKTtcblxuICAgIHRoaXMuX2NhbGN1bGF0ZU1hcmdpblRvcCgpO1xuICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgbGV0IGhlaWdodCA9IHRleHRhcmVhLm9mZnNldEhlaWdodCArIDQgKyAncHgnO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBoZWlnaHQpO1xuXG4gICAgICB0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24gPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0ZXh0YXJlYSwgJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICBoZWlnaHQgPSB0ZXh0YXJlYS5vZmZzZXRIZWlnaHQgKyA0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBoZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbikge1xuICAgICAgdGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgdGhpcy5wcmVmaXguY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2Vzcy1tZXNzYWdlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=