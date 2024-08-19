import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

export const { GET, POST } = handlers;
