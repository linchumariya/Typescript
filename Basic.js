var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hi");
var ourtuple;
ourtuple = [1, false, "iam"];
console.info(ourtuple);
var namee = "linz";
console.log(namee);
var subj = ["node", "js", "mongo"];
console.log(subj);
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus.prototype.start = function () {
        console.log("the bus named".concat(this.model, "is starting"));
    };
    return Bus;
}());
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.constuctor = function (horsepower, fueltype) {
        this, horsepower = horsepower;
        this.fueltype = fueltype;
    };
    return Engine;
}());
var obj = new Bus("volvo", "v245", 2025);
console.log(obj);
obj.start();
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(make, model, year, offroad) {
        var _this = _super.call(this, make, model, year) || this;
        _this.offroad = offroad;
        return _this;
    }
    SUV.prototype.toggle = function () {
        this.offroad = !this.offroad;
        console.log("".concat(this.model, " has capablity of offroad ? ").concat(this.offroad));
    };
    return SUV;
}(Bus));
var tata = new SUV("TATA", "safari", 2025, true);
tata.toggle();
tata.toggle();
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//   readline.question('Enter a character: ', (char) => {
//     console.log(`You entered: ${char}`);
//     readline.close();
//   });
//  let num1:number;
// let num2:number;
var x = 2;
console.log(x);
