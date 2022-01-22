"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var component = new like_1.LikeCompnent(10, true);
component.onClick();
console.log("LikeCount:" + component.likesCount + ", isSelected:" + component.isSelected);
