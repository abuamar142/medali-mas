import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { galleryItems } from "@/data";

export function useSEO() {
  const route = useRoute();
  const { t } = useI18n();

  const setPageMeta = (title: string, description: string, image?: string) => {
    // Set document title
    document.title = `${title} - Tenun Medali Mas`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set Open Graph meta tags
    const setOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    setOGMeta("og:title", `${title} - Tenun Medali Mas`);
    setOGMeta("og:description", description);
    setOGMeta("og:url", window.location.href);
    setOGMeta("og:type", "website");

    if (image) {
      setOGMeta("og:image", image);
    }

    // Set Twitter Card meta tags
    const setTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    setTwitterMeta("twitter:card", "summary_large_image");
    setTwitterMeta("twitter:title", `${title} - Tenun Medali Mas`);
    setTwitterMeta("twitter:description", description);

    if (image) {
      setTwitterMeta("twitter:image", image);
    }
  };

  const setProductSEO = (productId: string) => {
    const product = galleryItems.find((item) => item.id === productId);

    if (product) {
      const title = product.title;
      const description = product.description;
      const image = product.image;

      setPageMeta(title, description, image);

      // Set structured data for product
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.image,
        brand: {
          "@type": "Brand",
          name: "Tenun Medali Mas",
        },
        manufacturer: {
          "@type": "Organization",
          name: "UD. Medali Mas",
        },
      };

      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  };

  const setHomeSEO = () => {
    const title = t("hero.title");
    const description = t("hero.description");
    setPageMeta(title, description);
  };

  return {
    setPageMeta,
    setProductSEO,
    setHomeSEO,
  };
}
