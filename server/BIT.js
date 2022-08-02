"use strict";
exports.__esModule = true;
exports.BIT = void 0;
var xfunction_1 = require("./functions/xfunction");
var BIT = /** @class */ (function () {
    function BIT() {
        this.listhotdog = ['hot,dot,dog,dot,log'];
    }
    BIT.prototype.prosesHotdog = function (input) {
        var result = "";
        this.listhotdog.map(function (item) {
            result += item;
        });
        console.log("hotdog-" + input + " " + result);
        return result;
    };
    BIT.prototype.prosesProgrammerit = function (input) {
    };
    BIT.prototype.prosesAngkaAjaib = function (input) {
        var konstanta = 6174;
        var result = "";
        // do {
        var numArr = 0;
        numArr = new xfunction_1.XFun().xNumberToArray(input);
        numArr = new xfunction_1.XFun().xNumberToArray(input);
        console.warn(numArr);
        var n1 = [numArr].sort(function (a, b) { return a - b; });
        var n2 = [numArr].sort(function (a, b) { return b - a; });
        console.log("asc=" + n1);
        console.log("desc=" + n2);
        result = (Number(n2) - Number(n1));
        numArr = result;
        console.log("result=" + result + " arrnum=" + numArr);
        // } while (result != konstanta);
        return result + "-" + numArr;
    };
    BIT.prototype.prosesOptimusPrime = function (input) {
    };
    return BIT;
}());
exports.BIT = BIT;
