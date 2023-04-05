class Car{
    constructor(brand,prodYear,country){
        this.brand = brand;
        this.prodYear = prodYear;
        this.country = country;
    }

    //age getter
    get carAge(){
        return this.calcAge();
    }

    //validation getter
    get validUS(){
        return this.checkUS();
    }

    //method car age
    calcAge(){
        let age = 2023-this.prodYear;
        return age;
    }

    //method US validation
    checkUS(){
        let isUS;
        if(this.country == 'United States'){
            isUS = true;
        } else{
            isUS = false;
        }
        return isUS;
    }
}

//create objects
const Car1 = new Car("Mercedes",2016,"Germany");
const Car2 = new Car("Tesla",2019,"United States");
const Car3 = new Car("Chevrolet",2015,"United States");
const Car4 = new Car("Hyundai",2022,"South Korea");

console.log('Car 1 :');
console.log('Brand : ',Car1.brand);
console.log('Car Age : ',Car1.carAge);
console.log('From US : ',Car1.validUS);
console.log();
console.log('Car 2 :');
console.log('Brand : ',Car2.brand);
console.log('Car Age : ',Car2.carAge);
console.log('From US : ',Car2.validUS);
console.log();
console.log('Car 3 :');
console.log('Brand : ',Car3.brand);
console.log('Car Age : ',Car3.carAge);
console.log('From US : ',Car3.validUS);
console.log();
console.log('Car 4 :');
console.log('Brand : ',Car4.brand);
console.log('Car Age : ',Car4.carAge);
console.log('From US : ',Car4.validUS);
console.log();