const assert = require('assert');

const { XFun } = require("./server/functions/xfunction");
const { BIT } = require("./server/BIT");

const bit = new BIT();
const fun = new XFun();


const angkaajaib = bit.prosesAngkaAjaib(2143);
assert(angkaajaib);

const a = fun.xNumberToArray(2134);
const arr = [1,2,3,4];

arr.push(1);
console.log(arr);


// assert.equal(1,1);