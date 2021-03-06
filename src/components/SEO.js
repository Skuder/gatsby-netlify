import React from "react"
import {Helmet} from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

const SEO = ({title, description, image}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, defaultImage, url },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image:url+defaultImage}`,
      }
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="robots" content="index, follow" />
          <html lang="en" />
        </Helmet>
      )
    }}
  />
)

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
      }
    }
  }
`
