import Prismic from '@prismicio/client'

export function getPrismicClient() {
  const prismic = new Prismic.Client(process.env.PRISMIC_API_ENDPOINT, {
    //req,
    //accesToken: process.env.PRISMIC_ACCESS_TOKEN
  })
  return prismic
}