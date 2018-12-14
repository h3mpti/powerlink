var assert = require('assert');
const Station = require('../src/station.js');
const Point = require('../src/point.js');

describe('Station', function() {
  describe('getDistance()', function() {
    it('should return 0 when the point is the same as the location', () => {
      const station = new Station(new Point(0, 0), 10);
      const point = new Point(0, 0);
      assert.equal(station.getDistance(point), 0);
    });
    it('should return the correct distance when the point is not the same as the location', () => {
      const station = new Station(new Point(0, 0), 10);
      const point = new Point(10, 10);
      assert.equal(station.getDistance(point).toFixed(4), 14.1421);
    });
    it('should return the correct distance when the point is not the same as the location and is not zeroed', () => {
        const station = new Station(new Point(5, 5), 10);
        const point = new Point(10, 10);
        assert.equal(station.getDistance(point).toFixed(4), 7.0711);
      });
  });
  describe('getPower()', function() {
    it('should return the full power when device location is the same as the station location', () => {
      const station = new Station(new Point(0, 0), 10);
      const deviceDistance = 0;
      assert.equal(station.getPower(deviceDistance), 100);
    });
    it('should return the correct power when the device location is nearby the station location', () => {
      const station = new Station(new Point(0, 0), 10);
      const deviceDistance = 3;
      assert.equal(station.getPower(deviceDistance).toFixed(4), 49.0000);
    });
    it('should return 0 when the device location is out of reach', () => {
        const station = new Station(new Point(0, 0), 10);
        const deviceDistance = 20;
        assert.equal(station.getPower(deviceDistance), 0);
      });
  });
});