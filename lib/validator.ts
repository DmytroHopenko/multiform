import * as z from "zod";

export const formSchema = z.object({
    name: z.string().min(3, {
        message: 'Enter at least 3 characters'
    }),
    email: z.string().email(),
    phone: z.string(),
})