import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { Metadata } from 'next'
import { cache } from 'react'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'services', draft: false })
  return docs.map(({ slug }) => ({ slug }))
}

export const revalidate = 60

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Service({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    depth: 3,
    draft,
    limit: 1,
  })
  const service = docs[0]
  if (!service) return notFound()

  return (
    <>
      <RenderBlocks blocks={service.layout} />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryServiceBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
