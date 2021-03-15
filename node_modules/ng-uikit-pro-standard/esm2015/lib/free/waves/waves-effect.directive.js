/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
export class WavesDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            const button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            const xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            const yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            const tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            const ripple = button.appendChild(tmp);
            /** @type {?} */
            const top = yPos + 'px';
            /** @type {?} */
            const left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            /** @type {?} */
            const scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            const duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    }
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    removeRipple(button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout((/**
         * @return {?}
         */
        () => {
            ripple.style.opacity = '0';
            setTimeout((/**
             * @return {?}
             */
            () => {
                button.removeChild(ripple);
            }), 750);
        }), 200);
    }
}
WavesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbWavesEffect]',
            },] }
];
/** @nocollapse */
WavesDirective.ctorParameters = () => [
    { type: ElementRef }
];
WavesDirective.propDecorators = {
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    WavesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlwRSxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7O0lBRzlCLEtBQUssQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztrQkFDbkQsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzlDLE1BQU0sQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDO2FBQ3JDOztrQkFFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJOztrQkFDMUQsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRzs7a0JBRXpELEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QyxHQUFHLENBQUMsU0FBUyxJQUFJLDZCQUE2QixDQUFDOztrQkFDekMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDOztrQkFFaEMsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJOztrQkFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO1lBRXhCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O2tCQUVoQixLQUFLLEdBQUcsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCO1lBRTVFLHdDQUF3QztZQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7a0JBRWxCLFFBQVEsR0FBRyxHQUFHO1lBRXBCLHdDQUF3QztZQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRS9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQVcsRUFBRSxNQUFXO1FBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFMUMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBRTNCLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQUhtQixVQUFVOzs7b0JBTzNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFGckIsNEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJXYXZlc0VmZmVjdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBXYXZlc0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBjbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3dhdmVzLWVmZmVjdCcpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgKz0gJyB3YXZlcy1lZmZlY3QnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB4UG9zID0gZXZlbnQuY2xpZW50WCAtIGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgY29uc3QgeVBvcyA9IGV2ZW50LmNsaWVudFkgLSBidXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRtcC5jbGFzc05hbWUgKz0gJ3dhdmVzLXJpcHBsZSB3YXZlcy1yaXBwbGluZyc7XG4gICAgICBjb25zdCByaXBwbGUgPSBidXR0b24uYXBwZW5kQ2hpbGQodG1wKTtcblxuICAgICAgY29uc3QgdG9wID0geVBvcyArICdweCc7XG4gICAgICBjb25zdCBsZWZ0ID0geFBvcyArICdweCc7XG5cbiAgICAgIHRtcC5zdHlsZS50b3AgPSB0b3A7XG4gICAgICB0bXAuc3R5bGUubGVmdCA9IGxlZnQ7XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gJ3NjYWxlKCcgKyAoYnV0dG9uLmNsaWVudFdpZHRoIC8gMTAwKSAqIDMgKyAnKSB0cmFuc2xhdGUoMCwwKSc7XG5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIHRtcC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgIHRtcC5zdHlsZS50cmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgIHRtcC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IDc1MDtcblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgdG1wLnN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgIHRtcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG5cbiAgICAgIHRoaXMucmVtb3ZlUmlwcGxlKGJ1dHRvbiwgcmlwcGxlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVSaXBwbGUoYnV0dG9uOiBhbnksIHJpcHBsZTogYW55KSB7XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdmVzLXJpcHBsaW5nJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHJpcHBsZSk7XG4gICAgICB9LCA3NTApO1xuICAgIH0sIDIwMCk7XG4gIH1cbn1cbiJdfQ==