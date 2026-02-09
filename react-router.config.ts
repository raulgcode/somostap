import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Disable SSR for static site generation (Cloudflare Pages)
  ssr: false,
  async prerender() {
    // Pre-render static pages for better performance
    return ["/", "/privacy", "/terms"];
  },
} satisfies Config;
