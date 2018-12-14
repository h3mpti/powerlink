class Device {
  constructor(location) {
    this.location = location;
  }

  /**
   * finds the best station for this device based on the largest power output of the link
   * @param stations
   * @returns {Station} best station based on the power output, if nothing was found or device is out of reach {undefined} will be returned
   */
  findBestStation(stations) {
    return stations
      .map(station => {
        return {
          location: station.location,
          reach: station.reach,
          power: station.getPower(station.getDistance(this.location))
        };
      })
      .filter(station => {
        return station.power > 0;
      })
      .sort((stationA, stationB) => {
        return stationA.power > stationB.power;
      })
      .pop();
  }
}

module.exports = Device;
