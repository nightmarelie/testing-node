// Testing Pure Functions
import cases from 'jest-in-case';
import { isPasswordAllowed } from '../auth';

function casify(obj) {
  return Object.entries(obj).map(([name, { password }]) => ({
    name: `${password} ${name}`,
    password,
  }));
}

cases(
  'isPasswordAllowed: valid password',
  ({ password }) => expect(isPasswordAllowed(password)).toBe(true),
  casify({
    'valid password': {
      password: '!aBc123',
    },
  }),
);

cases(
  'isPasswordAllowed: invalid password',
  ({ password }) => expect(isPasswordAllowed(password)).toBe(false),
  casify({
    'to short': {
      password: 'a2c!',
    },
    'no letters': {
      password: '123456!',
    },
    'no numbers': {
      password: 'ABCdef!',
    },
    'no uppercase letters': {
      password: 'abc123!',
    },
    'no lowercase letters': {
      password: 'ABC123!',
    },
    'no non-alphanummeric characters': {
      password: 'ABCdef123',
    },
  }),
);
