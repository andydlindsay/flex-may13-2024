import { calcStatus, abc123ABC } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

describe('tests for abc123ABC function', () => {

  test('should return the winning choice is isCheating is true', () => {
    const isCheating = true;
    const playerSelection = 'Axe';
    const actual = abc123ABC(isCheating, playerSelection);
    const expected = 'Moai';
    expect(actual).toBe(expected);
  });

  test('should return a valid choice if isCheating is false', () => {
    const isCheating = false;
    const playerSelection = 'Axe';
    const actual = abc123ABC(isCheating, playerSelection);
    
    const options = ['Moai', 'Axe', 'Tree'];
    expect(options).toContain(actual);
  });

});
