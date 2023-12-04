global.$ = require('jquery');

import { parseNum } from '../js/index.js';


test('parseNum should return a number', () => {
  const result = parseNum('123.45');
  expect(result).toBe(123.45);
});
