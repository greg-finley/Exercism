class RunLengthEncoding {
    public static encode(str: string): string {
        var result: string[] = [];
        var current = "";
        var count = 1;
        const split = str.split("");
        for (let i = 0; i <= str.length; i++) {
            const letter = split[i];
            if (letter != current) {
                if (count > 1) {
                    result.push(count.toString());
                }
                result.push(current);
                current = letter;
                count = 1;
            }
            else {
                count ++;
            }
        }
        return result.join("");
    };

    public static decode(str: string): string {
        var result: string[] = [];
        var count = [];
        const split = str.split("");
        for (let i = 0; i < str.length; i++) {
            const letter = split[i];
            if (!isNaN(parseInt(letter))) {
                count.push(letter)
            }
            else {
                if (count.length == 0) {result.push(letter)} else {result.push(letter.repeat(parseInt(count.join(""))))};
                count = [];
            }
        }
        return result.join("");
    };
}

export default RunLengthEncoding;
