import * as Types from './types';

export class Grid implements Types.Grid {
  protected gridSize: Types.CoordinateTuple = [5, 5];
  protected deadZones: Types.CoordinateTuple[] = [];

  public setGridSize(coordinate: Types.CoordinateTuple) {
    this.gridSize = coordinate;
  }

  public setDeadZones(coordinates: Types.CoordinateTuple[]) {
    this.deadZones = coordinates;
  }

  public generateMove(
    movement: Types.Movement,
    coordinate: Types.CoordinateWithDirectionTuple
  ): Types.CoordinateWithDirectionTuple {
    switch (movement) {
      case 'F':
        return this.updateCoordinate(coordinate);
      case 'L':
      case 'R':
        return this.updateDirection(movement, coordinate);
      default:
    }
  }

  protected updateCoordinate (coordinate: Types.CoordinateWithDirectionTuple): Types.CoordinateWithDirectionTuple {
    const [ x, y, direction ] = coordinate;
    const [ xBoundry, yBoundry ] = this.gridSize;
    switch (direction) {
      case 'N':
        const newY = y + 1;
        const isLost = (newY > yBoundry) ? true : false;
        const newCoords = [ x, newY, direction];

        if (isLost) {
          newCoords.push('LOST');
        }

        return newCoords;
      case 'E':
        const newX = x + 1;
        const isLost = (newX > yBoundry) ? true : false;
        const newCoords = [ newX, y, direction];

        if (isLost) {
          newCoords.push('LOST');
        }

        return newCoords;
      case 'S':
        const newY = y - 1;
        const isLost = (newY < 0) ? true : false;
        const newCoords: Types.CoordinateWithDirectionTuple = [x, newY, direction];
        if (isLost) {
          newCoords.push('LOST');
        }
        return newCoords;
      case 'W':
        const newX = x - 1;
        const dead = (newX < 0) ? true : false;
        const newCoords: Types.CoordinateWithDirectionTuple = [newX, y, direction];
        if (dead) {
          newCoords.push('LOST');
        }
        return newCoords;
      default:
    }
  }

  protected updateDirection(
    movement: Types.Movement,
    coordinate: Types.CoordinateWithDirectionTuple
  ): Types.CoordinateWithDirectionTuple {
    const [x, y, d] = coordinate;
    const directions = ['N', 'E', 'S', 'W'];
    let newDir = d;

    const index = directions.indexOf(d);
    const end = directions.slice(index + 1);
    const start = directions.slice(0, index);
    const orderedDirections = end.concat(start);

    switch (movement) {
      case 'L':
        newDir = orderedDirections.pop();
        break;
      case 'R':
        newDir = orderedDirections.shift();
        break;
      default:
    }

    return [ x, y, newDir ];
  }
}
