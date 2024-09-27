// ZOD is middleware and majorly used for registration and login form validation:
const { z } = require("zod");

// creating an object schema: This will validate the signup form details entered by the user
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(50, { message: "Name must not be more than 50 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" })
    .min(8, { message: "Email must be at least of 3 characters" })
    .max(20, { message: "Email must not be more than 100 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least of 8 characters" })
    .max(20, { message: "Password must not be more than 20 characters" }),
  confirmPassword: z
    .string({ required_error: "Confirm password is required" })
    .trim()
    .refine(
      (value) =>
        value ===
        z
          .string()
          .optional()
          .refine((confirmPassword) => password === confirmPassword),
      { message: "Confirm password" }
    ),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10)
    .max(15, { message: "Phone number must not be more than 10 digits" }),
});

module.exports = signupSchema;
