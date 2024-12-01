import { auth } from './auth';
 
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
 
  if (isAuthPage) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/', req.nextUrl));
    }
    return null;
  }
 
  if (!isLoggedIn) {
    return Response.redirect(new URL('/auth/sign-in', req.nextUrl));
  }
  return null;
});
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};