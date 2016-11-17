import test from 'ava';
import { Engine } from '../../Engine';


test.beforeEach(t => {
  t.context.mockGridSize = [5, 3];
  t.context.mockStartPosition = [1, 1, 'E'];
  t.context.mockInstructions = ['R', 'F', 'R', 'F'];
});

test('#start() should call Grid.generateMove() 4 times', t => {
  t.plan(4);

  const mockGrid = {
    generateMove() {
      t.pass();
    },
  };

  const engine = new Engine(mockGrid);
  engine.setGridSize(t.context.mockGridSize);
  engine.setStartPosition(t.context.mockStartPosition);
  engine.setInstructions(t.context.mockInstructions);
  const result = engine.start();

});

test('#start() should return an array of coordinates', t => {
  let times = 0;
  const mockMoves = [
    [1, 1, 'S'],
    [1, 0, 'S'],
    [1, 0, 'W'],
    [0, 0, 'W'],
  ];
  const mockGrid = {
    generateMove() {
      const coord = mockMoves[times];
      times++;
      return coord;
    }
  };
  const engine = new Engine(mockGrid);
  engine.setGridSize(t.context.mockGridSize);
  engine.setStartPosition(t.context.mockStartPosition);
  engine.setInstructions(t.context.mockInstructions);
  const result = engine.start();
  test.deepEqual(result, mockMoves);
});
