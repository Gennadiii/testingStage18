function log(message) {
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()} - ${message}`);
}

class Developer {
    constructor(params) {
        const {title, orderFoodDelay, payDelay, cleanDelay} = params;
        log(`Hiring ${title} developer`);
        this.title = title;
        this.orderFoodDelay = orderFoodDelay;
        this.payDelay = payDelay;
        this.cleanDelay = cleanDelay;

        this.foodIsOrdered = false;
        this.payed = false;
        this.cleaned = false;
    }

    emulateRequest(timeDelay, callback) {
        return new Promise(resolve => {
            setTimeout(_ => {
                callback();
                resolve(this);
            }, timeDelay);
        });
    }

    orderFood() {
        log(`${this.title}: ordering food`);
        return this.emulateRequest(this.orderFoodDelay, () => this.foodIsOrdered = true);
    }

    pay() {
        log(`${this.title}: paying`);
        if (!this.foodIsOrdered) {
            throw new Error('Food is not ordered yet');
        }
        return this.emulateRequest(this.payDelay, () => this.payed = true);
    }

    clean() {
        log(`${this.title}: cleaning`);
        if (!this.payed) {
            throw new Erorr('Order is not payed yet');
        }
        return this.emulateRequest(this.cleanDelay, () => this.cleaned = true);
    }
}

const developers = {
    junior: {
        title: 'Junior',
        orderFoodDelay: 1000,
        payDelay: 3000,
        cleanDelay: 1750,
    },
    middle: {
        title: 'Middle',
        orderFoodDelay: 2000,
        payDelay: 1000,
        cleanDelay: 1000,
    },
    senior: {
        title: 'Senior',
        orderFoodDelay: 500,
        payDelay: 500,
        cleanDelay: 500,
    }
};

const junior = new Developer(developers.junior),
    middle = new Developer(developers.middle),
    senior = new Developer(developers.senior);


junior.orderFood()
    .then(_ => junior.pay())
    .then(_ => junior.clean())
    .catch(log);

middle.orderFood()
    .then(_ => middle.pay())
    .then(_ => middle.clean())
    .catch(log);

senior.orderFood()
    .then(_ => senior.pay())
    .then(_ => senior.clean())
    .catch(log);