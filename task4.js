// Parent function
function Device(name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand
    this.isTurnedOn = false;
}

// Parent methods
Device.prototype.turnOn = function() {
    this.isTurnedOn = true;
    console.log(`Device - ${this.name}: is turned on.`);
};

Device.prototype.turnOff = function() {
    this.isTurnedOn = false;
    console.log(`Device - ${this.name}: is turned off.`);
};

// Lamp
function Lamp(name, power, brand, brightness) {
    Device.call(this, name, power, brand);
    this.brightness = brightness;
}
// Computer
function Computer(name, power, brand) {
    Device.call(this, name, power);
    this.brand = brand;
}

// Prototype
Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

Computer.prototype = Object.create(Device.prototype);
Computer.prototype.constructor = Computer;

// Extra lamp method
Lamp.prototype.statusBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`The brightness of lamp is set on ${this.brightness}`);
};

// Extra computer method
Computer.prototype.start = function(newSoftware) {
    this.software = newSoftware;
    console.log(`${this.name} has launched. The application ${this.software} has installed.`);
}

// Create the instances
const lamp = new Lamp("Lamp", 50, "Gauss Smart Home");
const computer = new Computer("Computer", 1000, "Huawei");

// Turn on process
lamp.turnOn();
computer.turnOn();

// The power calculation
const totalPower = lamp.power + computer.power;
console.log(`The total power of devices is: ${totalPower} W`);

// Extra methods
lamp.statusBrightness(70);
computer.start('Microsoft Edge');

// Turn off process
lamp.turnOff();
computer.turnOff();
