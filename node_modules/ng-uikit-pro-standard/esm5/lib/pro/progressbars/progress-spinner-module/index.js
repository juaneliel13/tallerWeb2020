/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MdProgressSpinnerComponent, MdSpinnerComponent, MdProgressSpinnerCssMatStylerDirective, } from './progress-spinner.component';
import { ProgressSpinnerComponent } from '../progress-spinner.component';
var MdProgressSpinnerModule = /** @class */ (function () {
    function MdProgressSpinnerModule() {
    }
    /**
     * @return {?}
     */
    MdProgressSpinnerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: [],
        };
    };
    MdProgressSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MdProgressSpinnerComponent,
                        MdSpinnerComponent,
                        MdProgressSpinnerCssMatStylerDirective,
                        ProgressSpinnerComponent,
                    ],
                    declarations: [
                        MdProgressSpinnerComponent,
                        MdSpinnerComponent,
                        MdProgressSpinnerCssMatStylerDirective,
                        ProgressSpinnerComponent,
                    ],
                },] }
    ];
    return MdProgressSpinnerModule;
}());
export { MdProgressSpinnerModule };
export { MdProgressSpinnerCssMatStylerDirective, MdProgressSpinnerComponent, MdSpinnerComponent, } from './progress-spinner.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsc0NBQXNDLEdBQ3ZDLE1BQU0sOEJBQThCLENBQUM7QUFFdEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekU7SUFBQTtJQXFCQSxDQUFDOzs7O0lBTlEsK0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0JBcEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsMEJBQTBCO3dCQUMxQixrQkFBa0I7d0JBQ2xCLHNDQUFzQzt3QkFDdEMsd0JBQXdCO3FCQUN6QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQixrQkFBa0I7d0JBQ2xCLHNDQUFzQzt3QkFDdEMsd0JBQXdCO3FCQUN6QjtpQkFDRjs7SUFRRCw4QkFBQztDQUFBLEFBckJELElBcUJDO0FBRUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7QUFDbkMsT0FBTyxFQUVMLHNDQUFzQyxFQUN0QywwQkFBMEIsRUFDMUIsa0JBQWtCLEdBQ25CLE1BQU0sOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXG4gIE1kU3Bpbm5lckNvbXBvbmVudCxcbiAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBdLFxufSlcbmNsYXNzIE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW10sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9O1xuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyTW9kZSxcbiAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBNZFNwaW5uZXJDb21wb25lbnQsXG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuIl19