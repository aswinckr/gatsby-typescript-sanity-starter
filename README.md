# Notes

- You need to `yarn start` both sanity and gatsby on different ports
- By default Sanity runs on `localhost:3333`
- By default Gatsby runs of `localhost:8000`
- You can access graphql playground from gatsby on http://localhost:8000/___graphql. This representation will be used inside gatsby for running graphql queries and fetching data
- After you deploy you can access sanity's version of graphql playground after you do `sanity graphql deploy`. In this project the URL created was https://m82f9jf7.api.sanity.io/v1/graphql/production/default

## Bugs encountered

- `gatsby-source-sanity` plugin in `gatsby-config.js` should be added **after** `gatsby-transformer-sharp`, else build will fail
- Sanity's graphql api needs to be deployed first for gatsby to deploy correctly, else you'll see this error

```
Error: GraphQL API not deployed - see https://github.com/sanity-io/gatsby-source-sanity#graphql-api for more info
```

# If you want to modify your own project

## Sanity

- Create a new sanity project using `sanity init` in the CLI
- Make sure you have `@sanity/cli` globally installed
- Go to manage.sanity.io and login using the same credentials you enter while using `sanity init` to manage the project

## Gatsby

- Update your sanity projectId & dataset inside `gatsby-config.js`. Looks something like this -

```
{
    resolve: `gatsby-source-sanity`,
    options: {
        projectId: 'm82f9jf7',
        dataset: 'production',
    },
},
```

- Update your google fonts in `typography.js`