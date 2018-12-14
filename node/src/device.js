class Device {
  constructor(location) {
    this.location = location;
  }

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