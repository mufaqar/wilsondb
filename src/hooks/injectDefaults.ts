import { FieldHook } from 'payload'

export const injectDefaultResources: FieldHook = async ({ value, req }) => {
  if (Array.isArray(value) && value.length > 0) return value

  const defaults = await req.payload.findGlobal({
    slug: 'resources-defaults',
    depth: 2,
  })

  return defaults?.resources ?? []
}
