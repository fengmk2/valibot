import { describe, expect, test } from '@voidzero-dev/vite-plus/test';
import { description, type DescriptionAction } from './description.ts';

describe('description', () => {
  test('should return action object', () => {
    expect(description<string, 'text'>('text')).toStrictEqual({
      kind: 'metadata',
      type: 'description',
      reference: description,
      description: 'text',
    } satisfies DescriptionAction<string, 'text'>);
  });
});
