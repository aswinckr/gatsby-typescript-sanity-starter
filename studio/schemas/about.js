export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "tldr",
      title: "Tl;dr",
      type: "text"
    },
    {
      name: "aboutme",
      title: "About",
      type: "blockContent"
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
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
