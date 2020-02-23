class Conventer {
    public convert( digits: number[], fromBase: number, toBase: number ): number[] {
        if (!digits && !fromBase && !toBase) throw new Error(`ha`);
        // something that takes the length of digits and a base and makes it:
        // length 6 and base 2 => [2 ** 5, 2 ** 4, ...... 2 ** 0]

        //Once I have that thing, zip it with the original digits
        // and multiply each digit by its corresponding 2 ** 5 etc. power
        // and add up all the multiplications

        // Then I'd have the number in base 10. then what?
        return [1,2,3];
      }
  }

  export default Conventer;
