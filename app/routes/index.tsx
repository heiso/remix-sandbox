import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

type LoaderData = Awaited<string>

export const loader: LoaderFunction = async ({ request }) => {
  return json('test')
}

export default function Index() {
  const data = useLoaderData() as LoaderData

  return <div>{data}</div>
}
