const Device = require('./device.js');
const Point = require('./point.js');
const Station = require('./station.js');

const devices = [
    new Device(new Point(0, 0)),
    new Device(new Point(100, 100)),
    new Device(new Point(15, 10)),
    new Device(new Point(18, 18))
];

const stations = [
    new Station(new Point(0, 0), 10),
    new Station(new Point(20, 20), 5),
    new Station(new Point(10, 0), 12),
]

devices.map(device => {
    let bestStation = device.findBestStation(stations);
    if (bestStation && bestStation.power > 0) {
        const power = bestStation.power.toFixed(2);
        console.log(`Best link station for point ${device.location.x},${device.location.y} is ${bestStation.location.x},${bestStation.location.y} with power ${power}`);
    } else {
        console.log(`No link station within reach for point ${device.location.x},${device.location.y}`);
    }
})