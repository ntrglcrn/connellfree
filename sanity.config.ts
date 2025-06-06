import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemaTypes";
const projectId = '4ohxit45'; // <- подставлен актуальный Project ID
const dataset = 'production';
import settings from "./lib/sanity/schemas/settings";
import {
  pageStructure,
  singletonPlugin
} from "./lib/sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";
import { dashboardTool } from '@sanity/dashboard'
import structure from './sanity/schemas/structure'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];
console.log(projectId);

export default defineConfig({
  name: "default",
  title: "Connellfree Studio",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({
      structure,
      // `defaultDocumentNode` is responsible for adding a "Preview" tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(["settings"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
    dashboardTool({})
  ],

  schema: {
    types: schemaTypes
  }
});
