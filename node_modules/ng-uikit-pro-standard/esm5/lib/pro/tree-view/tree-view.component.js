/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, } from '@angular/core';
import { SPACE, ENTER } from '../../free/utils/keyboard-navigation';
var MdbTreeComponent = /** @class */ (function () {
    function MdbTreeComponent(_cdRef) {
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
    Object.defineProperty(MdbTreeComponent.prototype, "expandAll", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandAll = value;
            this.toggleExpandAll();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggleExpandAll();
        this._setInitialCheckedKeys();
    };
    /**
     * @return {?}
     */
    MdbTreeComponent.prototype.toggleExpandAll = /**
     * @return {?}
     */
    function () {
        if (this._expandAll) {
            this.expandAllNodes();
        }
        else if (!this._expandAll) {
            this.closeAllNodes();
        }
    };
    /**
     * @return {?}
     */
    MdbTreeComponent.prototype.expandAllNodes = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.nodes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), index = _d[0], node = _d[1];
                /** @type {?} */
                var idx = index;
                this.toggle[idx] = true;
                if (node[this.childrenField] && node[this.childrenField].length > 0) {
                    this._expandAllChildren(node, idx);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    MdbTreeComponent.prototype.closeAllNodes = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.nodes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), index = _d[0], node = _d[1];
                /** @type {?} */
                var idx = index;
                this.toggle[idx] = false;
                if (node[this.childrenField] && node[this.childrenField].length > 0) {
                    this._closeAllChildren(node, idx);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    MdbTreeComponent.prototype._expandAllChildren = /**
     * @private
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    function (node, idx) {
        var e_3, _a;
        try {
            for (var _b = tslib_1.__values(node[this.childrenField].entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), childIndex = _d[0], childNode = _d[1];
                /** @type {?} */
                var childIdx = idx + '_' + childIndex;
                this.toggle[childIdx] = true;
                if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
                    this._expandAllChildren(childNode, childIdx);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    MdbTreeComponent.prototype._closeAllChildren = /**
     * @private
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    function (node, idx) {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(node[this.childrenField].entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), childIndex = _d[0], childNode = _d[1];
                /** @type {?} */
                var childIdx = idx + '_' + childIndex;
                this.toggle[childIdx] = false;
                if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
                    this._closeAllChildren(childNode, childIdx);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbTreeComponent.prototype._setInitialCheckedKeys = /**
     * @private
     * @return {?}
     */
    function () {
        var e_5, _a;
        try {
            for (var _b = tslib_1.__values(this.nodes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), index = _d[0], node = _d[1];
                if (node[this.checkboxesField]) {
                    /** @type {?} */
                    var idx = index;
                    this.checkedValues.push(idx);
                    if (node[this.childrenField] && node[this.childrenField].length > 0) {
                        this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    /**
     * @private
     * @param {?} childrenNode
     * @param {?} i
     * @return {?}
     */
    MdbTreeComponent.prototype._hasInitialCheckedKeysChildren = /**
     * @private
     * @param {?} childrenNode
     * @param {?} i
     * @return {?}
     */
    function (childrenNode, i) {
        var e_6, _a;
        try {
            for (var _b = tslib_1.__values(childrenNode.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), childrenIdx = _d[0], node = _d[1];
                /** @type {?} */
                var idx = childrenIdx + '_' + i;
                if (node[this.checkboxesField]) {
                    this.checkedValues.push(idx);
                }
                if (node[this.childrenField] && node[this.childrenField].length > 0) {
                    this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    MdbTreeComponent.prototype.toggleByNode = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var e_7, _a;
        try {
            for (var _b = tslib_1.__values(this.nodes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), index = _d[0], node = _d[1];
                if (node[this.childrenField] && node[this.childrenField].length > 0) {
                    /** @type {?} */
                    var idx = index;
                    /** @type {?} */
                    var toggleIdx = i;
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
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} i
     * @param {?} toggleIdx
     * @return {?}
     */
    MdbTreeComponent.prototype._childrenToggleByNode = /**
     * @private
     * @param {?} node
     * @param {?} i
     * @param {?} toggleIdx
     * @return {?}
     */
    function (node, i, toggleIdx) {
        var e_8, _a;
        try {
            for (var _b = tslib_1.__values(node[this.childrenField].entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), childIndex = _d[0], childNode = _d[1];
                /** @type {?} */
                var nodeHasChildren = childNode[this.childrenField] && childNode[this.childrenField].length > 0;
                if (nodeHasChildren) {
                    /** @type {?} */
                    var idx = i + '_' + childIndex;
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
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
    };
    /**
     * @param {?} e
     * @param {?} node
     * @param {?} i
     * @return {?}
     */
    MdbTreeComponent.prototype.onKeydownCheckbox = /**
     * @param {?} e
     * @param {?} node
     * @param {?} i
     * @return {?}
     */
    function (e, node, i) {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.checkNodes(node);
            this.updateNodesCheckedValues(node, i);
        }
    };
    /**
     * @param {?} e
     * @param {?} i
     * @return {?}
     */
    MdbTreeComponent.prototype.onKeydown = /**
     * @param {?} e
     * @param {?} i
     * @return {?}
     */
    function (e, i) {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.toggle[i] = !this.toggle[i];
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    MdbTreeComponent.prototype.checkNodes = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            node[_this.checkboxesField] = !node[_this.checkboxesField];
            _this.checked.emit(node);
            _this.nodesChanged.emit(_this.nodes);
        }), 0);
        /** @type {?} */
        var nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
        if (nodeHasChildren) {
            this._checkChildNodes(node[this.childrenField], !node[this.checkboxesField]);
        }
        this._cdRef.markForCheck();
    };
    /**
     * @private
     * @param {?} children
     * @param {?} checked
     * @return {?}
     */
    MdbTreeComponent.prototype._checkChildNodes = /**
     * @private
     * @param {?} children
     * @param {?} checked
     * @return {?}
     */
    function (children, checked) {
        var _this = this;
        children.forEach((/**
         * @param {?} childNode
         * @return {?}
         */
        function (childNode) {
            if (childNode[_this.checkboxesField] !== undefined) {
                childNode[_this.checkboxesField] = checked;
                /** @type {?} */
                var nodeHasChildren = childNode[_this.childrenField] && childNode[_this.childrenField].length > 0;
                if (nodeHasChildren) {
                    _this._checkChildNodes(childNode[_this.childrenField], checked);
                }
            }
        }));
    };
    /**
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    MdbTreeComponent.prototype.updateNodesCheckedValues = /**
     * @param {?} node
     * @param {?} idx
     * @return {?}
     */
    function (node, idx) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (node[_this.checkboxesField] && !_this.checkedValues.includes(idx)) {
                _this.checkedValues.push(idx);
            }
            else if (!node[_this.checkboxesField] && _this.checkedValues.includes(idx)) {
                /** @type {?} */
                var removeIndex = _this.checkedValues.findIndex((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e === idx; }));
                if (removeIndex !== -1) {
                    _this.checkedValues.splice(removeIndex, 1);
                }
            }
            /** @type {?} */
            var nodeHasChildren = node[_this.childrenField] && node[_this.childrenField].length > 0;
            if (nodeHasChildren) {
                _this._updateChildNodesCheckedValues(node[_this.childrenField], idx);
            }
            _this.checkedKeys.emit(_this.checkedValues);
        }), 0);
    };
    /**
     * @private
     * @param {?} childrenNode
     * @param {?} childrenIdx
     * @return {?}
     */
    MdbTreeComponent.prototype._updateChildNodesCheckedValues = /**
     * @private
     * @param {?} childrenNode
     * @param {?} childrenIdx
     * @return {?}
     */
    function (childrenNode, childrenIdx) {
        var e_9, _a;
        var _loop_1 = function (index, node) {
            /** @type {?} */
            var idx = childrenIdx + '_' + index;
            if (node[this_1.checkboxesField] && !this_1.checkedValues.includes(idx)) {
                this_1.checkedValues.push(idx);
            }
            else if (!node[this_1.checkboxesField] && this_1.checkedValues.includes(idx)) {
                /** @type {?} */
                var removeIndex = this_1.checkedValues.findIndex((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e === idx; }));
                if (removeIndex !== -1) {
                    this_1.checkedValues.splice(removeIndex, 1);
                }
            }
            /** @type {?} */
            var nodeHasChildren = node[this_1.childrenField] && node[this_1.childrenField].length > 0;
            if (nodeHasChildren) {
                this_1._updateChildNodesCheckedValues(node[this_1.childrenField], idx);
            }
        };
        var this_1 = this;
        try {
            for (var _b = tslib_1.__values(childrenNode.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), index = _d[0], node = _d[1];
                _loop_1(index, node);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
    };
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
    MdbTreeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return MdbTreeComponent;
}());
export { MdbTreeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdHJlZS12aWV3L3RyZWUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFO0lBNkJFLDBCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQWxCN0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVNuQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUU1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFFK0IsQ0FBQztJQVhqRCxzQkFBYSx1Q0FBUzs7Ozs7UUFBdEIsVUFBdUIsS0FBYztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7SUFVRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLElBQUks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QUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNwRTs7OztZQWRILEtBQTRCLElBQUEsS0FBQSxpQkFBQSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUE7Z0JBQXZDLElBQUEsZ0NBQWEsRUFBWixhQUFLLEVBQUUsWUFBSTt3QkFBWCxLQUFLLEVBQUUsSUFBSTthQWV0Qjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Z0JBN05GLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHd3SkFBeUM7b0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVpDLGlCQUFpQjs7OzBCQWNoQixXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLE1BQU07OEJBRU4sTUFBTTsrQkFDTixNQUFNO3dCQUNOLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFJTCxLQUFLO3FDQUNMLEtBQUs7O0lBdU1SLHVCQUFDO0NBQUEsQUE5TkQsSUE4TkM7U0F0TlksZ0JBQWdCOzs7SUFDM0IsbUNBRTZCOztJQUM3Qix1Q0FBMkM7O0lBQzNDLHdDQUE0Qzs7SUFDNUMsaUNBQW9COztJQUNwQixxQ0FBMkI7O0lBQzNCLHlDQUErQjs7SUFDL0IsMkNBQWlDOztJQUtqQyxzQ0FBNEI7O0lBQzVCLDhDQUFvQzs7Ozs7SUFFcEMsc0NBQTJCOztJQUMzQix5Q0FBNkI7O0lBQzdCLGtDQUFpQjs7Ozs7SUFFTCxrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNQQUNFLCBFTlRFUiB9IGZyb20gJy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtZGItdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1kYi10cmVlJylcbiAgQE91dHB1dCgpXG4gIGNoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGVja2VkS2V5cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG5vZGVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbm9kZXM6IGFueTtcbiAgQElucHV0KCkgdGV4dEZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoaWxkcmVuRmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgY2hlY2tib3hlc0ZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNldCBleHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHBhbmRBbGwgPSB2YWx1ZTtcbiAgICB0aGlzLnRvZ2dsZUV4cGFuZEFsbCgpO1xuICB9XG4gIEBJbnB1dCgpIGNoZWNrYm94ZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9nZ2xlT25UaXRsZUNsaWNrID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfZXhwYW5kQWxsID0gZmFsc2U7XG4gIGNoZWNrZWRWYWx1ZXM6IHN0cmluZ1tdID0gW107XG4gIHRvZ2dsZTogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudG9nZ2xlRXhwYW5kQWxsKCk7XG4gICAgdGhpcy5fc2V0SW5pdGlhbENoZWNrZWRLZXlzKCk7XG4gIH1cblxuICB0b2dnbGVFeHBhbmRBbGwoKSB7XG4gICAgaWYgKHRoaXMuX2V4cGFuZEFsbCkge1xuICAgICAgdGhpcy5leHBhbmRBbGxOb2RlcygpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2V4cGFuZEFsbCkge1xuICAgICAgdGhpcy5jbG9zZUFsbE5vZGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZXhwYW5kQWxsTm9kZXMoKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBpZHggPSBpbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2lkeF0gPSB0cnVlO1xuICAgICAgaWYgKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9leHBhbmRBbGxDaGlsZHJlbihub2RlLCBpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsTm9kZXMoKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBpZHggPSBpbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2lkeF0gPSBmYWxzZTtcbiAgICAgIGlmIChub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VBbGxDaGlsZHJlbihub2RlLCBpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2V4cGFuZEFsbENoaWxkcmVuKG5vZGU6IGFueSwgaWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtjaGlsZEluZGV4LCBjaGlsZE5vZGVdIG9mIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGNoaWxkSWR4ID0gaWR4ICsgJ18nICsgY2hpbGRJbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2NoaWxkSWR4XSA9IHRydWU7XG4gICAgICBpZiAoY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9leHBhbmRBbGxDaGlsZHJlbihjaGlsZE5vZGUsIGNoaWxkSWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZUFsbENoaWxkcmVuKG5vZGU6IGFueSwgaWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtjaGlsZEluZGV4LCBjaGlsZE5vZGVdIG9mIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGNoaWxkSWR4ID0gaWR4ICsgJ18nICsgY2hpbGRJbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2NoaWxkSWR4XSA9IGZhbHNlO1xuICAgICAgaWYgKGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VBbGxDaGlsZHJlbihjaGlsZE5vZGUsIGNoaWxkSWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbml0aWFsQ2hlY2tlZEtleXMoKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBpZiAobm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0pIHtcbiAgICAgICAgY29uc3QgaWR4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5wdXNoKGlkeCk7XG4gICAgICAgIGlmIChub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9oYXNJbml0aWFsQ2hlY2tlZEtleXNDaGlsZHJlbihub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0sIGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYXNJbml0aWFsQ2hlY2tlZEtleXNDaGlsZHJlbihjaGlsZHJlbk5vZGU6IGFueSwgaTogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBbY2hpbGRyZW5JZHgsIG5vZGVdIG9mIGNoaWxkcmVuTm9kZS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGlkeCA9IGNoaWxkcmVuSWR4ICsgJ18nICsgaTtcblxuICAgICAgaWYgKG5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5wdXNoKGlkeCk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2hhc0luaXRpYWxDaGVja2VkS2V5c0NoaWxkcmVuKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVCeU5vZGUoaTogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBpZiAobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGluZGV4O1xuICAgICAgICBjb25zdCB0b2dnbGVJZHggPSBpO1xuICAgICAgICBpZiAoaWR4ID09PSB0b2dnbGVJZHgpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVtpZHhdID0gIXRoaXMudG9nZ2xlW2lkeF07XG4gICAgICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY2hpbGRyZW5Ub2dnbGVCeU5vZGUobm9kZSwgaWR4LCB0b2dnbGVJZHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2hpbGRyZW5Ub2dnbGVCeU5vZGUobm9kZTogYW55LCBpOiBzdHJpbmcsIHRvZ2dsZUlkeDogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBbY2hpbGRJbmRleCwgY2hpbGROb2RlXSBvZiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0uZW50cmllcygpKSB7XG4gICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPVxuICAgICAgICBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwO1xuICAgICAgaWYgKG5vZGVIYXNDaGlsZHJlbikge1xuICAgICAgICBjb25zdCBpZHggPSBpICsgJ18nICsgY2hpbGRJbmRleDtcbiAgICAgICAgaWYgKGlkeCA9PT0gdG9nZ2xlSWR4KSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVbaWR4XSA9ICF0aGlzLnRvZ2dsZVtpZHhdO1xuICAgICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NoaWxkcmVuVG9nZ2xlQnlOb2RlKGNoaWxkTm9kZSwgaWR4LCB0b2dnbGVJZHgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duQ2hlY2tib3goZTogS2V5Ym9hcmRFdmVudCwgbm9kZTogYW55LCBpOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gU1BBQ0UgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jaGVja05vZGVzKG5vZGUpO1xuICAgICAgdGhpcy51cGRhdGVOb2Rlc0NoZWNrZWRWYWx1ZXMobm9kZSwgaSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQsIGk6IHN0cmluZykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcbiAgICB9XG4gIH1cblxuICBjaGVja05vZGVzKG5vZGU6IGFueSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gPSAhbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF07XG4gICAgICB0aGlzLmNoZWNrZWQuZW1pdChub2RlKTtcbiAgICAgIHRoaXMubm9kZXNDaGFuZ2VkLmVtaXQodGhpcy5ub2Rlcyk7XG4gICAgfSwgMCk7XG4gICAgY29uc3Qgbm9kZUhhc0NoaWxkcmVuID0gbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwO1xuICAgIGlmIChub2RlSGFzQ2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX2NoZWNrQ2hpbGROb2Rlcyhub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0sICFub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSk7XG4gICAgfVxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tDaGlsZE5vZGVzKGNoaWxkcmVuOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGU6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkTm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGlsZE5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdID0gY2hlY2tlZDtcbiAgICAgICAgY29uc3Qgbm9kZUhhc0NoaWxkcmVuID1cbiAgICAgICAgICBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5fY2hlY2tDaGlsZE5vZGVzKGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLCBjaGVja2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTm9kZXNDaGVja2VkVmFsdWVzKG5vZGU6IGFueSwgaWR4OiBzdHJpbmcpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSAmJiAhdGhpcy5jaGVja2VkVmFsdWVzLmluY2x1ZGVzKGlkeCkpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkVmFsdWVzLnB1c2goaWR4KTtcbiAgICAgIH0gZWxzZSBpZiAoIW5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdICYmIHRoaXMuY2hlY2tlZFZhbHVlcy5pbmNsdWRlcyhpZHgpKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gdGhpcy5jaGVja2VkVmFsdWVzLmZpbmRJbmRleChlID0+IGUgPT09IGlkeCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPSBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoaWxkTm9kZXNDaGVja2VkVmFsdWVzKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tlZEtleXMuZW1pdCh0aGlzLmNoZWNrZWRWYWx1ZXMpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2hpbGROb2Rlc0NoZWNrZWRWYWx1ZXMoY2hpbGRyZW5Ob2RlOiBhbnksIGNoaWxkcmVuSWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgY2hpbGRyZW5Ob2RlLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgaWR4ID0gY2hpbGRyZW5JZHggKyAnXycgKyBpbmRleDtcblxuICAgICAgaWYgKG5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdICYmICF0aGlzLmNoZWNrZWRWYWx1ZXMuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICB0aGlzLmNoZWNrZWRWYWx1ZXMucHVzaChpZHgpO1xuICAgICAgfSBlbHNlIGlmICghbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gJiYgdGhpcy5jaGVja2VkVmFsdWVzLmluY2x1ZGVzKGlkeCkpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSB0aGlzLmNoZWNrZWRWYWx1ZXMuZmluZEluZGV4KGUgPT4gZSA9PT0gaWR4KTtcbiAgICAgICAgaWYgKHJlbW92ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPSBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoaWxkTm9kZXNDaGVja2VkVmFsdWVzKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==