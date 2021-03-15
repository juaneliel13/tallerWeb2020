/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
var SimpleChartComponent = /** @class */ (function () {
    function SimpleChartComponent() {
        this.options = {
            barColor: null,
            trackColor: null,
            scaleColor: null,
            scaleLength: '',
            lineCap: null,
            lineWidth: null,
            trackWidth: null,
            size: null,
            rotate: null,
            duration: null,
            enableAnimation: null,
            animate: {
                duration: 1000,
                enabled: true,
            },
        };
    }
    /**
     * @return {?}
     */
    SimpleChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options.barColor = '#' + this.barColor;
        this.options.trackColor = '#' + this.trackColor;
        this.options.scaleColor = '#' + this.scaleColor;
        this.options.scaleLength = this.scaleLength;
        this.options.lineCap = this.lineCap;
        this.options.lineWidth = this.lineWidth;
        this.options.trackWidth = this.trackWidth;
        this.options.size = this.size;
        this.options.rotate = this.rotate;
        this.options.animate.duration = this.animate.duration;
        this.options.animate.enabled = this.animate.enabled;
    };
    SimpleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-simple-chart',
                    template: "<span class=\"min-chart\">\n  <span \n  *ngIf=\"customText\"  \n  class=\"chart-custom-text\"\n  [ngStyle]=\"{\n  'line-height': size + 'px',\n  'width': size + 'px',\n  'height': size + 'px'}\">{{ customText }}</span>\n  <span \n  *ngIf=\"!customText\" \n  class=\"percent\">{{ percent }}</span>\n  <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart>\n</span>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".min-chart{position:relative;display:inline-block;width:110px;height:110px;margin-top:50px;margin-bottom:50px;text-align:center}.min-chart canvas{position:absolute;top:0;left:0}.min-chart .percent{display:inline-block;line-height:110px;z-index:2}.min-chart .percent:after{content:'%';margin-left:.1em;font-size:.8rem}.chart-custom-text{display:inline-block;overflow:hidden;z-index:2}"]
                }] }
    ];
    /** @nocollapse */
    SimpleChartComponent.ctorParameters = function () { return []; };
    SimpleChartComponent.propDecorators = {
        customText: [{ type: Input }],
        percent: [{ type: Input }],
        barColor: [{ type: Input }],
        trackColor: [{ type: Input }],
        scaleColor: [{ type: Input }],
        scaleLength: [{ type: Input }],
        lineCap: [{ type: Input }],
        lineWidth: [{ type: Input }],
        trackWidth: [{ type: Input }],
        size: [{ type: Input }],
        rotate: [{ type: Input }],
        animate: [{ type: Input }]
    };
    return SimpleChartComponent;
}());
export { SimpleChartComponent };
if (false) {
    /** @type {?} */
    SimpleChartComponent.prototype.customText;
    /** @type {?} */
    SimpleChartComponent.prototype.percent;
    /** @type {?} */
    SimpleChartComponent.prototype.barColor;
    /** @type {?} */
    SimpleChartComponent.prototype.trackColor;
    /** @type {?} */
    SimpleChartComponent.prototype.scaleColor;
    /** @type {?} */
    SimpleChartComponent.prototype.scaleLength;
    /** @type {?} */
    SimpleChartComponent.prototype.lineCap;
    /** @type {?} */
    SimpleChartComponent.prototype.lineWidth;
    /** @type {?} */
    SimpleChartComponent.prototype.trackWidth;
    /** @type {?} */
    SimpleChartComponent.prototype.size;
    /** @type {?} */
    SimpleChartComponent.prototype.rotate;
    /** @type {?} */
    SimpleChartComponent.prototype.animate;
    /** @type {?} */
    SimpleChartComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZWFzeS1jaGFydHMvY2hhcnQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQXNDRTtRQWxCTyxZQUFPLEdBQVE7WUFDcEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxlQUFlLEVBQUUsSUFBSTtZQUNyQixPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGLENBQUM7SUFFYSxDQUFDOzs7O0lBRWhCLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdEQsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixzWkFBNEM7b0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Ozs2QkFFRSxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFrQ1IsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQTlDWSxvQkFBb0I7OztJQUMvQiwwQ0FBNEI7O0lBQzVCLHVDQUF5Qjs7SUFDekIsd0NBQTBCOztJQUMxQiwwQ0FBNEI7O0lBQzVCLDBDQUE0Qjs7SUFDNUIsMkNBQTZCOztJQUM3Qix1Q0FBeUI7O0lBQ3pCLHlDQUEyQjs7SUFDM0IsMENBQTRCOztJQUM1QixvQ0FBc0I7O0lBQ3RCLHNDQUF3Qjs7SUFDeEIsdUNBQXlEOztJQUN6RCx1Q0FnQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zaW1wbGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWFzeS1jaGFydHMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3VzdG9tVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhckNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRyYWNrQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2NhbGVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzY2FsZUxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBsaW5lQ2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbmVXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSB0cmFja1dpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgcm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFuaW1hdGU6IHsgZHVyYXRpb246IHN0cmluZzsgZW5hYmxlZDogYm9vbGVhbiB9O1xuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgIGJhckNvbG9yOiBudWxsLFxuICAgIHRyYWNrQ29sb3I6IG51bGwsXG4gICAgc2NhbGVDb2xvcjogbnVsbCxcbiAgICBzY2FsZUxlbmd0aDogJycsXG4gICAgbGluZUNhcDogbnVsbCxcbiAgICBsaW5lV2lkdGg6IG51bGwsXG4gICAgdHJhY2tXaWR0aDogbnVsbCxcbiAgICBzaXplOiBudWxsLFxuICAgIHJvdGF0ZTogbnVsbCxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBlbmFibGVBbmltYXRpb246IG51bGwsXG4gICAgYW5pbWF0ZToge1xuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3B0aW9ucy5iYXJDb2xvciA9ICcjJyArIHRoaXMuYmFyQ29sb3I7XG4gICAgdGhpcy5vcHRpb25zLnRyYWNrQ29sb3IgPSAnIycgKyB0aGlzLnRyYWNrQ29sb3I7XG4gICAgdGhpcy5vcHRpb25zLnNjYWxlQ29sb3IgPSAnIycgKyB0aGlzLnNjYWxlQ29sb3I7XG4gICAgdGhpcy5vcHRpb25zLnNjYWxlTGVuZ3RoID0gdGhpcy5zY2FsZUxlbmd0aDtcbiAgICB0aGlzLm9wdGlvbnMubGluZUNhcCA9IHRoaXMubGluZUNhcDtcbiAgICB0aGlzLm9wdGlvbnMubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgdGhpcy5vcHRpb25zLnRyYWNrV2lkdGggPSB0aGlzLnRyYWNrV2lkdGg7XG4gICAgdGhpcy5vcHRpb25zLnNpemUgPSB0aGlzLnNpemU7XG4gICAgdGhpcy5vcHRpb25zLnJvdGF0ZSA9IHRoaXMucm90YXRlO1xuICAgIHRoaXMub3B0aW9ucy5hbmltYXRlLmR1cmF0aW9uID0gdGhpcy5hbmltYXRlLmR1cmF0aW9uO1xuICAgIHRoaXMub3B0aW9ucy5hbmltYXRlLmVuYWJsZWQgPSB0aGlzLmFuaW1hdGUuZW5hYmxlZDtcbiAgfVxufVxuIl19