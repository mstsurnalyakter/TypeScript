var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parents = /** @class */ (function () {
    function Parents(childrenName, childrenNumber) {
        this.childrenName = childrenName,
            this.childrenNumber = childrenNumber;
    }
    return Parents;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children(childrenName, childrenNumber, siblingNumber) {
        var _this = this;
        _this = _super.call(this, childrenName, childrenNumber) || this,
            _this.siblingNumber = siblingNumber;
        return _this;
    }
    Children.prototype.display = function () {
        console.log("ChildrenName:".concat(this.childrenName, " && ChildrenNumber:").concat(this.childrenNumber, " && SiblingNumber:").concat(this.siblingNumber));
    };
    return Children;
}(Parents));
var children1 = new Children("Nil", 3, 3);
children1.display();
