export class XFun {
    /**
     * Convert number to array
     * @param input number
     * @returns array of number
     */
    xNumberToArray(input: number) {

        let numArr: number[] = [];
        const length = input.toString().length;
        for (let i = 0; i < length; i++) {
            const num = Number(input.toString().charAt(i));
            numArr.push(...[num]);
        }
        console.log(numArr);
        let xnum: string = "";
        numArr.map(r => {
            xnum += r;
        });
        let result: number = parseInt(xnum);
        console.log("number=" + result);
        return result;
    }
}