import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({
  description,
  previewImage,
  previewImageAlt,
  keywords,
  pageTitle,
}) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      {/*  Essential META Tags per https://css-tricks.com/essential-meta-tags-social-media/ */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/*  Non-Essential, But Recommended */}
      <meta name="twitter:image:alt" content={previewImageAlt} />

      {/*  Non-Essential, But Required for Analytics */}
      <meta name="twitter:site" content="@plhnk" />

      {/* Additional Useful Tags */}
      <meta property="og:type" content="website" />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  previewImage: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default SEO;
