class Test {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`Hallo ${this.name}, du bist ${this.age} Jahre alt.`);
    }
}

module.exports Test;

