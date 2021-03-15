/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from './free/mdb-free.module';
import { MDBBootstrapModulePro } from './pro/mdb-pro.module';
export { MDBBootstrapModule } from './free/mdb-free.module';
export { MDBBootstrapModulePro } from './pro/mdb-pro.module';
/** @type {?} */
const MODULES = [
    MDBBootstrapModule,
    MDBBootstrapModulePro
];
export class MDBRootModules {
}
MDBRootModules.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MDBBootstrapModule.forRoot(),
                    MDBBootstrapModulePro.forRoot(),
                ],
                exports: MODULES,
                providers: [],
                schemas: [NO_ERRORS_SCHEMA]
            },] }
];
export class MDBBootstrapModulesPro {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: MDBRootModules };
    }
}
MDBBootstrapModulesPro.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9tZGIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ25CLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsT0FBTyxFQUNMLHFCQUFxQixFQUN0QixNQUFNLHNCQUFzQixDQUFDOztNQUV4QixPQUFPLEdBQUc7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3RCO0FBWUQsTUFBTSxPQUFPLGNBQWM7OztZQVYxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDNUIscUJBQXFCLENBQUMsT0FBTyxFQUFFO2lCQUNoQztnQkFDRCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsU0FBUyxFQUFFLEVBQ1Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7YUFDOUI7O0FBS0QsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUMxQixNQUFNLENBQUMsT0FBTztRQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0lBQ2xDLENBQUM7OztZQUpGLFFBQVEsU0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNREJCb290c3RyYXBNb2R1bGUgfSBmcm9tICcuL2ZyZWUvbWRiLWZyZWUubW9kdWxlJztcbmltcG9ydCB7IE1EQkJvb3RzdHJhcE1vZHVsZVBybyB9IGZyb20gJy4vcHJvL21kYi1wcm8ubW9kdWxlJztcblxuZXhwb3J0IHtcbiAgTURCQm9vdHN0cmFwTW9kdWxlXG59IGZyb20gJy4vZnJlZS9tZGItZnJlZS5tb2R1bGUnO1xuXG5leHBvcnQge1xuICBNREJCb290c3RyYXBNb2R1bGVQcm9cbn0gZnJvbSAnLi9wcm8vbWRiLXByby5tb2R1bGUnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBNREJCb290c3RyYXBNb2R1bGUsXG4gIE1EQkJvb3RzdHJhcE1vZHVsZVByb1xuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1EQkJvb3RzdHJhcE1vZHVsZS5mb3JSb290KCksXG4gICAgTURCQm9vdHN0cmFwTW9kdWxlUHJvLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgcHJvdmlkZXJzOiBbXG4gIF0sXG4gIHNjaGVtYXM6IFsgTk9fRVJST1JTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIE1EQlJvb3RNb2R1bGVzIHtcbn1cblxuQE5nTW9kdWxlKHtleHBvcnRzOiBNT0RVTEVTfSlcbmV4cG9ydCBjbGFzcyBNREJCb290c3RyYXBNb2R1bGVzUHJvIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICByZXR1cm4ge25nTW9kdWxlOiBNREJSb290TW9kdWxlc307XG4gIH1cbn1cbiJdfQ==