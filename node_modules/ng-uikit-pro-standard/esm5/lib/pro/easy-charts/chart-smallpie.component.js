/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var EasyPieChartComponent = /** @class */ (function () {
    function EasyPieChartComponent(el, platformId, _r) {
        this.el = el;
        this._r = _r;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
        /** @type {?} */
        var options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true,
            },
        };
        this.options = Object.assign(options, this.options);
    }
    /**
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var size = this.options.size;
            this.el.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.el.nativeElement, this.options);
            this.pieChart.update(this.percent);
            // Positioning text in center of chart
            /** @type {?} */
            var percent = document.querySelector('.percent');
            if (percent) {
                this._r.setStyle(percent, 'line-height', size + 'px');
                this._r.setStyle(percent, 'width', size + 'px');
                this._r.setStyle(percent, 'height', size + 'px');
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    EasyPieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-easy-pie-chart',
                    template: '<div>Loading</div>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    EasyPieChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 }
    ]; };
    EasyPieChartComponent.propDecorators = {
        percent: [{ type: Input }],
        options: [{ type: Input }]
    };
    return EasyPieChartComponent;
}());
export { EasyPieChartComponent };
if (false) {
    /** @type {?} */
    EasyPieChartComponent.prototype.percent;
    /** @type {?} */
    EasyPieChartComponent.prototype.options;
    /** @type {?} */
    EasyPieChartComponent.prototype.pieChart;
    /** @type {?} */
    EasyPieChartComponent.prototype.isBrowser;
    /** @type {?} */
    EasyPieChartComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    EasyPieChartComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc21hbGxwaWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9lYXN5LWNoYXJ0cy9jaGFydC1zbWFsbHBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBV0UsK0JBQ1MsRUFBYyxFQUNBLFVBQWtCLEVBQy9CLEVBQWE7UUFGZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUx2QixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBT3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBRXpDLE9BQU8sR0FBRztZQUNkLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUUsR0FBRztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNaLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7OztnQkFFN0IsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQ2xELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDbEQ7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Z0JBdkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBaEJDLFVBQVU7NkNBeUJQLE1BQU0sU0FBQyxXQUFXO2dCQXBCckIsU0FBUzs7OzBCQWFSLEtBQUs7MEJBQ0wsS0FBSzs7SUFpRFIsNEJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQW5EWSxxQkFBcUI7OztJQUNoQyx3Q0FBc0I7O0lBQ3RCLHdDQUFzQjs7SUFDdEIseUNBQWM7O0lBQ2QsMENBQXVCOztJQUdyQixtQ0FBcUI7Ozs7O0lBRXJCLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyIEVhc3lQaWVDaGFydDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItZWFzeS1waWUtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJzxkaXY+TG9hZGluZzwvZGl2PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBFYXN5UGllQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHBlcmNlbnQ6IGFueTtcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBwaWVDaGFydDogYW55O1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYmFyQ29sb3I6ICcjZWYxZTI1JyxcbiAgICAgIHRyYWNrQ29sb3I6ICcjZjlmOWY5JyxcbiAgICAgIHNjYWxlQ29sb3I6ICcjZGZlMGUwJyxcbiAgICAgIHNjYWxlTGVuZ3RoOiA1LFxuICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgIGxpbmVXaWR0aDogMyxcbiAgICAgIHNpemU6IDExMCxcbiAgICAgIHJvdGF0ZTogMCxcbiAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBzaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnBpZUNoYXJ0ID0gbmV3IEVhc3lQaWVDaGFydCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLnBpZUNoYXJ0LnVwZGF0ZSh0aGlzLnBlcmNlbnQpO1xuICAgICAgLy8gUG9zaXRpb25pbmcgdGV4dCBpbiBjZW50ZXIgb2YgY2hhcnRcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyY2VudCcpO1xuICAgICAgaWYgKHBlcmNlbnQpIHtcbiAgICAgICAgdGhpcy5fci5zZXRTdHlsZShwZXJjZW50LCAnbGluZS1oZWlnaHQnLCBzaXplICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUocGVyY2VudCwgJ3dpZHRoJywgc2l6ZSArICdweCcpO1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHBlcmNlbnQsICdoZWlnaHQnLCBzaXplICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghY2hhbmdlc1sncGVyY2VudCddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5waWVDaGFydC51cGRhdGUodGhpcy5wZXJjZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==