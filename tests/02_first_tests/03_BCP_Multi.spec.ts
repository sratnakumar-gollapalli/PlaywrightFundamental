import { Page, test, expect, BrowserContext } from "@playwright/test";

test("Multi BCP implementation", async ({ browser }) => {
  const context_one: BrowserContext = await browser.newContext();
  const page_one: Page = await context_one.newPage();
  await page_one.goto("https://app.vwo.com/");
  const check = await page_one.locator("#vow-login-logo").isVisible()
  console.log(check)
  await expect(page_one.locator("#vow-login-logo")).toBeVisible({timeout : 1000})

  const options = {
    name: "Custom Mobile Browser",
    browserName: "chromium",
    viewport: { width: 390, height: 844 }, // Custom screen size
    deviceScaleFactor: 3, // Sharpness/Pixel ratio
    isMobile: true, // Enables touch events and mobile emulation
    hasTouch: true, // Allows touch interactions
    defaultBrowserType: "chromium",
  };
  const contest_two: BrowserContext = await browser.newContext(options);
  const page_two: Page = await contest_two.newPage();
  await page_two.goto("https://app.vwo.com/");
  await expect(page_one.locator("#vow-login-logo")).toBeVisible({timeout : 1000})

  context_one.close()
  contest_two.close()
});
