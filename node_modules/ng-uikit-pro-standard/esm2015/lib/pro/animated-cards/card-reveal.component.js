/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, } from '@angular/core';
import { socialsState } from '../animations/animations.component';
export class CardRevealComponent {
    /**
     * @param {?} _r
     * @param {?} _cdRef
     */
    constructor(_r, _cdRef) {
        this._r = _r;
        this._cdRef = _cdRef;
        this.animationStart = new EventEmitter();
        this.animationEnd = new EventEmitter();
        this.show = false;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        if (this.cardOverflow && this.cardFront && this.cardReveal) {
            /** @type {?} */
            const height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.show = !this.show;
        this.socials = this.socials === 'active' ? 'inactive' : 'active';
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            if (this.cardReveal) {
                this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
            }
        }), 0);
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    onAnimationStart() {
        this.animationStart.emit();
    }
    /**
     * @return {?}
     */
    onAnimationDone() {
        this.animationEnd.emit();
    }
}
CardRevealComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-reveal',
                template: "<div #cardOverflow class=\"card-overflow\">\n  <div #cardFront class=\"card-front\">\n    <ng-content select=\".card-front\"></ng-content>\n  </div>\n  <div\n    #cardReveal\n    class=\"card-reveal\"\n    *ngIf=\"show\"\n    [@socialsState]=\"socials\"\n    (@socialsState.done)=\"onAnimationDone()\"\n    (@socialsState.start)=\"onAnimationStart()\"\n  >\n    <ng-content select=\".card-reveal\"></ng-content>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [socialsState],
                styles: ["@charset \"UTF-8\";.card.promoting-card .fa{transition:.4s}.card.promoting-card .fa[class*=fa-]:hover{transition:.4s;cursor:pointer}.card.weather-card .collapse-content a.collapsed:after{content:'Expand'}.card.weather-card .collapse-content a:not(.collapsed):after{content:'Collapse'}.card.weather-card .degree:after{content:'\u00B0C';position:absolute;font-size:3rem;margin-top:.9rem;font-weight:400}.card.gradient-card{transition:.5s ease-in-out}.card.gradient-card .first-content .card-title{font-weight:500}.card.gradient-card .second-content,.card.gradient-card .third-content{display:none}.card.gradient-card .card-body{transition:.5s ease-in-out;opacity:0;visibility:hidden;overflow:hidden;height:0;padding-bottom:0;padding-top:0}.card.gradient-card .card-image,.card.gradient-card .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within{margin-top:3rem;transition:.5s ease-in-out}.card.gradient-card:focus-within .card-image{transition:.5s ease-in-out;width:7rem;height:7rem;margin-top:-2rem;margin-left:1rem;border-radius:.25rem;margin-bottom:2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card.gradient-card:focus-within .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within .card-body{transition:.7s ease-in-out;visibility:visible;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;height:auto;border-radius:.25rem}.card.gradient-card:focus-within .card-body .progress{height:.4rem}.card.gradient-card:focus-within .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:focus-within .first-content{display:none}.card.gradient-card:focus-within .second-content{display:block}.card.gradient-card:focus-within .third-content{display:block;margin-top:-6rem}@media (max-device-width:1025px){.card.gradient-card:hover{margin-top:3rem;transition:.5s ease-in-out}.card.gradient-card:hover .card-image{transition:.5s ease-in-out;width:7rem;height:7rem;margin-top:-2rem;margin-left:1rem;border-radius:.25rem;margin-bottom:2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card.gradient-card:hover .card-image .mask{border-radius:.25rem}.card.gradient-card:hover .card-body{transition:.7s ease-in-out;visibility:visible;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;height:auto;border-radius:.25rem}.card.gradient-card:hover .card-body .progress,.card.gradient-card:hover .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:hover .first-content{display:none}.card.gradient-card:hover .second-content{display:block}.card.gradient-card:hover .third-content{display:block;margin-top:-6rem}}.card.booking-card .rating{font-size:.7rem}.card.chart-card .classic-tabs .nav li a.active{border-bottom:2px solid;transition:width .5s,background-color .5s}.card.chart-card .classic-tabs .nav.tabs-white li a{color:#757575;font-weight:500}.card.chart-card .classic-tabs .nav.tabs-white li a.active{color:#673ab7}.card.chart-card .btn-deep-purple-accent{background-color:#b388ff;margin-top:-65px}.card.chart-card .btn-deep-purple-accent i{color:#000!important}.card.chart-card .btn-teal-accent{background-color:#1de9b6;margin-top:-65px}.card.chart-card .btn-teal-accent i{color:#000!important}.card.colorful-card .indigo-accent-text{color:#304ffe}.card.colorful-card .btn-indigo-accent{background-color:#304ffe}.card.colorful-card .yellow-darken-text{color:#fdd835}.card.colorful-card .testimonial-card .avatar{width:55px;margin-top:-30px;border:3px solid #fff}.card.colorful-card .testimonial-card .avatar img{width:50px;height:50px}.card.colorful-card .brown-darken-text{color:#3e2723}.card.colorful-card .btn-red-lighten{background-color:#ffcdd2}.card-wrapper.card-action{min-height:640px}@media (max-width:450px){.card-wrapper.card-action{min-height:790px}}.card-form .md-form input[type=email]:focus:not([readonly]),.card-form .md-form input[type=password]:focus:not([readonly]),.card-form .md-form input[type=text]:focus:not([readonly]){box-shadow:0 1px 0 0 #fff;border-bottom:1px solid #fff}.card-form .card-form-2{border-top-left-radius:21px;border-top-right-radius:21px;margin-top:-35px}.card-form .card-form-2 .form-check-input[type=checkbox].filled-in:checked+label:after,.card-form .card-form-2 label.btn input[type=checkbox].filled-in:checked+label:after{background-color:#e53935;border:2px solid #e53935}.card-form .card-form-2 .btn-outline-red-accent{border:2px solid #e53935;background-color:transparent;color:#e53935}.card-form .card-form-2 .pink-accent-text{color:#c51162}.z-depth-1-bottom{box-shadow:0 5px 5px -2px rgba(0,0,0,.16)}.card-wrapper{height:500px;position:relative;-webkit-perspective:800px;perspective:800px}.card-wrapper .face{position:absolute;width:100%;height:100%;background-color:#fff}.card-wrapper .face h4{margin-bottom:15px}.card-wrapper .face h5{margin-top:30px}.card-wrapper .face .content{text-align:left;padding:15px}.card-wrapper .face .content p{margin-bottom:30px}.card-wrapper .face .content .rotate-btn{padding:1rem;margin-right:-8px;float:right;font-size:1.2rem;color:#000}.card-wrapper .card-up{overflow:hidden;height:50%}.card-wrapper .card-up img{min-width:400px;width:100%}.card-wrapper .avatar{border-radius:50%;display:block;height:120px;margin:-65px auto 0;overflow:hidden;width:120px}.card-wrapper .avatar img{border:5px solid #fff;background:#fff;width:100%}.card-wrapper .card-rotating{text-align:center;position:absolute;width:100%;height:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.card-wrapper .card-rotating .content{position:relative}.card-wrapper .card-rotating .content .rotate-btn{position:absolute;right:8px;top:0}.card-wrapper .fa-repeat,.card-wrapper .fa-undo{font-size:20px;margin-top:30px}.card-wrapper .fa-undo{margin-top:30px}.card-wrapper .back,.card-wrapper .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card-wrapper .fron{z-index:2;cursor:auto}.card-wrapper .back{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg);padding:1rem}.card-wrapper .back .card-title{cursor:pointer}.card-wrapper .back .card-title i{color:#9e9e9e;position:absolute;right:20px}.card-wrapper .card-rotating.effect__click.flipped .front{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-wrapper .card-rotating.effect__click.flipped .back{-webkit-transform:rotateY(0);transform:rotateY(0)}.embed-responsive-item{background:#000}.tp-box{position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}.tp-box .tp-box_side{width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;text-align:center}.tp-box .tp-box_back{-webkit-transform:rotateY(179.9deg);transform:rotateY(179.9deg)}.flip-container{-webkit-perspective:1000px;perspective:1000px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.flip-container .flipper{transition:1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.flip-container .front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}.flip-container .back{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.flip-container .back,.flip-container .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:absolute;top:0;left:0}.flip-container.rotate .back{-webkit-transform:rotateY(0);transform:rotateY(0);background-color:#fff}.flip-container.rotate .front{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-overflow{overflow:hidden;height:100%;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
            }] }
];
/** @nocollapse */
CardRevealComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
CardRevealComponent.propDecorators = {
    cardReveal: [{ type: ViewChild, args: ['cardReveal', { static: false },] }],
    cardFront: [{ type: ViewChild, args: ['cardFront', { static: true },] }],
    cardOverflow: [{ type: ViewChild, args: ['cardOverflow', { static: true },] }],
    animationStart: [{ type: Output }],
    animationEnd: [{ type: Output }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /** @type {?} */
    CardRevealComponent.prototype.cardReveal;
    /** @type {?} */
    CardRevealComponent.prototype.cardFront;
    /** @type {?} */
    CardRevealComponent.prototype.cardOverflow;
    /** @type {?} */
    CardRevealComponent.prototype.animationStart;
    /** @type {?} */
    CardRevealComponent.prototype.animationEnd;
    /** @type {?} */
    CardRevealComponent.prototype.socials;
    /** @type {?} */
    CardRevealComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    CardRevealComponent.prototype._r;
    /**
     * @type {?}
     * @private
     */
    CardRevealComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbmltYXRlZC1jYXJkcy9jYXJkLXJldmVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBVWxFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBb0I5QixZQUFvQixFQUFhLEVBQVUsTUFBeUI7UUFBaEQsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBZjFELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUc3RCxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBV21ELENBQUM7Ozs7SUFSeEUsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2tCQUNwRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDNUY7SUFDSCxDQUFDOzs7O0lBSUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pFLFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUY7UUFDSCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJiQUF5QztnQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUM7O2FBQzNCOzs7O1lBakJDLFNBQVM7WUFJVCxpQkFBaUI7Ozt5QkFlaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBQ3pDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUN2QyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFFMUMsTUFBTTsyQkFDTixNQUFNOzZCQUtOLFlBQVksU0FBQyxlQUFlOzs7O0lBVjdCLHlDQUFtRTs7SUFDbkUsd0NBQWdFOztJQUNoRSwyQ0FBc0U7O0lBRXRFLDZDQUFzRTs7SUFDdEUsMkNBQW9FOztJQUVwRSxzQ0FBb0I7O0lBQ3BCLG1DQUFvQjs7Ozs7SUFXUixpQ0FBcUI7Ozs7O0lBQUUscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzb2NpYWxzU3RhdGUgfSBmcm9tICcuLi9hbmltYXRpb25zL2FuaW1hdGlvbnMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWNhcmQtcmV2ZWFsJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLXJldmVhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FuaW1hdGVkLWNhcmRzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbc29jaWFsc1N0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFJldmVhbENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2NhcmRSZXZlYWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgY2FyZFJldmVhbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FyZEZyb250JywgeyBzdGF0aWM6IHRydWUgfSkgY2FyZEZyb250OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjYXJkT3ZlcmZsb3cnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjYXJkT3ZlcmZsb3c6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBzb2NpYWxzOiBhbnk7XG4gIHB1YmxpYyBzaG93ID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLmNhcmRPdmVyZmxvdyAmJiB0aGlzLmNhcmRGcm9udCAmJiB0aGlzLmNhcmRSZXZlYWwpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FyZEZyb250Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRPdmVyZmxvdy5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB0aGlzLl9yLnNldFN0eWxlKHRoaXMuY2FyZFJldmVhbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcjogUmVuZGVyZXIyLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5zb2NpYWxzID0gdGhpcy5zb2NpYWxzID09PSAnYWN0aXZlJyA/ICdpbmFjdGl2ZScgOiAnYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FyZEZyb250Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRPdmVyZmxvdy5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICBpZiAodGhpcy5jYXJkUmV2ZWFsKSB7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkUmV2ZWFsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBvbkFuaW1hdGlvblN0YXJ0KCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQuZW1pdCgpO1xuICB9XG4gIG9uQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkVuZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==