export class Person {
    public name: string;
    public age: number;
    public isAlive?: boolean;

    get fullName(): string {
        return `${this.name} ${this.age}`;
    }

    constructor(name: string, age: number, isAlive: boolean) {
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
    speak(){
        console.log(`Hola, mi nombre es ${this.name}`);
    }
    uper(){
        console.log(` ${this.name.toUpperCase()}!!!! `);
    }
}

export const isauro = new Person("Isauro", 19, true);
console.log(isauro.fullName);
isauro.speak();
isauro.uper();
//!!Forma corta de declarar una clase
// export class Persons {
//     constructor(
//         public name: string, 
//         public age: number, 
//         public isAlive: boolean
//     ) {}
// }