import { describe, expect, test } from '@voidzero-dev/vite-plus/test';
import { metadata, type MetadataAction } from './metadata.ts';

describe('metadata', () => {
  test('should return action object', () => {
    expect(metadata<string, { key: 'foo' }>({ key: 'foo' })).toStrictEqual({
      kind: 'metadata',
      type: 'metadata',
      reference: metadata,
      metadata: { key: 'foo' },
    } satisfies MetadataAction<string, { key: 'foo' }>);
  });
});
