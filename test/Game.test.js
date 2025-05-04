import { test, expect } from 'vitest';
import Game from '../src/Game';

test('empty"', () => {
  expect(new Game()).toBe('Oh oh ...');
});