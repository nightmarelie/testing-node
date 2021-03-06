// Testing Authentication API Routes
import axios from 'axios';
import { resetDb } from 'utils/db-utils';
import * as generate from 'utils/generate';
import startServer from '../start';

let server;

beforeAll(async () => {
  server = await startServer({ port: 8000 });
});

afterAll(() => server.close());

afterEach(() => resetDb());

test('auth flow', async () => {
  const { username, password } = generate.loginForm();
  const rResult = await axios.post(`http://localhost:8000/api/auth/register`, {
    username,
    password,
  });

  expect(rResult.data.user).toEqual({
    token: expect.any(String),
    id: expect.any(String),
    username,
  });

  const lResult = await axios.post('http://localhost:8000/api/auth/login', {
    username,
    password,
  });

  expect(lResult.data.user).toEqual(rResult.data.user);

  const meResult = await axios.get('http://localhost:8000/api/auth/me', {
    headers: { Authorization: `Bearer ${lResult.data.user.token}` },
  });

  expect(meResult.data.user).toEqual(lResult.data.user);
});
