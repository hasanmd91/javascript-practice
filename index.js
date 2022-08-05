class Car {
  //setup
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  //method
  getArea() {
    console.log(
      "hellow my name is javascript class and my car name is" + " " + this.name
    );
  }

  printSomething() {
    return "helllow my name is hasasn";
  }
}

const newCar = new Car("ford", 2014);

console.log(newCar);
console.log(newCar.printSomething());

class Rectangel {
  constructor(width) {
    this.width = width;
    this.height = width;
    this.numberofrequestforarea = 0;
  }

  get area() {
    this.numberofrequestforarea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

const newRec = new Rectangel(4);
newRec.area = 25;

console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);
console.log(newRec.area);

console.log(newRec.numberofrequestforarea);
