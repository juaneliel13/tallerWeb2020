/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyWindowDirective } from './scroll-spy-window.directive';
import { ScrollSpyElementDirective } from './scroll-spy-element.directive';
import { ScrollSpyService } from './scroll-spy.service';
var ScrollSpyModule = /** @class */ (function () {
    function ScrollSpyModule() {
    }
    ScrollSpyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ScrollSpyDirective,
                        ScrollSpyLinkDirective,
                        ScrollSpyWindowDirective,
                        ScrollSpyElementDirective
                    ],
                    exports: [
                        ScrollSpyDirective,
                        ScrollSpyLinkDirective,
                        ScrollSpyWindowDirective,
                        ScrollSpyElementDirective
                    ],
                    providers: [ScrollSpyService]
                },] }
    ];
    return ScrollSpyModule;
}());
export { ScrollSpyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Njcm9sbC1zcHkvc2Nyb2xsLXNweS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7SUFBQTtJQWUrQixDQUFDOztnQkFmL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO2lCQUNoQzs7SUFDOEIsc0JBQUM7Q0FBQSxBQWZoQyxJQWVnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2Nyb2xsU3B5RGlyZWN0aXZlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTY3JvbGxTcHlMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LWxpbmsuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbFNweVdpbmRvd0RpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbFNweUVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbC1zcHktZWxlbWVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2Nyb2xsU3B5U2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY3JvbGxTcHlEaXJlY3RpdmUsXG4gICAgU2Nyb2xsU3B5TGlua0RpcmVjdGl2ZSxcbiAgICBTY3JvbGxTcHlXaW5kb3dEaXJlY3RpdmUsXG4gICAgU2Nyb2xsU3B5RWxlbWVudERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2Nyb2xsU3B5RGlyZWN0aXZlLFxuICAgIFNjcm9sbFNweUxpbmtEaXJlY3RpdmUsXG4gICAgU2Nyb2xsU3B5V2luZG93RGlyZWN0aXZlLFxuICAgIFNjcm9sbFNweUVsZW1lbnREaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIFNjcm9sbFNweVNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlNb2R1bGUgeyB9XG4iXX0=