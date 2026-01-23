import { describe, expectTypeOf, test } from 'vite-plus/test';
import { objectAsync, string } from '../../schemas/index.ts';
import { config } from './config.ts';

describe('config', () => {
  test('should return schema object', () => {
    const schema = string();
    expectTypeOf(config(schema, { abortEarly: true })).toEqualTypeOf<
      typeof schema
    >();
  });

  test('should return async schema object', () => {
    const schema = objectAsync({ key: string() });
    expectTypeOf(config(schema, { abortEarly: true })).toEqualTypeOf<
      typeof schema
    >();
  });
});
