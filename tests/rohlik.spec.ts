import { test, expect } from "@playwright/test";

test.only("has title", async ({ page }) => {
  await page.goto("https://www.rohlik.cz/");

  await expect(page).toHaveTitle(
    "Online supermarket Rohlik.cz — nejrychlejší doručení ve městě"
  );
});
