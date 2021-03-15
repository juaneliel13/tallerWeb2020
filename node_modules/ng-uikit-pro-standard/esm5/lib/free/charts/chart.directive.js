/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, ElementRef, Input, Output, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var BaseChartDirective = /** @class */ (function () {
    function BaseChartDirective(element, platformId) {
        this.element = element;
        this.labels = [];
        this.options = { legend: { display: false } };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) &&
                !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = /**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var _this = this;
        /** @type {?} */
        var datasets = this.getDatasets();
        /** @type {?} */
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            });
        }
        if (!options.onClick) {
            options.onClick = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            });
        }
        /** @type {?} */
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets,
            },
            options: options,
        };
        return new Chart(ctx, opts);
    };
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    /**
     * @param {?} event
     * @return {?}
     */
    BaseChartDirective.prototype.getPointDataAtEvent = 
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.active.length > 0) {
            /** @type {?} */
            var datasetIndex = event.active[0]._datasetIndex;
            /** @type {?} */
            var dataIndex = event.active[0]._index;
            /** @type {?} */
            var dataObject = this.datasets[datasetIndex].data[dataIndex];
            return dataObject;
        }
    };
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((/**
             * @param {?} dataset
             * @param {?} i
             * @return {?}
             */
            function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            }));
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
            if (Array.isArray(this.data[0])) {
                datasets = ((/** @type {?} */ (this.data))).map((/**
                 * @param {?} data
                 * @param {?} index
                 * @return {?}
                 */
                function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                }));
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
            datasets = (this.datasets || datasets).map((/**
             * @param {?} elm
             * @param {?} index
             * @return {?}
             */
            function (elm, index) {
                /** @type {?} */
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            }));
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96],
    ];
    BaseChartDirective.decorators = [
        { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    BaseChartDirective.propDecorators = {
        data: [{ type: Input }],
        datasets: [{ type: Input }],
        labels: [{ type: Input }],
        options: [{ type: Input }],
        chartType: [{ type: Input }],
        colors: [{ type: Input }],
        legend: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return BaseChartDirective;
}());
export { BaseChartDirective };
if (false) {
    /** @type {?} */
    BaseChartDirective.defaultColors;
    /** @type {?} */
    BaseChartDirective.prototype.data;
    /** @type {?} */
    BaseChartDirective.prototype.datasets;
    /** @type {?} */
    BaseChartDirective.prototype.labels;
    /** @type {?} */
    BaseChartDirective.prototype.options;
    /** @type {?} */
    BaseChartDirective.prototype.chartType;
    /** @type {?} */
    BaseChartDirective.prototype.colors;
    /** @type {?} */
    BaseChartDirective.prototype.legend;
    /** @type {?} */
    BaseChartDirective.prototype.chartClick;
    /** @type {?} */
    BaseChartDirective.prototype.chartHover;
    /** @type {?} */
    BaseChartDirective.prototype.ctx;
    /** @type {?} */
    BaseChartDirective.prototype.chart;
    /** @type {?} */
    BaseChartDirective.prototype.cvs;
    /** @type {?} */
    BaseChartDirective.prototype.initFlag;
    /** @type {?} */
    BaseChartDirective.prototype.isBrowser;
    /** @type {?} */
    BaseChartDirective.prototype.element;
}
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8),
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1),
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 0.6); })),
        borderColor: colors.map((/**
         * @return {?}
         */
        function () { return '#fff'; })),
        pointBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
        pointBorderColor: colors.map((/**
         * @return {?}
         */
        function () { return '#fff'; })),
        pointHoverBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
        pointHoverBorderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 0.6); })),
        borderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
        hoverBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 0.8); })),
        hoverBorderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    /** @type {?} */
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2hhcnRzL2NoYXJ0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUlMLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJcEQ7SUFvQ0UsNEJBQTBCLE9BQW1CLEVBQXVCLFVBQWtCO1FBQTVELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFqQjdCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7UUFHOUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVkLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNcEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVNLHFDQUFROzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3RD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XG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRGlyZWN0aXZlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuL2NvbG9ycy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIENoYXJ0OiBhbnk7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2NhbnZhc1ttZGJDaGFydF0nLCBleHBvcnRBczogJ21kYi1iYXNlLWNoYXJ0JyB9KVxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQsIENvbG9ycyB7XG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdENvbG9yczogQXJyYXk8bnVtYmVyW10+ID0gW1xuICAgIFsyNTUsIDk5LCAxMzJdLFxuICAgIFs1NCwgMTYyLCAyMzVdLFxuICAgIFsyNTUsIDIwNiwgODZdLFxuICAgIFsyMzEsIDIzMywgMjM3XSxcbiAgICBbNzUsIDE5MiwgMTkyXSxcbiAgICBbMTUxLCAxODcsIDIwNV0sXG4gICAgWzIyMCwgMjIwLCAyMjBdLFxuICAgIFsyNDcsIDcwLCA3NF0sXG4gICAgWzcwLCAxOTEsIDE4OV0sXG4gICAgWzI1MywgMTgwLCA5Ml0sXG4gICAgWzE0OCwgMTU5LCAxNzddLFxuICAgIFs3NywgODMsIDk2XSxcbiAgXTtcblxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogbnVtYmVyW10gfCBhbnlbXTtcbiAgQElucHV0KCkgcHVibGljIGRhdGFzZXRzOiBhbnlbXTtcbiAgQElucHV0KCkgcHVibGljIGxhYmVsczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55ID0geyBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSB9O1xuICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBsZWdlbmQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBjdHg6IGFueTtcbiAgcHVibGljIGNoYXJ0OiBhbnk7XG5cbiAgY3ZzOiBhbnk7XG4gIGluaXRGbGFnID0gZmFsc2U7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmRhdGEgfHwgdGhpcy5kYXRhc2V0cykge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hhbmdlcyBhcmUgaW4gdGhlIGRhdGEgb3IgZGF0YXNldHNcbiAgICAgIGlmIChcbiAgICAgICAgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhc2V0cycpKSAmJlxuICAgICAgICAhY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbGFiZWxzJylcbiAgICAgICkge1xuICAgICAgICBpZiAoY2hhbmdlc1snZGF0YSddKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEoY2hhbmdlc1snZGF0YSddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEoY2hhbmdlc1snZGF0YXNldHMnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSByZWJ1aWxkIHRoZSBjaGFydFxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGFydEJ1aWxkZXIoY3R4OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGRhdGFzZXRzOiBhbnkgPSB0aGlzLmdldERhdGFzZXRzKCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICh0aGlzLmxlZ2VuZCA9PT0gZmFsc2UpIHtcbiAgICAgIG9wdGlvbnMubGVnZW5kID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgIH1cbiAgICAvLyBob2NrIGZvciBvbkhvdmVyIGFuZCBvbkNsaWNrIGV2ZW50c1xuICAgIG9wdGlvbnMuaG92ZXIgPSBvcHRpb25zLmhvdmVyIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5ob3Zlci5vbkhvdmVyKSB7XG4gICAgICBvcHRpb25zLmhvdmVyLm9uSG92ZXIgPSAoZXZlbnQ6IGFueSwgYWN0aXZlOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUgJiYgYWN0aXZlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KHsgZXZlbnQsIGFjdGl2ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMub25DbGljaykge1xuICAgICAgb3B0aW9ucy5vbkNsaWNrID0gKGV2ZW50OiBhbnksIGFjdGl2ZTogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB0eXBlOiB0aGlzLmNoYXJ0VHlwZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiB0aGlzLmxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgQ2hhcnQoY3R4LCBvcHRzKTtcbiAgfVxuXG4gIC8vIGZlYXR1cmUoY2hhcnQpOiBhZGRlZCBnZXRQb2ludERhdGFBdEV2ZW50IHdoaWNoIHdpbGwgcmV0dXJuIGNsaWNrZWQgY2hhcnQncyBwb2ludCBkYXRhXG4gIHB1YmxpYyBnZXRQb2ludERhdGFBdEV2ZW50KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQuYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRhdGFzZXRJbmRleCA9IGV2ZW50LmFjdGl2ZVswXS5fZGF0YXNldEluZGV4O1xuICAgICAgY29uc3QgZGF0YUluZGV4ID0gZXZlbnQuYWN0aXZlWzBdLl9pbmRleDtcbiAgICAgIGNvbnN0IGRhdGFPYmplY3QgPSB0aGlzLmRhdGFzZXRzW2RhdGFzZXRJbmRleF0uZGF0YVtkYXRhSW5kZXhdO1xuICAgICAgcmV0dXJuIGRhdGFPYmplY3Q7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydERhdGEobmV3RGF0YVZhbHVlczogbnVtYmVyW10gfCBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0RhdGFWYWx1ZXNbMF0uZGF0YSkpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKChkYXRhc2V0OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBkYXRhc2V0LmRhdGEgPSBuZXdEYXRhVmFsdWVzW2ldLmRhdGE7XG5cbiAgICAgICAgaWYgKG5ld0RhdGFWYWx1ZXNbaV0ubGFiZWwpIHtcbiAgICAgICAgICBkYXRhc2V0LmxhYmVsID0gbmV3RGF0YVZhbHVlc1tpXS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YVZhbHVlcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldERhdGFzZXRzKCk6IGFueSB7XG4gICAgbGV0IGRhdGFzZXRzOiBhbnkgPSB2b2lkIDA7XG4gICAgLy8gaW4gY2FzZSBpZiBkYXRhc2V0cyBpcyBub3QgcHJvdmlkZWQsIGJ1dCBkYXRhIGlzIHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZGF0YXNldHMgfHwgKCF0aGlzLmRhdGFzZXRzLmxlbmd0aCAmJiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGgpKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhWzBdKSkge1xuICAgICAgICBkYXRhc2V0cyA9ICh0aGlzLmRhdGEgYXMgQXJyYXk8bnVtYmVyW10+KS5tYXAoKGRhdGE6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgZGF0YSwgbGFiZWw6IHRoaXMubGFiZWxzW2luZGV4XSB8fCBgTGFiZWwgJHtpbmRleH1gIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YXNldHMgPSBbeyBkYXRhOiB0aGlzLmRhdGEsIGxhYmVsOiBgTGFiZWwgMGAgfV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMubGVuZ3RoKSB8fCAoZGF0YXNldHMgJiYgZGF0YXNldHMubGVuZ3RoKSkge1xuICAgICAgZGF0YXNldHMgPSAodGhpcy5kYXRhc2V0cyB8fCBkYXRhc2V0cykubWFwKChlbG06IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbG06IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIGVsbSk7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycyAmJiB0aGlzLmNvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld0VsbSwgdGhpcy5jb2xvcnNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld0VsbSwgZ2V0Q29sb3JzKHRoaXMuY2hhcnRUeXBlLCBpbmRleCwgbmV3RWxtLmRhdGEubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0VsbTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghZGF0YXNldHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbmctY2hhcnRzIGNvbmZpZ3VyYXRpb24gZXJyb3IsXG4gICAgICBkYXRhIG9yIGRhdGFzZXRzIGZpZWxkIGFyZSByZXF1aXJlZCB0byByZW5kZXIgY2hhciAke3RoaXMuY2hhcnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhc2V0cztcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaCgpOiBhbnkge1xuICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRDaGFydEJ1aWxkZXIodGhpcy5jdHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJnYmEoY29sb3VyOiBBcnJheTxudW1iZXI+LCBhbHBoYTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuICdyZ2JhKCcgKyBjb2xvdXIuY29uY2F0KGFscGhhKS5qb2luKCcsJykgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TGluZUNvbG9yKGNvbG9yczogQXJyYXk8bnVtYmVyPik6IENvbG9yIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjQpLFxuICAgIGJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDAuOCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEJhckNvbG9yKGNvbG9yczogQXJyYXk8bnVtYmVyPik6IENvbG9yIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjYpLFxuICAgIGJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjgpLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGllQ29sb3JzKGNvbG9yczogQXJyYXk8bnVtYmVyW10+KTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC42KSksXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gICAgcG9pbnRCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoKSA9PiAnI2ZmZicpLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBvbGFyQXJlYUNvbG9ycyhjb2xvcnM6IEFycmF5PG51bWJlcltdPik6IENvbG9yIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC42KSksXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuOCkpLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpOiBudW1iZXJbXSB7XG4gIHJldHVybiBbZ2V0UmFuZG9tSW50KDAsIDI1NSksIGdldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KV07XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGZvciBsaW5lfGJhciBjaGFydHNcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVDb2xvcihpbmRleDogbnVtYmVyKTogbnVtYmVyW10ge1xuICByZXR1cm4gQmFzZUNoYXJ0RGlyZWN0aXZlLmRlZmF1bHRDb2xvcnNbaW5kZXhdIHx8IGdldFJhbmRvbUNvbG9yKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGZvciBwaWV8ZG91Z2hudXQgY2hhcnRzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3JzKGNvdW50OiBudW1iZXIpOiBBcnJheTxudW1iZXJbXT4ge1xuICBjb25zdCBjb2xvcnNBcnI6IEFycmF5PG51bWJlcltdPiA9IG5ldyBBcnJheShjb3VudCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGNvbG9yc0FycltpXSA9IEJhc2VDaGFydERpcmVjdGl2ZS5kZWZhdWx0Q29sb3JzW2ldIHx8IGdldFJhbmRvbUNvbG9yKCk7XG4gIH1cbiAgcmV0dXJuIGNvbG9yc0Fycjtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBjb2xvcnMgYnkgY2hhcnQgdHlwZVxuICovXG5mdW5jdGlvbiBnZXRDb2xvcnMoY2hhcnRUeXBlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBhbnkge1xuICBpZiAoY2hhcnRUeXBlID09PSAncGllJyB8fCBjaGFydFR5cGUgPT09ICdkb3VnaG51dCcpIHtcbiAgICByZXR1cm4gZm9ybWF0UGllQ29sb3JzKGdlbmVyYXRlQ29sb3JzKGNvdW50KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAncG9sYXJBcmVhJykge1xuICAgIHJldHVybiBmb3JtYXRQb2xhckFyZWFDb2xvcnMoZ2VuZXJhdGVDb2xvcnMoY291bnQpKTtcbiAgfVxuXG4gIGlmIChjaGFydFR5cGUgPT09ICdsaW5lJyB8fCBjaGFydFR5cGUgPT09ICdyYWRhcicpIHtcbiAgICByZXR1cm4gZm9ybWF0TGluZUNvbG9yKGdlbmVyYXRlQ29sb3IoaW5kZXgpKTtcbiAgfVxuXG4gIGlmIChjaGFydFR5cGUgPT09ICdiYXInIHx8IGNoYXJ0VHlwZSA9PT0gJ2hvcml6b250YWxCYXInKSB7XG4gICAgcmV0dXJuIGZvcm1hdEJhckNvbG9yKGdlbmVyYXRlQ29sb3IoaW5kZXgpKTtcbiAgfVxuICByZXR1cm4gZ2VuZXJhdGVDb2xvcihpbmRleCk7XG59XG4iXX0=