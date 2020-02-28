export class ResistorColor {
  private colors: string[];
  private colorArray =  ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

  constructor(colors: string[]) {
    this.colors = colors;
    if (this.colors.length < 2) throw new Error("At least two colors need to be present");
  }
  value = (): number => {
    return this.colorArray.indexOf(this.colors[0]) * 10 + this.colorArray.indexOf(this.colors[1]);
};
}
