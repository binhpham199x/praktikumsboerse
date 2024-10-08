import { z } from 'zod';

const RoleEnum = z.enum(['LEARNER', 'COMPANY', 'ADMIN']);

export const userSchema = z.object({
  email: z.string().email('This is not a valid email!'),
  password: z.string(),
  role: RoleEnum,

  companyName: z.string().optional(),
  fristName: z.string().optional(),
  lastName: z.string().optional(),
  description: z.string().optional(),
  city: z.string().optional(),

  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

// model User {
//   userId    Int      @id @default(autoincrement())
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   email String @unique
//   hash  String

//   role Role

//   companyName String?
//   firstName   String?
//   lastName    String?
//   description String?
//   city        String?

//   internship   Internship[]
//   applications Application[]
// }
