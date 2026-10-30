import { expect, type Page, test } from "@playwright/test";

/** Open the page and click through the boot loader. */
async function open(page: Page) {
  await page.goto("/");
  await page.mouse.click(5, 300);
  await expect(page.locator("main")).toBeVisible();
  await page.waitForTimeout(1200);
}

test("the page never scrolls sideways", async ({ page }) => {
  await open(page);
  const { doc, win } = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth,
    win: window.innerWidth,
  }));
  expect(doc).toBeLessThanOrEqual(win);
});

test("phone: the menu lists every section and Esc closes it", async ({ page }, info) => {
  test.skip(info.project.name !== "phone", "the menu only exists below 1100px");
  await open(page);
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const panel = page.locator("#nav-panel");
  for (const id of ["about", "skills", "journey", "work", "data", "contact"]) {
    await expect(panel.getByRole("link", { name: id, exact: true })).toBeVisible();
  }
  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
});

test("desktop: the full nav bar shows and the menu button does not", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop", "desktop layout only");
  await open(page);
  await expect(page.locator("nav .nav-links")).toBeVisible();
  await expect(page.locator("nav .nav-menu-btn")).toBeHidden();
});

test("a project card opens its case study and Esc closes it", async ({ page }) => {
  await open(page);
  // The scroll unrolls (and becomes clickable) once Work is on screen.
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1800);
  await page.locator(".scroll-card .card-open").first().click();
  const dialog = page.getByRole("dialog", { name: "DocChat" });
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("project links go to GitHub in a new tab", async ({ page }) => {
  await open(page);
  const links = page.locator(".scroll-card a[href^='https://github.com/hari-vallabha-21k/']");
  await expect(links.first()).toHaveAttribute("target", "_blank");
  await expect(links.first()).toHaveAttribute("rel", /noopener/);
});
