export interface Input {

}

export type Direction = 'F' | 'L' | 'R';
export type CoordinateTuple = [ number, number, string ];

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
  generateMove(instruction: Direction, coordinate: CoordinateTuple): CoordinateTuple;

  /**
   * Set any current dead grid positions to ignore when generating a move
   */
  setDeadZones(deadzones: CoordinateTuple[]): void;
}
