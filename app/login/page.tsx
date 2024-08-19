import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import {
  Box,
  Flex,
  Container,
  Input,
  FormLabel,
  FormControl,
  ButtonGroup,
} from "@chakra-ui/react";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return error
      ? redirect("/login?message=Could not authenticate user")
      : redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    return error
      ? redirect("/login?message=Could not authenticate user")
      : redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <Container mt={'20%'}>
      <Link href="/">&lt; Back</Link>
      <FormControl isRequired>
        <FormLabel requiredIndicator={false}>Email</FormLabel>
        <Input name="email" placeholder="you@example.com" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel requiredIndicator={false}>Password</FormLabel>
        <Input type="password" name="password" placeholder="••••••••" />
      </FormControl>
      <ButtonGroup spacing={5}>
        <SubmitButton formAction={signUp} pendingText="Signing Up...">
          Sign Up
        </SubmitButton>
        <SubmitButton formAction={signIn} pendingText="Signing In...">
          Sign In
        </SubmitButton>
      </ButtonGroup>
      {searchParams?.message && <p>{searchParams.message}</p>}
    </Container>
  );
}
