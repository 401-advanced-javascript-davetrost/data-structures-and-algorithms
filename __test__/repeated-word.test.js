'use strict';

let { repeatedWord } = require('../challenges/repeatedWord/repeated-word');

describe('repeated word function', () => {
  let text;
  it('finds the repeated word', () => {
    text = 'Once upon a time, there was a brave princess who united the world with diplomacy';
    expect(repeatedWord(text)).toBe('a');

    text = `It was the best of times, it, was the worst of times, it was the age of wisdom, 
      it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, 
      it was the season of Light, it was the season of Darkness, it was the spring of hope, 
      it was the winter of despair, we had everything before us, we had nothing before us, 
      we were all going direct to Heaven, we were all going direct the other way – 
      in short, the period was so far like the present period, that some of its noisiest 
      authorities insisted on its being received, for good or for evil, in the superlative degree 
      of comparison only to be widely ignored by critics as boring`;
    expect(repeatedWord(text)).toBe('it');
  });

  it('returns null when there is no repeated word', () => {
    text = 'Once upon a time, there was this princess who united the world with diplomacy';
    expect(repeatedWord(text)).toBe(null);
  });
});
