module.exports = {
  pathPrefix: '/gatsby-hampton-theme',
  siteMetadata: {
    title: 'My Gatsby Site'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsYaml'
  },
  plugins: [
    // Adding various source folders to the GraphQL layer.
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: 'YOUR_API_KEY',
        baseId: 'YOUR_BASE_ID',
        tableName: 'CMS',
        tableView: 'published',
        queryName: ''
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ]
};
