import { describe, expect, test } from 'vite-plus/test';
import { _getGraphemeCount } from './_getGraphemeCount.ts';

describe('_getGraphemeCount', () => {
  test('should return grapheme count', () => {
    expect(_getGraphemeCount('hello world')).toBe(11);
    expect(_getGraphemeCount('😀')).toBe(1);
    expect(_getGraphemeCount('🧑🏻‍💻')).toBe(1);
    expect(_getGraphemeCount('𝄞')).toBe(1);
    expect(_getGraphemeCount('สวัสดี')).toBe(4);
  });
});
