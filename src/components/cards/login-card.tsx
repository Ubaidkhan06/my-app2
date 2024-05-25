"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { loginSchema, signUpSchema } from "@/utils/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "sonner";
import { Input } from "../ui/input";
import Link from "next/link";


const LoginCard = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.success(JSON.stringify(values));
    console.log(values);
  };

  return (
    <Card className="max-w-96 m-auto translate-y-24">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Enter your credentials and login.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="John@doe.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    <FormMessage />
                  </FormDescription>
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
                    <Input placeholder="abcd@1234" {...field} />
                  </FormControl>
                  <FormDescription>
                    <FormMessage />
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button className="w-full mt-2">Login</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        Dont have an account ?
        <Button variant={"link"} asChild>
          <Link href={"/signup"}>Sign Up</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
