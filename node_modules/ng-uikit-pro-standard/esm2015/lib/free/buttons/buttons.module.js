/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MdbBtnDirective } from './buttons.directive';
import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';
import { FixedButtonCaptionDirective } from './fixed-caption.directive';
export class ButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonCheckboxDirective,
                    ButtonRadioDirective,
                    MdbBtnDirective,
                    FixedButtonCaptionDirective,
                ],
                exports: [
                    ButtonCheckboxDirective,
                    ButtonRadioDirective,
                    MdbBtnDirective,
                    FixedButtonCaptionDirective,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2J1dHRvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFnQnhFLE1BQU0sT0FBTyxhQUFhOzs7O0lBQ2pCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7WUFqQkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZiwyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZiwyQkFBMkI7aUJBQzVCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZGJCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGVja2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL3JhZGlvLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsXG4gICAgQnV0dG9uUmFkaW9EaXJlY3RpdmUsXG4gICAgTWRiQnRuRGlyZWN0aXZlLFxuICAgIEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlLFxuICAgIEJ1dHRvblJhZGlvRGlyZWN0aXZlLFxuICAgIE1kYkJ0bkRpcmVjdGl2ZSxcbiAgICBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEJ1dHRvbnNNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl19