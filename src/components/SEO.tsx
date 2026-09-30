import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  author?: string;
  siteName?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO = ({
  title,
  description,
  canonical = "https://govind-kewat.vercel.app/",
  ogType = "website",
  ogImage = "https://govind-kewat.vercel.app/favicon.svg",
  keywords = "Govind Kewat, React developer, Shopify developer, headless CMS developer, WordPress developer",
  author = "Govind Kewat",
  siteName = "Govind Kewat",
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("author", author);
    updateMeta("application-name", siteName);

    updateProperty("og:title", title);
    updateProperty("og:description", description);
    updateProperty("og:type", ogType);
    updateProperty("og:url", canonical);
    updateProperty("og:image", ogImage);
    updateProperty("og:site_name", siteName);

    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    let canonical_link = document.querySelector("link[rel='canonical']");
    if (!canonical_link) {
      canonical_link = document.createElement("link");
      canonical_link.setAttribute("rel", "canonical");
      document.head.appendChild(canonical_link);
    }
    canonical_link.setAttribute("href", canonical);

    if (structuredData) {
      let scriptTag = document.querySelector("script[type='application/ld+json'][data-type='page-schema']");
      if (scriptTag) {
        scriptTag.remove();
      }
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-type", "page-schema");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogType, ogImage, keywords, author, siteName, structuredData]);

  return null;
};
