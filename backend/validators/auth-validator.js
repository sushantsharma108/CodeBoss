const { z } = require('zod');

// creating an object schema:
const signupSchema = z.object({
    username: z.string({required_error: "Name is required"}).min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().ref('password'),
});