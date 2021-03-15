/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config, elem) {
        this.elem = elem;
        this.containerClass = '';
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "tooltipClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return "tooltip-fadeIn tooltip in tooltip-" + this.placement + " bs-tooltip-" + this.placement + " " + this.placement + " " + this.containerClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tooltip-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div #tooltipArrow class=\"tooltip-arrow arrow\"></div>\n    <div #tooltipInner class=\"tooltip-inner\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["a .tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}a .tooltip.show{opacity:.9}a .tooltip.bs-tether-element-attached-bottom,a .tooltip.tooltip-top{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,a .tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-.8rem;content:'';border-width:.8rem .8rem 0}a .tooltip.bs-tether-element-attached-left,a .tooltip.tooltip-right{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-left .tooltip-inner::before,a .tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-.8rem;content:'';border-width:.8rem .8rem .8rem 0}a .tooltip.bs-tether-element-attached-top,a .tooltip.tooltip-bottom{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-top .tooltip-inner::before,a .tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-.8rem;content:'';border-width:0 .8rem .8rem}a .tooltip.bs-tether-element-attached-right,a .tooltip.tooltip-left{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-right .tooltip-inner::before,a .tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-.8rem;content:'';border-width:.8rem 0 .8rem .8rem}.tooltip-inner{max-width:200px;padding:.2rem .4rem;text-align:center;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}@-webkit-keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}@keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}.tooltip-fadeIn{-webkit-animation-name:fadeInTooltip;animation-name:fadeInTooltip;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.single-tooltip{padding:.75rem 0 0}.single-tooltip a{padding:0!important}a[tooltip]{margin-left:0!important;padding:0 .5rem}.tooltip-arrow.left{position:relative;margin-right:-.6rem;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tooltip-arrow.right{position:relative;margin-left:-.6rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tooltip-arrow.top{position:relative;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tooltip-top{padding:.4rem 0}.tooltip-top .arrow{bottom:0}.tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tooltip-right{padding:0 .4rem}.tooltip-right .arrow{left:0}.tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-bottom{padding:.4rem 0}.tooltip-bottom .arrow{top:0}.tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tooltip-left{padding:0 .4rem}.tooltip-left .arrow{right:0}.tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.md-tooltip-email.show,.md-tooltip-main.show,.md-tooltip.show{opacity:1!important}.md-inner{padding:7px 8px;background:rgba(97,97,97,.9)!important;border-radius:4px;font-size:10px;min-height:24px!important}.md-arrow{display:none}.md-inner-main{padding:9px 16px;background:rgba(97,97,97,.9)!important;border-radius:4px;font-size:14px;min-height:32px!important}.md-tooltip,.md-tooltip-main{line-height:1}.md-inner-email{background-color:#232f34!important;border-radius:25px;font-size:12px;padding-left:12px;padding-right:12px}"]
                }] }
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig },
        { type: ElementRef }
    ]; };
    TooltipContainerComponent.propDecorators = {
        containerClass: [{ type: Input }],
        tooltipInner: [{ type: ViewChild, args: ['tooltipInner', { static: true },] }],
        tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow', { static: true },] }],
        show: [{ type: HostBinding, args: ['class.show',] }],
        tooltipClasses: [{ type: HostBinding, args: ['class',] }]
    };
    return TooltipContainerComponent;
}());
export { TooltipContainerComponent };
if (false) {
    /** @type {?} */
    TooltipContainerComponent.prototype.classMap;
    /** @type {?} */
    TooltipContainerComponent.prototype.placement;
    /** @type {?} */
    TooltipContainerComponent.prototype.popupClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.animation;
    /** @type {?} */
    TooltipContainerComponent.prototype.containerClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.tooltipInner;
    /** @type {?} */
    TooltipContainerComponent.prototype.tooltipArrow;
    /** @type {?} */
    TooltipContainerComponent.prototype.show;
    /** @type {?} */
    TooltipContainerComponent.prototype.elem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEQ7SUErQkUsbUNBQW1CLE1BQXFCLEVBQVMsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWJ4RCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUdGLFNBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFXNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVhELHNCQUNJLHFEQUFjOzs7O1FBRGxCO1lBRUUsT0FBTyx1Q0FBcUMsSUFBSSxDQUFDLFNBQVMsb0JBQWUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxjQUFnQixDQUFDO1FBQ3JJLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNENBQUs7Ozs7UUFBaEI7WUFDRSxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUFBOzs7O0lBTU0sbURBQWU7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdkM7SUFDSCxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsaUtBS1Q7b0JBRUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFkUSxhQUFhO2dCQU5wQixVQUFVOzs7aUNBMkJULEtBQUs7K0JBQ0wsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBQzFDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUMxQyxXQUFXLFNBQUMsWUFBWTtpQ0FDeEIsV0FBVyxTQUFDLE9BQU87O0lBMkJ0QixnQ0FBQztDQUFBLEFBakRELElBaURDO1NBckNZLHlCQUF5Qjs7O0lBQ3BDLDZDQUFxQjs7SUFDckIsOENBQXlCOztJQUN6QiwrQ0FBMEI7O0lBQzFCLDhDQUEwQjs7SUFFMUIsbURBQTZCOztJQUM3QixpREFBc0U7O0lBQ3RFLGlEQUFzRTs7SUFDdEUseUNBQThDOztJQVVKLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10b29sdGlwLWNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI3Rvb2x0aXBBcnJvdyBjbGFzcz1cInRvb2x0aXAtYXJyb3cgYXJyb3dcIj48L2Rpdj5cbiAgICA8ZGl2ICN0b29sdGlwSW5uZXIgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGNsYXNzTWFwOiBhbnk7XG4gIHB1YmxpYyBwbGFjZW1lbnQ6IHN0cmluZztcbiAgcHVibGljIHBvcHVwQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGFuaW1hdGlvbjogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjb250YWluZXJDbGFzcyA9ICcnO1xuICBAVmlld0NoaWxkKCd0b29sdGlwSW5uZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB0b29sdGlwSW5uZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBBcnJvdycsIHsgc3RhdGljOiB0cnVlIH0pIHRvb2x0aXBBcnJvdzogRWxlbWVudFJlZjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93Jykgc2hvdyA9ICF0aGlzLmlzQnMzO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IHRvb2x0aXBDbGFzc2VzKCkge1xuICAgIHJldHVybiBgdG9vbHRpcC1mYWRlSW4gdG9vbHRpcCBpbiB0b29sdGlwLSR7dGhpcy5wbGFjZW1lbnR9IGJzLXRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH0gJHt0aGlzLnBsYWNlbWVudH0gJHt0aGlzLmNvbnRhaW5lckNsYXNzfWA7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZywgcHVibGljIGVsZW06IEVsZW1lbnRSZWYpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7IGluOiBmYWxzZSwgZmFkZTogZmFsc2UgfTtcbiAgICB0aGlzLmNsYXNzTWFwW3RoaXMucGxhY2VtZW50XSA9IHRydWU7XG4gICAgdGhpcy5jbGFzc01hcFsndG9vbHRpcC0nICsgdGhpcy5wbGFjZW1lbnRdID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xhc3NNYXAuaW4gPSB0cnVlO1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5jbGFzc01hcC5mYWRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3B1cENsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMucG9wdXBDbGFzc10gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19