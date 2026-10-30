import { defineConfig } from "@playwright/test";

// Uses the Chrome already installed on the machine (channel: "chrome"), so no browser download is needed.
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: "http://localhost:4173", channel: "chrome" },
  webServer: {
    command: "npm run build && npm run preview -- --port 4173 --strictPort",
    url: "http://localhost:4173",
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1280, height: 800 } } },
    {
      name: "phone",
      use: { viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true },
    },
  ],
});
