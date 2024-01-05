class Device {
    constructor(name, power, brand) {
        this.name = name;
        this.power = power;
        this.brand = brand
        this.isTurnedOn = false;
    }
    turnOn() {
        this.isTurnedOn = true;
        console.log(`Device - ${this.name}: is turned on.`);
    }
    turnOff() {
        this.isTurnedOn = false;
        console.log(`Device - ${this.name}: is turned off.`);
    }
}


class Lamp extends Device {
    constructor(name, power, brand, brightness) {
        super(name, power, brand);
        this.brightness = brightness;
    }
    statusBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`The brightness of lamp is set on ${this.brightness}`);
    }
}

class Computer extends Device {
    constructor(name, power, brand, software) {
        super(name, power, brand)
        this.software = software;
    }
    start(newSoftware) {
        this.software = newSoftware;
        console.log(`${this.name} has launched. The application ${this.software} has installed.`);
    }
}

// The instances
const lamp = new Lamp("Lamp", 50, "Gauss Smart Home");
const computer = new Computer("Computer", 1000, "Huawei");


// Turn on process
lamp.turnOn();
computer.turnOn();

// The power calculation
const totalPower = lamp.power + computer.power;
console.log(`The total power of devices: ${totalPower} W`);

// Extra methods
lamp.statusBrightness(70);
computer.start('Microsoft Edge');

// Turn off process
lamp.turnOff();
computer.turnOff();
