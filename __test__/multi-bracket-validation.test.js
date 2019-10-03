'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Multi-type Bracket Validation', () => {

  it('returns true for code with balanced brackets', () => {
    expect(multiBracketValidation('[](){}')).toBe(true);
    expect(multiBracketValidation('[a](b){c}')).toBe(true);
    expect(multiBracketValidation('{[(more text)]}')).toBe(true);
    expect(multiBracketValidation('')).toBe(true);
  });
  
  it('returns false for code with improperly balanced brackets', () => {
    expect(multiBracketValidation('[](){')).toBe(false);
    expect(multiBracketValidation('[]()({}')).toBe(false);
    expect(multiBracketValidation('{[()]')).toBe(false);
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });
  
});