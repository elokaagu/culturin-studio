import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {muxInput} from 'sanity-plugin-mux-input'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'Culturin Sanity',

  projectId: '8rwgyjc1',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), muxInput(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
