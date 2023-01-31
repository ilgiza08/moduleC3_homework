class ElectDevices {
    constructor(name, power){
        this.name = name || 'someDevice';
        this.power = power;
        this.isPlug = true
    }

    turnOn() {
        console.log(`${this.name} подключен к розетке`);
        return this.isPlug = true
    }

    turnOff() {
        console.log(`${this.name} отключен от розетки`);
        return this.isPlug = false
    }
}

class Phone extends ElectDevices {
    constructor(brand, name, power) {
        super(name, power);
        this.isPlug = false;
        this.brand = brand;
    }

    turnOn(){
        if (this.power > 220) {
            return 'Не подключай, шандарахнет!!!'
        } else {
            return super.turnOn()
        }
    }
}

class Lamp extends ElectDevices {
    constructor(isLight, type, name, power) {
        super(name, power);
        this.isLight = isLight;
        this.type = type;
    }

    turnOff() {
        if (this.isLight){
            console.log('Не выключай, в комнате будет темно');
        } else return this.turnOff;   
    }
}

const lamp1 = new Lamp(false, 'настольная', 'lg', 220);

console.log(lamp1.turnOff());
console.log(lamp1);

const phone1 = new Phone('nokia', '330', 300);

console.log(phone1.turnOn());
console.log(phone1);