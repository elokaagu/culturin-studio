import algosearch from 'algoliasearch'
const client = algosearch('MJMYIDXYNZ', 'f36a3d2fd0819dad18ec9ec9e814097b')
const blogPostsIndex = client.initIndex('countries')

export default {
  // Define which types should be indexed by which Algolia indices
  types: [
    {
      name: 'blog', // The Sanity type name
      index: blogPostsIndex, // The Algolia index to sync with
      getPath: (doc: any) => `/blog/${doc.slug.current}`,
      // Optional: Define a function to transform Sanity document to an Algolia record
      filter: '_type == "blog" && !(_id in path("drafts.**"))',
      projection: '{ title, body, "slug": slug.current }',
      mapAttributes: (doc: any) => ({
        title: doc.title,
        body: doc.body,
        slug: doc.slug,
      }),
    },
  ],
}
