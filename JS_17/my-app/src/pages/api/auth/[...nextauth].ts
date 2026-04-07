import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { signIn, signInWithGoogle } from "../../../utils/db/servicefirebase";
import GoogleProvider from "next-auth/providers/google";
import { sign } from "node:crypto";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        //fullname: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user : any = await signIn(credentials.email);

        if (user) {
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isValidPassword) {
            return {
              id: user.id,
              email: user.email,
              fullname: user.fullname,
              role: user.role || "user"
            }
          }
        }
        return null
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }:any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      if (account?.provider === "google") {
        const data = {
          email: profile?.email,
          fullname: profile?.name,
          image: profile?.picture,
          type: account.provider,
        };

        await signInWithGoogle(data, (result:any) => {
          if (result.status) {
            token.email = data.email;
            token.fullname = data.fullname;
            token.image = data.image;
            token.type = data.type;
          }
        });
      }
      return token
    },
    async session({ session, token }:any) {
      if (token.email) {
        session.user.email = token.email
      }
      if (token.fullname) {
        session.user.name = token.fullname
      }
      if (token.role) {
        session.user.role = token.role
      }
      if (token.image) {
        session.user.image = token.image
      }
      if (token.type) {
        session.user.type = token.type
      }
      return session
    },
  },

  pages: {
    signIn: "/auth/login",
  }
};

export default NextAuth(authOptions)