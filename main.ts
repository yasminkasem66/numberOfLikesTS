import { LikeCompnent } from "./like";


let component = new LikeCompnent(10, true)
component.onClick()
console.log(`LikeCount:${component.likesCount}, isSelected:${component.isSelected}`);