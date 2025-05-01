import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constant";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            ...JSON_HEADER,
          },
        });
        //if login was successfull ,return the user data alongside the token
        const payload: APIResponse<LoginResponse> = await response.json();
        console.log(payload);
        if ("message" in payload) {
          return {
            // id: payload.user._id,
            ...payload.user,
            token: payload.token,
          };
        }
        //otherwise ,throw the error returned from the backend

        throw new Error(payload.error);
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token._id = user._id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.gender = user.gender;
        token.phone = user.phone;
        token.photo = user.photo;
        token.role = user.role;
        token.wishlist = user.wishlist;
        token.addresses = user.addresses;
      }
      return token;
    },
    session: ({ session, token }) => {
      session._id = token._id;
      session.firstName = token.firstName;
      session.lastName = token.lastName;
      session.email = token.email;
      session.gender = token.gender;
      session.phone = token.phone;
      session.photo = token.photo;
      session.role = token.role;
      session.wishlist = token.wishlist;
      session.addresses = token.addresses;
      return session;
    },
  },
};
