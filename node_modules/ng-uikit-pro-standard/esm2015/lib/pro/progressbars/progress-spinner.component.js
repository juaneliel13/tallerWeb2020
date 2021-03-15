/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class ProgressSpinnerComponent {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        this.el = el;
        this.addClass = 'spinner-blue-only';
        this.isBrowser = false;
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const hostElem = this.el.nativeElement;
        /** @type {?} */
        const colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    }
    /**
     * @return {?}
     */
    spinerRun() {
        /** @type {?} */
        let counter = 0;
        /** @type {?} */
        const hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval((/**
             * @return {?}
             */
            () => {
                switch (counter) {
                    case 0:
                        this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }), 1333);
        }
    }
}
ProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinner',
                template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ProgressSpinnerComponent.propDecorators = {
    spinnerType: [{ type: Input }],
    spinnerColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressSpinnerComponent.prototype.addClass;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerType;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerColor;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXBELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBTW5DLFlBQW1CLEVBQWMsRUFBdUIsVUFBa0I7UUFBdkQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUxqQyxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBR2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ1AsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7Y0FDaEMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFFbEMsUUFBUSxVQUFVLEVBQUU7WUFDbEIsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3JDLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztnQkFDcEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO2dCQUN0QyxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ25DLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyx3REFBd0QsQ0FBQztnQkFDekUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixNQUFNO1NBQ1Q7UUFDRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELFNBQVM7O1lBQ0gsT0FBTyxHQUFHLENBQUM7O2NBQ1QsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUN0QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsV0FBVzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsT0FBTyxFQUFFO29CQUNmLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLDBDQUEwQyxDQUFDO3dCQUMzRCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHlDQUF5QyxDQUFDO3dCQUMxRCxNQUFNO2lCQUNUO2dCQUVELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO29CQUNmLE9BQU8sRUFBRSxDQUFDO2lCQUNYO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2I7WUFDSCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1KQUE4QztnQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBYkMsVUFBVTt5Q0FvQjBCLE1BQU0sU0FBQyxXQUFXOzs7MEJBSHJELEtBQUs7MkJBQ0wsS0FBSzs7OztJQUhOLDRDQUF1Qzs7SUFDdkMsNkNBQWtCOztJQUNsQiwrQ0FBMEI7O0lBQzFCLGdEQUFrQzs7SUFFdEIsc0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBQTEFURk9STV9JRCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFycy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgYWRkQ2xhc3M6IFN0cmluZyA9ICdzcGlubmVyLWJsdWUtb25seSc7XG4gIGlzQnJvd3NlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzcGlubmVyVHlwZSA9ICcnO1xuICBASW5wdXQoKSBzcGlubmVyQ29sb3IgPSAncmFpbmJvdyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGhvc3RFbGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSB0aGlzLnNwaW5uZXJDb2xvcjtcbiAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmFpbmJvdyc7XG5cbiAgICBzd2l0Y2ggKGNvbG9yQ2xhc3MpIHtcbiAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWdyZWVuLW9ubHknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItYmx1ZS1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXIteWVsbG93LW9ubHknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yZWQtb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFpbmJvdyc6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yYWluYm93IHNwaW5uZXItYmx1ZS1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgdGhpcy5zcGluZXJSdW4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGhvc3RFbGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmFkZENsYXNzO1xuICB9XG5cbiAgc3BpbmVyUnVuKCkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBjb25zdCBob3N0RWxlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc3dpdGNoIChjb3VudGVyKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJlZC1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyICc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXIteWVsbG93LW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWJsdWUtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItZ3JlZW4tb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGhvc3RFbGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSA9ICcgJyArIHRoaXMuYWRkQ2xhc3M7XG4gICAgICAgIGlmIChjb3VudGVyIDwgMykge1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgfSwgMTMzMyk7XG4gICAgfVxuICB9XG59XG4iXX0=