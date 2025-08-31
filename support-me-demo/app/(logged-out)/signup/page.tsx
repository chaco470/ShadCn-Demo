"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'

const formSchema = z.object({
    email: z.email(),
    accountType: z.enum(['personal','company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
    dob: z.date().refine((date)=>{
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age >=18
    }, "You must be at least 18 years old")

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
})

export default function LogInPage() {

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues:{
                email: '',
                accountType: 'personal',
                companyName: '',
                numberOfEmployees: undefined
            }
        }
    );

    const handleSubmit = (data: z.infer<typeof formSchema>) =>{
        console.log(data);
    }

    const accountType= form.watch("accountType")

  return (
    <>
        <PersonStandingIcon size={50} className="text-pink-500"/>
        <Card className='w-full max-w-sm text-left'>
            <CardHeader>
                <CardTitle className='mb-2'>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    Sign up to your Account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className='flex flex-col gap-8' onSubmit={form.handleSubmit((data)=>{handleSubmit(data)})}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@mail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="accountType"
                            render={({ field }) => (
                                <FormItem className="text-left">
                                <FormLabel>Account Type</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select account type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='personal'>Personal</SelectItem>
                                        <SelectItem value='company'>Company</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        {accountType === "company" &&(
                            <>
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Company name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Company name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="numberOfEmployees"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Employees</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Number of employees" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                        <Button type="submit">Sign Up</Button>
                    </form>  
                </Form>
            </CardContent>
            <CardFooter className='justify-between'>
                Do you have an account?
                <Button asChild variant='outline' size='sm'>
                    <Link href="/login">
                        LogIn
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </>
  )
}
