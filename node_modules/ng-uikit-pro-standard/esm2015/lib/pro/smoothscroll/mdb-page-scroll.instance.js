/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by sebastianfuss on 29.08.16.
 */
import { EventEmitter } from '@angular/core';
import { PageScrollConfig, } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
/**
 * An Interface specifying the possible options to be passed into the newInstance() factory method
 * @record
 */
export function PageScrollOptions() { }
if (false) {
    /**
     * The document object of the current app
     * @type {?}
     */
    PageScrollOptions.prototype.document;
    /**
     * A specification of the DOM element to scroll to. Either a string referring to an
     * object id (`#target`) or a HTMLElement that is attached to the document's DOM tree.
     * @type {?}
     */
    PageScrollOptions.prototype.scrollTarget;
    /**
     * Array of HTMLElements or the body object that should be manipulated while performing
     * the scroll animation.
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.scrollingViews;
    /**
     * Namespace of the scroll animation
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.namespace;
    /**
     * Whether that scroll animation scrolls in vertical direction (true) or
     * horizontal (false, default value)
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.verticalScrolling;
    /**
     * Whether the an advanced offset calculation for inline scrollings should be applied
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.advancedInlineOffsetCalculation;
    /**
     * Offset of target elements location and scroll location
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollOffset;
    /**
     * Whether the scroll animation should be interruptible
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollInterruptible;
    /**
     * The easing logic to be used
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollEasingLogic;
    /**
     * Duration in milliseconds the scroll animation should last
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollDuration;
    /**
     * Maximum speed to be used for the scroll animation. Only taken
     * into account of no pageScrollDuration is provided
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollSpeed;
    /**
     * A listener to be called whenever the scroll animation stops
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollFinishListener;
}
/**
 * Represents a scrolling action
 */
export class PageScrollInstance {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {\@link PageScrollInstance#simpleInstance}
     *      {\@link PageScrollInstance#newInstance}
     * @param {?} namespace
     * @param {?} document
     */
    constructor(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = PageScrollConfig._defaultNamespace;
        /* Whether we scroll vertically (true) or horizontally (false) */
        this._verticalScrolling = PageScrollConfig.defaultIsVerticalScrolling;
        /* Offset in px that the animation should stop above that target element */
        this._offset = PageScrollConfig.defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = PageScrollConfig.defaultDuration;
        /* Easing function to manipulate the scrollTop/scrollLeft value over time */
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = PageScrollConfig.defaultInterruptible;
        /* Whether the advanded offset calculation for inline scrolling should be used */
        this._advancedInlineOffsetCalculation = PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this._startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
             able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    static simpleInstance(document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
        });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static newInstance(options) {
        if (Util.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        /** @type {?} */
        const pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (Util.isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [
                document.documentElement,
                document.body,
                document.body.parentNode,
            ];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!Util.isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (Util.isUndefinedOrNull(options.pageScrollDuration) &&
            !Util.isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!Util.isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible =
            options.pageScrollInterruptible ||
                (Util.isUndefinedOrNull(options.pageScrollInterruptible) &&
                    PageScrollConfig.defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation =
            options.advancedInlineOffsetCalculation ||
                (Util.isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                    PageScrollConfig.defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    }
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} verticalScrolling
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     *
     * @return {?}
     */
    static simpleDirectionInstance(document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
            verticalScrolling,
        });
    }
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineInstance(document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace,
        });
    }
    /**
     *
     * @deprecated Use {\@link newInstance(options: PageScrollOptions)}
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineDirectionInstance(document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            namespace,
            verticalScrolling,
        });
    }
    /**
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?=} scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param {?=} namespace Optional namespace to group scroll animations logically
     * @param {?=} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param {?=} pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param {?=} pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param {?=} pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param {?=} pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     * @return {?}
     */
    static advancedInstance(document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews,
            namespace,
            verticalScrolling,
            pageScrollOffset,
            pageScrollInterruptible,
            pageScrollEasingLogic,
            pageScrollDuration,
            pageScrollFinishListener,
        });
    }
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    getScrollPropertyValue(scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    }
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    extractScrollTargetPosition() {
        /** @type {?} */
        let scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(((/** @type {?} */ (this._scrollTarget))).substr(1));
        }
        else {
            scrollTargetElement = (/** @type {?} */ (this._scrollTarget));
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            /** @type {?} */
            const position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                /** @type {?} */
                const accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                /** @type {?} */
                const theWindow = scrollTargetElement.ownerDocument.defaultView;
                /** @type {?} */
                let parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                /** @type {?} */
                let parent = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !Util.isUndefinedOrNull(parent)) {
                    if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent.offsetTop;
                        accumulatedParentsPos.left += parent.offsetLeft;
                    }
                    // Next iteration
                    parent = parent.parentElement;
                    parentFound = parent === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (PageScrollConfig._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return Util.extractElementPosition(this.document, scrollTargetElement);
    }
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    getCurrentOffset() {
        return this._offset;
    }
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    setScrollPosition(position) {
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        (oneAlreadyWorked, scrollingView) => {
            /** @type {?} */
            const startScrollPropertyValue = this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !Util.isUndefinedOrNull(startScrollPropertyValue)) {
                /** @type {?} */
                const scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                const isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement ||
                    scrollDistance > Math.abs(this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    }
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    fireEvent(value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    }
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    attachInterruptListeners(interruptReporter) {
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            interruptReporter.report(event, this);
        });
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.document.body.addEventListener(event, this._interruptListener)));
        this._interruptListenersAttached = true;
    }
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    detachInterruptListeners() {
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.document.body.removeEventListener(event, this._interruptListener)));
        this._interruptListenersAttached = false;
    }
    /**
     * @return {?}
     */
    get namespace() {
        return this._namespace;
    }
    /**
     * @return {?}
     */
    get scrollTarget() {
        return this._scrollTarget;
    }
    /**
     * @return {?}
     */
    get verticalScrolling() {
        return this._verticalScrolling;
    }
    /**
     * @return {?}
     */
    get scrollingViews() {
        return this._scrollingViews;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startScrollPosition(value) {
        this._startScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get startScrollPosition() {
        return this._startScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set targetScrollPosition(value) {
        this._targetScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get targetScrollPosition() {
        return this._targetScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set distanceToScroll(value) {
        this._distanceToScroll = value;
    }
    /**
     * @return {?}
     */
    get distanceToScroll() {
        return this._distanceToScroll;
    }
    /**
     * @return {?}
     */
    get executionDuration() {
        return this._executionDuration;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set executionDuration(value) {
        this._executionDuration = value;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this._duration;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @return {?}
     */
    get easingLogic() {
        return this._easingLogic;
    }
    /**
     * @return {?}
     */
    get interruptible() {
        return this._interruptible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * @return {?}
     */
    get startTime() {
        return this._startTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set endTime(value) {
        this._endTime = value;
    }
    /**
     * @return {?}
     */
    get endTime() {
        return this._endTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timer(value) {
        this._timer = value;
    }
    /**
     * @return {?}
     */
    get timer() {
        return this._timer;
    }
    /**
     * @return {?}
     */
    get interruptListenersAttached() {
        return this._interruptListenersAttached;
    }
}
if (false) {
    /**
     * These properties will be set during instance construction and default to their defaults from PageScrollConfig
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._namespace;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype.document;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._scrollingViews;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._isInlineScrolling;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._scrollTarget;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._verticalScrolling;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._offset;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._duration;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._speed;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._easingLogic;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptListener;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._advancedInlineOffsetCalculation;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._pageScrollFinish;
    /**
     * These properties will be set/manipulated if the scroll animation starts
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._startScrollPosition;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._targetScrollPosition;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._distanceToScroll;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._startTime;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._endTime;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._executionDuration;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptListenersAttached;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._timer;
}
/**
 * An Interface a listener should implement to be notified about possible interrupt events
 * that happened due to user interaction while a scroll animation takes place.
 *
 * The PageScrollService provides an implementation to a PageScrollInstance to be notified
 * about scroll animation interrupts and stop related animations.
 * @record
 */
export function InterruptReporter() { }
if (false) {
    /** @type {?} */
    InterruptReporter.prototype.report;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zbW9vdGhzY3JvbGwvbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFFTCxnQkFBZ0IsR0FHakIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUscUJBQXFCLElBQUksSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBTS9FLHVDQWdFQzs7Ozs7O0lBNURDLHFDQUFtQjs7Ozs7O0lBTW5CLHlDQUErQjs7Ozs7O0lBTS9CLDJDQUFzQzs7Ozs7SUFLdEMsc0NBQW1COzs7Ozs7SUFNbkIsOENBQTRCOzs7OztJQUs1Qiw0REFBMEM7Ozs7O0lBSzFDLDZDQUEwQjs7Ozs7SUFLMUIsb0RBQWtDOzs7OztJQUtsQyxrREFBb0M7Ozs7O0lBS3BDLCtDQUE0Qjs7Ozs7O0lBTTVCLDRDQUF5Qjs7Ozs7SUFLekIscURBQWlEOzs7OztBQU9uRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7SUF1UTdCLFlBQVksU0FBaUIsRUFBRSxRQUFrQjs7Ozs7UUFqUXpDLGVBQVUsR0FBVyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQzs7UUFVeEQsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7O1FBRWpFLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQzs7UUFFdkQsY0FBUyxHQUFXLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7UUFJckQsaUJBQVksR0FBZ0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7O1FBRWhFLG1CQUFjLEdBQVksZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7O1FBS2hFLHFDQUFnQyxHQUN0QyxnQkFBZ0IsQ0FB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QW9DOzs7OztJQUVwQywyQ0FBd0M7Ozs7O0lBR3hDLGdEQUF5RTs7Ozs7SUFFekUscUNBQStEOzs7OztJQUUvRCx1Q0FBNkQ7Ozs7O0lBRTdELG9DQUF1Qjs7Ozs7SUFFdkIsMENBQXdFOzs7OztJQUV4RSw0Q0FBd0U7Ozs7O0lBR3hFLGdEQUErRDs7Ozs7SUFFL0QsOERBQzBEOzs7OztJQUUxRCwrQ0FBK0U7Ozs7OztJQU0vRSxrREFBaUM7Ozs7O0lBRWpDLG1EQUFzQzs7Ozs7SUFFdEMsK0NBQWtDOzs7OztJQUVsQyx3Q0FBMkI7Ozs7O0lBRTNCLHNDQUF5Qjs7Ozs7SUFFekIsZ0RBQW1DOzs7OztJQUVuQyx5REFBNEM7Ozs7O0lBSTVDLG9DQUEyQjs7Ozs7Ozs7OztBQTBkN0IsdUNBRUM7OztJQURDLG1DQUFzRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzZWJhc3RpYW5mdXNzIG9uIDI5LjA4LjE2LlxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBFYXNpbmdMb2dpYyxcbiAgUGFnZVNjcm9sbENvbmZpZyxcbiAgUGFnZVNjcm9sbFRhcmdldCxcbiAgUGFnZVNjcm9sbGluZ1ZpZXdzLFxufSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5jb25maWcnO1xuaW1wb3J0IHsgUGFnZVNjcm9sbFV0aWxTZXJ2aWNlIGFzIFV0aWwgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UnO1xuXG4vKipcbiAqIEFuIEludGVyZmFjZSBzcGVjaWZ5aW5nIHRoZSBwb3NzaWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBuZXdJbnN0YW5jZSgpIGZhY3RvcnkgbWV0aG9kXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlU2Nyb2xsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZG9jdW1lbnQgb2JqZWN0IG9mIHRoZSBjdXJyZW50IGFwcFxuICAgKi9cbiAgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljYXRpb24gb2YgdGhlIERPTSBlbGVtZW50IHRvIHNjcm9sbCB0by4gRWl0aGVyIGEgc3RyaW5nIHJlZmVycmluZyB0byBhblxuICAgKiBvYmplY3QgaWQgKGAjdGFyZ2V0YCkgb3IgYSBIVE1MRWxlbWVudCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCdzIERPTSB0cmVlLlxuICAgKi9cbiAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0O1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBIVE1MRWxlbWVudHMgb3IgdGhlIGJvZHkgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIG1hbmlwdWxhdGVkIHdoaWxlIHBlcmZvcm1pbmdcbiAgICogdGhlIHNjcm9sbCBhbmltYXRpb24uXG4gICAqL1xuICBzY3JvbGxpbmdWaWV3cz86IFBhZ2VTY3JvbGxpbmdWaWV3c1tdO1xuXG4gIC8qKlxuICAgKiBOYW1lc3BhY2Ugb2YgdGhlIHNjcm9sbCBhbmltYXRpb25cbiAgICovXG4gIG5hbWVzcGFjZT86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGF0IHNjcm9sbCBhbmltYXRpb24gc2Nyb2xscyBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKHRydWUpIG9yXG4gICAqIGhvcml6b250YWwgKGZhbHNlLCBkZWZhdWx0IHZhbHVlKVxuICAgKi9cbiAgdmVydGljYWxTY3JvbGxpbmc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhbiBhZHZhbmNlZCBvZmZzZXQgY2FsY3VsYXRpb24gZm9yIGlubGluZSBzY3JvbGxpbmdzIHNob3VsZCBiZSBhcHBsaWVkXG4gICAqL1xuICBhZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT2Zmc2V0IG9mIHRhcmdldCBlbGVtZW50cyBsb2NhdGlvbiBhbmQgc2Nyb2xsIGxvY2F0aW9uXG4gICAqL1xuICBwYWdlU2Nyb2xsT2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBiZSBpbnRlcnJ1cHRpYmxlXG4gICAqL1xuICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBlYXNpbmcgbG9naWMgdG8gYmUgdXNlZFxuICAgKi9cbiAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljPzogRWFzaW5nTG9naWM7XG5cbiAgLyoqXG4gICAqIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgbGFzdFxuICAgKi9cbiAgcGFnZVNjcm9sbER1cmF0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIHNwZWVkIHRvIGJlIHVzZWQgZm9yIHRoZSBzY3JvbGwgYW5pbWF0aW9uLiBPbmx5IHRha2VuXG4gICAqIGludG8gYWNjb3VudCBvZiBubyBwYWdlU2Nyb2xsRHVyYXRpb24gaXMgcHJvdmlkZWRcbiAgICovXG4gIHBhZ2VTY3JvbGxTcGVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogQSBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIHNjcm9sbCBhbmltYXRpb24gc3RvcHNcbiAgICovXG4gIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcj86IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2Nyb2xsaW5nIGFjdGlvblxuICovXG5cbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAvKipcbiAgICogVGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIHNldCBkdXJpbmcgaW5zdGFuY2UgY29uc3RydWN0aW9uIGFuZCBkZWZhdWx0IHRvIHRoZWlyIGRlZmF1bHRzIGZyb20gUGFnZVNjcm9sbENvbmZpZ1xuICAgKi9cblxuICAvKiBBIG5hbWVzcGFjZSB0byBcImdyb3VwXCIgc2Nyb2xsIGFuaW1hdGlvbnMgdG9nZXRoZXIgYW5kIHN0b3BwaW5nIHNvbWUgZG9lcyBub3Qgc3RvcCBvdGhlcnMgKi9cbiAgcHJpdmF0ZSBfbmFtZXNwYWNlOiBzdHJpbmcgPSBQYWdlU2Nyb2xsQ29uZmlnLl9kZWZhdWx0TmFtZXNwYWNlO1xuICAvKiBUaGUgZG9jdW1lbnQgYWxsIHRoZSBzY3JvbGxpbmcgdGFrZXMgcGxhY2UgYW5kIHNjcm9sbCB0YXJnZXRzIGFyZSBsb2NhdGVkIGluICovXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICAvKiBUaGUgRE9NIGVsZW1lbnRzIG9yIHNpbWlsYXIgbm9kZXMgd2hvc2Ugc2Nyb2xsVG9wL3Njcm9sbExlZnQgcHJvcGVydHkgd2lsbCBiZSBtYW5pcHVsYXRlZCBkdXJpbmcgc2Nyb2xsaW5nICovXG4gIHByaXZhdGUgX3Njcm9sbGluZ1ZpZXdzOiBQYWdlU2Nyb2xsaW5nVmlld3NbXTtcbiAgcHJpdmF0ZSBfaXNJbmxpbmVTY3JvbGxpbmc6IGJvb2xlYW47XG4gIC8qIFRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCBpbnRvIHRoZSB2aWV3cG9ydCAqL1xuICBwcml2YXRlIF9zY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQ7XG5cbiAgLyogV2hldGhlciB3ZSBzY3JvbGwgdmVydGljYWxseSAodHJ1ZSkgb3IgaG9yaXpvbnRhbGx5IChmYWxzZSkgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxpbmcgPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJc1ZlcnRpY2FsU2Nyb2xsaW5nO1xuICAvKiBPZmZzZXQgaW4gcHggdGhhdCB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdG9wIGFib3ZlIHRoYXQgdGFyZ2V0IGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXIgPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRTY3JvbGxPZmZzZXQ7XG4gIC8qIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgbGFzdCAqL1xuICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0RHVyYXRpb247XG4gIC8qIFNwZWVkIGluIFwicGl4ZWxzL3NlY29uZFwiIHRvIGJlIHVzZWQgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIHRhcmdldCBlbGVtZW50ICovXG4gIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XG4gIC8qIEVhc2luZyBmdW5jdGlvbiB0byBtYW5pcHVsYXRlIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBvdmVyIHRpbWUgKi9cbiAgcHJpdmF0ZSBfZWFzaW5nTG9naWM6IEVhc2luZ0xvZ2ljID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0RWFzaW5nTG9naWM7XG4gIC8qIEJvb2xlYW4gd2hldGhlciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgc3RvcCBvbiB1c2VyIGludGVycnVwdGlvbiBvciBub3QgKi9cbiAgcHJpdmF0ZSBfaW50ZXJydXB0aWJsZTogYm9vbGVhbiA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEludGVycnVwdGlibGU7XG4gIC8qIFRoZSBsaXN0ZW5lciB0aGF0IHRoaXMgc2Nyb2xsIGluc3RhbmNlIGF0dGFjaGVzIHRvIHRoZSBib2R5IHRvIGxpc3RlbiBmb3IgaW50ZXJydXB0IGV2ZW50c1xuICAgICBXZSdyZSBrZWVwaW5nIGEgcmVmZXJlbmNlIHRvIGl0IHNvIHdlIGNhbiBwcm9wZXJseSByZW1vdmUgaXQgd2hlbiB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzICovXG4gIHByaXZhdGUgX2ludGVycnVwdExpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0O1xuICAvKiBXaGV0aGVyIHRoZSBhZHZhbmRlZCBvZmZzZXQgY2FsY3VsYXRpb24gZm9yIGlubGluZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHVzZWQgKi9cbiAgcHJpdmF0ZSBfYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbjogYm9vbGVhbiA9XG4gICAgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbjtcbiAgLyogRXZlbnQgZW1pdHRlciB0byBub3RpZnkgdGhlIHdvcmxkIGFib3V0IHRoZSBzY3JvbGxpbmcgKi9cbiAgcHJpdmF0ZSBfcGFnZVNjcm9sbEZpbmlzaDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgc2V0L21hbmlwdWxhdGVkIGlmIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0YXJ0c1xuICAgKi9cbiAgLyogVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHBvc2l0aW9uIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHMgKi9cbiAgcHJpdmF0ZSBfc3RhcnRTY3JvbGxQb3NpdGlvbiA9IDA7XG4gIC8qIFRoZSB0YXJnZXQgdmFsdWUgb2YgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHBvc2l0aW9uIGZvciB0aGUgYW5pbWF0aW9uIChha2EgXCJ0aGUgZmluYWwgZGVzdGluYXRpb25cIikgKi9cbiAgcHJpdmF0ZSBfdGFyZ2V0U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcbiAgLyogRGlmZmVyZW5jZSBiZXR3ZWVuIHN0YXJ0U2Nyb2xsUG9zaXRpb24gYW5kIHRhcmdldFNjcm9sbFBvc2l0aW9uLiBQcmUtY2FsY3VsYXRlZCB0byBtaW5pbWl6ZSBjb21wdXRhdGlvbnMgZHVyaW5nIGFuaW1hdGlvbiAqL1xuICBwcml2YXRlIF9kaXN0YW5jZVRvU2Nyb2xsOiBudW1iZXI7XG4gIC8qIFRoZSB0aW1lc3RhbXAgd2hlbiB0aGUgYW5pbWF0aW9uIHN0YXJ0cy9nb3Qgc3RhcnRlZCAqL1xuICBwcml2YXRlIF9zdGFydFRpbWU6IG51bWJlcjtcbiAgLyogVGhlIGVzdGltYXRlIGVuZCB0aW1lIG9mIHRoZSBhbmltYXRpb24sIGNhbGN1bGF0ZWQgYnkgc3RhcnRUaW1lICsgZHVyYXRpb24gKi9cbiAgcHJpdmF0ZSBfZW5kVGltZTogbnVtYmVyO1xuICAvKiBUaGUgZHVyYXRpb24gYSBzdGFydGVkIGFuaW1hdGlvbiB0YWtlcy4gVGhpcyBtYXkgbWF0Y2ggdGhlIF9kdXJhdGlvbiBvciBiZSBhZGp1c3RlZCBkdWUgdG8gdGhlIF9zcGVlZCBvcHRpb24gKi9cbiAgcHJpdmF0ZSBfZXhlY3V0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgLyogV2hldGhlciBhbiBpbnRlcnJ1cHQgbGlzdGVuZXIgaXMgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3Igbm90ICovXG4gIHByaXZhdGUgX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgLyogUmVmZXJlbmNlcyB0byB0aGUgdGltZXIgaW5zdGFuY2UgdGhhdCBpcyB1c2VkIHRvIHBlcmZvcm0gdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gYmVcbiAgICAgYWJsZSB0byBjbGVhciBpdCBvbiBhbmltYXRpb24gZW5kKi9cbiAgcHJpdmF0ZSBfdGltZXI6IGFueSA9IG51bGw7XG5cbiAgLypcbiAgICogRmFjdG9yeSBtZXRob2RzIGZvciBpbnN0YW5jZSBjcmVhdGlvblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVJbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zIHwgYW55KSB7XG4gICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5uYW1lc3BhY2UpIHx8IG9wdGlvbnMubmFtZXNwYWNlLmxlbmd0aCA8PSAwKSB7XG4gICAgICBvcHRpb25zLm5hbWVzcGFjZSA9IFBhZ2VTY3JvbGxDb25maWcuX2RlZmF1bHROYW1lc3BhY2U7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlIHwgYW55ID0gbmV3IFBhZ2VTY3JvbGxJbnN0YW5jZShcbiAgICAgIG9wdGlvbnMubmFtZXNwYWNlLFxuICAgICAgZG9jdW1lbnRcbiAgICApO1xuXG4gICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5zY3JvbGxpbmdWaWV3cykgfHwgb3B0aW9ucy5zY3JvbGxpbmdWaWV3cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faXNJbmxpbmVTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc2Nyb2xsaW5nVmlld3MgPSBbXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgZG9jdW1lbnQuYm9keSxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9pc0lubGluZVNjcm9sbGluZyA9IHRydWU7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3Njcm9sbGluZ1ZpZXdzID0gb3B0aW9ucy5zY3JvbGxpbmdWaWV3cztcbiAgICB9XG5cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3Njcm9sbFRhcmdldCA9IG9wdGlvbnMuc2Nyb2xsVGFyZ2V0O1xuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMudmVydGljYWxTY3JvbGxpbmcpKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3ZlcnRpY2FsU2Nyb2xsaW5nID0gb3B0aW9ucy52ZXJ0aWNhbFNjcm9sbGluZztcbiAgICB9XG5cbiAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsT2Zmc2V0KSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9vZmZzZXQgPSBvcHRpb25zLnBhZ2VTY3JvbGxPZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbEVhc2luZ0xvZ2ljKSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9lYXNpbmdMb2dpYyA9IG9wdGlvbnMucGFnZVNjcm9sbEVhc2luZ0xvZ2ljO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRHVyYXRpb24pICYmXG4gICAgICAhVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxTcGVlZClcbiAgICApIHtcbiAgICAgIC8vIE5vIGR1cmF0aW9uIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucywgb25seSBpbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBzcGVlZCBvcHRpb24gd2hlbiBwcmVzZW50XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3NwZWVkID0gb3B0aW9ucy5wYWdlU2Nyb2xsU3BlZWQ7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2R1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRHVyYXRpb24pKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2R1cmF0aW9uID0gb3B0aW9ucy5wYWdlU2Nyb2xsRHVyYXRpb247XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyKSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9wYWdlU2Nyb2xsRmluaXNoID0gb3B0aW9ucy5wYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLl9pbnRlcnJ1cHRpYmxlID1cbiAgICAgIG9wdGlvbnMucGFnZVNjcm9sbEludGVycnVwdGlibGUgfHxcbiAgICAgIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbEludGVycnVwdGlibGUpICYmXG4gICAgICAgIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEludGVycnVwdGlibGUpO1xuXG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLl9hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uID1cbiAgICAgIG9wdGlvbnMuYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiB8fFxuICAgICAgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uKSAmJlxuICAgICAgICBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRBZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uKTtcblxuICAgIHJldHVybiBwYWdlU2Nyb2xsSW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUGFnZVNjcm9sbEluc3RhbmNlIHJlcHJlc2VudGluZyBhIHNjcm9sbCBhbmltYXRpb24gb24gdGhlIGRvY3VtZW50cyBib2R5LlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE9wdGlvbmFsIG5hbWVzcGFjZSB0byBncm91cCBzY3JvbGwgYW5pbWF0aW9ucyBsb2dpY2FsbHlcbiAgICpcbiAgICoqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZURpcmVjdGlvbkluc3RhbmNlKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgdmVydGljYWxTY3JvbGxpbmc6IGJvb2xlYW4sXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nXG4gICk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgIG5hbWVzcGFjZSxcbiAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBhZ2VTY3JvbGxJbnN0YW5jZSByZXByZXNlbnRpbmcgYSBzY3JvbGwgYW5pbWF0aW9uIHRvIHRoZSB0YXJnZXQgZWxlbWVudCB3aGVyZSB0aGUgc2Nyb2xsaW5nVmlld1xuICAgKiBlbGVtZW50cyBnZXQgc2Nyb2xsZWQgKGxpa2UgYSBkaXYgY29udGFpbmVyIHdpdGggZml4ZWQgaGVpZ2h0LCByZXN1bHRpbmcgaW4gc2Nyb2xsYmFycyBpbiBpdCkuXG4gICAqXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHRoZSBzY3JvbGxUYXJnZXQgaXMgbG9jYXRlZCBpbnNpZGUgdGhlIHNjcm9sbGluZ1ZpZXcgaW4gdGhlIERPTSBoaWVyYXJjaHksIG90aGVyd2lzZSB0aGVcbiAgICogc2Nyb2xsaW5nVmlldyB3aWxsIGJlIHNjcm9sbGVkIHRvIGFuIGFwcGFyZW50bHkgYXJiaXRyYXJ5IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gc2Nyb2xsaW5nVmlldyBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZFxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE9wdGlvbmFsIG5hbWVzcGFjZSB0byBncm91cCBzY3JvbGwgYW5pbWF0aW9ucyBsb2dpY2FsbHlcbiAgICpcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5saW5lSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICBzY3JvbGxpbmdWaWV3OiBQYWdlU2Nyb2xsaW5nVmlld3MsXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nXG4gICk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgIHNjcm9sbGluZ1ZpZXdzOiBbc2Nyb2xsaW5nVmlld10sXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZzogdHJ1ZSxcbiAgICAgIG5hbWVzcGFjZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gc2Nyb2xsaW5nVmlldyBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZFxuICAgKiBAcGFyYW0gdmVydGljYWxTY3JvbGxpbmcgd2hldGhlciB0aGUgc2Nyb2xsaW5nIHNob3VsZCBiZSBwZXJmb3JtZWQgaW4gdmVydGljYWwgZGlyZWN0aW9uICh0cnVlLCBkZWZhdWx0KSBvciBob3Jpem9udGFsIChmYWxzZSlcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgbmV3SW5zdGFuY2Uob3B0aW9uczogUGFnZVNjcm9sbE9wdGlvbnMpfVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVJbmxpbmVEaXJlY3Rpb25JbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIHNjcm9sbGluZ1ZpZXc6IFBhZ2VTY3JvbGxpbmdWaWV3cyxcbiAgICB2ZXJ0aWNhbFNjcm9sbGluZzogYm9vbGVhbixcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmdcbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgc2Nyb2xsaW5nVmlld3M6IFtzY3JvbGxpbmdWaWV3XSxcbiAgICAgIG5hbWVzcGFjZSxcbiAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSBzY3JvbGxpbmdWaWV3cyBUaGUgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQuIE51bGwgdG8gdXNlIHRoZSBkZWZhdWx0IGVsZW1lbnRzIG9mIGRvY3VtZW50IGFuZCBib2R5LlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE9wdGlvbmFsIG5hbWVzcGFjZSB0byBncm91cCBzY3JvbGwgYW5pbWF0aW9ucyBsb2dpY2FsbHlcbiAgICogQHBhcmFtIHZlcnRpY2FsU2Nyb2xsaW5nIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYmUgcGVyZm9ybWVkIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAodHJ1ZSwgZGVmYXVsdCkgb3IgaG9yaXpvbnRhbCAoZmFsc2UpXG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsT2Zmc2V0IFRoZSBvZmZzZXQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHRvcCBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwvdW5kZWZpbmVkIHRvIHVzZSBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSBXaGV0aGVyIHRoaXMgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWxsL3VuZGVmaW5lZCBmb3IgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEVhc2luZ0xvZ2ljIEVhc2luZyBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBtYW5pcHVsYXRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlciB0aW1lLiBOdWxsL3VuZGVmaW5lZCBmb3IgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbER1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIGFuaW1hdGlvbiBzaG91bGQgbGFzdC5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lciBMaXN0ZW5lciB0byBiZSBjYWxsZWQgdG8gbm90aWZ5IG90aGVyIHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHRoZSBzY3JvbGwgYW5pbWF0aW9uIGhhcyBmaW5pc2hlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFkdmFuY2VkSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICBzY3JvbGxpbmdWaWV3cz86IFBhZ2VTY3JvbGxpbmdWaWV3c1tdLFxuICAgIG5hbWVzcGFjZT86IHN0cmluZyxcbiAgICB2ZXJ0aWNhbFNjcm9sbGluZz86IGJvb2xlYW4sXG4gICAgcGFnZVNjcm9sbE9mZnNldD86IG51bWJlcixcbiAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZT86IGJvb2xlYW4sXG4gICAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljPzogRWFzaW5nTG9naWMsXG4gICAgcGFnZVNjcm9sbER1cmF0aW9uPzogbnVtYmVyLFxuICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcj86IEV2ZW50RW1pdHRlcjxib29sZWFuPlxuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBzY3JvbGxpbmdWaWV3cyxcbiAgICAgIG5hbWVzcGFjZSxcbiAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nLFxuICAgICAgcGFnZVNjcm9sbE9mZnNldCxcbiAgICAgIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlLFxuICAgICAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljLFxuICAgICAgcGFnZVNjcm9sbER1cmF0aW9uLFxuICAgICAgcGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgY29uc3RydWN0b3IsIHJlcXVpcmVzIHRoZSBwcm9wZXJ0aWVzIGFzc3VtZWQgdG8gYmUgdGhlIGJhcmUgbWluaW11bS5cbiAgICogVXNlIHRoZSBmYWN0b3J5IG1ldGhvZHMgdG8gY3JlYXRlIGluc3RhbmNlczpcbiAgICogICAgICB7QGxpbmsgUGFnZVNjcm9sbEluc3RhbmNlI3NpbXBsZUluc3RhbmNlfVxuICAgKiAgICAgIHtAbGluayBQYWdlU2Nyb2xsSW5zdGFuY2UjbmV3SW5zdGFuY2V9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYW1lc3BhY2U6IHN0cmluZywgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTY3JvbGxQcm9wZXJ0eVZhbHVlKHNjcm9sbGluZ1ZpZXc6IGFueSk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsU2Nyb2xsaW5nKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsaW5nVmlldy5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gc2Nyb2xsaW5nVmlldy5zY3JvbGxUb3A7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCB0aGUgZXhhY3QgbG9jYXRpb24gb2YgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBFeHRyYWN0IHRoZSBzY3JvbGxUYXJnZXQgSFRNTEVsZW1lbnQgZnJvbSB0aGUgZ2l2ZW4gUGFnZVNjcm9sbFRhcmdldCBvYmplY3QuIFRoZSBsYXR0ZXIgb25lIG1heSBiZVxuICAgKiBhIHN0cmluZyBsaWtlIFwiI2hlYWRpbmcyXCIsIHRoZW4gdGhpcyBtZXRob2QgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBET00gZWxlbWVudCBmb3IgdGhhdCBpZC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBleHRyYWN0U2Nyb2xsVGFyZ2V0UG9zaXRpb24oKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGxldCBzY3JvbGxUYXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IGFueTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3Njcm9sbFRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNjcm9sbFRhcmdldEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCg8c3RyaW5nPnRoaXMuX3Njcm9sbFRhcmdldCkuc3Vic3RyKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9zY3JvbGxUYXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRhcmdldEVsZW1lbnQgPT09IG51bGwgfHwgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTY3JvbGwgdGFyZ2V0IG5vdCBmb3VuZFxuICAgICAgcmV0dXJuIHsgdG9wOiBOYU4sIGxlZnQ6IE5hTiB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0lubGluZVNjcm9sbGluZykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB7IHRvcDogc2Nyb2xsVGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AsIGxlZnQ6IHNjcm9sbFRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdCB9O1xuICAgICAgaWYgKHRoaXMuX2FkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gJiYgdGhpcy5zY3JvbGxpbmdWaWV3cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgYWNjdW11bGF0ZWRQYXJlbnRzUG9zID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgLy8gbm90IG5hbWVkIHdpbmRvdyB0byBtYWtlIHN1cmUgd2UncmUgbm90IGdldHRpbmcgdGhlIGdsb2JhbCB3aW5kb3cgdmFyaWFibGUgYnkgYWNjaWRlbnRcbiAgICAgICAgY29uc3QgdGhlV2luZG93ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICBsZXQgcGFyZW50Rm91bmQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTdGFydCBwYXJlbnQgaXMgdGhlIGltbWVkaWF0ZSBwYXJlbnRcbiAgICAgICAgLy8gbGV0IHBhcmVudCA9IHNjcm9sbFRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHBhcmVudDogYW55ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdXB3YXJkcyBhbGwgcGFyZW50c1xuICAgICAgICB3aGlsZSAoIXBhcmVudEZvdW5kICYmICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHBhcmVudCkpIHtcbiAgICAgICAgICBpZiAodGhlV2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRlZFBhcmVudHNQb3MudG9wICs9IHBhcmVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgICBhY2N1bXVsYXRlZFBhcmVudHNQb3MubGVmdCArPSBwYXJlbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTmV4dCBpdGVyYXRpb25cbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBwYXJlbnRGb3VuZCA9IHBhcmVudCA9PT0gdGhpcy5zY3JvbGxpbmdWaWV3c1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50Rm91bmQpIHtcbiAgICAgICAgICAvLyBPbmx5IHVzZSB0aGUgcmVzdWx0cyBpZiB3ZSBmb3VuZCB0aGUgcGFyZW50LCBvdGhlcndpc2Ugd2UgYWNjdW11bGF0ZWQgdG9vIG11Y2ggYW55d2F5XG4gICAgICAgICAgcG9zaXRpb24udG9wICs9IGFjY3VtdWxhdGVkUGFyZW50c1Bvcy50b3A7XG4gICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBhY2N1bXVsYXRlZFBhcmVudHNQb3MubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoUGFnZVNjcm9sbENvbmZpZy5fbG9nTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZmluZCBuZXN0ZWQgc2Nyb2xsaW5nIHRhcmdldHMgcGFyZW50IScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmV4dHJhY3RFbGVtZW50UG9zaXRpb24odGhpcy5kb2N1bWVudCwgc2Nyb2xsVGFyZ2V0RWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0b3Agb2Zmc2V0IG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxuICAgKiBUaGlzIGF1dG9tYXRpY2FsbHkgdGFrZXMgdGhlIG9mZnNldCBsb2NhdGlvbiBvZiB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lci9zY3JvbGxpbmcgdmlld1xuICAgKiBpbnRvIGFjY291bnQgKGZvciBuZXN0ZWQvaW5saW5lIHNjcm9sbGluZykuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0Q3VycmVudE9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJzY3JvbGxUb3BcIiBvciBcInNjcm9sbExlZnRcIiBwcm9wZXJ0eSBmb3IgYWxsIHNjcm9sbGluZ1ZpZXdzIHRvIHRoZSBwcm92aWRlZCB2YWx1ZVxuICAgKiBAcmV0dXJuIHRydWUgaWYgYXQgbGVhc3QgZm9yIG9uZSBTY3JvbGxUb3BTb3VyY2UgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIGNvdWxkIGJlIHNldCBhbmQgaXQga2VwdCB0aGUgbmV3IHZhbHVlLlxuICAgKiAgICAgICAgICBmYWxzZSBpZiBpdCBmYWlsZWQgZm9yIGFsbCBTY3JvbGxpbmdWaWV3cywgbWVhbmluZyB0aGF0IHdlIHNob3VsZCBzdG9wIHRoZSBhbmltYXRpb25cbiAgICogICAgICAgICAgKHByb2JhYmx5IGJlY2F1c2Ugd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgc2Nyb2xsaW5nIHJlZ2lvbilcbiAgICovXG4gIHB1YmxpYyBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKFBhZ2VTY3JvbGxDb25maWcuX2xvZ0xldmVsID49IDUpIHtcbiAgICAgIGNvbnNvbGUud2FybignU2Nyb2xsIFBvc2l0aW9uOiAnICsgcG9zaXRpb24pO1xuICAgIH1cbiAgICAvLyBTZXQgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB0byBhbGwgc2Nyb2xsaW5nVmlld3MgZWxlbWVudHNcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxpbmdWaWV3cy5yZWR1Y2UoKG9uZUFscmVhZHlXb3JrZWQ6IGFueSwgc2Nyb2xsaW5nVmlldzogYW55KSA9PiB7XG4gICAgICBjb25zdCBzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUgPSB0aGlzLmdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldyk7XG4gICAgICBpZiAoc2Nyb2xsaW5nVmlldyAmJiAhVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gTWF0aC5hYnMoc3RhcnRTY3JvbGxQcm9wZXJ0eVZhbHVlIC0gcG9zaXRpb24pO1xuXG4gICAgICAgIC8vIFRoZSBtb3ZlbWVudCB3ZSBuZWVkIHRvIHBlcmZvcm0gaXMgbGVzcyB0aGFuIDJweFxuICAgICAgICAvLyBUaGlzIHdlIGNvbnNpZGVyIGEgc21hbGwgbW92ZW1lbnQgd2hpY2ggc29tZSBicm93c2VyIG1heSBub3QgcGVyZm9ybSB3aGVuXG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBwcm9wZXJ0eVxuICAgICAgICAvLyBUaHVzIGluIHRoaXMgY2FzZXMgd2UgZG8gbm90IHN0b3AgdGhlIHNjcm9sbCBhbmltYXRpb24sIGFsdGhvdWdoIHNldHRpbmcgdGhlXG4gICAgICAgIC8vIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIFwiZmFpbHNcIlxuICAgICAgICBjb25zdCBpc1NtYWxsTW92ZW1lbnQgPSBzY3JvbGxEaXN0YW5jZSA8IFBhZ2VTY3JvbGxDb25maWcuX21pblNjcm9sbERpc3RhbmNlO1xuXG4gICAgICAgIGlmICghdGhpcy52ZXJ0aWNhbFNjcm9sbGluZykge1xuICAgICAgICAgIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBvZiBzZXR0aW5nIHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgd29ya2VkXG4gICAgICAgIC8vIFdlIGNvbnNpZGVyIHRoYXQgaXQgd29ya2VkIGlmIHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgaXMgY2xvc2VyIHRvIHRoZVxuICAgICAgICAvLyBkZXNpcmVkIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHRoYW4gYmVmb3JlIChpdCBtaWdodCBub3QgYmUgZXhhY3RseSB0aGUgdmFsdWUgd2VcbiAgICAgICAgLy8gc2V0IGR1ZSB0byBkcGkgb3Igcm91bmRpbmcgaXJyZWd1bGFyaXRpZXMpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1NtYWxsTW92ZW1lbnQgfHxcbiAgICAgICAgICBzY3JvbGxEaXN0YW5jZSA+IE1hdGguYWJzKHRoaXMuZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3KSAtIHBvc2l0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9uZUFscmVhZHlXb3JrZWQ7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZmlyaW5nIGEgYW5pbWF0aW9uIGZpbmlzaCBldmVudFxuICAgKiBAcGFyYW0gdmFsdWUgV2hldGhlciB0aGUgYW5pbWF0aW9uIGZpbmlzaGVkIGF0IHRoZSB0YXJnZXQgKHRydWUpIG9yIGdvdCBpbnRlcnJ1cHRlZCAoZmFsc2UpXG4gICAqL1xuICBwdWJsaWMgZmlyZUV2ZW50KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BhZ2VTY3JvbGxGaW5pc2gpIHtcbiAgICAgIHRoaXMuX3BhZ2VTY3JvbGxGaW5pc2guZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0aGUgaW50ZXJydXB0IGxpc3RlbmVycyB0byB0aGUgUGFnZVNjcm9sbEluc3RhbmNlIGJvZHkuIFRoZSBnaXZlbiBpbnRlcnJ1cHRSZXBvcnRlclxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiBhbnkgb2YgdGhlIGF0dGFjaGVkIGV2ZW50cyBpcyBmaXJlZC5cbiAgICpcbiAgICogUG9zc2libHkgYXR0YWNoZWQgaW50ZXJydXB0TGlzdGVuZXJzIGFyZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSB0aGUgYm9keSBiZWZvcmUgdGhlIG5ldyBvbmUgd2lsbCBiZSBhdHRhY2hlZC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBhdHRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoaW50ZXJydXB0UmVwb3J0ZXI6IEludGVycnVwdFJlcG9ydGVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKSB7XG4gICAgICAvLyBEZXRhY2ggcG9zc2libHkgZXhpc3RpbmcgbGlzdGVuZXJzIGZpcnN0XG4gICAgICB0aGlzLmRldGFjaEludGVycnVwdExpc3RlbmVycygpO1xuICAgIH1cbiAgICB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lciA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgaW50ZXJydXB0UmVwb3J0ZXIucmVwb3J0KGV2ZW50LCB0aGlzKTtcbiAgICB9O1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2ludGVycnVwdEV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2ludGVycnVwdExpc3RlbmVyKVxuICAgICk7XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYm9keSBhbmQgc3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cyB0aGF0IG1pZ2h0IGJlIHRyZWF0ZWQgYXMgXCJhbmltYXRpb25cbiAgICogaW50ZXJydXB0XCIgZXZlbnRzLlxuICAgKi9cbiAgcHVibGljIGRldGFjaEludGVycnVwdExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnJ1cHRFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT5cbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcilcbiAgICApO1xuICAgIHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gIH1cblxuICBnZXQgc2Nyb2xsVGFyZ2V0KCk6IFBhZ2VTY3JvbGxUYXJnZXQge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxUYXJnZXQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxTY3JvbGxpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsaW5nO1xuICB9XG5cbiAgcHVibGljIGdldCBzY3JvbGxpbmdWaWV3cygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGluZ1ZpZXdzO1xuICB9XG5cbiAgcHVibGljIHNldCBzdGFydFNjcm9sbFBvc2l0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXJ0U2Nyb2xsUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRTY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGFyZ2V0U2Nyb2xsUG9zaXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldFNjcm9sbFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhcmdldFNjcm9sbFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFNjcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCBkaXN0YW5jZVRvU2Nyb2xsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaXN0YW5jZVRvU2Nyb2xsID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpc3RhbmNlVG9TY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzdGFuY2VUb1Njcm9sbDtcbiAgfVxuXG4gIGdldCBleGVjdXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25EdXJhdGlvbjtcbiAgfVxuXG4gIHNldCBleGVjdXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uRHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNwZWVkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICB9XG5cbiAgcHVibGljIGdldCBlYXNpbmdMb2dpYygpOiBFYXNpbmdMb2dpYyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vhc2luZ0xvZ2ljO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcnJ1cHRpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnJ1cHRpYmxlO1xuICB9XG5cbiAgcHVibGljIHNldCBzdGFydFRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFydFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBlbmRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVuZFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGltZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3RpbWVyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRpbWVyKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVyO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBJbnRlcmZhY2UgYSBsaXN0ZW5lciBzaG91bGQgaW1wbGVtZW50IHRvIGJlIG5vdGlmaWVkIGFib3V0IHBvc3NpYmxlIGludGVycnVwdCBldmVudHNcbiAqIHRoYXQgaGFwcGVuZWQgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb24gd2hpbGUgYSBzY3JvbGwgYW5pbWF0aW9uIHRha2VzIHBsYWNlLlxuICpcbiAqIFRoZSBQYWdlU2Nyb2xsU2VydmljZSBwcm92aWRlcyBhbiBpbXBsZW1lbnRhdGlvbiB0byBhIFBhZ2VTY3JvbGxJbnN0YW5jZSB0byBiZSBub3RpZmllZFxuICogYWJvdXQgc2Nyb2xsIGFuaW1hdGlvbiBpbnRlcnJ1cHRzIGFuZCBzdG9wIHJlbGF0ZWQgYW5pbWF0aW9ucy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVycnVwdFJlcG9ydGVyIHtcbiAgcmVwb3J0OiAoZXZlbnQ6IEV2ZW50LCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSkgPT4gYW55O1xufVxuIl19