export interface Input {

}

export type Movement = 'F' | 'L' | 'R';
export type Direction = 'N' | 'E' | 'S' | 'W';
export type CoordinateTuple = [ number, number ];
export type CoordinateWithDirectionTuple = [ number, number, Direction ];

export interface Engine {
  /**
   * Set the grid size for current plot
   */
  setGridSize(coordinate: CoordinateTuple): void;
  setStartPosition(coordinate: CoordinateTuple): void;
  setInstructions(instructions: Direction[]): void;
  start(): CoordinateTuple[];

  // From store
  setDeadZones(deadzones: CoordinateTuple[]): void;
}

export interface Grid {
  /**
   * Set the grid size for current plot
   */
  setGridSize(coordinate: CoordinateTuple): void;

  /**
   * Generate a new coordinate based on new move and existing coordinate
   */
  generateMove(movement: Movement, coordinate: CoordinateWithDirectionTuple): CoordinateWithDirectionTuple;

  /**
   * Set any current dead grid positions to ignore when generating a move
   */
  setDeadZones(deadzones: CoordinateTuple[]): void;
}
