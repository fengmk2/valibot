import { describe, expect, test } from '@voidzero-dev/vite-plus/test';
import { arrayAsync, string } from '../../schemas/index.ts';
import { entriesFromList } from './entriesFromList.ts';

describe('entriesFromList', () => {
  describe('should return object entries', () => {
    const symbol = Symbol();

    test('for sync schemas', () => {
      const schema = string();
      expect(entriesFromList(['foo', 123, symbol], schema)).toStrictEqual({
        foo: schema,
        [123]: schema,
        [symbol]: schema,
      });
    });

    test('for async schemas', () => {
      const schema = arrayAsync(string());
      expect(entriesFromList(['foo', 123, symbol], schema)).toStrictEqual({
        foo: schema,
        [123]: schema,
        [symbol]: schema,
      });
    });
  });
});
