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
  const { docs } = await payload.find({ collection: 'case-studies', draft: false })
  return docs.map(({ slug }) => ({ slug }))
}

export const revalidate = 60

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function CaseStudy({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    depth: 3,
    draft,
    limit: 1,
  })
  const caseStudy = docs[0]
  if (!caseStudy) return notFound()

  return (
    <>
      <RenderBlocks blocks={caseStudy.layout} />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const caseStudy = await queryCaseStudyBySlug({ slug })

  return generateMeta({ doc: caseStudy })
}

const queryCaseStudyBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'case-studies',
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
