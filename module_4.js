function ElectroDevises(name, power){
    this.name = name;
    this.power = power;
}

ElectroDevises.prototype.turnOn = function(){
    console.log(`${this.name} подключен к розетке`);
    return this.isPlug = true
}

ElectroDevises.prototype.turnOff = function(){
    console.log(`${this.name} отключен от розетки`);
    return this.isPlug = false
}

function Phone(brand, name, power) {
    this.name = name;
    this.power = power;
    this.isPlug = false;
    this.brand = brand;
}
Phone.prototype = new ElectroDevises();

function Lamp(isLight, type, name, power) {
    this.name = name;
    this.power = power;
    this.isLight = isLight;
    this.type = type;
}
Lamp.prototype = new ElectroDevises()


const lamp1 = new Lamp(false, 'настольная', 'lg', 220);

console.log(lamp1.turnOff());

const phone1 = new Phone('nokia', '330', 300);

console.log(phone1.turnOn());
