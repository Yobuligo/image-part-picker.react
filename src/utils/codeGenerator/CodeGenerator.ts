import { EnumType } from "../../types/EnumType";
import { ICoordinateTracker } from "../coordinateTracker/ICoordinateTracker";
import { ICodeGenerator } from "./ICodeGenerator";

export class CodeGenerator<T extends EnumType> implements ICodeGenerator<T> {
  constructor(private enumName: string) {}

  generate(coordinateTracker: ICoordinateTracker<T>): string {
    const map = coordinateTracker.findAll();
    let code = "";
    map.forEach((coordinate, part) => {
      if (code.length !== 0) {
        code += "\n\n";
      }
      code += `data.set(${this.enumName}.${part}, [${coordinate.map(
        (coordinate) => `{ x: ${coordinate.x}, y: ${coordinate.y}}`
      )}])`;
    });
    return code;
  }
}
