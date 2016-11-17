import test from 'ava';
import * as Index from '../../index';

test('Should be a string of `Hello World!`', t => {
  t.is(Index.HelloWorld, 'Hello World!');
});
