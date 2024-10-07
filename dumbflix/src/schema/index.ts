import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

export const registerSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
    fullname: z.string().min(2),
    gender: z.enum(["male", "female"], {
      errorMap: () => ({ message: "Please select a gender" }),
    }),
    phone: z
      .string()
      .regex(
        /^(?:\+62|62|0)[2-9][0-9]{7,11}$/,
        "Invalid phone number. Must be a valid Indonesian phone number."
      ),
    address: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });
