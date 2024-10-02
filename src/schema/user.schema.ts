import { z } from 'zod';

const RoleEnum = z.enum(['LEARNER', 'COMPANY', 'ADMIN']);

export const userSchema = z.object({
  email: z.string().email('This is not a valid email!'),
  password: z.string(),
  role: RoleEnum,

  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});
