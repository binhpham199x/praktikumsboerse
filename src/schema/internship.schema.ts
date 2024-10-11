import { z } from 'zod';

export const internshipSchema = z.object({
  name: z.string(),
  description: z.string().optional(),

  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});
