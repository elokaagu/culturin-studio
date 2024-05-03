export default {
  name: 'providers',
  type: 'document',
  title: 'Providers',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of your business',
    },
    {
      name: 'eventName',
      type: 'string',
      title: 'Name of your event',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your business',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'text',
          description: 'This will also be used as the alt text for the image',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Short description of the business',
    },
    {
      name: 'location',
      type: 'text',
      title: 'location',
    },
    {
      name: 'contact',
      type: 'object',
      title: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'Email',
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Phone Number',
        },
        {
          name: 'website',
          type: 'url',
          title: 'Website',
        },
      ],
    },
    // {
    //   name: 'availablePackages',
    //   type: 'array',
    //   title: 'Available Packages',
    //   of: [{type: 'reference', to: [{type: 'packages'}]}],
    //   description: 'References to packages or services offered',
    // },
    {
      name: 'prices',
      type: 'array',
      title: 'Price Range',
      of: [{type: 'number'}],
      description: 'Array of prices for quick reference or starting prices',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
      options: {
        hotspot: true, // Enables image cropping
      },
      description: 'Images of the provider, their establishment, or services',
    },
  ],
}
