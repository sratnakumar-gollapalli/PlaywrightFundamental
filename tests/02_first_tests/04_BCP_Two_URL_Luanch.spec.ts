import { test, expect, BrowserContext, Page } from "@playwright/test";

test("BCP_Two_URL_Luanch", async ({ browser }) => {
  const context_one: BrowserContext = await browser.newContext();
  const page_one: Page = await context_one.newPage();
  await page_one.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  const title_one = page_one.locator(".tta-brand-title");
  await expect(title_one).toHaveText("TTACart");

  const context_two: BrowserContext = await browser.newContext();
  const page_two: Page = await context_two.newPage();
  await page_two.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  const title_two = page_two.locator('//*[@id="root"]/div/div[1]/h1');
  //console.log(await title_two.innerText())
  await expect(title_two).toHaveText("TTA Bank");

  context_one.close();
  context_two.close();
});
