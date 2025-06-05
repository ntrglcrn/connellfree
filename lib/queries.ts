export const getVideoBySlugQuery = `
  *[_type == "video" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    url,
    "thumbnail": thumbnail.asset->url,
    tags,
    category
  }
`

export const getRelatedVideosQuery = `
  *[_type == "video" && _id != $id && count(tags[@ in $tags]) > 0][0...8] {
    _id,
    title,
    "slug": slug.current,
    url,
    "thumbnail": thumbnail.asset->url,
    tags,
    category
  }
`
