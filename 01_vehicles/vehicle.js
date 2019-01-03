class Vehicle {
    constructor([wheeltotal, energySource, manufacturer, isOn = false]) {
        this.wheelTotal = wheeltotal;
        this.energySource = energySource;
        this.manufacturer = manufacturer;
        this.isOn = isOn;
    }
    getSpec(key) {
        return `${key}`;
    }
}

class Tesla extends Vehicle {
    constructor([milesPerCharge, model, chargePercentage, minutesToCharge, [[wheeltotal, energySource, manufacturer, isOn = false]]]) {
        super([[wheeltotal, energySource, manufacturer, isOn = false]]);
        this.milesPerCharge = milesPerCharge;
        this.model = model;
        this.chargePercentage = chargePercentage;
        this.minutesToCharge = minutesToCharge;
    }
    minutesToFullCharge(chargePercentage) {
        return `${100 - chargePercentage} minutes until the charge is full!`
    }
    
}