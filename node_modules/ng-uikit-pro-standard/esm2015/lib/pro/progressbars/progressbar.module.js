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
export class ProgressbarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfigComponent] };
    }
}
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                exports: [ProgressDirective, BarComponent, ProgressbarComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzVFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTyxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDO2dCQUNyRSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUM7YUFDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9wcm9ncmVzcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29uZmlnLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc0RpcmVjdGl2ZSwgQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9ncmVzc0RpcmVjdGl2ZSwgQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtuZ01vZHVsZTogUHJvZ3Jlc3NiYXJNb2R1bGUsIHByb3ZpZGVyczogW1Byb2dyZXNzYmFyQ29uZmlnQ29tcG9uZW50XX07XG4gIH1cbn1cbiJdfQ==