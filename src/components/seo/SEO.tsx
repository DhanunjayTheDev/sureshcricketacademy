import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "../../constants/config";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}

export default function SEO({ title, description, path, jsonLd }: SEOProps) {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
