class Station {
  constructor(location, reach) {
    this.location = location;
    this.reach = reach;
  }

  getDistance(point) {
    return Math.sqrt(
      Math.pow(point.x - this.location.x, 2) +
        Math.pow(point.y - this.location.y, 2)
    );
  }

  getPower(distance) {
    if (distance > this.reach) {
      return 0;
    }

    return Math.pow(this.reach - distance, 2);
  }
}

module.exports = Station;
