class ArmstrongNumbers {
    public static isArmstrongNumber( num: number ): boolean {
        const asDigitArray: number[] = num.toString().split("").map((d) => parseInt(d));
        const length = asDigitArray.length;
        return asDigitArray.reduce((acc, val) => acc + val ** length, 0) === num;
      }
  }

  export default ArmstrongNumbers;
