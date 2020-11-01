export default class RotationalCipher {
    static lowerA = 97;
    static lowerZ = 122;
    static capitalA = 65;
    static capitalZ = 90;
    static numLetters = 26;

    static rotate(str: string, num: number) {
        return str.split('').map((char) =>
        {
            const charCode = char.charCodeAt(0);
            if (charCode >= this.lowerA && charCode <= this.lowerZ) return String.fromCharCode(((charCode - this.lowerA + num) % this.numLetters) + this.lowerA)
            if (charCode >= this.capitalA && charCode <= this.capitalZ ) return String.fromCharCode(((charCode - this.capitalA + num) % this.numLetters) + this.capitalA)
            return char;
        }
        ).join('');
    }

}
