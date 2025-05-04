import { test, expect } from 'vitest';
import Game from '../src/Game';


/*
Behaviours:
- Full game has 10 frames
- Each frame is 2 rolls for 2 players
- We correctly scrore a frame
    - No spare / no strike, total is only what we knocked down
    - Spare (all 10 pins in 2 rolls), 10 + bonus from next roll from next frame
        - Spare in 10th frame gives an extra roll
    - Strike (all 10 pins in 1 roll), 10 + bonus from next 2 rolls 
        - Strike in 10th frame is 2 extra rolls
 */
test('empty"', () => {
  expect(new Game()).toBe('Oh oh ...');
});