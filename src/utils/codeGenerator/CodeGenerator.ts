import { EnumType } from "../../types/EnumType";
import { ICoordinateTracker } from "../coordinateTracker/ICoordinateTracker";
import { ICodeGenerator } from "./ICodeGenerator";

export class CodeGenerator<T extends EnumType> implements ICodeGenerator<T> {
  generate(coordinateTracker: ICoordinateTracker<T>): string {
    const map = coordinateTracker.findAll();
    let code = "";
    map.forEach((coordinate, part) => {
      code += `${part}, [${coordinate.map(
        (coordinate) => `{ x: ${coordinate.x}, y: ${coordinate.y}}`
      )}]`;
    });
    return code;
  }
}
