import React from 'react';
import MetaTags from 'react-meta-tags';

const MetaTagsWrapper = () => {
    return (
        <MetaTags>
            <title>Israeli Cybersecurity companies are hiring!</title>
            <meta name="robots" content="noindex"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description"
                    content="The Cybersecurity industry remains robust and resilient even as COVID-19 pummels the market. In this difficult time, let’s band together and create a resource for highly qualified professionals in the community looking for their next role!"/>
            <meta property="og:title" content="Israeli Cybersecurity companies are hiring!"/>
            <meta property="og:image"
                    content="https://www.ylventures.com/wp-content/uploads/2020/04/og-cybermap-careers.png"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
        </MetaTags>
      )
}
 
export default MetaTagsWrapper;