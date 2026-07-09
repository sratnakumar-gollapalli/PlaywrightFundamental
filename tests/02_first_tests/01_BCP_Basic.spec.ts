import { expect } from "@playwright/test";
import { Browser, chromium,BrowserContext,Page } from "playwright";

async function run(){
    const browser : Browser = await chromium.launch({headless : false})
    const context : BrowserContext =await  browser.newContext()
    const page : Page = await context.newPage()
    await page.goto('/login')
    expect(page).toHaveTitle('vwo')

    context.close()
    browser.close()

}

run()