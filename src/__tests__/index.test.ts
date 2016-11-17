import { test } from 'ava';
import { createEngine } from '../index';

test('First Scenario', t => {
  const engine = createEngine();
  const instructions = ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'];
  engine.setGridSize([5, 3]);
  engine.setStartPosition([1, 1, 'E']);
  engine.setInstructions(instructions);
  const result = engine.start();
  t.is(result.length, 9);
  const [ x, y, d ] = result[8];
  t.is(x, 1);
  t.is(y, 1);
  t.is(d, 'E');
});

test('Second Scenario', t => {
  const engine = createEngine();
  const instructions = ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'L', 'L'];
  engine.setGridSize([5, 3]);
  engine.setStartPosition([3, 2, 'N']);
  engine.setInstructions(instructions);
  const result = engine.start();
  t.is(result.length, 9);
  const [ x, y, d, l ] = result[8];
  t.is(x, 3);
  t.is(y, 4);
  t.is(d, 'N');
  t.is(l, 'LOST');
});

test('Third Scenario', t => {
  const engine = createEngine();
  const deadzones = [ [ 3, 4 ] ];
  const instructions = ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'];
  engine.setGridSize([5, 3]);
  engine.setStartPosition([1, 1, 'E']);
  engine.setInstructions(instructions);
  engine.setDeadZones(deadzones);
  const result = engine.start();
  t.is(result.length, 11);
  const [ x, y, d ] = result[10];
  t.is(x, 2);
  t.is(y, 3);
  t.is(d, 'S');
});
