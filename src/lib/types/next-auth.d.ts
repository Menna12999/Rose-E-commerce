import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {

    interface User extends DataBaseField {
        token:string,
        _id: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: string,
        phone: string,
        photo?:string,
        role: string,
        wishlist: string[],
        addresses: string[],
    }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    phone: string,
    photo?:string,
    role: string,
    wishlist: string[],
    addresses: string[],
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    phone: string,
    photo?:string,
    role: string,
    wishlist: string[],
    addresses: string[],
  }
}