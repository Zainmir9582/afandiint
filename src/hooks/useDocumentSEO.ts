import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const BASE_URL = 'https://afandi-int.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/logo/brand-logo.png`;
const SITE_NAME = 'AFANDI INTERNATIONAL';

export function useDocumentSEO({
  title,
  description,
  canonicalPath = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
}: SEOConfig) {
  useEffect(() => {
    // 1. Dynamic Title
    const formattedTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    setMetaTag('name', 'description', description);

    // 3. OpenGraph Tags
    const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', SITE_NAME);

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'page-seo-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, canonicalPath, image, type, schema]);
}
