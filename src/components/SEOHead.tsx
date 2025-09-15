import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Dallas Odia Society - Preserving Culture, Building Community",
  description = "Dallas Odia Society is a non-profit organization promoting Odia culture, heritage, and community in the Dallas-Fort Worth area. Join our inclusive community celebrating tradition and unity.",
  keywords = "Dallas Odia Society, Odia community, DFW, cultural organization, non-profit, Odisha, Indian community, Dallas Fort Worth, Texas",
  canonicalUrl,
  ogImage = "https://dallasodiasociety.org/assets/dos-logo.jpg",
  ogType = "website",
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes("Dallas Odia Society") ? title : `${title} | Dallas Odia Society`;
  const siteUrl = "https://dallasodiasociety.org";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dallas Odia Society" />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Language and Location */}
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Dallas" />
      <meta name="geo.position" content="32.7767;-96.7970" />
      <meta name="ICBM" content="32.7767, -96.7970" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dallas Odia Society" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DallasOdiaSociety" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      
      {/* Mobile and App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dallas Odia Society" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
