import { config, collection, fields } from "@keystatic/core";

const isProd = !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

export default config({
  storage: isProd
    ? {
        kind: "github",
        repo: { owner: "JosephK1024", name: "sugartreeguitars" },
      }
    : { kind: "local" },

  ui: {
    brand: { name: "SugarTree Guitars" },
  },

  collections: {
    builds: collection({
      label: "Guitars",
      slugField: "title",
      path: "content/builds/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Title", description: "e.g. Hawaiian Koa 000 — 12 Fret" },
        }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "In Progress", value: "in-progress" },
            { label: "Available", value: "available" },
            { label: "Sold", value: "sold" },
            { label: "Experimental", value: "experimental" },
            { label: "Given", value: "given" },
          ],
          defaultValue: "in-progress",
        }),
        year: fields.number({ label: "Year" }),
        serial: fields.text({ label: "Serial number", validation: { isRequired: false } }),
        summary: fields.text({
          label: "Summary",
          description: "One or two sentences shown on the build page hero.",
          multiline: true,
          validation: { isRequired: false },
        }),
        body: fields.text({ label: "Body shape", description: "e.g. 000, Parlor, Dreadnought" }),
        top: fields.text({ label: "Top wood" }),
        back_sides: fields.text({ label: "Back & sides" }),
        neck: fields.text({ label: "Neck" }),
        fretboard: fields.text({ label: "Fretboard" }),
        bridge: fields.text({ label: "Bridge" }),
        bracing: fields.text({ label: "Bracing", validation: { isRequired: false } }),
        scale: fields.text({ label: "Scale length", validation: { isRequired: false } }),
        frets_to_body: fields.number({ label: "Frets to body join" }),
        nut_width: fields.text({ label: "Nut width", validation: { isRequired: false } }),
        string_set: fields.text({ label: "String set", validation: { isRequired: false } }),
        glue: fields.text({ label: "Glue strategy", validation: { isRequired: false } }),
        construction: fields.text({ label: "Construction method", validation: { isRequired: false } }),
        price: fields.number({ label: "Price (USD)" }),
        experimental: fields.checkbox({
          label: "Experimental build",
          defaultValue: false,
        }),
        photos: fields.array(
          fields.image({
            label: "Photo",
            directory: "public/images",
            publicPath: "/images",
          }),
          {
            label: "Photos",
            description: "First photo is the hero. Add more for the gallery.",
            itemLabel: () => "Photo",
          }
        ),
        video_url: fields.url({
          label: "Video URL",
          description: "YouTube or Vimeo link — shown as embedded player.",
          validation: { isRequired: false },
        }),
        hero_caption: fields.text({
          label: "Hero image caption",
          validation: { isRequired: false },
        }),
        content: fields.mdx({
          label: "Build notes",
          description: "Use ## for section headings.",
        }),
      },
    }),

    articles: collection({
      label: "Notes",
      slugField: "title",
      path: "content/articles/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        date: fields.date({
          label: "Date",
          defaultValue: { kind: "today" },
        }),
        summary: fields.text({
          label: "Summary",
          description: "Shown on the Notes list page.",
          multiline: true,
          validation: { isRequired: false },
        }),
        photo: fields.image({
          label: "Photo",
          directory: "public/images",
          publicPath: "/images",
          validation: { isRequired: false },
        }),
        photo_caption: fields.text({
          label: "Photo caption",
          validation: { isRequired: false },
        }),
        content: fields.mdx({
          label: "Article body",
          description: "Use ## for section headings.",
        }),
      },
    }),
  },
});
