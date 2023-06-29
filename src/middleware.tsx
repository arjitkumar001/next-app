// import { NextResponse } from "next/server"
// import type { NextRequest } from 'next/server'

// export const middleware = (request:NextRequest) => {
// //    if(request.nextUrl.pathname!="/login"){
//   return NextResponse.redirect(new URL("/login", request.url))
// // }
// }

// export const config={
//     matcher:"/about/:path"
// }
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*','/contact/:path*'],
}