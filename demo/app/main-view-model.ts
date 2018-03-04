import { Observable } from 'tns-core-modules/data/observable';
import { Opengles } from 'nativescript-opengles';

export class HelloWorldModel extends Observable {
  public message: string;
  private opengles: Opengles;

  constructor() {
    super();

    this.opengles = new Opengles();
    this.message = this.opengles.message;
  }
}
