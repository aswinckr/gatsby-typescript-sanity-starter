export default {
  name: "experience",
  title: "Experience",
  type: "object",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: "designation",
      title: "Designation",
      type: "string"
    },
    {
      name: "currentlyWorking",
      title: "Currently Working?",
      type: "boolean"
    }
  ]
};
