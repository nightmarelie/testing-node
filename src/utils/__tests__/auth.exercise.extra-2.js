// Testing Pure Functions
import cases from 'jest-in-case';
import { isPasswordAllowed } from '../auth';

cases(
  'isPasswordAllowed: valid password',
  ({ password }) => expect(isPasswordAllowed(password)).toBe(true),
  {
    'valid password': {
      password: '!aBc123',
    },
  },
);

cases(
  'isPasswordAllowed: invalid password',
  ({ password }) => expect(isPasswordAllowed(password)).toBe(false),
  {
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
  },
);
