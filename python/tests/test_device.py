from src.point import Point
from src.station import Station
from src.device import Device

def test_one_station_same_location():
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