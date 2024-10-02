import { createZodDto } from '@anatine/zod-nestjs';
import { authSchema } from '../../schema';

const authLogIn = authSchema.pick({
  email: true,
  password: true,
});

export class AuthLogInDto extends createZodDto(authLogIn) {}
