/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressDirective } from './progress.directive';
import { ProgressbarComponent } from './progressbar.component';
import { ProgressbarConfigComponent } from './progressbar.config.component';
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    /**
     * @return {?}
     */
    ProgressbarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfigComponent] };
    };
    ProgressbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                    exports: [ProgressDirective, BarComponent, ProgressbarComponent]
                },] }
    ];
    return ProgressbarModule;
}());
export { ProgressbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFO0lBQUE7SUFTQSxDQUFDOzs7O0lBSGUseUJBQU87OztJQUFyQjtRQUNFLE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBQyxDQUFDO0lBQ2hGLENBQUM7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDckUsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDO2lCQUNqRTs7SUFLRCx3QkFBQztDQUFBLEFBVEQsSUFTQztTQUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2dyZXNzRGlyZWN0aXZlLCBCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2dyZXNzRGlyZWN0aXZlLCBCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2Jhck1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge25nTW9kdWxlOiBQcm9ncmVzc2Jhck1vZHVsZSwgcHJvdmlkZXJzOiBbUHJvZ3Jlc3NiYXJDb25maWdDb21wb25lbnRdfTtcbiAgfVxufVxuIl19