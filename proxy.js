import { NextResponse } from 'next/server'

// One canonical host in a single hop: www.paklegal.com.pk/<path> -> paklegal.com.pk/<path>
// Pages keep their trailing slash (canonicals end in '/'); files such as sitemap.xml keep their exact path.
export function proxy(request) {
  const host = (request.headers.get('host') || '').toLowerCase()
  if (host !== 'www.paklegal.com.pk') return NextResponse.next()
  const { pathname, search } = request.nextUrl
  const lastSegment = pathname.split('/').pop()
  const isFile = /\.[a-z0-9]+$/i.test(lastSegment)
  // With trailingSlash: true, nextUrl.pathname arrives without the slash, and
  // NextResponse.redirect() strips it again, so set the Location header directly.
  const path = isFile || pathname.endsWith('/') ? pathname : `${pathname}/`
  return new NextResponse(null, {
    status: 308,
    headers: { Location: `https://paklegal.com.pk${path}${search}` },
  })
}
