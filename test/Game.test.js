import { test, expect } from 'vitest';
import Game from '../src/Game';


/*
Behaviours:
- Full game has 10 frames
- Each frame is at most 2 rolls
- We correctly scrore a frame
    - No spare / no strike, total is only what we knocked down
    - Spare (all 10 pins in 2 rolls), 10 + bonus from next roll from next frame
        - Spare in 10th frame gives an extra roll
    - Strike (all 10 pins in 1 roll), 10 + bonus from next 2 rolls 
        - Strike in 10th frame is 2 extra rolls
    - perfect game gives 300, times 2 (both players) points
 */
test('Score 0 for all gutter balls', () => {
  const game = new Game();
  for(var i = 0; i < 20; i++) {
    game.roll(0)
  }
  expect(game.score()).toBe(0);
});