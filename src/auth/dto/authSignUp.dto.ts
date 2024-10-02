import { createZodDto } from '@anatine/zod-nestjs';
import { authSchema } from '../../schema';

export class AuthSignUpDto extends createZodDto(authSchema) {}
