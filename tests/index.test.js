const { parseNum } = require('../index');

test('parseNum should return a number', () => {
  const result = parseNum('123.45');
  expect(result).toBe(123.45);
});