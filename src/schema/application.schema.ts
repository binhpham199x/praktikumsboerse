import { z } from 'zod';

const StatusEnum = z.enum(['ACCEPTED', 'REJECTED', 'PENDING']);

export const applicationSchema = z.object({
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),

  message: z.string(),
  status: StatusEnum,
});
