export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string"
    },
    {
      name: "profilePhoto",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true
      }
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
      name: "about",
      title: "About",
      type: "blockContent"
    },
    {
      name: "experience",
      title: "Overall Work Experience",
      type: "array",
      of: [
        {
          name: "experience",
          title: "Experience",
          type: "experience"
        }
      ]
    },
    {
      name: "work",
      title: "Work",
      type: "array",
      of: [
        {
          name: "workDetails",
          title: "Work Details",
          type: "workDetails"
        }
      ]
    },
    {
      name: "testimonials",
      title: "What People Say",
      type: "array",
      of: [
        {
          name: "testimonial",
          title: "Testimonial",
          type: "testimonial"
        }
      ]
    },
    {
      name: "myPreferences",
      title: "What Am I Like To Work With",
      type: "blockContent"
    },
    {
      name: "accessGrant",
      title: "Grant Access Keywords",
      type: "array",
      of: [
        {
          name: "keyword",
          title: "Keyword",
          type: "string"
        }
      ]
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
