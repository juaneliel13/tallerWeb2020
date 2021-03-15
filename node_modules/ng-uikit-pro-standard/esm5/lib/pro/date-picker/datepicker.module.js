/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBDatePickerComponent } from './datepicker.component';
import { FocusDirective } from './directives/datepickerFocus.directive';
import { InputAutoFillDirective } from './directives/datepickerAutofill.directive';
import { LocaleService } from './services/datepickerLocale.service';
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    DatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                    exports: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                    providers: [LocaleService],
                },] }
    ];
    return DatepickerModule;
}());
export { DatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVwRTtJQUFBO0lBTStCLENBQUM7O2dCQU4vQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDcEMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixDQUFDO29CQUM5RSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3pFLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDM0I7O0lBQzhCLHVCQUFDO0NBQUEsQUFOaEMsSUFNZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1EQkRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0ZXBpY2tlckZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0QXV0b0ZpbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0ZXBpY2tlckF1dG9maWxsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJMb2NhbGUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNREJEYXRlUGlja2VyQ29tcG9uZW50LCBGb2N1c0RpcmVjdGl2ZSwgSW5wdXRBdXRvRmlsbERpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW01EQkRhdGVQaWNrZXJDb21wb25lbnQsIEZvY3VzRGlyZWN0aXZlLCBJbnB1dEF1dG9GaWxsRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtMb2NhbGVTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb2R1bGUge31cclxuIl19