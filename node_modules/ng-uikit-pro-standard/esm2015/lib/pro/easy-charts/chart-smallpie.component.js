/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class EasyPieChartComponent {
    /**
     * @param {?} el
     * @param {?} platformId
     * @param {?} _r
     */
    constructor(el, platformId, _r) {
        this.el = el;
        this._r = _r;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
        /** @type {?} */
        const options = {
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
    ngOnInit() {
        if (this.isBrowser) {
            /** @type {?} */
            const size = this.options.size;
            this.el.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.el.nativeElement, this.options);
            this.pieChart.update(this.percent);
            // Positioning text in center of chart
            /** @type {?} */
            const percent = document.querySelector('.percent');
            if (percent) {
                this._r.setStyle(percent, 'line-height', size + 'px');
                this._r.setStyle(percent, 'width', size + 'px');
                this._r.setStyle(percent, 'height', size + 'px');
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    }
}
EasyPieChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-easy-pie-chart',
                template: '<div>Loading</div>',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
EasyPieChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 }
];
EasyPieChartComponent.propDecorators = {
    percent: [{ type: Input }],
    options: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc21hbGxwaWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9lYXN5LWNoYXJ0cy9jaGFydC1zbWFsbHBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBELE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQU1oQyxZQUNTLEVBQWMsRUFDQSxVQUFrQixFQUMvQixFQUFhO1FBRmQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUViLE9BQUUsR0FBRixFQUFFLENBQVc7UUFMdkIsY0FBUyxHQUFRLEtBQUssQ0FBQztRQU9yQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDOztjQUV6QyxPQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUUsU0FBUztZQUNyQixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O2tCQUU3QixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDbEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNsRDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEJDLFVBQVU7eUNBeUJQLE1BQU0sU0FBQyxXQUFXO1lBcEJyQixTQUFTOzs7c0JBYVIsS0FBSztzQkFDTCxLQUFLOzs7O0lBRE4sd0NBQXNCOztJQUN0Qix3Q0FBc0I7O0lBQ3RCLHlDQUFjOztJQUNkLDBDQUF1Qjs7SUFHckIsbUNBQXFCOzs7OztJQUVyQixtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciBFYXN5UGllQ2hhcnQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWVhc3ktcGllLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2PkxvYWRpbmc8L2Rpdj4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRWFzeVBpZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBwZXJjZW50OiBhbnk7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcbiAgcGllQ2hhcnQ6IGFueTtcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIHByaXZhdGUgX3I6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGJhckNvbG9yOiAnI2VmMWUyNScsXG4gICAgICB0cmFja0NvbG9yOiAnI2Y5ZjlmOScsXG4gICAgICBzY2FsZUNvbG9yOiAnI2RmZTBlMCcsXG4gICAgICBzY2FsZUxlbmd0aDogNSxcbiAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICBsaW5lV2lkdGg6IDMsXG4gICAgICBzaXplOiAxMTAsXG4gICAgICByb3RhdGU6IDAsXG4gICAgICBhbmltYXRlOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5waWVDaGFydCA9IG5ldyBFYXN5UGllQ2hhcnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5waWVDaGFydC51cGRhdGUodGhpcy5wZXJjZW50KTtcbiAgICAgIC8vIFBvc2l0aW9uaW5nIHRleHQgaW4gY2VudGVyIG9mIGNoYXJ0XG4gICAgICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcmNlbnQnKTtcbiAgICAgIGlmIChwZXJjZW50KSB7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUocGVyY2VudCwgJ2xpbmUtaGVpZ2h0Jywgc2l6ZSArICdweCcpO1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHBlcmNlbnQsICd3aWR0aCcsIHNpemUgKyAncHgnKTtcbiAgICAgICAgdGhpcy5fci5zZXRTdHlsZShwZXJjZW50LCAnaGVpZ2h0Jywgc2l6ZSArICdweCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIWNoYW5nZXNbJ3BlcmNlbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucGllQ2hhcnQudXBkYXRlKHRoaXMucGVyY2VudCk7XG4gICAgfVxuICB9XG59XG4iXX0=