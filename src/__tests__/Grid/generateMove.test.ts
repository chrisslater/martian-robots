import test from 'ava';
import { Grid } from '../../Grid';

// Pointing North and moving forwards
test('Pointing North and moving forwards should return [0, 1, `N`]', t => {
  const grid = new Grid();
  const [x, y, d] = grid.generateMove('F', [0, 0, 'N']);
  t.is(x, 0);
  t.is(y, 1);
  t.is(d, 'N');
});

// Pointing North and moving forwards
test('Pointing North and moving forwards should return [3, 4, `N`, `LOST`]', t => {
  const grid = new Grid();
  grid.setGridSize([3, 3]);
  const [x, y, d, l] = grid.generateMove('F', [3, 3, 'N']);

  t.is(x, 3);
  t.is(y, 4);
  t.is(d, 'N');
  t.is(l, 'LOST');
});

// Pointing North and turning Left
test('Pointing North and turning Left should return [0, 0, `W`]', t => {
  const grid = new Grid();
  const [x, y, d] = grid.generateMove('L', [0, 0, 'N']);
  t.is(x, 0);
  t.is(y, 0);
  t.is(d, 'W');
});

// Pointing North and turning Right
test('Pointing North and turning Right should return [0, 0, `E`]', t => {
  const grid = new Grid();
  const [x, y, d] = grid.generateMove('R', [0, 0, 'N']);
  t.is(x, 0);
  t.is(y, 0);
  t.is(d, 'E');
});

// Pointing East and moving forwards
test('Pointing East and moving forwards should return [1, 0, `E`]', t => {
  const grid = new Grid();
  const [x, y, d] = grid.generateMove('F', [0, 0, 'E']);
  t.is(x, 1);
  t.is(y, 0);
  t.is(d, 'E');
});

test('Pointing East and going beyond boundry should return [4, 3, `E`, `LOST`]', t => {
  const grid = new Grid();
  grid.setGridSize([3, 3]);
  const [x, y, d, l] = grid.generateMove('F', [3, 3, 'E']);

  t.is(x, 4);
  t.is(y, 3);
  t.is(d, 'E');
  t.is(l, 'LOST');
});

// Pointing South and moving forwards
test('Pointing South and moving forwards should generate [0, -1, `S`, `LOST`]', t => {
  const grid = new Grid();
  const [x, y, d, l] = grid.generateMove('F', [0, 0, 'S']);
  t.is(x, 0);
  t.is(y, -1);
  t.is(d, 'S');
  t.is(l, 'LOST');
});

// Pointing West and moving forwards
test('Pointing West and moving forwards should generate [-1, 0, `W`, `LOST`]', t => {
  const grid = new Grid();
  const [x, y, d, l] = grid.generateMove('F', [0, 0, 'W']);

  t.is(x, -1);
  t.is(y, 0);
  t.is(d, 'W');
  t.is(l, 'LOST');
});
