import {withAuth} from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {LOCALES, routing} from './i18n/routing';
import { getToken } from 'next-auth/jwt';
 
const authPages = ['/', '/auth/signin','/auth/signup'];
const publicPages =['/',...authPages]
 
const handleI18nRouting = createMiddleware(routing);
 
const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({token}) => token != null
    },
    pages: {
      signIn: 'auth/signin',
      error:'auth/signin'
    }
  }
);
 
export default async function middleware(req: NextRequest) {
    const token =await getToken({req}) 
  const publicPathnameRegex = RegExp(
    `^(/(${LOCALES.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const authPathnameRegex = RegExp(
    `^(/(${LOCALES.join('|')}))?(${authPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const isAuthPage = authPathnameRegex.test(req.nextUrl.pathname);

 //if the user is navigating to a public page , check if they sre authenticated or not 
  if (isPublicPage) {
    //if they are authenticated and trying to access an auth page , redirect to dashboard
    if(token&&isAuthPage){
        const redirectUrl = new URL("/dashboard",req.nextUrl.origin)

        return handleI18nRouting(new NextRequest(redirectUrl,req))
    }
    //otherwise ,let them navigate
    return handleI18nRouting(req);
  } else {
    //if they are navigating to  a private page,authenticate them first 
    return (authMiddleware as any)(req);
  }
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};