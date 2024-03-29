import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

import ratelimit = limiter()


export async function PATCH(req: NextRequest) {
  const session = await getSession();

  const body = await req.json();

  const {allowed} = await ratelimit.check(30, 'UPDATE_SNIPPET')

  if (!session || !session.user.id) {
    return NextResponse.json(
    {
      code: 'UNAUTHORIZED',
    }, 
    {
      status: 403,
    }
    )
  }

  if (!allowed) {
    return NextResponse.json(
      {
        code: 'TOO_MANY_REQUESTS'
      },
      {
        status: 429,
      }
    )
  }

  try {
    const updateSnippet = await prisma.snippet.update({
      where: {
        id: body.id,
        userId: session.user.id,
      }
    })
  }
}


