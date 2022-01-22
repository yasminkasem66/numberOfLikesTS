"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCompnent = void 0;
var LikeCompnent = /** @class */ (function () {
    //   _likesCount: number;
    //   _isSelected: boolean;
    function LikeCompnent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeCompnent.prototype.onClick = function () {
        // if (this._isSelected) {
        //     this._likesCount--;
        //     this._isSelected = false;
        // } else {
        //       this._likesCount++;
        //       this._isSelected = true;
        // }
        //    (this._isSelected)? this._likesCount--:this._likesCount++;
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeCompnent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeCompnent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return LikeCompnent;
}());
exports.LikeCompnent = LikeCompnent;
