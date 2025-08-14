class Key {
  private signature: number = Math.random();

  constructor(signature: number) {
    this.signature = signature;
  }

  getSignature() {
    return this.signature;
  }
}

class Person extends Key {
  private key: Key;

  getKey() {
    return this.key;
  }

}

abstract class House extends Person {
  public door: boolean;
 
  
}


const key = new Key(25);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};