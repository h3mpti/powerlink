var assert = require('assert');
const Station = require('../src/station.js');
const Point = require('../src/point.js');
const Device = require('../src/device.js');

describe('Device', function() {
  describe('findBestStation()', function() {
    it('should return the station with the same location', () => {
      const station = new Station(new Point(0, 0), 10);
      const stations = [station];
      const device = new Device(new Point(0, 0));
      assert.equal(device.findBestStation(stations).location, station.location);
    });
    it('should return the station with the same location with multiple stations available', () => {
      const station1 = new Station(new Point(10, 10), 10);
      const station2 = new Station(new Point(0, 0), 10);
      const stations = [station1, station2];
      const device = new Device(new Point(0, 0));
      assert.equal(
        device.findBestStation(stations).location,
        station2.location
      );
    });
    it('should return undefined when all stations are out of reach', () => {
      const station1 = new Station(new Point(10, 10), 10);
      const station2 = new Station(new Point(0, 0), 10);
      const stations = [station1, station2];
      const device = new Device(new Point(20, 20));
      assert.equal(device.findBestStation(stations), undefined);
    });
  });
});