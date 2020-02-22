class Gigasecond {
    dt: Date;
    constructor(dt: Date) {
        this.dt = dt;
    }
    date() {
        const giga = 1000000000;
        const newEpoch = ((this.dt.getTime() / 1000) + giga) * 1000;
        return new Date(newEpoch);
    }
  }

  export default Gigasecond;
