import { describe, expect, test } from '@voidzero-dev/vite-plus/test';
import { examples, type ExamplesAction } from './examples.ts';

describe('examples', () => {
  test('should return action object', () => {
    expect(examples(['foo', 'bar'])).toStrictEqual({
      kind: 'metadata',
      type: 'examples',
      reference: examples,
      examples: ['foo', 'bar'],
    } satisfies ExamplesAction<string, ['foo', 'bar']>);
  });
});
