"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";

const SignUpCard = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.success(JSON.stringify(values));
    console.log(values);
  };

  return (
    <Card className="m-auto max-w-96 translate-y-24">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Enter your details and Sign up.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="John@doe.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    <FormMessage />
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="abcdPqr@908$#" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Retype Password" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full mt-4" type="submit">
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        Already have an account ?{" "}
        <Link href={"/login"} className={buttonVariants({ variant: "link" })}>
          Login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpCard;
