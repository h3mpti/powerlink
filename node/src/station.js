class Station {
  constructor(location, reach) {
    this.location = location;
    this.reach = reach;
  }

  /**
   * calculates the distance from the station to the point based on the
   * pythagorean theorem (a² + b² = c² => c = sqrt(a² + b²))
   * @param point
   * @returns {number} distance from station to @param point
   */
  getDistance(point) {
    return Math.sqrt(
      Math.pow(point.x - this.location.x, 2) +
        Math.pow(point.y - this.location.y, 2)
    );
  }

  /**
   * calculates the power of the link if the distance is not out of reach
   * calculation of the power is (reach - distance)²
   * @param distance
   * @returns {number} calculated power, if @param distance is out of reach 0 will be returned
   */
  getPower(distance) {
    if (distance > this.reach) {
      return 0;
    }

    return Math.pow(this.reach - distance, 2);
  }
}

module.exports = Station;
