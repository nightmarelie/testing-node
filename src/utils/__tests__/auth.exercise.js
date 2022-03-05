// Testing Pure Functions
import { isPasswordAllowed } from '../auth';

describe('isPasswordAllowed only allow some password', () => {
  const allowedPasswords = ['!aBc123'];
  const disallowedPasswords = [
    'a2c!',
    '123456!',
    'ABCdef!',
    'abc123!',
    'ABC123!',
    'ABCdef123',
  ];

  allowedPasswords.forEach((p) => {
    test(`allows ${p}`, () => {
      expect(isPasswordAllowed(p)).toBe(true);
    });
  });

  disallowedPasswords.forEach((p) => {
    test(`disallows ${p}`, () => {
      expect(isPasswordAllowed(p)).toBe(false);
    });
  });
});
