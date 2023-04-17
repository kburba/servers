import { getTokenFromCache, setTokenToCache } from '../tokenFromCache';

describe('getTokenFromCache util', () => {
  it('should return correct value', () => {
    const token = 'test-value-123';
    setTokenToCache(token);

    expect(getTokenFromCache()).toEqual(token);
  });
});
