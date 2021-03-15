/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, SkipSelf, Optional, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { TOAST_CONFIG } from './toast.token';
import { ToastService } from './toast.service';
import { OverlayContainer } from '../overlay/overlay-container';
import { Overlay } from '../overlay/overlay';
var ToastModule = /** @class */ (function () {
    function ToastModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ToastModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ToastModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ]
        };
    };
    ToastModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ToastComponent],
                    declarations: [ToastComponent],
                    entryComponents: [ToastComponent],
                },] }
    ];
    /** @nocollapse */
    ToastModule.ctorParameters = function () { return [
        { type: ToastModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return ToastModule;
}());
export { ToastModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUVSLFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHN0M7SUFrQkUscUJBQW9DLFlBQXlCO1FBQzNELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0ZBQStGLENBQUMsQ0FBQztTQUNsSDtJQUNILENBQUM7Ozs7O0lBZk0sbUJBQU87Ozs7SUFBZCxVQUFlLE1BQXFCO1FBQ2xDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLGdCQUFnQjtnQkFDaEIsT0FBTztnQkFDUCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBakJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQ2xDOzs7O2dCQWFtRCxXQUFXLHVCQUFoRCxRQUFRLFlBQUksUUFBUTs7SUFLbkMsa0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWpCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIFNraXBTZWxmLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QudG9rZW4nO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdG9hc3QuY29uZmlnJztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXknO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbVG9hc3RDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBHbG9iYWxDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogVE9BU1RfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgIE92ZXJsYXksXG4gICAgICAgIFRvYXN0U2VydmljZSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVG9hc3RNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvYXN0TW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgb25seSBiZSBpbXBvcnRlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXFwncyBtYWluIG1vZHVsZS4nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==