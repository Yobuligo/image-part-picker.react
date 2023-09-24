import { EnumType } from "../../components/imagePartPicker/types/EnumType";
import { ICoordinateTracker } from "../../components/imagePartPicker/utils/coordinateTracker/ICoordinateTracker";
import { ICodeGenerator } from "./ICodeGenerator";

export class CodeGenerator<T extends EnumType> implements ICodeGenerator<T> {
  private variable = "grid";
  constructor(private enumName: string) {}

  generate(
    coordinateTracker: ICoordinateTracker<T>,
    gridWidth: number,
    gridHeight: number
  ): string {
    const map = coordinateTracker.findAll();
    let code = "";

    code += `${this.generateSetWidth(gridWidth)}\n`;
    code += this.generateSetHeight(gridHeight);

    map.forEach((coordinate, part) => {
      if (code.length !== 0) {
        code += "\n\n";
      }
      code += `${this.variable}.data.set(${
        this.enumName
      }.${part}, [${coordinate.map(
        (coordinate) => `{ x: ${coordinate.x}, y: ${coordinate.y}}`
      )}])`;
    });
    return code;
  }

  private generateSetWidth(gridWidth: number): string {
    return `${this.variable}.setWidth(${gridWidth});`;
  }

  private generateSetHeight(gridHeight: number): string {
    return `${this.variable}.setHeight(${gridHeight});`;
  }
}
