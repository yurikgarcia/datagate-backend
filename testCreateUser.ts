import { createUser } from './src/user'

(async () => {
  try {
    const result = await createUser();
    console.log('User created successfully:', result);
  } catch (err) {
    console.error('Error creating user:', err);
  }
}
)();

