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
export class ToastModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ToastModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ]
        };
    }
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                entryComponents: [ToastComponent],
            },] }
];
/** @nocollapse */
ToastModule.ctorParameters = () => [
    { type: ToastModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUVSLFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTN0MsTUFBTSxPQUFPLFdBQVc7Ozs7SUFZdEIsWUFBb0MsWUFBeUI7UUFDM0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQzs7Ozs7SUFmRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXFCO1FBQ2xDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLGdCQUFnQjtnQkFDaEIsT0FBTztnQkFDUCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBakJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDekIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDbEM7Ozs7WUFhbUQsV0FBVyx1QkFBaEQsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgU2tpcFNlbGYsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVE9BU1RfQ09ORklHIH0gZnJvbSAnLi90b2FzdC50b2tlbic7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdC5jb25maWcnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtUb2FzdENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEdsb2JhbENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG9hc3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBUT0FTVF9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgT3ZlcmxheUNvbnRhaW5lcixcbiAgICAgICAgT3ZlcmxheSxcbiAgICAgICAgVG9hc3RTZXJ2aWNlLFxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBUb2FzdE1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9hc3RNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEl0IHNob3VsZCBvbmx5IGJlIGltcG9ydGVkIGluIHlvdXIgYXBwbGljYXRpb25cXCdzIG1haW4gbW9kdWxlLicpO1xuICAgIH1cbiAgfVxufVxuIl19