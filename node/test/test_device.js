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

/*

def test_one_station_same_locationn():
    device = Device(Point(0, 0))
    station = Station(Point(0, 0), 10)
    stations = [station]
    best_station, power = device.best_station(stations)
    assert best_station == station
    assert power == 100

def test_two_stations_one_with_same_location():
    device = Device(Point(0, 0))
    station1 = Station(Point(10, 10), 10)
    station2 = Station(Point(0, 0), 10)
    stations = [station1, station2]
    best_station, power = device.best_station(stations)
    assert best_station == station2
    assert power == 100

def test_two_stations_out_of_reach():
    device = Device(Point(20, 20))
    station1 = Station(Point(0, 0), 10)
    station2 = Station(Point(10, 10), 10)
    stations = [station1, station2]
    best_station, power = device.best_station(stations)
    assert best_station == None
    assert power == 0
    */
