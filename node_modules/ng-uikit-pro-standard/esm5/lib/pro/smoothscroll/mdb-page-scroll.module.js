/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
* Created by sebastianfuss on 03.09.16.
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollDirective } from './mdb-page-scroll.directive';
var SmoothscrollModule = /** @class */ (function () {
    function SmoothscrollModule() {
    }
    /**
     * @return {?}
     */
    SmoothscrollModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SmoothscrollModule,
            providers: [
                { provide: PageScrollService, useClass: PageScrollService }
            ]
        };
    };
    SmoothscrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PageScrollDirective],
                    exports: [PageScrollDirective]
                },] }
    ];
    return SmoothscrollModule;
}());
export { SmoothscrollModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRTtJQUFBO0lBY0EsQ0FBQzs7OztJQVJRLDBCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDSCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDUCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7YUFDNUQ7U0FDSixDQUFDO0lBQ0osQ0FBQzs7Z0JBYkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7SUFVRCx5QkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBDcmVhdGVkIGJ5IHNlYmFzdGlhbmZ1c3Mgb24gMDMuMDkuMTYuXG4qL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1BhZ2VTY3JvbGxTZXJ2aWNlfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7UGFnZVNjcm9sbERpcmVjdGl2ZX0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2VTY3JvbGxEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbUGFnZVNjcm9sbERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgU21vb3Roc2Nyb2xsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmdNb2R1bGU6IFNtb290aHNjcm9sbE1vZHVsZSxcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7cHJvdmlkZTogUGFnZVNjcm9sbFNlcnZpY2UsIHVzZUNsYXNzOiBQYWdlU2Nyb2xsU2VydmljZX1cbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==