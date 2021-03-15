/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MdProgressSpinnerComponent, MdSpinnerComponent, MdProgressSpinnerCssMatStylerDirective, } from './progress-spinner.component';
import { ProgressSpinnerComponent } from '../progress-spinner.component';
class MdProgressSpinnerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: [],
        };
    }
}
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
export { MdProgressSpinnerModule };
export { MdProgressSpinnerCssMatStylerDirective, MdProgressSpinnerComponent, MdSpinnerComponent, } from './progress-spinner.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsc0NBQXNDLEdBQ3ZDLE1BQU0sOEJBQThCLENBQUM7QUFFdEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekUsTUFjTSx1QkFBdUI7Ozs7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzs7WUFwQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCwwQkFBMEI7b0JBQzFCLGtCQUFrQjtvQkFDbEIsc0NBQXNDO29CQUN0Qyx3QkFBd0I7aUJBQ3pCO2dCQUNELFlBQVksRUFBRTtvQkFDWiwwQkFBMEI7b0JBQzFCLGtCQUFrQjtvQkFDbEIsc0NBQXNDO29CQUN0Qyx3QkFBd0I7aUJBQ3pCO2FBQ0Y7O0FBVUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7QUFDbkMsT0FBTyxFQUVMLHNDQUFzQyxFQUN0QywwQkFBMEIsRUFDMUIsa0JBQWtCLEdBQ25CLE1BQU0sOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXG4gIE1kU3Bpbm5lckNvbXBvbmVudCxcbiAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBdLFxufSlcbmNsYXNzIE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW10sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9O1xuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyTW9kZSxcbiAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBNZFNwaW5uZXJDb21wb25lbnQsXG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuIl19