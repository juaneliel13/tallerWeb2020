/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, } from '@angular/core';
import { socialsState } from '../animations/animations.component';
var CardRevealComponent = /** @class */ (function () {
    function CardRevealComponent(_r, _cdRef) {
        this._r = _r;
        this._cdRef = _cdRef;
        this.animationStart = new EventEmitter();
        this.animationEnd = new EventEmitter();
        this.show = false;
    }
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        if (this.cardOverflow && this.cardFront && this.cardReveal) {
            /** @type {?} */
            var height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
        }
    };
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.show = !this.show;
        this.socials = this.socials === 'active' ? 'inactive' : 'active';
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height = _this.cardFront.nativeElement.offsetHeight;
            _this._r.setStyle(_this.cardOverflow.nativeElement, 'height', height + 'px');
            if (_this.cardReveal) {
                _this._r.setStyle(_this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
            }
        }), 0);
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.onAnimationStart = /**
     * @return {?}
     */
    function () {
        this.animationStart.emit();
    };
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.onAnimationDone = /**
     * @return {?}
     */
    function () {
        this.animationEnd.emit();
    };
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
    CardRevealComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    CardRevealComponent.propDecorators = {
        cardReveal: [{ type: ViewChild, args: ['cardReveal', { static: false },] }],
        cardFront: [{ type: ViewChild, args: ['cardFront', { static: true },] }],
        cardOverflow: [{ type: ViewChild, args: ['cardOverflow', { static: true },] }],
        animationStart: [{ type: Output }],
        animationEnd: [{ type: Output }],
        onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return CardRevealComponent;
}());
export { CardRevealComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbmltYXRlZC1jYXJkcy9jYXJkLXJldmVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxFO0lBNEJFLDZCQUFvQixFQUFhLEVBQVUsTUFBeUI7UUFBaEQsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBZjFELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUc3RCxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBV21ELENBQUM7Ozs7SUFSeEUsNENBQWM7OztJQURkO1FBRUUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ3BELE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUM7Ozs7SUFJRCxvQ0FBTTs7O0lBQU47UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pFLFVBQVU7OztRQUFDOztnQkFDSCxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUN4RCxLQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM1RjtRQUNILENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNELDhDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBQ0QsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJiQUF5QztvQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUM7O2lCQUMzQjs7OztnQkFqQkMsU0FBUztnQkFJVCxpQkFBaUI7Ozs2QkFlaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NEJBQ3pDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUN2QyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FFMUMsTUFBTTsrQkFDTixNQUFNO2lDQUtOLFlBQVksU0FBQyxlQUFlOztJQTZCL0IsMEJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQXhDWSxtQkFBbUI7OztJQUM5Qix5Q0FBbUU7O0lBQ25FLHdDQUFnRTs7SUFDaEUsMkNBQXNFOztJQUV0RSw2Q0FBc0U7O0lBQ3RFLDJDQUFvRTs7SUFFcEUsc0NBQW9COztJQUNwQixtQ0FBb0I7Ozs7O0lBV1IsaUNBQXFCOzs7OztJQUFFLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc29jaWFsc1N0YXRlIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLXJldmVhbCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1yZXZlYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbmltYXRlZC1jYXJkcy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW3NvY2lhbHNTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRSZXZlYWxDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdjYXJkUmV2ZWFsJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNhcmRSZXZlYWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NhcmRGcm9udCcsIHsgc3RhdGljOiB0cnVlIH0pIGNhcmRGcm9udDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FyZE92ZXJmbG93JywgeyBzdGF0aWM6IHRydWUgfSkgY2FyZE92ZXJmbG93OiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgc29jaWFsczogYW55O1xuICBwdWJsaWMgc2hvdyA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5jYXJkT3ZlcmZsb3cgJiYgdGhpcy5jYXJkRnJvbnQgJiYgdGhpcy5jYXJkUmV2ZWFsKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhcmRGcm9udC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkT3ZlcmZsb3cubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRSZXZlYWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3I6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc29jaWFscyA9IHRoaXMuc29jaWFscyA9PT0gJ2FjdGl2ZScgPyAnaW5hY3RpdmUnIDogJ2FjdGl2ZSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhcmRGcm9udC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkT3ZlcmZsb3cubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgaWYgKHRoaXMuY2FyZFJldmVhbCkge1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHRoaXMuY2FyZFJldmVhbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgb25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcbiAgfVxuICBvbkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25FbmQuZW1pdCgpO1xuICB9XG59XG4iXX0=