import * as z from 'zod'

export const formSchema = z.object({
    email: z.email(),
    accountType: z.enum(['personal','company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
    dob: z.date().refine((date)=>{
        const today = new Date();
        const age = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
        );
        return date <=age;
    }, "You must be at least 18 years old"),
    password: z.string().min(6, "pssword must be at least 6 characters").refine((password: string)=>{
        return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
    }, "requires almost 1 special character and 1 uppercase character"),
    passwordConfirm: z.string()

}).superRefine((data, ctx)=>{
    if(data.accountType === 'company' && !data.companyName){
        ctx.addIssue({
            code: "custom",
            path: ["companyName"],
            message: "Company name is required"
        });
    }
    if(data.accountType === 'company' && (!data.numberOfEmployees || data.numberOfEmployees < 1)){
        ctx.addIssue({
            code: "custom",
            path: ["numberOfEmployees"],
            message: "A number of employees is required"
        });
    }
    if (data.password !== data.passwordConfirm){
        ctx.addIssue({
            code: "custom",
            path: ["passwordConfirm"],
            message: "The password needs to be validated"
        });
    }

})
