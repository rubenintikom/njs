const assert = require('assert');
const { XFun } = require("../server/functions/xfunction");
const { BIT } = require("../server/BIT");

const bit = new BIT();
const fun = new XFun();

//let hotdo=bit.prosesHotdog("hot dog");
//console.log(hotdo);

describe('Simple Math Test', () => {
    it('should return hot,dot,dog,dot,log', () => {
        const result = bit.prosesHotdog("hot dog");
        assert.equal(result, "hot,dot,dog,dot,log");
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});