import test from 'ava';
import { Engine } from '../../Engine';

function createContext() {
  const context = {
    mockGridSize: [5, 3],
    mockInstructions: ['R', 'F', 'R', 'F'],
    mockStartPosition: [1, 1, 'E'],
  };
  return context;
}

test('#start() should call Grid.generateMove() 4 times', t => {
  t.plan(4);
  const context = createContext();

  const mockGrid = {
    generateMove() {
      t.pass();
      return [];
    },

    setGridSize() {}
  };

  const engine = new Engine(mockGrid);
  engine.setGridSize(context.mockGridSize);
  engine.setStartPosition(context.mockStartPosition);
  engine.setInstructions(context.mockInstructions);
  engine.start();
});

test('#start() should return an array of coordinates', t => {
  const context = createContext();
  let times = 0;
  const startMove = [ [1, 1, 'E'] ];
  const mockMoves = [
    [1, 1, 'S'],
    [1, 0, 'S'],
    [1, 0, 'W'],
    [0, 0, 'W'],
  ];
  const moves = startMove.concat(mockMoves);
  const mockGrid = {
    generateMove(coordinate: any) {
      const coord = mockMoves[times];
      times++;
      return coord;
    },
    setGridSize() {},
    setDeadZones() {},
  };

  const engine = new Engine(mockGrid);
  engine.setGridSize(context.mockGridSize);
  engine.setStartPosition(context.mockStartPosition);
  engine.setInstructions(context.mockInstructions);
  const result = engine.start();
  t.deepEqual(result, moves);
});
