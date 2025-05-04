import { test, expect } from 'vitest';
import Game from '../src/Game';


/*
Behaviours:
- Full game has 10 frames
- Each frame is at most 2 rolls for 2 players
- We correctly scrore a frame
    - No spare / no strike, total is only what we knocked down
    - Spare (all 10 pins in 2 rolls), 10 + bonus from next roll from next frame
        - Spare in 10th frame gives an extra roll
    - Strike (all 10 pins in 1 roll), 10 + bonus from next 2 rolls 
        - Strike in 10th frame is 2 extra rolls
 */
test('Score 1 point for 1 knocked down pin', () => {
  const game = new Game();
  game.roll(1);
  expect(game.score()).toBe(1);
});

test('Score 3 point for 1 and 2 knocked down pins by the same player', () => {
    const game = new Game();
    game.roll(1);
    game.roll(2);
    expect(game.score()).toBe(3);
  });