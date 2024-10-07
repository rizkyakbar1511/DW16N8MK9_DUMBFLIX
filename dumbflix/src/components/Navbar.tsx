"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { NAVBAR_LINKS } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn, matchRoute } from "@/lib/utils";
import { MenuIcon, SunIcon, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "@/schema";
import { useTheme } from "next-themes";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register" | "forgot-password">("login");
  const pathname = usePathname();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      fullname: "",
      gender: "male",
      phone: "",
      address: "",
    },
  });

  function onLoginSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function onRegisterSubmit(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <nav className="bg-white dark:bg-background shadow-xl">
      <div className="container px-6 py-4 flex items-center justify-center sm:justify-between">
        <NavigationMenu className="max-sm:hidden">
          <NavigationMenuList className="flex items-center gap-2">
            {NAVBAR_LINKS.map(({ label, route }) => (
              <NavigationMenuItem key={label}>
                <Link href={route} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      matchRoute(pathname, route) && "bg-accent"
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Link className="focus:outline-none max-sm:ml-auto sm:mr-32" href="/">
          <Image
            className="max-md:w-24"
            src="/logo.svg"
            width={120}
            height={120}
            alt="logo"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>
        <div className="hidden sm:flex items-center gap-4">
          <Button
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
          >
            <SunIcon className="size-6" />
          </Button>
          <Button
            className="rounded-full"
            onClick={() => setIsOpen(true)}
            variant="ghost"
            size="icon"
          >
            <User className="size-6" />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="sm:hidden max-sm:ml-auto" asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="size-8 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="max-xs:w-full">hi there bitch</SheetContent>
        </Sheet>
      </div>
      <Dialog
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(false);
          setActiveTab("login");
        }}
      >
        <DialogOverlay className="fixed inset-0 bg-slate-50/5 dark:bg-slate-300/5 backdrop-blur-md" />
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>{activeTab === "login" ? "Welcome Back" : "Join Us Today!"}</DialogTitle>
          <DialogDescription>
            {activeTab === "login"
              ? "Please enter your credentials to access your account. If you don't have an account yet, you can register easily."
              : "Create an account to unlock all features."}
          </DialogDescription>
          <Tabs value={activeTab}>
            <TabsContent value="login">
              <Form {...form}>
                <form className="space-y-8" onSubmit={form.handleSubmit(onLoginSubmit)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
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
                          <Input placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">
                    SIGN IN
                  </Button>
                </form>
              </Form>
              <div className="flex items-center justify-center mt-2">
                <p className="text-sm text-muted-foreground">Don&apos;t have an account?</p>
                <Button
                  variant="link"
                  className="dark:text-primary-foreground"
                  onClick={() => setActiveTab("register")}
                >
                  Sign up
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="register">
              <Form {...registerForm}>
                <form className="space-y-8" onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormDescription>We&apos;ll never share your email.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Password" {...field} />
                        </FormControl>
                        <FormDescription>We&apos;ll never share your password.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Confirm Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} value={field.value}>
                            <div className="flex gap-4">
                              <FormItem className="flex items-center space-y-0">
                                <RadioGroupItem id="male" value="male" />
                                <FormLabel className="ml-2" htmlFor="male">
                                  Male
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-y-0">
                                <RadioGroupItem id="female" value="female" />
                                <FormLabel className="ml-2" htmlFor="female">
                                  Female
                                </FormLabel>
                              </FormItem>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant="secondary" className="w-full" type="submit">
                    SIGN UP
                  </Button>
                </form>
              </Form>
              <div className="flex items-center justify-center mt-2">
                <p className="text-sm text-muted-foreground">Already have an account?</p>
                <Button
                  variant="link"
                  className="dark:text-primary-foreground"
                  onClick={() => setActiveTab("login")}
                >
                  Sign In
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
