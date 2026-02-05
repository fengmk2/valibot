import { describe, expectTypeOf, test } from '@voidzero-dev/vite-plus/test';
import type { InferInput, InferIssue, InferOutput } from '../../types/index.ts';
import { toLowerCase, type ToLowerCaseAction } from './toLowerCase.ts';

describe('toLowerCase', () => {
  test('should return action object', () => {
    expectTypeOf(toLowerCase()).toEqualTypeOf<ToLowerCaseAction>();
  });

  describe('should infer correct types', () => {
    test('of input', () => {
      expectTypeOf<InferInput<ToLowerCaseAction>>().toEqualTypeOf<string>();
    });

    test('of output', () => {
      expectTypeOf<InferOutput<ToLowerCaseAction>>().toEqualTypeOf<string>();
    });

    test('of issue', () => {
      expectTypeOf<InferIssue<ToLowerCaseAction>>().toEqualTypeOf<never>();
    });
  });
});
