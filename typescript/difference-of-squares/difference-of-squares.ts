class Squares {
    num: number;
    array: number[];
    _sumOfSquares: number;
    _squareOfSum: number;
    constructor(num: number) {
        this.num = num;
        this.array = this.makeArray(this.num);
        this._sumOfSquares = this.calculateSumOfSquares(this.array);
        this._squareOfSum = this.calculateSquareOfSum(this.array);
    }

    private makeArray(num: number) {
        const result = [];
        for (let i = 1; i <= num; i++) {
            result.push(i)
        }
        return result;
    }

    private calculateSquareOfSum(array: number[]): number { return array.reduce((acc, val) => acc + val, 0) ** 2};

    private calculateSumOfSquares(array: number[]): number { return array.reduce((acc, val) => acc + val ** 2, 0)};

    get squareOfSum(): number {
        return this._squareOfSum;
    }

    get sumOfSquares(): number {
        return this._sumOfSquares;
    }

    get difference(): number {
        return this._squareOfSum - this._sumOfSquares ;
    }
  }

  export default Squares;
