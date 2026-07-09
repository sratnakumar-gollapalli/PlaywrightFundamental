import {test,Page,BrowserContext} from '@playwright/test'

test('Create a BCP test',async({browser})=>{
     const context : BrowserContext =await browser.newContext()
     const page : Page = await context.newPage()
     await page.goto('/')
     await page.waitForTimeout(500)

     await context.close()
     
})