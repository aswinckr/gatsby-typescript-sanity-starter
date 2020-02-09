export default {
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "author",
      title: "Author Name",
      type: "string"
    },
    {
      name: "statement",
      title: "What did they say",
      type: "blockContent"
    },
    {
      name: "authorPhoto",
      title: "Author Photo",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    }
  ]
};
