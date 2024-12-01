import { auth } from '@/lib/auth';

export default auth((req) => {
  const isAuth = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith('/auth');

  if (isAuthPage) {
    if (isAuth) {
      return Response.redirect(new URL('/', req.nextUrl));
    }
    return null;
  }

  if (!isAuth) {
    return Response.redirect(new URL('/auth/sign-in', req.nextUrl));
  }
  return null;
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};