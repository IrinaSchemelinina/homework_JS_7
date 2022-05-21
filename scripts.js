let Lightbulb = function (name) {
 
     this.getDataHall = function () {
        this.name = name;
        this.energy = +prompt('Введите мощность лампочки в гостиной, Вт');
        this.electricityPrice = 0.1973;  //стоимость электроэнергии за 1Квт*ч
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько часов проработа лампочка за день?');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };

    this.getDataKitchen = function () {
        this.name = name;
        this.energy = +prompt('Введите мощность лампочки в кухне, Вт');
        this.electricityPrice = 0.1973; 
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько часов проработа лампочка за день?');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };

    this.getDataBathroom = function () {
        this.name = name;
        this.energy = +prompt('Введите мощность лампочки в ванной комнате, Вт');
        this.electricityPrice = 0.1973; 
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько часов проработа лампочка за день?');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };


    this.operation = function () {
        this.result = (this.energy / 1000) * this.electricityPrice * this.workTime;

        this.show();
    };
 
    this.show = function () {
 
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log(`Лампочка в ${this.name} не включена`);
        } else {
            console.log(`Лампочка в ${this.name} проработала ${this.workTime} ч. и стоимость потраченной электроэнергии составляет = ${this.result} p.`)
    };
    };
};
 
let lightBulb = new Lightbulb('Гостиной');
lightBulb.getDataHall();
 
let lightBulb2 = new Lightbulb('Кухне');
lightBulb2.getDataKitchen();
 
let lightBulb3 = new Lightbulb('Ванной комнате');
lightBulb3.getDataBathroom();
 
let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;
 
console.log('Всего стоимость потраченной электроэнергии за сутки составляет: ' + totalCost + 'р');











