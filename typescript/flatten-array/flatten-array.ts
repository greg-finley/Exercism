class FlattenArray {

    public static flatten<T>( array: T[] ): T[] {
        var compare: T[] = [];
        var changed = false;
        array.forEach((elem) => {
            if (elem == null) {changed = true;}
            else if (!Array.isArray(elem)) {compare.push(elem)}
            else {
                changed = true;
                elem.forEach((innerElem) => compare.push(innerElem))
            }
        })

        if (changed) compare = this.flatten(compare);

        return compare;
      }
  }

  export default FlattenArray;
