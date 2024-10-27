class Vehicle {
    constructor(year, brand) {
        this.year = year;
        this.brand = brand;
    }

    showInfo() {
        console.log(`Vehicle year is ${this.year} and brand is ${this.brand}.`);
    }
}

class Car extends Vehicle {
    constructor(year, brand, doors, fuelType) {
        super(year, brand);
        this.doors = doors;
        this.fuelType = fuelType;
    }

    showInfo() {
        super.showInfo();
        console.log(`Car has ${this.doors} doors and runs on ${this.fuelType}.`);
    }

    startEngine() {
        console.log("The car's engine has started.");
    }
}

class ElectricCar extends Car {
    constructor(year, brand, doors, fuelType, batteryCapacity) {
        super(year, brand, doors, fuelType);
        this.batteryCapacity = batteryCapacity;
    }

    showInfo() {
        super.showInfo();
        console.log(`Electric car has a battery capacity of ${this.batteryCapacity} kWh.`);
    }

    chargeBattery() {
        console.log("The battery is charging.");
    }
}

const myVehicle = new Vehicle(2020, "Generic Brand");
myVehicle.showInfo();

const myCar = new Car(2021, "Toyota", 4, "Gasoline");
myCar.showInfo();
myCar.startEngine();

const myElectricCar = new ElectricCar(2022, "Tesla", 4, "Electric", 75);
myElectricCar.showInfo();
myElectricCar.startEngine();
myElectricCar.chargeBattery();