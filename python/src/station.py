import math


class Station:
    def __init__(self, location, reach):
        self.location = location
        self.reach = reach

    def __str__(self):
        return f"[{self.location},{self.reach}]"

    def distance(self, location):
        """ calculates the distance from the station to the location based on the 
            pythagorean theorem (a² + b² = c² => c = sqrt(a² + b²))"""
        distance = math.sqrt((location.x - self.location.x)
                             ** 2 + (location.y - self.location.y) ** 2)
        return distance

    def power(self, location):
        """ calculates the power of the link based on the distance to the location
            if distance is out of reach 0 will be returned
            power is calculated as (reach - distance)²"""
        distance = self.distance(location)
        if distance > self.reach:
            return 0
        power = (self.reach - distance) ** 2
        return power
