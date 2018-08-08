# airtable-gatsbyjs-blog

A basic [GatsbyJS](https://www.gatsbyjs.org) blog that uses [Airtable](https://airtable.com) as a CMS.

For more detailed instructions on how to set this up, be sure to read our [how-to blog post](https://blog.airtable.com/build-your-own-custom-blog-cms-with-airtable-and-gatsbyjs).

This example uses the [Hampton theme](https://github.com/davad/gatsby-hampton-theme).

## Setup

Start by installing the project's dependencies and the Gatsby CLI:
```
$ yarn
$ yarn global add gatsby-cli
```

Next, add your Airtable API key and base ID to `gatsby-config.js`.

If you're following along with the blog post, you don't need to change anything else. Otherwise, you may have to change the table/view name, GraphQL queries, and template variables to match your own base schema.

To start your development server:
```
$ gatsby develop
```

Your blog should now be visible at [localhost:8000](https://localhost:8000)!
