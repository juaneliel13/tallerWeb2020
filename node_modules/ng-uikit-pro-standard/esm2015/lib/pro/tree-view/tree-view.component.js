/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, } from '@angular/core';
import { SPACE, ENTER } from '../../free/utils/keyboard-navigation';
export class MdbTreeComponent {
    /**
     * @param {?} _cdRef
     */
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.checked = new EventEmitter();
        this.checkedKeys = new EventEmitter();
        this.nodesChanged = new EventEmitter();
        this.checkboxes = false;
        this.toggleOnTitleClick = false;
        this._expandAll = false;
        this.checkedValues = [];
        this.toggle = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandAll(value) {
        this._expandAll = value;
        this.toggleExpandAll();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toggleExpandAll();
        this._setInitialCheckedKeys();
    }
    /**
     * @return {?}
     */
    toggleExpandAll() {
        if (this._expandAll) {
            this.expandAllNodes();
        }
        else if (!this._expandAll) {
            this.closeAllNodes();
        }
    }
    /**
     * @return {?}
     */
    expandAllNodes() {
        for (const [index, node] of this.nodes.entries()) {
            /** @type {?} */
            const idx = index;
            this.toggle[idx] = true;
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                this._expandAllChildren(node, idx);
            }
        }
    }
    /**
     * @return {?}
     */
    closeAllNodes() {
        for (const [index, node] of this.nodes.entries()) {
            /** @type {?} */
            const idx = index;
            this.toggle[idx] = false;
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                this._closeAllChildren(node, idx);
            }
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    _expandAllChildren(node, idx) {
        for (const [childIndex, childNode] of node[this.childrenField].entries()) {
            /** @type {?} */
            const childIdx = idx + '_' + childIndex;
            this.toggle[childIdx] = true;
            if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
                this._expandAllChildren(childNode, childIdx);
            }
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    _closeAllChildren(node, idx) {
        for (const [childIndex, childNode] of node[this.childrenField].entries()) {
            /** @type {?} */
            const childIdx = idx + '_' + childIndex;
            this.toggle[childIdx] = false;
            if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
                this._closeAllChildren(childNode, childIdx);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setInitialCheckedKeys() {
        for (const [index, node] of this.nodes.entries()) {
            if (node[this.checkboxesField]) {
                /** @type {?} */
                const idx = index;
                this.checkedValues.push(idx);
                if (node[this.childrenField] && node[this.childrenField].length > 0) {
                    this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} childrenNode
     * @param {?} i
     * @return {?}
     */
    _hasInitialCheckedKeysChildren(childrenNode, i) {
        for (const [childrenIdx, node] of childrenNode.entries()) {
            /** @type {?} */
            const idx = childrenIdx + '_' + i;
            if (node[this.checkboxesField]) {
                this.checkedValues.push(idx);
            }
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
            }
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    toggleByNode(i) {
        for (const [index, node] of this.nodes.entries()) {
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                /** @type {?} */
                const idx = index;
                /** @type {?} */
                const toggleIdx = i;
                if (idx === toggleIdx) {
                    this.toggle[idx] = !this.toggle[idx];
                    this._cdRef.markForCheck();
                }
                else {
                    this._childrenToggleByNode(node, idx, toggleIdx);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} i
     * @param {?} toggleIdx
     * @return {?}
     */
    _childrenToggleByNode(node, i, toggleIdx) {
        for (const [childIndex, childNode] of node[this.childrenField].entries()) {
            /** @type {?} */
            const nodeHasChildren = childNode[this.childrenField] && childNode[this.childrenField].length > 0;
            if (nodeHasChildren) {
                /** @type {?} */
                const idx = i + '_' + childIndex;
                if (idx === toggleIdx) {
                    this.toggle[idx] = !this.toggle[idx];
                    this._cdRef.markForCheck();
                }
                else {
                    this._childrenToggleByNode(childNode, idx, toggleIdx);
                }
            }
            else {
                return;
            }
        }
    }
    /**
     * @param {?} e
     * @param {?} node
     * @param {?} i
     * @return {?}
     */
    onKeydownCheckbox(e, node, i) {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.checkNodes(node);
            this.updateNodesCheckedValues(node, i);
        }
    }
    /**
     * @param {?} e
     * @param {?} i
     * @return {?}
     */
    onKeydown(e, i) {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.toggle[i] = !this.toggle[i];
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    checkNodes(node) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            node[this.checkboxesField] = !node[this.checkboxesField];
            this.checked.emit(node);
            this.nodesChanged.emit(this.nodes);
        }), 0);
        /** @type {?} */
        const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
        if (nodeHasChildren) {
            this._checkChildNodes(node[this.childrenField], !node[this.checkboxesField]);
        }
        this._cdRef.markForCheck();
    }
    /**
     * @private
     * @param {?} children
     * @param {?} checked
     * @return {?}
     */
    _checkChildNodes(children, checked) {
        children.forEach((/**
         * @param {?} childNode
         * @return {?}
         */
        (childNode) => {
            if (childNode[this.checkboxesField] !== undefined) {
                childNode[this.checkboxesField] = checked;
                /** @type {?} */
                const nodeHasChildren = childNode[this.childrenField] && childNode[this.childrenField].length > 0;
                if (nodeHasChildren) {
                    this._checkChildNodes(childNode[this.childrenField], checked);
                }
            }
        }));
    }
    /**
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    updateNodesCheckedValues(node, idx) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (node[this.checkboxesField] && !this.checkedValues.includes(idx)) {
                this.checkedValues.push(idx);
            }
            else if (!node[this.checkboxesField] && this.checkedValues.includes(idx)) {
                /** @type {?} */
                const removeIndex = this.checkedValues.findIndex((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => e === idx));
                if (removeIndex !== -1) {
                    this.checkedValues.splice(removeIndex, 1);
                }
            }
            /** @type {?} */
            const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
            if (nodeHasChildren) {
                this._updateChildNodesCheckedValues(node[this.childrenField], idx);
            }
            this.checkedKeys.emit(this.checkedValues);
        }), 0);
    }
    /**
     * @private
     * @param {?} childrenNode
     * @param {?} childrenIdx
     * @return {?}
     */
    _updateChildNodesCheckedValues(childrenNode, childrenIdx) {
        for (const [index, node] of childrenNode.entries()) {
            /** @type {?} */
            const idx = childrenIdx + '_' + index;
            if (node[this.checkboxesField] && !this.checkedValues.includes(idx)) {
                this.checkedValues.push(idx);
            }
            else if (!node[this.checkboxesField] && this.checkedValues.includes(idx)) {
                /** @type {?} */
                const removeIndex = this.checkedValues.findIndex((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => e === idx));
                if (removeIndex !== -1) {
                    this.checkedValues.splice(removeIndex, 1);
                }
            }
            /** @type {?} */
            const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
            if (nodeHasChildren) {
                this._updateChildNodesCheckedValues(node[this.childrenField], idx);
            }
        }
    }
}
MdbTreeComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'mdb-tree',
                template: "<!-- child nodes -->\n<ng-template #tree let-nodeChildren let-idx=\"idx\">\n  <ul class=\"mdb-tree-list\">\n    <li *ngFor=\"let node of nodeChildren; let n = index\" class=\"mdb-tree-list-node\">\n      <div class=\"mdb-tree-container\">\n        <div *ngIf=\"node[childrenField] && node[childrenField].length > 0; else emptyIcon\">\n          <span class=\"mdb-tree-icon-container\">\n            <i\n              tabindex=\"1\"\n              aria-hidden=\"true\"\n              [ngClass]=\"\n                toggle[idx + '_' + n] ? 'mdb-tree-rotate-icon-open' : 'mdb-tree-rotate-icon-closed'\n              \"\n              (keydown)=\"onKeydown($event, idx + '_' + n)\"\n              (click)=\"toggle[idx + '_' + n] = !toggle[idx + '_' + n]\"\n              class=\"mdb-tree-indicator \"\n            ></i>\n          </span>\n        </div>\n        <ng-template #emptyIcon\n          ><span class=\"mdb-tree-icon-container\"\n            ><i class=\"mdb-tree-empty-icon\" style=\"display: block\" aria-hidden=\"true\"></i\n          ></span>\n        </ng-template>\n        <div\n          class=\"mdb-tree-checkbox-container\"\n          *ngIf=\"checkboxes && node[checkboxesField] !== undefined\"\n        >\n          <mdb-checkbox\n            class=\"checkbox-filled\"\n            [filledIn]=\"true\"\n            [tabIndex]=\"1\"\n            [attr.id]=\"node[textField]\"\n            (keydown)=\"onKeydownCheckbox($event, node, idx + '_' + n)\"\n            (click)=\"checkNodes(node); updateNodesCheckedValues(node, idx + '_' + n)\"\n            [checked]=\"node[checkboxesField]\"\n          ></mdb-checkbox>\n        </div>\n        <div *ngIf=\"checkboxes && node[checkboxesField] === undefined\">\n          <div class=\"mdb-tree-checkbox-null-container\"></div>\n        </div>\n\n        <div\n          *ngIf=\"toggleOnTitleClick\"\n          class=\"mdb-tree-text-field\"\n          [ngStyle]=\"{\n            cursor: node[childrenField] && node[childrenField].length > 0 ? 'pointer' : 'default'\n          }\"\n          (click)=\"toggle[idx + '_' + n] = !toggle[idx + '_' + n]\"\n        >\n          {{ node[textField] }}\n        </div>\n\n        <div *ngIf=\"!toggleOnTitleClick\" class=\"mdb-tree-text-field mdb-tree-text-ellipsis\">\n          {{ node[textField] }}\n        </div>\n      </div>\n      <div *ngIf=\"node[childrenField] && toggle[idx + '_' + n]\">\n        <ng-container\n          *ngTemplateOutlet=\"tree; context: { $implicit: node[childrenField], idx: idx + '_' + n }\"\n        ></ng-container>\n      </div>\n    </li>\n  </ul>\n</ng-template>\n<!-- first nodes -->\n<ul class=\"mdb-tree-list\">\n  <li *ngFor=\"let node of nodes; let i = index\" class=\"mdb-tree-list-node\">\n    <div class=\"mdb-tree-container\">\n      <div *ngIf=\"node[childrenField] && node[childrenField].length > 0; else emptyIcon\">\n        <span class=\"mdb-tree-icon-container\">\n          <i\n            tabindex=\"1\"\n            aria-hidden=\"true\"\n            [ngClass]=\"toggle[i] ? 'mdb-tree-rotate-icon-open' : 'mdb-tree-rotate-icon-closed'\"\n            (keydown)=\"onKeydown($event, i)\"\n            (click)=\"toggle[i] = !toggle[i]\"\n            class=\"mdb-tree-indicator\"\n          ></i>\n        </span>\n      </div>\n      <ng-template #emptyIcon\n        ><span class=\"mdb-tree-icon-container\"\n          ><i class=\"mdb-tree-empty-icon\" style=\"display: block\" aria-hidden=\"true\"></i\n        ></span>\n      </ng-template>\n      <div\n        class=\"mdb-tree-checkbox-container\"\n        *ngIf=\"checkboxes && node[checkboxesField] !== undefined\"\n      >\n        <mdb-checkbox\n          class=\"checkbox-filled\"\n          [checked]=\"node[checkboxesField]\"\n          [filledIn]=\"true\"\n          [tabIndex]=\"1\"\n          [attr.id]=\"node[textField]\"\n          (keydown)=\"onKeydownCheckbox($event, node, i)\"\n          (click)=\"checkNodes(node); updateNodesCheckedValues(node, i)\"\n        ></mdb-checkbox>\n      </div>\n      <div *ngIf=\"checkboxes && node[checkboxesField] === undefined\">\n        <div class=\"mdb-tree-checkbox-null-container\"></div>\n      </div>\n\n      <div\n        *ngIf=\"toggleOnTitleClick\"\n        class=\"mdb-tree-text-field\"\n        [ngStyle]=\"{\n          cursor: node[childrenField] && node[childrenField].length > 0 ? 'pointer' : 'default'\n        }\"\n        (click)=\"toggle[i] = !toggle[i]\"\n      >\n        {{ node[textField] }}\n      </div>\n\n      <div *ngIf=\"!toggleOnTitleClick\" class=\"mdb-tree-text-field mdb-tree-text-ellipsis\">\n        {{ node[textField] }}\n      </div>\n    </div>\n    <div *ngIf=\"node[childrenField] && toggle[i]\">\n      <ng-container\n        *ngTemplateOutlet=\"tree; context: { $implicit: node[childrenField], idx: i }\"\n      ></ng-container>\n    </div>\n  </li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mdb-tree-list{list-style-type:none;margin:0;padding:0}.mdb-tree-list-node{list-style-type:none;margin:.8rem .8rem .8rem .95rem}.mdb-tree-container{display:flex;min-width:230px}.mdb-tree-icon-container{display:inline-block;width:2rem;height:auto}.mdb-tree-empty-icon{cursor:default}.mdb-tree-text-field{margin-top:.15rem;max-width:90%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdb-tree-checkbox-null-container{min-width:2.2rem}.mdb-tree-indicator{position:relative;right:0;-webkit-transform-origin:50% 79%;transform-origin:50% 79%;display:inline-block;margin-right:0;margin-top:.025rem;cursor:pointer;font-size:1.3rem}.mdb-tree-indicator::after{content:'';display:block;border-style:solid;padding:5px;margin-top:.15rem;border-width:0 3px 3px 0;font-size:1.3rem;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.mdb-tree-indicator:focus{color:#4285f4;outline:0}.mdb-tree-rotate-icon-open{-webkit-transform:rotate(0);transform:rotate(0)}.mdb-tree-rotate-icon-closed{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.mdb-tree-checkbox-container{margin-top:.25rem}.mdb-tree-checkbox-container mdb-checkbox.checkbox-filled [type=checkbox][class*=filled-in]:checked+label:after{border-color:#4285f4;background-color:#4285f4}"]
            }] }
];
/** @nocollapse */
MdbTreeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MdbTreeComponent.propDecorators = {
    checked: [{ type: HostBinding, args: ['class.mdb-tree',] }, { type: Output }],
    checkedKeys: [{ type: Output }],
    nodesChanged: [{ type: Output }],
    nodes: [{ type: Input }],
    textField: [{ type: Input }],
    childrenField: [{ type: Input }],
    checkboxesField: [{ type: Input }],
    expandAll: [{ type: Input }],
    checkboxes: [{ type: Input }],
    toggleOnTitleClick: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbTreeComponent.prototype.checked;
    /** @type {?} */
    MdbTreeComponent.prototype.checkedKeys;
    /** @type {?} */
    MdbTreeComponent.prototype.nodesChanged;
    /** @type {?} */
    MdbTreeComponent.prototype.nodes;
    /** @type {?} */
    MdbTreeComponent.prototype.textField;
    /** @type {?} */
    MdbTreeComponent.prototype.childrenField;
    /** @type {?} */
    MdbTreeComponent.prototype.checkboxesField;
    /** @type {?} */
    MdbTreeComponent.prototype.checkboxes;
    /** @type {?} */
    MdbTreeComponent.prototype.toggleOnTitleClick;
    /**
     * @type {?}
     * @private
     */
    MdbTreeComponent.prototype._expandAll;
    /** @type {?} */
    MdbTreeComponent.prototype.checkedValues;
    /** @type {?} */
    MdbTreeComponent.prototype.toggle;
    /**
     * @type {?}
     * @private
     */
    MdbTreeComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdHJlZS12aWV3L3RyZWUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFTcEUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXFCM0IsWUFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFsQjdDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTbkMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQVEsRUFBRSxDQUFDO0lBRStCLENBQUM7Ozs7O0lBWGpELElBQWEsU0FBUyxDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFVRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFB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OztJQUVwQyxzQ0FBMkI7O0lBQzNCLHlDQUE2Qjs7SUFDN0Isa0NBQWlCOzs7OztJQUVMLGtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU1BBQ0UsIEVOVEVSIH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21kYi10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWRiLXRyZWUnKVxuICBAT3V0cHV0KClcbiAgY2hlY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoZWNrZWRLZXlzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbm9kZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBub2RlczogYW55O1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgY2hpbGRyZW5GaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSBjaGVja2JveGVzRmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgc2V0IGV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZEFsbCA9IHZhbHVlO1xuICAgIHRoaXMudG9nZ2xlRXhwYW5kQWxsKCk7XG4gIH1cbiAgQElucHV0KCkgY2hlY2tib3hlcyA9IGZhbHNlO1xuICBASW5wdXQoKSB0b2dnbGVPblRpdGxlQ2xpY2sgPSBmYWxzZTtcblxuICBwcml2YXRlIF9leHBhbmRBbGwgPSBmYWxzZTtcbiAgY2hlY2tlZFZhbHVlczogc3RyaW5nW10gPSBbXTtcbiAgdG9nZ2xlOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b2dnbGVFeHBhbmRBbGwoKTtcbiAgICB0aGlzLl9zZXRJbml0aWFsQ2hlY2tlZEtleXMoKTtcbiAgfVxuXG4gIHRvZ2dsZUV4cGFuZEFsbCgpIHtcbiAgICBpZiAodGhpcy5fZXhwYW5kQWxsKSB7XG4gICAgICB0aGlzLmV4cGFuZEFsbE5vZGVzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZXhwYW5kQWxsKSB7XG4gICAgICB0aGlzLmNsb3NlQWxsTm9kZXMoKTtcbiAgICB9XG4gIH1cblxuICBleHBhbmRBbGxOb2RlcygpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgdGhpcy5ub2Rlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGlkeCA9IGluZGV4O1xuICAgICAgdGhpcy50b2dnbGVbaWR4XSA9IHRydWU7XG4gICAgICBpZiAobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZEFsbENoaWxkcmVuKG5vZGUsIGlkeCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGxOb2RlcygpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgdGhpcy5ub2Rlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGlkeCA9IGluZGV4O1xuICAgICAgdGhpcy50b2dnbGVbaWR4XSA9IGZhbHNlO1xuICAgICAgaWYgKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9jbG9zZUFsbENoaWxkcmVuKG5vZGUsIGlkeCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXhwYW5kQWxsQ2hpbGRyZW4obm9kZTogYW55LCBpZHg6IHN0cmluZykge1xuICAgIGZvciAoY29uc3QgW2NoaWxkSW5kZXgsIGNoaWxkTm9kZV0gb2Ygbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgY2hpbGRJZHggPSBpZHggKyAnXycgKyBjaGlsZEluZGV4O1xuICAgICAgdGhpcy50b2dnbGVbY2hpbGRJZHhdID0gdHJ1ZTtcbiAgICAgIGlmIChjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZEFsbENoaWxkcmVuKGNoaWxkTm9kZSwgY2hpbGRJZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlQWxsQ2hpbGRyZW4obm9kZTogYW55LCBpZHg6IHN0cmluZykge1xuICAgIGZvciAoY29uc3QgW2NoaWxkSW5kZXgsIGNoaWxkTm9kZV0gb2Ygbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgY2hpbGRJZHggPSBpZHggKyAnXycgKyBjaGlsZEluZGV4O1xuICAgICAgdGhpcy50b2dnbGVbY2hpbGRJZHhdID0gZmFsc2U7XG4gICAgICBpZiAoY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9jbG9zZUFsbENoaWxkcmVuKGNoaWxkTm9kZSwgY2hpbGRJZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldEluaXRpYWxDaGVja2VkS2V5cygpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgdGhpcy5ub2Rlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmIChub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSkge1xuICAgICAgICBjb25zdCBpZHggPSBpbmRleDtcbiAgICAgICAgdGhpcy5jaGVja2VkVmFsdWVzLnB1c2goaWR4KTtcbiAgICAgICAgaWYgKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX2hhc0luaXRpYWxDaGVja2VkS2V5c0NoaWxkcmVuKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhc0luaXRpYWxDaGVja2VkS2V5c0NoaWxkcmVuKGNoaWxkcmVuTm9kZTogYW55LCBpOiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtjaGlsZHJlbklkeCwgbm9kZV0gb2YgY2hpbGRyZW5Ob2RlLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgaWR4ID0gY2hpbGRyZW5JZHggKyAnXycgKyBpO1xuXG4gICAgICBpZiAobm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0pIHtcbiAgICAgICAgdGhpcy5jaGVja2VkVmFsdWVzLnB1c2goaWR4KTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5faGFzSW5pdGlhbENoZWNrZWRLZXlzQ2hpbGRyZW4obm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLCBpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJ5Tm9kZShpOiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgdGhpcy5ub2Rlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmIChub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaWR4ID0gaW5kZXg7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUlkeCA9IGk7XG4gICAgICAgIGlmIChpZHggPT09IHRvZ2dsZUlkeCkge1xuICAgICAgICAgIHRoaXMudG9nZ2xlW2lkeF0gPSAhdGhpcy50b2dnbGVbaWR4XTtcbiAgICAgICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jaGlsZHJlblRvZ2dsZUJ5Tm9kZShub2RlLCBpZHgsIHRvZ2dsZUlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGlsZHJlblRvZ2dsZUJ5Tm9kZShub2RlOiBhbnksIGk6IHN0cmluZywgdG9nZ2xlSWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtjaGlsZEluZGV4LCBjaGlsZE5vZGVdIG9mIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IG5vZGVIYXNDaGlsZHJlbiA9XG4gICAgICAgIGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGkgKyAnXycgKyBjaGlsZEluZGV4O1xuICAgICAgICBpZiAoaWR4ID09PSB0b2dnbGVJZHgpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVtpZHhdID0gIXRoaXMudG9nZ2xlW2lkeF07XG4gICAgICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY2hpbGRyZW5Ub2dnbGVCeU5vZGUoY2hpbGROb2RlLCBpZHgsIHRvZ2dsZUlkeCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbktleWRvd25DaGVja2JveChlOiBLZXlib2FyZEV2ZW50LCBub2RlOiBhbnksIGk6IHN0cmluZykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNoZWNrTm9kZXMobm9kZSk7XG4gICAgICB0aGlzLnVwZGF0ZU5vZGVzQ2hlY2tlZFZhbHVlcyhub2RlLCBpKTtcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24oZTogS2V5Ym9hcmRFdmVudCwgaTogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgIGlmIChlLmtleUNvZGUgPT09IFNQQUNFIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrTm9kZXMobm9kZTogYW55KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSA9ICFub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXTtcbiAgICAgIHRoaXMuY2hlY2tlZC5lbWl0KG5vZGUpO1xuICAgICAgdGhpcy5ub2Rlc0NoYW5nZWQuZW1pdCh0aGlzLm5vZGVzKTtcbiAgICB9LCAwKTtcbiAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPSBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgaWYgKG5vZGVIYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy5fY2hlY2tDaGlsZE5vZGVzKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgIW5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdKTtcbiAgICB9XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0NoaWxkTm9kZXMoY2hpbGRyZW46IGFueSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZTogYW55KSA9PiB7XG4gICAgICBpZiAoY2hpbGROb2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNoaWxkTm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gPSBjaGVja2VkO1xuICAgICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPVxuICAgICAgICAgIGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmIChub2RlSGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLl9jaGVja0NoaWxkTm9kZXMoY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0sIGNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVOb2Rlc0NoZWNrZWRWYWx1ZXMobm9kZTogYW55LCBpZHg6IHN0cmluZykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKG5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdICYmICF0aGlzLmNoZWNrZWRWYWx1ZXMuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICB0aGlzLmNoZWNrZWRWYWx1ZXMucHVzaChpZHgpO1xuICAgICAgfSBlbHNlIGlmICghbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gJiYgdGhpcy5jaGVja2VkVmFsdWVzLmluY2x1ZGVzKGlkeCkpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSB0aGlzLmNoZWNrZWRWYWx1ZXMuZmluZEluZGV4KGUgPT4gZSA9PT0gaWR4KTtcblxuICAgICAgICBpZiAocmVtb3ZlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5jaGVja2VkVmFsdWVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vZGVIYXNDaGlsZHJlbiA9IG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMDtcbiAgICAgIGlmIChub2RlSGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hpbGROb2Rlc0NoZWNrZWRWYWx1ZXMobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLCBpZHgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja2VkS2V5cy5lbWl0KHRoaXMuY2hlY2tlZFZhbHVlcyk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDaGlsZE5vZGVzQ2hlY2tlZFZhbHVlcyhjaGlsZHJlbk5vZGU6IGFueSwgY2hpbGRyZW5JZHg6IHN0cmluZykge1xuICAgIGZvciAoY29uc3QgW2luZGV4LCBub2RlXSBvZiBjaGlsZHJlbk5vZGUuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBpZHggPSBjaGlsZHJlbklkeCArICdfJyArIGluZGV4O1xuXG4gICAgICBpZiAobm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gJiYgIXRoaXMuY2hlY2tlZFZhbHVlcy5pbmNsdWRlcyhpZHgpKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5wdXNoKGlkeCk7XG4gICAgICB9IGVsc2UgaWYgKCFub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSAmJiB0aGlzLmNoZWNrZWRWYWx1ZXMuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IHRoaXMuY2hlY2tlZFZhbHVlcy5maW5kSW5kZXgoZSA9PiBlID09PSBpZHgpO1xuICAgICAgICBpZiAocmVtb3ZlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5jaGVja2VkVmFsdWVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vZGVIYXNDaGlsZHJlbiA9IG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMDtcbiAgICAgIGlmIChub2RlSGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hpbGROb2Rlc0NoZWNrZWRWYWx1ZXMobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLCBpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19