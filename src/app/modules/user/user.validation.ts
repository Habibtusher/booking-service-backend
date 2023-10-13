import { z } from 'zod';

const createUser = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password is too long (max 50 characters)'),
    termsAndCon: z.boolean({
      required_error: 'Please aggree terms and conditions',
    }),
  }),
});

export const userValidation = {
  createUser,
};
