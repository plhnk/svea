export const markdownFrontmatterFragment = graphql`
  fragment BannerImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 98) {
        ...GatsbyImageSharpFluid_withWebp
      }
      gatsbyImageData(backgroundColor: "")
    }
  }
`;
