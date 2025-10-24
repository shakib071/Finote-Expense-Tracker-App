
import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export const config = {
  matcher: '/api/:path*'
}