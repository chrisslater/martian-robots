import * as Types from './types';

export class Engine implements Types.Engine {
  protected grid: Types.Grid;
  protected startPosition: Types.CoordinateWithDirectionTuple = [0 , 0, 'N'];
  protected instructions: Types.Movement[] = [];

  constructor(grid: Types.Grid) {
    this.grid = grid;
  }

  public setGridSize(coordinate: Types.CoordinateTuple) {
    this.grid.setGridSize(coordinate);
  }

  public setStartPosition(coordinate: Types.CoordinateWithDirectionTuple) {
    this.startPosition = coordinate;
  }

  public setInstructions(instructions: Types.Movement[]) {
    this.instructions = instructions;
  }

  public setDeadZones(deadZones: Types.CoordinateTuple[]) {
    this.grid.setDeadZones(deadZones);
  }

  public start(): Types.CoordinateWithDirectionTuple[] {
    let position = this.startPosition;
    const movements = [ position ];

    for (let i = 0; i < this.instructions.length; i++) {
      const newPosition = this.generateMove(this.instructions[i], position);
      movements.push(newPosition);
      position = newPosition;

      if (newPosition.includes('LOST')) {
        return movements;
      }
    }

    return movements;
  }

  protected generateMove(instruction: Types.Movement, position: Types.CoordinateWithDirectionTuple) {
    return this.grid.generateMove(instruction, position);
  }
}
