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
export class SmoothscrollModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SmoothscrollModule,
            providers: [
                { provide: PageScrollService, useClass: PageScrollService }
            ]
        };
    }
}
SmoothscrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PageScrollDirective],
                exports: [PageScrollDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQU9oRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNILFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQzthQUM1RDtTQUNKLENBQUM7SUFDSixDQUFDOzs7WUFiRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQ3JlYXRlZCBieSBzZWJhc3RpYW5mdXNzIG9uIDAzLjA5LjE2LlxuKi9cblxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtQYWdlU2Nyb2xsU2VydmljZX0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQge1BhZ2VTY3JvbGxEaXJlY3RpdmV9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdlU2Nyb2xsRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1BhZ2VTY3JvbGxEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFNtb290aHNjcm9sbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5nTW9kdWxlOiBTbW9vdGhzY3JvbGxNb2R1bGUsXG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge3Byb3ZpZGU6IFBhZ2VTY3JvbGxTZXJ2aWNlLCB1c2VDbGFzczogUGFnZVNjcm9sbFNlcnZpY2V9XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=