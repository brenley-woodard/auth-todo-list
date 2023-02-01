import { client, checkError } from './client';

export async function getTasks() {
  const response = await client.from('todos').select();

  return checkError(response);
}

export async function createTasks(user, todo) {
  const response = await client.from('todos').insert({ user_id: user.id, todo }).single(); // because of RLS and our default values, we add user_id for free

  return checkError(response);
}