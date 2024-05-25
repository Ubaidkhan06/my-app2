import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(32, "Password must be no longer than 32 characters")
  .refine(
    (value) => {
      // Example complexity check (replace with your specific requirements)
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSymbol = /[!@#$%^&*-]/.test(value);
      if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol) {
        return {
          message:
            "Password must contain uppercase, lowercase, numbers, and symbols",
        };
      }
      return true;
    },
    {
      message: "Password must meet complexity requirements",
    }
  );

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required").max(44),
    lastName: z.string().min(1, "Last name is required").max(44),
    email: z.string().email("Enter a valid email address"),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(
    (values) => {
      return values.confirmPassword === values.password;
    },
    {
      message: "Password doesnt match",
      path: ["confirmPassword"],
    }
  );

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});
