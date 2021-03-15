/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent(el, platformId) {
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
    ProgressSpinnerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        /** @type {?} */
        var colorClass = this.spinnerColor;
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
    };
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.spinerRun = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var counter = 0;
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval((/**
             * @return {?}
             */
            function () {
                switch (counter) {
                    case 0:
                        _this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        _this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        _this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + _this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }), 1333);
        }
    };
    ProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinner',
                    template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ProgressSpinnerComponent.propDecorators = {
        spinnerType: [{ type: Input }],
        spinnerColor: [{ type: Input }]
    };
    return ProgressSpinnerComponent;
}());
export { ProgressSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBWUUsa0NBQW1CLEVBQWMsRUFBdUIsVUFBa0I7UUFBdkQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUxqQyxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBR2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUNoQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUVsQyxRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztnQkFDckMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO2dCQUNwQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3RDLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDbkMsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLHdEQUF3RCxDQUFDO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07U0FDVDtRQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQUEsaUJBNEJDOztZQTNCSyxPQUFPLEdBQUcsQ0FBQzs7WUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixXQUFXOzs7WUFBQztnQkFDVixRQUFRLE9BQU8sRUFBRTtvQkFDZixLQUFLLENBQUM7d0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyx3Q0FBd0MsQ0FBQzt3QkFDekQsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRywwQ0FBMEMsQ0FBQzt3QkFDM0QsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyx3Q0FBd0MsQ0FBQzt3QkFDekQsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyx5Q0FBeUMsQ0FBQzt3QkFDMUQsTUFBTTtpQkFDVDtnQkFFRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pFLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtvQkFDZixPQUFPLEVBQUUsQ0FBQztpQkFDWDtxQkFBTTtvQkFDTCxPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO1lBQ0gsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixtSkFBOEM7b0JBRTlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBYkMsVUFBVTs2Q0FvQjBCLE1BQU0sU0FBQyxXQUFXOzs7OEJBSHJELEtBQUs7K0JBQ0wsS0FBSzs7SUE2RFIsK0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQWpFWSx3QkFBd0I7OztJQUNuQyw0Q0FBdUM7O0lBQ3ZDLDZDQUFrQjs7SUFDbEIsK0NBQTBCOztJQUMxQixnREFBa0M7O0lBRXRCLHNDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzc2JhcnMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGFkZENsYXNzOiBTdHJpbmcgPSAnc3Bpbm5lci1ibHVlLW9ubHknO1xuICBpc0Jyb3dzZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc3Bpbm5lclR5cGUgPSAnJztcbiAgQElucHV0KCkgc3Bpbm5lckNvbG9yID0gJ3JhaW5ib3cnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBob3N0RWxlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjb2xvckNsYXNzID0gdGhpcy5zcGlubmVyQ29sb3I7XG4gICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJhaW5ib3cnO1xuXG4gICAgc3dpdGNoIChjb2xvckNsYXNzKSB7XG4gICAgICBjYXNlICdncmVlbic6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ncmVlbi1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWJsdWUtb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXllbGxvdy1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZWQnOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmVkLW9ubHknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhaW5ib3cnOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmFpbmJvdyBzcGlubmVyLWJsdWUtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgIHRoaXMuc3BpbmVyUnVuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBob3N0RWxlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5hZGRDbGFzcztcbiAgfVxuXG4gIHNwaW5lclJ1bigpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgY29uc3QgaG9zdEVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoY291bnRlcikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yZWQtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXllbGxvdy1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ibHVlLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWdyZWVuLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBob3N0RWxlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc05hbWUgPSAnICcgKyB0aGlzLmFkZENsYXNzO1xuICAgICAgICBpZiAoY291bnRlciA8IDMpIHtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0sIDEzMzMpO1xuICAgIH1cbiAgfVxufVxuIl19