import { userAgentCheck  } from '../src/helper';

describe('userAgentCheck', () => {
    test('undefined case', () => {
        expect(userAgentCheck(undefined)).toBe(false);
    })

    test('empty case', () => {
        expect(userAgentCheck("")).toBe(false);
    })

    test('good case', () => {
        expect(userAgentCheck("Mozilla")).toBe(true);
    })
})
