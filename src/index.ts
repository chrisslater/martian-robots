import { Engine } from './Engine';
import { Grid } from './Grid';

export function createEngine() {
  const grid = new Grid();
  const engine = new Engine(grid);
  return engine;
}
