"use strict";
exports.__esModule = true;
exports.XFun = void 0;
var XFun = /** @class */ (function () {
    function XFun() {
    }
    /**
     * Convert number to array
     * @param input number
     * @returns array of number
     */
    XFun.prototype.xNumberToArray = function (input) {
        var numArr = [];
        var length = input.toString().length;
        for (var i = 0; i < length; i++) {
            var num = Number(input.toString().charAt(i));
            numArr.push.apply(numArr, [num]);
        }
        console.log(numArr);
        var xnum = "";
        numArr.map(function (r) {
            xnum += r;
        });
        var result = parseInt(xnum);
        console.log("number=" + result);
        return result;
    };
    return XFun;
}());
exports.XFun = XFun;
