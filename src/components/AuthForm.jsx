"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import axios from "axios";
import { ButtonLoading } from "./Loader";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Validation schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }).optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }).optional(),
});

const AuthForm = ({ type }) => {
  const [avatar, setAvatar] = useState(null);
  const router = useRouter();

  const defaultValues =
    type === "register"
      ? { fullName: "", email: "", password: "", username: "" }
      : { email: "", password: "" };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("username", data.username);


    if (type === "register") {
      formData.append("fullName", data.fullName);
      if (avatar) {
        formData.append("avatar", avatar);
      }
    }

    console.log("FormData Entries:");
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const endpoint =
        type === "register"
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}/users/register`
          : `${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`;

      const headers = type === "register" ? {
        "Content-Type": "multipart/form-data"
      } : {
        "Content-Type": "application/json"
      };

      const response = await axios.post(endpoint, formData, {
        headers,
        withCredentials: true,
      });

      console.log(response);

      if (type === "register") {
        if (response.status === 201) {
          toast(
            <div className="flex items-center gap-2">
              <Image
                src="/success.svg"
                alt="Success"
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <span>Account created successfully</span>
            </div>
          )
          router.push('/login');
        }
      } else if (type === "login") {
        if (response.status === 200) {
          toast(
            <div className="flex items-center gap-2">
              <Image
                src="/success.svg"
                alt="Success"
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <span>Logged in successfully</span>
            </div>
          )
          router.push('/');
        }
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
      setAvatar(null);
    }
  };


  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-center sm:p-6 p-4 min-h-screen">
      {/* Form Section */}
      <div className={`w-full md:w-1/2 bg-white ${type !== "register" && "mb-20"} sm:p-8 p-3 rounded-2xl shadow-lg`}>
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {type === "register" ? "Create an Account" : "Login"}</h2>


        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            {type === "register" && (
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {type === "register" && <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture" >Picture</Label>
              <Input id="picture" type="file" onChange={(e) => {
                const file = e.target.files?.[0];
                console.log(file);
                setAvatar(file);
              }} />
            </div>}


            {/* Submit Button */}
            {form.formState.isLoading ? <ButtonLoading /> : <Button type="submit" className="w-full">
              {type === "register" ? "Register" : "Login"}
            </Button>}

          </form>
        </Form>



        {/* Footer with Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {type === "register" ? "Already have an account?" : "Don't have an account?"}
            {" "}
            <Link href={type === "register" ? "/login" : "/register"} className="text-blue-600 hover:underline">
              <strong>
                {type === "register" ? "Login" : "Sign Up"}
              </strong>
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className={`w-full md:w-1/2 flex justify-center mb-16`}>
        <Image
          src="/Webinar-pana.svg"
          width={500}
          height={500}
          alt="Video tutorial"
        />
      </div>
    </div>
  );
};

export default AuthForm;
