/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Optional, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function IAccordionAnimationState() { }
if (false) {
    /** @type {?} */
    IAccordionAnimationState.prototype.state;
    /** @type {?} */
    IAccordionAnimationState.prototype.accordionEl;
}
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent(el, _cdRef, router) {
        this.el = el;
        this._cdRef = _cdRef;
        this.router = router;
        this.animationStateChange = new EventEmitter();
        this.id = "mdb-accordion-";
        this.height = '0';
        this._destroy$ = new Subject();
        this.expandAnimationState = 'collapsed';
        this.ariaLabelledBy = '';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemBodyComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            collapsed
                ? (_this.expandAnimationState = 'collapsed')
                : (_this.expandAnimationState = 'expanded');
            _this._cdRef.markForCheck();
        }), 0);
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.animationCallback = /**
     * @return {?}
     */
    function () {
        this.animationStateChange.emit({
            state: this.expandAnimationState,
            accordionEl: this.el.nativeElement.parentElement.parentElement,
        });
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.openSidenavOnActiveLink = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var pathStrategyUrl = window.location.pathname;
        /** @type {?} */
        var hashStrategyUrl = window.location.hash;
        /** @type {?} */
        var activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            /** @type {?} */
            var params = link.href.split('?')[1];
            if (params) {
                return (link.href.split('?')[0] === pathStrategyUrl || link.href.split('?')[0] === hashStrategyUrl);
            }
            else {
                return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
            }
        }));
        /** @type {?} */
        var sbItem = this.el.nativeElement.parentNode;
        if (activeLink) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.expandAnimationState = 'expanded';
                if (sbItem) {
                    sbItem.classList.add('active');
                    sbItem.classList.remove('is-collapsed');
                }
                _this._cdRef.markForCheck();
            }), 10);
        }
        else if (this.expandAnimationState !== 'collapsed' && activeLink) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.expandAnimationState = 'collapsed';
                if (sbItem) {
                    sbItem.classList.remove('active');
                    sbItem.classList.add('is-collapsed');
                }
                _this._cdRef.markForCheck();
            }), 10);
        }
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.collapsed
                ? (_this.expandAnimationState = 'collapsed')
                : (_this.expandAnimationState = 'expanded');
            if (_this.router && _this.autoExpand) {
                _this.router.events
                    .pipe(takeUntil(_this._destroy$), filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return event instanceof NavigationEnd; })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.openSidenavOnActiveLink();
                }));
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.unsubscribe();
    };
    SBItemBodyComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemBody',
                    selector: 'mdb-item-body, mdb-accordion-item-body',
                    template: "<div #body class=\"sb-item-body\"\n     [style.height]=\"height\"\n     (@expandBody.done)=\"animationCallback()\"\n     [@expandBody]=\"expandAnimationState\"\n     [id]=\"id\"\n     role=\"region\"\n     [attr.aria-labelledby]=\"ariaLabelledBy\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('expandBody', [
                            state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                            state('expanded', style({ height: '*', visibility: 'visible' })),
                            transition('expanded <=> collapsed', animate('500ms ease')),
                        ]),
                    ]
                }] }
    ];
    /** @nocollapse */
    SBItemBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    SBItemBodyComponent.propDecorators = {
        customClass: [{ type: Input }],
        animationStateChange: [{ type: Output }],
        routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
        bodyEl: [{ type: ViewChild, args: ['body', { static: true },] }]
    };
    return SBItemBodyComponent;
}());
export { SBItemBodyComponent };
if (false) {
    /** @type {?} */
    SBItemBodyComponent.prototype.customClass;
    /** @type {?} */
    SBItemBodyComponent.prototype.animationStateChange;
    /** @type {?} */
    SBItemBodyComponent.prototype.routerLinks;
    /** @type {?} */
    SBItemBodyComponent.prototype.bodyEl;
    /** @type {?} */
    SBItemBodyComponent.prototype.autoExpand;
    /** @type {?} */
    SBItemBodyComponent.prototype.collapsed;
    /** @type {?} */
    SBItemBodyComponent.prototype.id;
    /** @type {?} */
    SBItemBodyComponent.prototype.height;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype._destroy$;
    /** @type {?} */
    SBItemBodyComponent.prototype.expandAnimationState;
    /** @type {?} */
    SBItemBodyComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    SBItemBodyComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype._cdRef;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFakIsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRS9CLDhDQUdDOzs7SUFGQyx5Q0FBYzs7SUFDZCwrQ0FBd0I7O0FBRzFCO0lBaUNFLDZCQUNTLEVBQWMsRUFDYixNQUF5QixFQUNiLE1BQWM7UUFGM0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNiLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBCMUIseUJBQW9CLEdBQTJDLElBQUksWUFBWSxFQUV0RixDQUFDO1FBT0csT0FBRSxHQUFHLGdCQUFnQixDQUFDO1FBQ3RCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFWixjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFakQseUJBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBTWpCLENBQUM7Ozs7O0lBRUosb0NBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQXpCLGlCQVFDO1FBUEMsVUFBVTs7O1FBQUM7WUFDVCxTQUFTO2dCQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUU3QyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCwrQ0FBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDaEMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1NBQy9ELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxxREFBdUI7OztJQUF2QjtRQUFBLGlCQWtDQzs7WUFqQ08sZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTs7WUFDMUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTs7WUFDdEMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBUzs7Z0JBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGVBQWUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxlQUFlLENBQzNGLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQyxFQUFDOztZQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVO1FBQy9DLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzdCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztTQUNSO2FBQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssV0FBVyxJQUFJLFVBQVUsRUFBRTtZQUNsRSxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO2dCQUN4QyxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFBQSxpQkFpQkM7UUFoQkMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsU0FBUztnQkFDWixDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFN0MsSUFBSSxLQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtxQkFDZixJQUFJLENBQ0gsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFDekIsTUFBTTs7OztnQkFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLEVBQUMsQ0FDaEQ7cUJBQ0EsU0FBUzs7O2dCQUFDO29CQUNULEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUNqQyxDQUFDLEVBQUMsQ0FBQzthQUNOO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDOztnQkFsSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCw0V0FBZ0M7b0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDOzRCQUNsRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7NEJBQ2hFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQzVELENBQUM7cUJBQ0g7aUJBQ0Y7Ozs7Z0JBcENDLFVBQVU7Z0JBUVYsaUJBQWlCO2dCQU1VLE1BQU0sdUJBOEM5QixRQUFROzs7OEJBdEJWLEtBQUs7dUNBRUwsTUFBTTs4QkFHTixlQUFlLFNBQUMsa0JBQWtCO3lCQUVsQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUE4RnJDLDBCQUFDO0NBQUEsQUFuSEQsSUFtSEM7U0F0R1ksbUJBQW1COzs7SUFDOUIsMENBQTZCOztJQUU3QixtREFFSTs7SUFDSiwwQ0FBZ0Y7O0lBRWhGLHFDQUF3RDs7SUFFeEQseUNBQTJCOztJQUMzQix3Q0FBMEI7O0lBQzFCLGlDQUE2Qjs7SUFDN0IscUNBQW9COzs7OztJQUVwQix3Q0FBaUQ7O0lBRWpELG1EQUFtQzs7SUFDbkMsNkNBQW9COztJQUdsQixpQ0FBcUI7Ozs7O0lBQ3JCLHFDQUFpQzs7Ozs7SUFDakMscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGF0ZSwgc3R5bGUsIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4uLy4uLy4uL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjY29yZGlvbkFuaW1hdGlvblN0YXRlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgYWNjb3JkaW9uRWw6IEVsZW1lbnRSZWY7XG59XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUJvZHknLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWJvZHksIG1kYi1hY2NvcmRpb24taXRlbS1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmJvZHkuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXhwYW5kQm9keScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SUFjY29yZGlvbkFuaW1hdGlvblN0YXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSUFjY29yZGlvbkFuaW1hdGlvblN0YXRlXG4gID4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYpIHJvdXRlckxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBAVmlld0NoaWxkKCdib2R5JywgeyBzdGF0aWM6IHRydWUgfSkgYm9keUVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBhdXRvRXhwYW5kOiBib29sZWFuO1xuICBwdWJsaWMgY29sbGFwc2VkOiBib29sZWFuO1xuICBwdWJsaWMgaWQgPSBgbWRiLWFjY29yZGlvbi1gO1xuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBhcmlhTGFiZWxsZWRCeSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkXG4gICAgICAgID8gKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJylcbiAgICAgICAgOiAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCcpO1xuXG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2UuZW1pdCh7XG4gICAgICBzdGF0ZTogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSxcbiAgICAgIGFjY29yZGlvbkVsOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgIH0pO1xuICB9XG5cbiAgb3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKSB7XG4gICAgY29uc3QgcGF0aFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGhhc2hTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLnJvdXRlckxpbmtzLmZpbmQoKGxpbms6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gbGluay5ocmVmLnNwbGl0KCc/JylbMV07XG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBsaW5rLmhyZWYuc3BsaXQoJz8nKVswXSA9PT0gcGF0aFN0cmF0ZWd5VXJsIHx8IGxpbmsuaHJlZi5zcGxpdCgnPycpWzBdID09PSBoYXNoU3RyYXRlZ3lVcmxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IHBhdGhTdHJhdGVneVVybCB8fCBsaW5rLmhyZWYgPT09IGhhc2hTdHJhdGVneVVybDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzYkl0ZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgICBpZiAoc2JJdGVtKSB7XG4gICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIHNiSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgIT09ICdjb2xsYXBzZWQnICYmIGFjdGl2ZUxpbmspIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCc7XG4gICAgICAgIGlmIChzYkl0ZW0pIHtcbiAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sbGFwc2VkXG4gICAgICAgID8gKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJylcbiAgICAgICAgOiAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCcpO1xuXG4gICAgICBpZiAodGhpcy5yb3V0ZXIgJiYgdGhpcy5hdXRvRXhwYW5kKSB7XG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSxcbiAgICAgICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuU2lkZW5hdk9uQWN0aXZlTGluaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==