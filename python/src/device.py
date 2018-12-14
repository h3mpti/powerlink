import operator

class Device:
    def __init__(self, location):
        self.location = location

    def __str__(self):
        return f"{self.location}"

    def best_station(self, stations):
        best_station = max(stations, key=operator.methodcaller('power', location=self.location))
        power = best_station.power(self.location)
        if power == 0:
            return None, power
        else:
            return best_station, power