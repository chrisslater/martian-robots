import * as Types from './types';

export class Engine implements Types.Engine {
  protected grid: Types.Grid;
  protected startPosition: Types.CoordinateTuple = [0 , 0];
  protected instructions: Types.Direction[] = [];

  constructor(grid: Types.Grid) {
    this.grid = grid;
  }

  public setGridSize(coordinate: Types.CoordinateTuple) {
    this.grid.setGridSize(coordinate);
  }

  public setStartPosition(coordinate: Types.CoordinateTuple) {
    this.startPosition = coordinate;
  }

  public setInstructions(instructions: Types.Direction[]) {
    this.instructions = instructions;
  }

  public setDeadZones(deadZones: Types.CoordinateTuple[]) {
    this.grid.setDeadZones(deadZones);
  }

  public start(): Types.CoordinateTuple[] {
    let position = this.startPosition;
    return this.instructions.map((instruction) =>
      this.generateMove(instruction, position)
    );
  }

  protected generateMove(instruction: Types.Direction, position: Types.CoordinateTuple) {
    return this.grid.generateMove(instruction, position);
  }
}
