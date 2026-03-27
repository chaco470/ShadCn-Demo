"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon, PersonStandingIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import {formSchema} from '@/utils/schemas'
import { PasswordInput } from '@/components/ui/password-input'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
    const router = useRouter();

    const form = useForm<z.input<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues:{
                email: '',
                password: '',
                passwordConfirm: '',
                companyName: '',
                numberOfEmployees: 0
            }
        }
    );

    const handleSubmit = (data: z.input<typeof formSchema>) =>{
        console.log(data);
        router.push("/dashboard");
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
                                        <SelectTrigger className='w-full'>
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
                                            <Input
                                                type="number"
                                                min={1}
                                                placeholder="Number of employees" 
                                                {...field}
                                                value={typeof field.value === "number" ? field.value : ""}
                                                onChange={(event) => {
                                                    const nextValue = event.target.value;
                                                    field.onChange(nextValue === "" ? undefined : Number(nextValue));
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                
                            </>
                        )}
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                                <FormItem className='flex flex-col'>
                                    <FormLabel>Date of birth</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full pl-3 text-left font-normal normal-case",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            fixedWeeks
                                            weekStartsOn={1}
                                            disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                            }
                                            captionLayout="dropdown"
                                        />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput 
                                            placeholder="******"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="passwordConfirm"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <PasswordInput 
                                            placeholder=""
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="acceptTerms"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='flex'>
                                            <FormLabel className='pr-2'>Accep Terms and Conditions</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </div >
                                        <FormDescription >
                                            By signing up you need to agree with{" "}
                                            <Link className="text-primary hover:underline" href={"https://youtu.be/dQw4w9WgXcQ?si=aEdGou3nMe1WQ7DH"}>
                                                terms and conditions
                                            </Link>
                                        </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
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
