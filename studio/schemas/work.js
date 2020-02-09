export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "blockContent"
    },
    {
      name: "solution",
      title: "Solution / Expected Outcome",
      type: "blockContent"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean"
    },
    {
      name: "publishedAt",
      title: "Published On",
      type: "datetime"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "themeColor",
      title: "Theme color",
      type: "color"
    }
  ]

  //   preview: {
  //     select: {
  //       title: "title",
  //       author: "author.name",
  //       media: "mainImage"
  //     },
  //     prepare(selection) {
  //       const { author } = selection;
  //       return Object.assign({}, selection, {
  //         subtitle: author && `by ${author}`
  //       });
  //     }
  //   }
};
