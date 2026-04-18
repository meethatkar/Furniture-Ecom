import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Urbanwoods — Premium Furniture & Home Decor',
  description = 'Explore Urbanwoods — your destination for handcrafted, eco-friendly furniture and modern home decor. Shop chairs, lamps, clocks, drawers & more with fast delivery.',
  keywords = 'furniture, home decor, wooden chairs, table lamps, wall clocks, rattan baskets, eco-friendly furniture, modern furniture, interior design',
  ogImage = '/home/CTA.webp',
  ogUrl = 'https://urbanwoods.vercel.app',
  canonicalUrl,
  structuredData,
  noIndex = false,
}) => {
  const canonical = canonicalUrl || ogUrl;

  return (
    <Helmet>
      {/* ── Primary Meta Tags ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonical} />

      {/* ── Open Graph / Social Sharing ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Urbanwoods" />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@urbanwoods" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── JSON-LD Structured Data ── */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
