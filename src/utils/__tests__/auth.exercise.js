// Testing Pure Functions
import { isPasswordAllowed } from '../auth';

test('isPasswordAllowed returns true for valid passwords', () => {
  const validPasswords = ['!aBc123'];

  validPasswords.forEach((p) => expect(isPasswordAllowed(p)).toBe(true));
});

test('isPasswordAllowed returns false for unvalid passwords', () => {
  const unvalidPasswords = [
    'a2c!',
    '123456!',
    'ABCdef!',
    'abc123!',
    'ABC123!',
    'ABCdef123',
  ];

  unvalidPasswords.forEach((p) => expect(isPasswordAllowed(p)).toBe(false));
});
