export default class Client {
    private _id: number | null;
    private _name: string;
    private _age: number;

    constructor(name: string, age: number, id: number | null = null) {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    static createEmptyClient(): Client {
        return new Client('', 0);
    }

    get id(): number | null {
        return this._id;
    }

    set id(id: number | null) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }
}




