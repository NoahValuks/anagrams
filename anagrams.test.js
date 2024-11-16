const areAnagrams = require('./anagrams');

test('if passed two string that are anagrams - return true', () => {
    expect(areAnagrams('glean', 'angel')).toBe(true);
  });

test('if passed two string that are not anagrams - return false', () => {
    expect(areAnagrams('glean', 'pie')).toBe(false);
  });

test('works if words are capitalised', () => {
    expect(areAnagrams('Glean', 'Pie')).toBe(false);
  });