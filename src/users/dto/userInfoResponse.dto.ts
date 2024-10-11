import { createZodDto } from '@anatine/zod-nestjs';
import { userSchema } from '../../schema';

const userInfoResponseSchema = userSchema.omit({ password: true });

export class UserInfoResponseDto extends createZodDto(userInfoResponseSchema) {}
