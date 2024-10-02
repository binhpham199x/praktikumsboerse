import { userSchema } from './user.schema';

export const authSchema = userSchema.pick({
  email: true,
  password: true,
  role: true,
});
