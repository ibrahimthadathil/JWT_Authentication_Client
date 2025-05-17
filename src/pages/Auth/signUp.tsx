import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SignUpForm } from "@/components/signup"
import {  Link } from "react-router-dom"

export const metadata = {
  title: "Sign Up",
  description: "Create a new account",
}

export const SignUpPage = () => {

  return (
    <div className="container flex min-h-screen w-full flex-col items-center justify-center py-8">
      <Link
        to="/signin"
        className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}
      >
        Sign In
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
