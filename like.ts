export class LikeCompnent {
//   _likesCount: number;
//   _isSelected: boolean;
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }
    
    onClick() {
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
    }

    get likesCount() {
        return this._likesCount;
    }
    get isSelected() {
        return this._isSelected;
    }


}