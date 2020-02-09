export default {
  name: "workDetails",
  title: "Work Details",
  type: "object",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string"
    },
    {
      name: "keyAchievements",
      title: "Key Achievements",
      type: "blockContent"
    },
    {
      name: "work",
      title: "Work",
      type: "array",
      of: [{ type: "reference", to: [{ type: "work" }] }]
    }
  ]
};
