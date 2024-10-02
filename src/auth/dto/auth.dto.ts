import { createZodDto } from '@anatine/zod-nestjs';
import { authSchema } from '../../schema';

export class AuthDto extends createZodDto(authSchema) {}
