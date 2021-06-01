class Auto {
    constructor(brand, model, year, vin) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }

    log() {
        console.log("Brand: " + this.brand + "\nModel: " + this.model + "\nYear: " + this.year);
    }

    checkVin() {
        if (String(this.vin).length === 16) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
}

class Auto_Fuel extends Auto {
    constructor(brand, model, year, vin, engineDisplacement, fuelConsumption) {
        super(brand, model, year, vin);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.engineDisplacement = engineDisplacement;
        this.fuelConsumption = fuelConsumption;
    }

    showFuelConsumption() {
        console.log(this.brand + " " + this.model + "\nEngine displacement: " + this.engineDisplacement + "\nFuel consumption: " + this.fuelConsumption);
        return this.brand + " " + this.model + "\nEngine displacement: " + this.engineDisplacement + "\nFuel consumption: " + this.fuelConsumption;
    }
}

class Auto_Electric extends Auto {
    constructor(brand, model, year, vin, batteryCapacity) {
        super(brand, model, year, vin);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.batteryCapacity = batteryCapacity;
    }

    showBatteryConfig() {
        console.log(this.brand + " " + this.model + "\nBattery capacity: " + this.batteryCapacity);
        return this.brand + " " + this.model + "\nBattery capacity: " + this.batteryCapacity;
    }
}

let m = new Auto("Mitsubishi", "Lancer Evolution X", 2012, "JMBSNCY2A8U00723");
m.log();
m.checkVin();

let n = new Auto_Fuel("Nissan", "Skyline R34 GT-R", 1999, "FDH3HILDJ32JO3", "2.6L", 10.6);
n.log();
n.checkVin();
n.showFuelConsumption();

let t = new Auto_Electric("Tesla", "Model X", 2020, "AF12124AEGJ32413", "100 кВт/ч");
t.log();
t.checkVin();
t.showBatteryConfig();