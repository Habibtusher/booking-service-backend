import { z } from 'zod';

const createUser = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),
    termsAndCon: z.boolean({
      required_error: 'Please aggree terms and conditions',
    }),
  }),
});


export const userValidation ={
    createUser
}