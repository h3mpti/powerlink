from src.point import Point
from src.station import Station

def test_same_point_zero_distance():
    station = Station(Point(0, 0), 10)
    p2 = Point(0, 0)
    assert station.distance(p2) == 0

def test_different_points_correct_distance():
    station = Station(Point(0, 0), 10)
    p2 = Point(10, 10)
    assert round(station.distance(p2), 4) == 14.1421

def test_not_zeroed_points_correct_distance():
    station = Station(Point(5, 5), 10)
    p2 = Point(10, 10)
    assert round(station.distance(p2), 4) == 7.0711

def test_location_full_power():
    station = Station(Point(0, 0), 10)
    device_location = Point(0, 0)
    assert station.power(device_location) == 100

def test_nearby_location_correct_power():
    station = Station(Point(0, 0), 10)
    device_location = Point(5, 5)
    assert round(station.power(device_location), 4) == 8.5786

def test_out_of_distance_location_no_power():
    station = Station(Point(0, 0), 10)
    device_location = Point(11, 11)
    assert station.power(device_location) == 0