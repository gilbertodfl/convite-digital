import { v4 as uuid, validate } from "uuid";

export default class Id {
  static novo(): string {
    return uuid();
  }

  static valido(id: string): boolean {
    return validate(id);
  }
}
// for (let i = 0; i < 10; i++) {
//    console.log(Id.novo());
// }
//console.log(Id.valido("a0b1c2d3-e4f5-6789-abcd-ef0123456789")); // true