import { XFun } from './functions/xfunction';
export class BIT {
    listhotdog = ['hot,dot,dog,dot,log'];
    prosesHotdog(input: string) {
        let result: string = "";
        this.listhotdog.map((item) => {
            result += item;
        });
        return "hotdog-" + input + " " + result;
    }

    prosesProgrammerit(input: string) {
        
    }

    prosesAngkaAjaib(input: number) {
        const konstanta: number = 6174;
        let result: any = "";
        // do {
        let numArr: number = 0;
        numArr = new XFun().xNumberToArray(input);
        numArr = new XFun().xNumberToArray(input);
        console.warn(numArr);
        let n1: any = [numArr].sort((a: number, b: number) => a - b);

        let n2: any = [numArr].sort((a: number, b: number) => b - a);
        console.log("asc=" + n1);
        console.log("desc=" + n2);

        result = (Number(n2) - Number(n1));
        numArr = result;
        console.log("result=" + result + " arrnum=" + numArr);
        // } while (result != konstanta);
        return result + "-" + numArr;
    }


    prosesOptimusPrime(input: number) {

    }



}


