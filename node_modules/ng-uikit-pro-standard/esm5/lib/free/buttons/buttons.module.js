/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MdbBtnDirective } from './buttons.directive';
import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';
import { FixedButtonCaptionDirective } from './fixed-caption.directive';
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
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
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2J1dHRvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEU7SUFBQTtJQWtCQSxDQUFDOzs7O0lBSGUscUJBQU87OztJQUFyQjtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNwRCxDQUFDOztnQkFqQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZiwyQkFBMkI7cUJBQzVCO2lCQUNGOztJQUtELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FKWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRiQnRuRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCdXR0b25DaGVja2JveERpcmVjdGl2ZSB9IGZyb20gJy4vY2hlY2tib3guZGlyZWN0aXZlJztcbmltcG9ydCB7IEJ1dHRvblJhZGlvRGlyZWN0aXZlIH0gZnJvbSAnLi9yYWRpby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9maXhlZC1jYXB0aW9uLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlLFxuICAgIEJ1dHRvblJhZGlvRGlyZWN0aXZlLFxuICAgIE1kYkJ0bkRpcmVjdGl2ZSxcbiAgICBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCdXR0b25DaGVja2JveERpcmVjdGl2ZSxcbiAgICBCdXR0b25SYWRpb0RpcmVjdGl2ZSxcbiAgICBNZGJCdG5EaXJlY3RpdmUsXG4gICAgRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25zTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBCdXR0b25zTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdfQ==