/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
export class TooltipContainerComponent {
    /**
     * @param {?} config
     * @param {?} elem
     */
    constructor(config, elem) {
        this.elem = elem;
        this.containerClass = '';
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get tooltipClasses() {
        return `tooltip-fadeIn tooltip in tooltip-${this.placement} bs-tooltip-${this.placement} ${this.placement} ${this.containerClass}`;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div #tooltipArrow class="tooltip-arrow arrow"></div>
    <div #tooltipInner class="tooltip-inner">
      <ng-content></ng-content>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: ["a .tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}a .tooltip.show{opacity:.9}a .tooltip.bs-tether-element-attached-bottom,a .tooltip.tooltip-top{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,a .tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-.8rem;content:'';border-width:.8rem .8rem 0}a .tooltip.bs-tether-element-attached-left,a .tooltip.tooltip-right{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-left .tooltip-inner::before,a .tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-.8rem;content:'';border-width:.8rem .8rem .8rem 0}a .tooltip.bs-tether-element-attached-top,a .tooltip.tooltip-bottom{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-top .tooltip-inner::before,a .tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-.8rem;content:'';border-width:0 .8rem .8rem}a .tooltip.bs-tether-element-attached-right,a .tooltip.tooltip-left{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-right .tooltip-inner::before,a .tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-.8rem;content:'';border-width:.8rem 0 .8rem .8rem}.tooltip-inner{max-width:200px;padding:.2rem .4rem;text-align:center;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}@-webkit-keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}@keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}.tooltip-fadeIn{-webkit-animation-name:fadeInTooltip;animation-name:fadeInTooltip;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.single-tooltip{padding:.75rem 0 0}.single-tooltip a{padding:0!important}a[tooltip]{margin-left:0!important;padding:0 .5rem}.tooltip-arrow.left{position:relative;margin-right:-.6rem;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tooltip-arrow.right{position:relative;margin-left:-.6rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tooltip-arrow.top{position:relative;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tooltip-top{padding:.4rem 0}.tooltip-top .arrow{bottom:0}.tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tooltip-right{padding:0 .4rem}.tooltip-right .arrow{left:0}.tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-bottom{padding:.4rem 0}.tooltip-bottom .arrow{top:0}.tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tooltip-left{padding:0 .4rem}.tooltip-left .arrow{right:0}.tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.md-tooltip-email.show,.md-tooltip-main.show,.md-tooltip.show{opacity:1!important}.md-inner{padding:7px 8px;background:rgba(97,97,97,.9)!important;border-radius:4px;font-size:10px;min-height:24px!important}.md-arrow{display:none}.md-inner-main{padding:9px 16px;background:rgba(97,97,97,.9)!important;border-radius:4px;font-size:14px;min-height:32px!important}.md-tooltip,.md-tooltip-main{line-height:1}.md-inner-email{background-color:#232f34!important;border-radius:25px;font-size:12px;padding-left:12px;padding-right:12px}"]
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig },
    { type: ElementRef }
];
TooltipContainerComponent.propDecorators = {
    containerClass: [{ type: Input }],
    tooltipInner: [{ type: ViewChild, args: ['tooltipInner', { static: true },] }],
    tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow', { static: true },] }],
    show: [{ type: HostBinding, args: ['class.show',] }],
    tooltipClasses: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFjdEQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFtQnBDLFlBQW1CLE1BQXFCLEVBQVMsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWJ4RCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUdGLFNBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFXNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQVhELElBQ0ksY0FBYztRQUNoQixPQUFPLHFDQUFxQyxJQUFJLENBQUMsU0FBUyxlQUFlLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckksQ0FBQzs7OztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQU1NLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFkUSxhQUFhO1lBTnBCLFVBQVU7Ozs2QkEyQlQsS0FBSzsyQkFDTCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDMUMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUJBQzFDLFdBQVcsU0FBQyxZQUFZOzZCQUN4QixXQUFXLFNBQUMsT0FBTzs7OztJQVRwQiw2Q0FBcUI7O0lBQ3JCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQiw4Q0FBMEI7O0lBRTFCLG1EQUE2Qjs7SUFDN0IsaURBQXNFOztJQUN0RSxpREFBc0U7O0lBQ3RFLHlDQUE4Qzs7SUFVSix5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnLi4vdXRpbHMvbmcyLWJvb3RzdHJhcC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItdG9vbHRpcC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICN0b29sdGlwQXJyb3cgY2xhc3M9XCJ0b29sdGlwLWFycm93IGFycm93XCI+PC9kaXY+XG4gICAgPGRpdiAjdG9vbHRpcElubmVyIGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBjbGFzc01hcDogYW55O1xuICBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBwb3B1cENsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBhbmltYXRpb246IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcbiAgQFZpZXdDaGlsZCgndG9vbHRpcElubmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdG9vbHRpcElubmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0b29sdGlwQXJyb3cnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0b29sdGlwQXJyb3c6IEVsZW1lbnRSZWY7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpIHNob3cgPSAhdGhpcy5pc0JzMztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCB0b29sdGlwQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gYHRvb2x0aXAtZmFkZUluIHRvb2x0aXAgaW4gdG9vbHRpcC0ke3RoaXMucGxhY2VtZW50fSBicy10b29sdGlwLSR7dGhpcy5wbGFjZW1lbnR9ICR7dGhpcy5wbGFjZW1lbnR9ICR7dGhpcy5jb250YWluZXJDbGFzc31gO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IFRvb2x0aXBDb25maWcsIHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0geyBpbjogZmFsc2UsIGZhZGU6IGZhbHNlIH07XG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuICAgIHRoaXMuY2xhc3NNYXBbJ3Rvb2x0aXAtJyArIHRoaXMucGxhY2VtZW50XSA9IHRydWU7XG5cbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9wdXBDbGFzcykge1xuICAgICAgdGhpcy5jbGFzc01hcFt0aGlzLnBvcHVwQ2xhc3NdID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==