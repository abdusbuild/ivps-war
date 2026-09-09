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
        src: "/indo/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
