import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Disable SSR for static site generation
  ssr: false,
  async prerender() {
    return ["/", "/privacy", "/terms"];
  },
} satisfies Config;
