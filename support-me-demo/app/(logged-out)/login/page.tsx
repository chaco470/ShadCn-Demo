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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from '@/components/ui/password-input'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    email: z.email().min(1, "Email is required"),
    password: z.string().min(6, "Password must need almost 6 characters"),

})

export default function LogInPage() {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues:{
                email: '',
                password: ''
            }
        }
    );

    const handleSubmit = (data: z.infer<typeof formSchema>) =>{
        console.log(data);
        router.push("/dashboard");
    }


  return (
    <>
        <PersonStandingIcon size={50} className="text-pink-500"/>
        <Card className='w-full max-w-sm text-left'>
            <CardHeader>
                <CardTitle className='mb-2'>
                    LogIn
                </CardTitle>
                <CardDescription>
                    LogIn to your Account
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
                            name="password"
                            render={({ field }) => (
                                <FormItem className="text-left">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                            <Button type="submit">LogIn</Button>
                    </form>  
                </Form>
            </CardContent>
            <CardFooter className='justify-between'>
                Dont have an account?
                <Button asChild variant='outline' size='sm'>
                    <Link href="/signup">
                        Sign Up
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </>
  )
}
