import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SignInForm } from "@/components/signin-form"
import { Link } from "react-router-dom"

export default function SignInPage() {
  return (
    <div className="container flex min-h-screen w-full flex-col items-center justify-center py-8">
      <Link
        to="/signup"
        className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}
      >
        Sign Up
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
        </div>
        <SignInForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link to="/forgot-password" className="underline underline-offset-4 hover:text-primary">
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  )
}
