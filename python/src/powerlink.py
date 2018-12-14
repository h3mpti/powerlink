from point import Point
from station import Station
from device import Device

station1 = Station(Point(0, 0), 10)
station2 = Station(Point(20, 20), 5)
station3 = Station(Point(10, 0), 12)

stations = (station1, station2, station3)

device1 = Device(Point(0, 0))
device2 = Device(Point(100, 100))
device3 = Device(Point(15, 10))
device4 = Device(Point(18, 18))

devices = (device1, device2, device3, device4)

for device in devices:
    best_station, power = device.best_station(stations)
    if power == 0:
        print(f"No link station within reach for point {device}")
    else:
        print(f"Best link station for point {device} is {best_station.location} with power {power:0.2f}")