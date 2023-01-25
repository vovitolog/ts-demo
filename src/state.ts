//interface

interface IMan {
    name: string,
    height: number
}

interface ICar {
    model: string,
    year: number
}

//type

type ManType = {
    name: string,
    height: number,
    surname?: string
}

type MenType = Array<ManType>


let man1: ManType = {name: 'Dima', height: 1.78, surname: 'Test'}
let man2: ManType = {name: 'Sasha', height: 1.8}
let car: ICar = {model: 'Reno Stepway', year: 2016}

const men: MenType = [man1, man2];

function toUpperCase(strings: Array<string>): Array<string> {
    let result = strings.map(s => s.toUpperCase());
    return result;
}

const sum = (a: number, b: number): number => {
    return a + b;
}

let createMan = (name: string, height: number): ManType => {
    return {
        name,
        height
    };
}

// Расширить тип Car, чтобы компилятор не ругался:

type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => void
}


let car2: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}


// Создайте type IGarage и типизируйте этот кусок кода (используя те интерфейсы, которые у вас есть)

type GarageType = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars:() => Array<CarType>
}

let createGarage = () : GarageType => {
    let _cars : Array<CarType> = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}





export default 1