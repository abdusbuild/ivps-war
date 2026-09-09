import { SITE_NAME } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "Indo Valley",
    description:
      "English-medium CBSE school in War, Aurangabad, Bihar. Nursery to Class X.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0D2A5C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
