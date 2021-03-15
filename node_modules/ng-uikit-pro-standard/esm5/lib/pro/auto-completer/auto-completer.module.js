/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MdbAutoCompleterComponent } from './components/mdb-auto-completer.component';
import { MdbOptionComponent } from './components/mdb-option.component';
import { MdbAutoCompleterDirective } from './directives/mdb-auto-completer.directive';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MdbAutoCompleterOptionDirective } from './directives/mdb-auto-completer-option.directive';
var AutoCompleterModule = /** @class */ (function () {
    function AutoCompleterModule() {
    }
    AutoCompleterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, FormsModule],
                    declarations: [
                        MdbAutoCompleterComponent,
                        MdbOptionComponent,
                        MdbAutoCompleterDirective,
                        MdbAutoCompleterOptionDirective,
                    ],
                    exports: [
                        MdbAutoCompleterComponent,
                        MdbOptionComponent,
                        MdbAutoCompleterDirective,
                        MdbAutoCompleterOptionDirective,
                    ],
                },] }
    ];
    return AutoCompleterModule;
}());
export { AutoCompleterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvLWNvbXBsZXRlci9hdXRvLWNvbXBsZXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVuRztJQUFBO0lBZWtDLENBQUM7O2dCQWZsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztvQkFDdEQsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQix5QkFBeUI7d0JBQ3pCLCtCQUErQjtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQix5QkFBeUI7d0JBQ3pCLCtCQUErQjtxQkFDaEM7aUJBQ0Y7O0lBQ2lDLDBCQUFDO0NBQUEsQUFmbkMsSUFlbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1kYk9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZGItb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi1hdXRvLWNvbXBsZXRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1kYkF1dG9Db21wbGV0ZXJPcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWRiLWF1dG8tY29tcGxldGVyLW9wdGlvbi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQsXG4gICAgTWRiT3B0aW9uQ29tcG9uZW50LFxuICAgIE1kYkF1dG9Db21wbGV0ZXJEaXJlY3RpdmUsXG4gICAgTWRiQXV0b0NvbXBsZXRlck9wdGlvbkRpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQsXG4gICAgTWRiT3B0aW9uQ29tcG9uZW50LFxuICAgIE1kYkF1dG9Db21wbGV0ZXJEaXJlY3RpdmUsXG4gICAgTWRiQXV0b0NvbXBsZXRlck9wdGlvbkRpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlck1vZHVsZSB7fVxuIl19